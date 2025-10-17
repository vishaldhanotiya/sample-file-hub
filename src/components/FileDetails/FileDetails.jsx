import { useLocation } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import "./FileDetails.css";
import { handleDownload, generateThumbnailFromVideoUrl } from "../../utils/Utils";

export default function FileDetails() {
  const location = useLocation();
  const state = location.state || {};

  const {
    fileData,
    name = "Sample file",
    type: passedType = "-",
    size = "-",
    modified = "-",
    tags = [],
    dimensions = "-",
    url: passedUrl = "",
    imageUrl: legacyImageUrl = "",
    thumbnail,
    posterUrl,
  } = state;

  const url = passedUrl || legacyImageUrl || "";

  const [csvRows, setCsvRows] = useState(null);
  const [csvError, setCsvError] = useState("");
  const [codeText, setCodeText] = useState("");
  const [codeError, setCodeError] = useState("");
  const [wrapCode, setWrapCode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [generatedPoster, setGeneratedPoster] = useState("");

  const derivedExt = useMemo(() => {
    if (!url) return "";
    try {
      const clean = url.split("?")[0].split("#")[0];
      const parts = clean.split(".");
      const ext = parts.length > 1 ? parts.pop() : "";
      return (ext || "").toLowerCase();
    } catch {
      return "";
    }
  }, [url]);

  const normalizedType = (passedType || derivedExt || "unknown").toLowerCase();

  const isImage = useMemo(
    () =>
      [
        "png",
        "jpg",
        "jpeg",
        "gif",
        "bmp",
        "webp",
        "svg",
        "avif",
        "tiff",
        "ico",
        "heic",
      ].includes(normalizedType),
    [normalizedType]
  );
  const isVideo = useMemo(
    () =>
      ["mp4", "webm", "mkv", "mov", "avi", "flv", "3gp"].includes(
        normalizedType
      ),
    [normalizedType]
  );
  const isAudio = useMemo(
    () => ["mp3", "wav", "aac", "ogg", "flac", "aiff"].includes(normalizedType),
    [normalizedType]
  );
  const isPdf = normalizedType === "pdf";
  const isPpt = useMemo(
    () => ["ppt", "pptx"].includes(normalizedType),
    [normalizedType]
  );
  const isDoc = useMemo(
    () => ["doc", "docx"].includes(normalizedType),
    [normalizedType]
  );
  const isXls = useMemo(
    () => ["xls", "xlsx"].includes(normalizedType),
    [normalizedType]
  );
  const isCsv = normalizedType === "csv";
  const isRtf = normalizedType === "rtf";
  const isCode = useMemo(
    () =>
      [
        "xml",
        "json",
        "php",
        "js",
        "javascript",
        "java",
        "bat",
        "rb",
        "ruby",
        "c",
        "cpp",
        "html",
        "yaml",
        "yml",
        "py",
        "python",
      ].includes(normalizedType),
    [normalizedType]
  );

  const isPublicHttpUrl = useMemo(() => /^https?:\/\//i.test(url), [url]);

  const canUseOfficeViewer = useMemo(() => {
    return isPublicHttpUrl && (isDoc || isPpt || isXls || isCsv || isRtf);
  }, [isPublicHttpUrl, isDoc, isPpt, isXls, isCsv, isRtf]);

  const canUseDocsViewer = useMemo(() => {
    return (
      isPublicHttpUrl && (isPdf || isDoc || isPpt || isXls || isCsv || isRtf)
    );
  }, [isPublicHttpUrl, isPdf, isDoc, isPpt, isXls, isCsv, isRtf]);

  const downloadViaAnchor = (targetUrl, filename) => {
    handleDownload(targetUrl, filename, fileData);
  };

  const onDownloadClick = () => {
    if (!url) return;
    setIsLoading(true);
    try {
      downloadViaAnchor(url, name || "download");
    } finally {
      setTimeout(() => setIsLoading(false), 800);
    }
  };

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: name, text: name, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard");
      }
    } catch (e) {
      // no-op
    }
  };

  const readableDate = useMemo(() => {
    try {
      const d = new Date(modified);
      return d.toLocaleString();
    } catch {
      return String(modified);
    }
  }, [modified]);

  useEffect(() => {
    if (!isCsv || !url) return;
    setCsvRows(null);
    setCsvError("");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
        const maxRows = 30;
        const previewLines = lines.slice(0, maxRows);
        const rows = previewLines.map((line) => {
          return line.split(",").slice(0, 10);
        });
        setCsvRows(rows);
      })
      .catch((err) => {
        setCsvError(String(err.message || err));
      });
  }, [isCsv, url]);

  useEffect(() => {
    if (!isCode || !url) return;
    setCodeText("");
    setCodeError("");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        const max = 200 * 1024;
        setCodeText(
          text.length > max ? text.slice(0, max) + "\n\n/* truncated */" : text
        );
      })
      .catch((err) => setCodeError(String(err.message || err)));
  }, [isCode, url]);

  useEffect(() => {
    if (!isVideo || !url) return;
    // If caller did not provide a poster/thumbnail, try to generate one
    const hasProvidedPoster = Boolean(legacyImageUrl || state.posterUrl || state.thumbnail);
    if (hasProvidedPoster) return;
    let isCancelled = false;
    generateThumbnailFromVideoUrl(url, 2)
      .then((thumb) => {
        if (!isCancelled) setGeneratedPoster(thumb);
      })
      .catch(() => {})
      .finally(() => {});
    return () => { isCancelled = true; };
  }, [isVideo, url, legacyImageUrl, state.posterUrl, state.thumbnail]);

  const renderPreview = () => {
    if (isCsv && url) {
      if (csvRows && csvRows.length) {
        const [firstRow, ...restRows] = csvRows;
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">CSV</span>
              <div className="ffd-preview-actions">
                <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">
                  Open
                </a>
                <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>
                  Download
                </button>
              </div>
            </div>
            <div className="ffd-csv-wrapper">
              <table className="ffd-csv-table">
                <thead>
                  <tr>
                    {firstRow.map((h, i) => (
                      <th key={`h-${i}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {restRows.map((row, rIdx) => (
                    <tr key={`r-${rIdx}`}>
                      {row.map((cell, cIdx) => (
                        <td key={`c-${cIdx}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
      if (csvError) {
        if (canUseOfficeViewer) {
          const officeViewer = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
          return (
            <div className="ffd-preview-container">
              <div className="ffd-preview-header">
                <span className="ffd-file-badge">CSV</span>
              </div>
              <iframe title="CSV preview" className="ffd-doc-frame" src={officeViewer} />
            </div>
          );
        }
        if (canUseDocsViewer) {
          const gviewer = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
          return (
            <div className="ffd-preview-container">
              <div className="ffd-preview-header">
                <span className="ffd-file-badge">CSV</span>
              </div>
              <iframe title="CSV preview" className="ffd-doc-frame" src={gviewer} />
            </div>
          );
        }
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">CSV</span>
            </div>
            <div className="ffd-placeholder">
              <div className="ffd-placeholder-icon">📊</div>
              <div className="ffd-placeholder-text">Unable to load CSV preview</div>
              <div className="ffd-placeholder-actions">
                <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
                <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>
                  Download
                </button>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="ffd-preview-container">
          <div className="ffd-loading-state">
            <div className="ffd-spinner"></div>
            <div>Loading CSV preview...</div>
          </div>
        </div>
      );
    }

    if (isRtf && url) {
      if (canUseOfficeViewer) {
        const officeViewer = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">RTF</span>
            </div>
            <iframe title="RTF preview" className="ffd-doc-frame" src={officeViewer} />
          </div>
        );
      }
      if (canUseDocsViewer) {
        const gviewer = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">RTF</span>
            </div>
            <iframe title="RTF preview" className="ffd-doc-frame" src={gviewer} />
          </div>
        );
      }
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">RTF</span>
          </div>
          <div className="ffd-placeholder">
            <div className="ffd-placeholder-icon">📝</div>
            <div className="ffd-placeholder-text">RTF preview requires a public URL</div>
            <div className="ffd-placeholder-actions">
              <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">
                Open in new tab
              </a>
              <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>
                Download
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (isImage && url) {
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">IMAGE</span>
          </div>
          <img src={url} alt={name} className="ffd-preview-media ffd-img" />
        </div>
      );
    }

    if (isVideo && url) {
      const poster = posterUrl || thumbnail || legacyImageUrl || generatedPoster || "";
      if (videoError) {
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">VIDEO</span>
            </div>
            <div className="ffd-placeholder">
              <div className="ffd-placeholder-icon">🎞️</div>
              <div className="ffd-placeholder-text">Unable to play this video.</div>
              <div className="ffd-placeholder-actions">
                <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">Open in new tab</a>
                <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>Download</button>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">VIDEO</span>
          </div>
          <video
            key={url}
            className="ffd-preview-media"
            controls
            preload="metadata"
            playsInline
            crossOrigin="anonymous"
            poster={poster || undefined}
            onError={() => setVideoError(true)}
          >
            <source src={url} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    if (isCode && url) {
      if (codeText) {
        const copy = async () => {
          try {
            await navigator.clipboard.writeText(codeText);
          } catch {}
        };
        const langLabel = (normalizedType === "js" ? "javascript" : normalizedType).toUpperCase();
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">{langLabel}</span>
              <div className="ffd-preview-actions">
                {/* <button
                  className={`ffd-btn ffd-btn-toggle ${wrapCode ? "active" : ""}`}
                  onClick={() => setWrapCode(!wrapCode)}
                >
                  {wrapCode ? "No wrap" : "Wrap lines"}
                </button> */}
                <button className="ffd-btn ffd-btn-secondary" onClick={copy}>
                  Copy
                </button>
                <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">
                  Open
                </a>
                <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>
                  Download
                </button>
              </div>
            </div>
            <div className={`ffd-code-wrapper ${wrapCode ? "ffd-code-wrap" : ""}`}>
              <pre className="ffd-code">{codeText}</pre>
            </div>
          </div>
        );
      }
      if (codeError) {
        return (
          <div className="ffd-preview-container">
            <div className="ffd-preview-header">
              <span className="ffd-file-badge">CODE</span>
            </div>
            <div className="ffd-placeholder">
              <div className="ffd-placeholder-icon">💻</div>
              <div className="ffd-placeholder-text">Unable to load code preview</div>
              <div className="ffd-placeholder-actions">
                <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
                <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>
                  Download
                </button>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="ffd-preview-container">
          <div className="ffd-loading-state">
            <div className="ffd-spinner"></div>
            <div>Loading code...</div>
          </div>
        </div>
      );
    }

    if (isAudio && url) {
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">AUDIO</span>
          </div>
          <div className="ffd-audio-container">
            <audio className="ffd-audio" controls>
              <source src={url} type={`audio/${normalizedType}`} />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      );
    }

    if (isPdf && url) {
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">PDF</span>
          </div>
          <object data={url} type="application/pdf" className="ffd-doc-frame">
            <embed src={url} type="application/pdf" className="ffd-doc-frame" />
            <div className="ffd-placeholder">
              <div className="ffd-placeholder-text">
                PDF preview not supported.{" "}
                <a href={url} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
              </div>
            </div>
          </object>
        </div>
      );
    }

    if (canUseOfficeViewer) {
      const officeViewer = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">DOCUMENT</span>
          </div>
          <iframe title="Office document preview" className="ffd-doc-frame" src={officeViewer} />
        </div>
      );
    }

    if (canUseDocsViewer) {
      const gviewer = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">DOCUMENT</span>
          </div>
          <iframe title="Document preview" className="ffd-doc-frame" src={gviewer} />
        </div>
      );
    }

    if ((isPdf || isPpt || isDoc || isXls || isCsv || isRtf) && url) {
      return (
        <div className="ffd-preview-container">
          <div className="ffd-preview-header">
            <span className="ffd-file-badge">DOCUMENT</span>
          </div>
          <iframe title="Document preview" className="ffd-doc-frame" src={url} />
        </div>
      );
    }

    return (
      <div className="ffd-preview-container">
        <div className="ffd-preview-header">
          <span className="ffd-file-badge">FILE</span>
        </div>
        <div className="ffd-placeholder">
          <div className="ffd-placeholder-icon">📄</div>
          <div className="ffd-placeholder-text">No preview available for this file type</div>
          <div className="ffd-placeholder-actions">
            {url && (
              <a className="ffd-btn ffd-btn-secondary" href={url} target="_blank" rel="noreferrer">
                Open in new tab
              </a>
            )}
            {url && (
              <button className="ffd-btn ffd-btn-primary" onClick={onDownloadClick}>
                Download
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ffd-root">
      <div className="ffd-container bg-white rounded-4 shadow-lg border-0 overflow-hidden">
        <div className="ffd-left">
          {renderPreview()}
        </div>
        
        <div className="ffd-right">
          <div className="ffd-sidebar">
            

            <div className="ffd-meta-section">
              <h3 className="ffd-section-title">File Information</h3>
              <div className="ffd-meta-grid">
                <div className="ffd-meta-item">
                  <span className="ffd-label">Name</span>
                  <span className="ffd-value">{name}</span>
                </div>
                <div className="ffd-meta-item">
                  <span className="ffd-label">Type</span>
                  <span className="ffd-value">{normalizedType}</span>
                </div>
                <div className="ffd-meta-item">
                  <span className="ffd-label">Size</span>
                  <span className="ffd-value">{size}</span>
                </div>
              {fileData.width &&  <div className="ffd-meta-item">
                  <span className="ffd-label">Dimensions</span>
                  <span className="ffd-value">{dimensions}</span>
                </div>}
                <div className="ffd-meta-item">
                  <span className="ffd-label">Modified</span>
                  <span className="ffd-value">{readableDate}</span>
                </div>
              </div>
            </div>

            <div className="ffd-meta-section">
              <h3 className="ffd-section-title">Tags</h3>
              <div className="ffd-tags-container">
                {(tags && tags.length ? tags : ["sample", normalizedType || "file"]).map((t, i) => (
                  <span key={`${t}-${i}`} className="ffd-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="ffd-actions-section">
              <h3 className="ffd-section-title">Actions</h3>
              <div className="ffd-actions-grid">
                {url && (
                  <a className="ffd-btn ffd-btn-secondary ffd-btn-block" href={url} target="_blank" rel="noreferrer">
                    Open File
                  </a>
                )}
                <button 
                  className={`ffd-btn ffd-btn-primary ffd-btn-block ${isLoading ? 'ffd-btn-loading' : ''}`} 
                  onClick={onDownloadClick}
                  disabled={isLoading}
                >
                  {isLoading ? 'Downloading...' : 'Download'}
                </button>
                <button className="ffd-btn ffd-btn-secondary ffd-btn-block" onClick={handleShare}>
                  Share Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}