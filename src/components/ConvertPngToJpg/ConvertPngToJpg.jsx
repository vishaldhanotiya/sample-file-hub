import  { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { FiX, FiUpload, FiDownload } from "react-icons/fi";
import { getMetaData } from "../../utils/Constant";

export default function ConvertPngToJpg() {
  const fileInputRef = useRef(null);
  const [items, setItems] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [_globalTarget, setGlobalTarget] = useState("jpg");
  const [error, setError] = useState("");

  const supportedTargets = useMemo(() => ["jpg", "jpeg", "png", "webp"], []);

  const onPickFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const mapped = files.map((f) => ({
      file: f,
      name: f.name,
      size: f.size,
      target: "jpg",
      urlConverted: null,
      status: "queued", // queued | converting | done | error
      progress: 0,
    }));
    setItems(mapped);
    setError("");
  };

  const removeItem = (idx) => setItems((prev) => prev.filter((_, i) => i !== idx));

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  const updateItemTarget = (idx, target) => {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, target } : it)));
  };

    const metaData = useMemo(() => getMetaData('converter'), []);

    // Fetch files when activeTab changes
    useEffect(() => {
  
      document.title = metaData.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = metaData.description;
    }, [metaData]);


  const _setAllTargets = (target) => {
    setGlobalTarget(target);
    setItems((prev) => prev.map((it) => ({ ...it, target })));
  };

  const convertFileTo = (file, outFmt, updateProgress) =>
    new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onloadstart = () => updateProgress(10);
        reader.onprogress = (e) => {
          if (e.lengthComputable) {
            updateProgress(Math.min(30, (e.loaded / e.total) * 30));
          }
        };
        reader.onload = (ev) => {
          updateProgress(50);
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (["jpg", "jpeg", "webp"].includes(outFmt)) {
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.drawImage(img, 0, 0);
            let mime = `image/${outFmt === "jpg" ? "jpeg" : outFmt}`;
            const dataUrl = canvas.toDataURL(mime, 1.0);
            updateProgress(100);
            resolve(dataUrl);
          };
          img.onerror = () => reject(new Error("Invalid image"));
          img.src = ev.target.result;
        };
        reader.onerror = () => reject(new Error("Read failed"));
        reader.readAsDataURL(file);
      } catch (e) {
        reject(e);
      }
    });

  const startConvertAll = async () => {
    if (!items.length) return;
    setIsConverting(true);
    setError("");

    const out = [...items];
    for (let i = 0; i < out.length; i++) {
      const target = out[i].target.toLowerCase();
      out[i].status = "converting";
      setItems([...out]);

      const updateProgress = (p) => {
        out[i].progress = p;
        setItems([...out]);
      };

      if (!supportedTargets.includes(target)) {
        out[i].status = "error";
        continue;
      }

      try {
        const dataUrl = await convertFileTo(out[i].file, target, updateProgress);
        out[i].urlConverted = dataUrl;
        out[i].status = "done";
      } catch {
        out[i].status = "error";
      }
      setItems([...out]);
    }

    setIsConverting(false);
  };

  const downloadFile = (item) => {
    if (!item.urlConverted) return;
    const a = document.createElement("a");
    a.href = item.urlConverted;
    a.download = item.name.replace(/\.[^.]+$/, "") + `.${item.target}`;
    a.click();
  };

  const downloadAllAsZip = async () => {
    const zip = new JSZip();
    let added = 0;
    items.forEach((it) => {
      if (it.urlConverted) {
        const b64 = it.urlConverted.split(",")[1];
        const outName = it.name.replace(/\.[^.]+$/g, "") + `.${it.target}`;
        zip.file(outName, b64, { base64: true });
        added++;
      }
    });
    if (!added) {
      setError("Nothing to download yet.");
      return;
    }
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "converted_images.zip");
  };

  return (
    <div style={styles.page} className="py-5">
      <header className="py-5" style={{ textAlign: "center", marginBottom: 12 }}>
        <h1 style={styles.title}>Image Converter</h1>
        <p style={styles.subtitle}>  Free & fast tools to convert <strong>JPG, PNG, JPEG, WEBP</strong>, and more.
          No signup, no hassle – just quick, secure conversions.</p>
      </header>

      {!items.length && (
        <div style={styles.uploadBox}>
          <button
            onClick={() => fileInputRef.current?.click()}
            style={styles.chooseBtn}
          >
            <FiUpload style={{ marginRight: 8 }} /> Choose Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={onPickFiles}
            style={{ display: "none" }}
          />
          <p style={styles.helperText}>Max file size 1GB</p>
        </div>
      )}

      {!!items.length && (
        <div style={styles.listWrap}>
          {items.map((it, idx) => (
            <div key={idx} style={styles.row}>
              <div>
                <div style={styles.fileName}>{it.name}</div>
                <div style={styles.fileSize}>{formatSize(it.size)}</div>

                {/* Progress Bar */}
                {it.status === "converting" && (
                  <div style={styles.progressOuter}>
                    <div
                      style={{
                        ...styles.progressInner,
                        width: `${it.progress}%`,
                      }}
                    />
                  </div>
                )}
                {it.status === "done" && (
                  <div style={{ fontSize: 12, color: "#22C55E" }}>✅ Done</div>
                )}
                {it.status === "error" && (
                  <div style={{ fontSize: 12, color: "#B91C1C" }}>❌ Error</div>
                )}
              </div>

              <div style={styles.controls}>
                <select
                  value={it.target}
                  onChange={(e) => updateItemTarget(idx, e.target.value)}
                  style={styles.formatSelect}
                >
                  {supportedTargets.map((fmt) => (
                    <option key={fmt} value={fmt}>
                      {fmt.toUpperCase()}
                    </option>
                  ))}
                </select>

                {it.status === "done" && (
                  <button style={styles.iconBtn} onClick={() => downloadFile(it)}>
                    <FiDownload />
                  </button>
                )}
                <button style={styles.iconBtn} onClick={() => removeItem(idx)}>
                  <FiX />
                </button>
              </div>
            </div>
          ))}

          <div style={styles.footerRow}>
            <div>
              {/* Convert All to:{" "}
              <select
                value={globalTarget}
                onChange={(e) => setAllTargets(e.target.value)}
                style={styles.formatSelect}
              >
                {supportedTargets.map((fmt) => (
                  <option key={fmt} value={fmt}>
                    {fmt.toUpperCase()}
                  </option>
                ))}
              </select> */}
            </div>
            <button style={styles.convertBtn} onClick={startConvertAll} disabled={isConverting}>
              Convert →
            </button>
          </div>
        </div>
      )}

      {!isConverting && items.some((i) => i.urlConverted) && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button style={styles.zipBtn} onClick={downloadAllAsZip}>
            Download All as ZIP
          </button>
        </div>
      )}

      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
}

// 🎨 Theme + Styles
const purple = "#8d85ff";
const styles = {
  page: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
    background: "#fff",
    minHeight: "100vh",
    padding: 24,
  },
  title: { fontSize: 36, fontWeight: 800, margin: 0 },
  subtitle: { color: "#667085", marginTop: 6 },
  uploadBox: {
    border: `2px dashed ${purple}55`,
    background: `${purple}0f`,
    borderRadius: 12,
    padding: 48,
    maxWidth: 720,
    margin: "24px auto",
    textAlign: "center",
  },
  chooseBtn: {
    background: purple,
    color: "#fff",
    border: 0,
    borderRadius: 10,
    padding: "14px 18px",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(108,99,255,.25)",
  },
  helperText: { marginTop: 10, color: "#667085", fontSize: 13 },
  listWrap: {
    maxWidth: 900,
    margin: "0 auto",
    border: "1px solid #E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    borderBottom: "1px solid #F1F5F9",
  },
  fileName: { fontWeight: 600 },
  fileSize: { fontSize: 12, color: "#6B7280" },
  controls: { display: "flex", alignItems: "center", gap: 10 },
  formatSelect: {
    border: `1px solid ${purple}`,
    color: purple,
    padding: "6px 10px",
    borderRadius: 8,
    background: "#fff",
    fontWeight: 600,
    outline: "none",
  },
  iconBtn: {
    border: `1px solid ${purple}88`,
    background: "#fff",
    color: purple,
    width: 34,
    height: 34,
    borderRadius: 8,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    background: "#F8FAFC",
  },
  convertBtn: {
    background: purple,
    color: "#fff",
    border: 0,
    borderRadius: 10,
    padding: "10px 14px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(108,99,255,.25)",
  },
  progressOuter: {
    marginTop: 4,
    height: 6,
    width: 160,
    background: "#E5E7EB",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressInner: {
    height: "100%",
    background: purple,
    transition: "width 0.3s ease",
  },
  zipBtn: {
    background: "#22C55E",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 10,
    border: 0,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(34,197,94,.25)",
  },
  error: {
    color: "#B91C1C",
    background: "#FEE2E2",
    border: "1px solid #FCA5A5",
    borderRadius: 10,
    padding: 12,
    maxWidth: 640,
    margin: "16px auto",
  },
};
