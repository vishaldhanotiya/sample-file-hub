import React, { useRef, useState, useEffect } from "react";

// Bootstrap-based single-page placeholder generator with full feature set
export default function PlaceholderGenerator() {
  const canvasRef = useRef(null);
  const prevUrlRef = useRef(null);

  // Dimensions
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(360);
  const MAX_DIM = 5000;

  // Background
  const [bgType, setBgType] = useState("solid"); // solid | linear-gradient | radial-gradient | pattern
  const [bgColor1, setBgColor1] = useState("#e2e8f0");
  const [bgColor2, setBgColor2] = useState("#cbd5e1");
  const [gradientType, setGradientType] = useState("linear"); // linear | radial
  const [patternType, setPatternType] = useState("stripes"); // stripes | dots | checker

  // Placeholder text
  const [text, setText] = useState("");
  const [includeSizeInText, setIncludeSizeInText] = useState(false);

  // Text styling
  const [fontFamily, setFontFamily] = useState("Inter, Arial, sans-serif");
  const [fontSize, setFontSize] = useState(0); // 0 auto
  const [fontWeight, setFontWeight] = useState("500");
  const [textColor, setTextColor] = useState("#0f172a");
  const [alignment, setAlignment] = useState("center"); // center | top-left | bottom-right | left | right | top | bottom

  // Border & effects
  const [borderColor, setBorderColor] = useState("#94a3b8");
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderRadius, setBorderRadius] = useState(8);
  const [shadowEnabled, setShadowEnabled] = useState(false);
  const [shadowCss, setShadowCss] = useState("0 6px 18px rgba(15,23,42,0.12)");

  // File & format
  const [format, setFormat] = useState("png"); // png | jpg | webp
  const [quality, setQuality] = useState(0.9); // for lossy
  const [targetSizeMB, setTargetSizeMB] = useState(""); // optional

  // Extras
  const [iconFile, setIconFile] = useState(null);
  const [iconX, setIconX] = useState(12);
  const [iconY, setIconY] = useState(12);
  const [iconSize, setIconSize] = useState(48);
  const [darkMode, setDarkMode] = useState(false);

  // Accordion control (React-driven, avoids relying on Bootstrap JS)
  const [openAccordion, setOpenAccordion] = useState("dimensions");

  // Output
  const [previewUrl, setPreviewUrl] = useState(null);
  const [generatedBytes, setGeneratedBytes] = useState(null);
  const [error, setError] = useState(null);

  // Helper: revoke previous URL when replaced
  useEffect(() => {
    return () => {
      if (prevUrlRef.current) URL.revokeObjectURL(prevUrlRef.current);
    };
  }, []);

  // Validation
  const validate = (w, h) => {
    const W = Math.round(Number(w) || 0);
    const H = Math.round(Number(h) || 0);
    if (W <= 0 || H <= 0) return "Width and height must be positive numbers.";
    if (W > MAX_DIM || H > MAX_DIM) return `Max dimension is ${MAX_DIM} to avoid memory issues.`;
    return null;
  };

  // Utility: read file to data URL
  const fileToDataUrl = (file) => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

  // Draw helpers: background, patterns, text, border, shadow, icon
  const drawBackground = (ctx, w, h) => {
    if (bgType === "solid") {
      ctx.fillStyle = bgColor1;
      ctx.fillRect(0, 0, w, h);
      return;
    }

    if (bgType === "linear-gradient" || bgType === "radial-gradient") {
      if (bgType === "linear-gradient") {
        const g = ctx.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, bgColor1);
        g.addColorStop(1, bgColor2);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      } else {
        const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.05, w / 2, h / 2, Math.max(w, h));
        g.addColorStop(0, bgColor1);
        g.addColorStop(1, bgColor2);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      return;
    }

    // patterns
    ctx.fillStyle = bgColor1;
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    ctx.fillStyle = bgColor2;

    if (patternType === "stripes") {
      const stripe = Math.max(6, Math.round(Math.min(w, h) / 20));
      for (let x = -stripe; x < w + stripe; x += stripe * 2) ctx.fillRect(x, 0, stripe, h);
    } else if (patternType === "dots") {
      const step = Math.max(8, Math.round(Math.min(w, h) / 18));
      const r = Math.max(2, Math.round(step / 6));
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          ctx.beginPath();
          ctx.arc(x + step / 2, y + step / 2, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (patternType === "checker") {
      const sz = Math.max(8, Math.round(Math.min(w, h) / 18));
      for (let y = 0; y < h; y += sz) {
        for (let x = 0; x < w; x += sz) {
          if (((x / sz) | 0) % 2 === ((y / sz) | 0) % 2) ctx.fillRect(x, y, sz, sz);
        }
      }
    }

    ctx.restore();
  };

  const drawBorderShadow = (ctx, w, h) => {
    if (shadowEnabled) {
      // simple shadow by drawing a blurred rect via shadow settings
      ctx.save();
      ctx.shadowColor = "rgba(2,6,23,0.12)";
      ctx.shadowBlur = 12;
      ctx.shadowOffsetX = 4;
      ctx.shadowOffsetY = 6;
      ctx.fillStyle = "rgba(0,0,0,0)"; // we want shadow only
      roundRect(ctx, 0, 0, w, h, borderRadius);
      ctx.restore();
    }

    if (borderWidth > 0) {
      ctx.save();
      ctx.lineWidth = borderWidth;
      ctx.strokeStyle = borderColor;
      roundRect(ctx, borderWidth / 2, borderWidth / 2, w - borderWidth, h - borderWidth, borderRadius, true);
      ctx.restore();
    }
  };

  const roundRect = (ctx, x, y, w, h, r, strokeOnly = false) => {
    const rad = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.arcTo(x + w, y, x + w, y + h, rad);
    ctx.arcTo(x + w, y + h, x, y + h, rad);
    ctx.arcTo(x, y + h, x, y, rad);
    ctx.arcTo(x, y, x + w, y, rad);
    ctx.closePath();
    if (strokeOnly) ctx.stroke();
    else ctx.fill();
  };

  const drawText = (ctx, w, h) => {
    const base = text && text.trim() ? text : `${w} x ${h}`;
    const display = includeSizeInText && targetSizeMB ? `${base} — ${targetSizeMB} MB` : base;

    const auto = Math.max(12, Math.floor(Math.min(w, h) / 8));
    const fs = fontSize > 0 ? fontSize : auto;
    ctx.fillStyle = textColor;
    ctx.font = `${fontWeight} ${fs}px ${fontFamily}`;

    // alignment mapping
    if (alignment === "center") {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(display, w / 2, h / 2);
    } else if (alignment === "top-left") {
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(display, 12 + borderWidth, 12 + borderWidth);
    } else if (alignment === "bottom-right") {
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText(display, w - 12 - borderWidth, h - 12 - borderWidth);
    } else if (alignment === "left") {
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(display, 12 + borderWidth, h / 2);
    } else if (alignment === "right") {
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(display, w - 12 - borderWidth, h / 2);
    } else {
      // top, bottom
      ctx.textAlign = "center";
      ctx.textBaseline = alignment === "top" ? "top" : "bottom";
      ctx.fillText(display, w / 2, alignment === "top" ? 12 + borderWidth : h - 12 - borderWidth);
    }
  };

  const drawIcon = async (ctx, w, h) => {
    if (!iconFile) return;
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      const url = await fileToDataUrl(iconFile);
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
        img.src = url;
      });
      const sx = Math.max(0, Math.min(w - 1, iconX));
      const sy = Math.max(0, Math.min(h - 1, iconY));
      const s = Math.max(4, Math.min(Math.min(w, h), iconSize));
      ctx.drawImage(img, sx, sy, s, s);
    } catch (e) {
      console.warn("Icon draw failed", e);
    }
  };

  // Core: render canvas with current settings; return blob when requested
  const renderCanvasToBlob = async (options = { mime: "image/png", quality: 0.9, targetBytes: null }) => {
    setError(null);
    const w = Math.round(Number(width) || 0);
    const h = Math.round(Number(height) || 0);
    const v = validate(w, h);
    if (v) {
      setError(v);
      throw new Error(v);
    }

    const canvas = canvasRef.current;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");

    // clear
    ctx.clearRect(0, 0, w, h);

    // draw background (with rounded corners clip if borderRadius)
    if (borderRadius > 0) {
      ctx.save();
      roundRect(ctx, 0, 0, w, h, borderRadius);
      ctx.clip();
      drawBackground(ctx, w, h);
      ctx.restore();
    } else {
      drawBackground(ctx, w, h);
    }

    // draw shadow and border
    drawBorderShadow(ctx, w, h);

    // text
    drawText(ctx, w, h);

    // icon overlay
    await drawIcon(ctx, w, h);

    const mime = options.mime || (format === "jpg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png");
    const q = mime === "image/png" ? undefined : (options.quality ?? quality);

    // return a blob
    const blob = await new Promise((res) => canvas.toBlob((b) => res(b), mime, q));
    if (!blob) throw new Error("Canvas toBlob failed");

    // size targeting logic
    let finalBlob = blob;
    if (options.targetBytes) {
      // if blob smaller than target, append padding bytes
      if (finalBlob.size < options.targetBytes) {
        const padding = new Uint8Array(options.targetBytes - finalBlob.size);
        finalBlob = new Blob([finalBlob, padding], { type: mime });
      } else if (finalBlob.size > options.targetBytes) {
        // for lossy formats, try binary search on quality to get smaller
        if (mime !== "image/png") {
          let low = 0.05;
          let high = q ?? 0.95;
          let best = finalBlob;
          for (let i = 0; i < 6; i++) {
            const mid = (low + high) / 2;
            // re-encode
            // eslint-disable-next-line no-await-in-loop
            const b2 = await new Promise((res) => canvas.toBlob((b) => res(b), mime, mid));
            if (!b2) break;
            if (b2.size <= options.targetBytes) {
              best = b2;
              high = mid;
            } else {
              low = mid;
            }
          }
          finalBlob = best;
        }
      }
    }

    return finalBlob;
  };

  // Live preview: update previewUrl and generatedBytes whenever inputs change
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const targetBytes = targetSizeMB ? Math.round(parseFloat(targetSizeMB) * 1024 * 1024) : null;
        const mime = format === "jpg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png";
        const blob = await renderCanvasToBlob({ mime, quality, targetBytes });
        if (cancelled) return;
        if (prevUrlRef.current) URL.revokeObjectURL(prevUrlRef.current);
        const url = URL.createObjectURL(blob);
        prevUrlRef.current = url;
        setPreviewUrl(url);
        setGeneratedBytes(blob.size);
      } catch (e) {
        if (!cancelled) setError(e.message || String(e));
      }
    })();

    return () => (cancelled = true);
  }, [
    width,
    height,
    bgType,
    bgColor1,
    bgColor2,
    gradientType,
    patternType,
    text,
    includeSizeInText,
    fontFamily,
    fontSize,
    fontWeight,
    textColor,
    alignment,
    borderColor,
    borderWidth,
    borderRadius,
    shadowEnabled,
    iconFile,
    iconX,
    iconY,
    iconSize,
    format,
    quality,
    targetSizeMB,
  ]);

  // Actions
  const handleDownload = async () => {
    try {
      const mime = format === "jpg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png";
      const targetBytes = targetSizeMB ? Math.round(parseFloat(targetSizeMB) * 1024 * 1024) : null;
      const blob = await renderCanvasToBlob({ mime, quality, targetBytes });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `placeholder_${width}x${height}.${format === "jpg" ? "jpg" : format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e.message || String(e));
    }
  };

  const handleCopyBase64 = async () => {
    try {
      const w = Math.round(Number(width) || 0);
      const h = Math.round(Number(height) || 0);
      const canvas = canvasRef.current;
      canvas.width = w;
      canvas.height = h;
      // re-render synchronously
      await renderCanvasToBlob({ mime: format === "jpg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png", quality });
      const data = canvas.toDataURL(format === "jpg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png", quality);
      await navigator.clipboard.writeText(data);
    } catch (e) {
      setError(e.message || String(e));
    }
  };

  const handleCopyEmbed = async () => {
    try {
      if (!previewUrl) return;
      const alt = `${text && text.trim() ? text : `${width}x${height}`} ${targetSizeMB ? `— ${targetSizeMB}MB` : ""}`.trim();
      const snippet = `<img src=\"${previewUrl}\" alt=\"${alt}\" width=\"${width}\" height=\"${height}\" />`;
      await navigator.clipboard.writeText(snippet);
    } catch (e) {
      setError(e.message || String(e));
    }
  };

  const handleIconFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setIconFile(f);
  };

  const randomize = () => {
    const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    setWidth(rnd(100, 1920));
    setHeight(rnd(80, 1080));
    setBgType(["solid", "linear-gradient", "radial-gradient", "pattern"][Math.floor(Math.random() * 4)]);
    setBgColor1(`#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`);
    setBgColor2(`#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`);
    setText(`rnd-${Math.random().toString(36).slice(2, 8)}`);
    setTargetSizeMB(["", "0.1", "1", "2"][Math.floor(Math.random() * 4)]);
    setFormat(["png", "jpg", "webp"][Math.floor(Math.random() * 3)]);
  };

  const resetDefaults = () => {
    setWidth(640);
    setHeight(360);
    setBgType("solid");
    setBgColor1("#e2e8f0");
    setBgColor2("#cbd5e1");
    setText("");
    setIncludeSizeInText(false);
    setFontFamily("Inter, Arial, sans-serif");
    setFontSize(0);
    setFontWeight("500");
    setTextColor("#0f172a");
    setAlignment("center");
    setBorderColor("#94a3b8");
    setBorderWidth(0);
    setBorderRadius(8);
    setShadowEnabled(false);
    setIconFile(null);
    setIconX(12);
    setIconY(12);
    setIconSize(48);
    setFormat("png");
    setQuality(0.9);
    setTargetSizeMB("");
    setError(null);
  };

  // API preview string
  const apiPreview = () => {
    const q = [];
    q.push(`width=${width}`);
    q.push(`height=${height}`);
    if (text) q.push(`text=${encodeURIComponent(text)}`);
    if (targetSizeMB) q.push(`size=${encodeURIComponent(targetSizeMB)}MB`);
    q.push(`format=${format}`);
    return `/generate?${q.join("&")}`;
  };

  // helper snippets moved before return so they are available
  function suggestAltText() {
    const base = text && text.trim() ? text.trim() : `${width}x${height}`;
    const size = targetSizeMB ? ` approx ${targetSizeMB}MB` : "";
    return `${base}${size}`;
  }

  function generateEmbedSnippet() {
    if (!previewUrl) return "";
    return `<img src=\"${previewUrl}\" alt=\"${suggestAltText()}\" width=\"${width}\" height=\"${height}\" />`;
  }

  return (
    <div className={`container-fluid p-3 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} rounded mb-3`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">PlaceholderGen</a>
          <div className="d-flex gap-2 align-items-center">
            <button className="btn btn-outline-secondary btn-sm" onClick={randomize}>Random</button>
            <button className="btn btn-primary btn-sm" onClick={() => { /* trigger immediate download */ handleDownload(); }}>Generate & Download</button>
            <div className="form-check form-switch ms-3">
              <input className="form-check-input" type="checkbox" id="darkSwitch" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
              <label className="form-check-label small" htmlFor="darkSwitch">Dark</label>
            </div>
          </div>
        </div>
      </nav>

      <div className="row">
        {/* Left controls */}
        <div className="col-lg-4 mb-3">

          {/* Dimensions card (React-controlled collapse) */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'dimensions' ? null : 'dimensions')}>
              <strong className="mb-0">Dimensions</strong>
              <span className="small">{openAccordion === 'dimensions' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'dimensions' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">Width (px)</label>
                  <input className="form-control" type="number" value={width} min={1} max={MAX_DIM} onChange={(e) => setWidth(Number(e.target.value))} />
                </div>
                <div className="mb-2">
                  <label className="form-label">Height (px)</label>
                  <input className="form-control" type="number" value={height} min={1} max={MAX_DIM} onChange={(e) => setHeight(Number(e.target.value))} />
                </div>
                <div className="form-text">Max dimension: {MAX_DIM}px</div>
              </div>
            )}
          </div>

          {/* Background card */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'background' ? null : 'background')}>
              <strong className="mb-0">Background</strong>
              <span className="small">{openAccordion === 'background' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'background' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">Type</label>
                  <select className="form-select" value={bgType} onChange={(e) => setBgType(e.target.value)}>
                    <option value="solid">Solid</option>
                    <option value="linear-gradient">Linear gradient</option>
                    <option value="radial-gradient">Radial gradient</option>
                    <option value="pattern">Pattern</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-6 mb-2">
                    <label className="form-label">Color 1</label>
                    <input className="form-control form-control-color" type="color" value={bgColor1} onChange={(e) => setBgColor1(e.target.value)} />
                  </div>
                  <div className="col-6 mb-2">
                    <label className="form-label">Color 2</label>
                    <input className="form-control form-control-color" type="color" value={bgColor2} onChange={(e) => setBgColor2(e.target.value)} />
                  </div>
                </div>

                {bgType !== "solid" && (
                  <div className="mb-2">
                    <label className="form-label">Gradient type</label>
                    <select className="form-select" value={gradientType} onChange={(e) => setGradientType(e.target.value)}>
                      <option value="linear">Linear</option>
                      <option value="radial">Radial</option>
                    </select>
                  </div>
                )}

                {bgType === "pattern" && (
                  <div className="mb-2">
                    <label className="form-label">Pattern</label>
                    <select className="form-select" value={patternType} onChange={(e) => setPatternType(e.target.value)}>
                      <option value="stripes">Stripes</option>
                      <option value="dots">Dots</option>
                      <option value="checker">Checkerboard</option>
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Text card */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'text' ? null : 'text')}>
              <strong className="mb-0">Placeholder Text</strong>
              <span className="small">{openAccordion === 'text' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'text' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">Text</label>
                  <input className="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={`${width} x ${height}`} />
                </div>
                <div className="form-check form-switch mb-2">
                  <input className="form-check-input" type="checkbox" id="includeSize" checked={includeSizeInText} onChange={(e) => setIncludeSizeInText(e.target.checked)} />
                  <label className="form-check-label" htmlFor="includeSize">Include file size in text</label>
                </div>

                <div className="mb-2">
                  <label className="form-label">Font family</label>
                  <input className="form-control" type="text" value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} />
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <label className="form-label">Font size (0 auto)</label>
                    <input className="form-control" type="number" min={0} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Weight</label>
                    <select className="form-select" value={fontWeight} onChange={(e) => setFontWeight(e.target.value)}>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                      <option value="700">700</option>
                    </select>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Text color</label>
                  <input className="form-control form-control-color" type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                </div>

                <div className="mb-2">
                  <label className="form-label">Alignment</label>
                  <select className="form-select" value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                    <option value="center">Center</option>
                    <option value="top-left">Top-left</option>
                    <option value="bottom-right">Bottom-right</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Effects card */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'effects' ? null : 'effects')}>
              <strong className="mb-0">Borders & Effects</strong>
              <span className="small">{openAccordion === 'effects' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'effects' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">Border color</label>
                  <input className="form-control form-control-color" type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
                </div>
                <div className="mb-2">
                  <label className="form-label">Border thickness</label>
                  <input className="form-control" type="number" min={0} value={borderWidth} onChange={(e) => setBorderWidth(Number(e.target.value))} />
                </div>
                <div className="mb-2">
                  <label className="form-label">Border radius</label>
                  <input className="form-control" type="number" min={0} value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))} />
                </div>
                <div className="form-check form-switch mb-2">
                  <input className="form-check-input" type="checkbox" id="shadowToggle" checked={shadowEnabled} onChange={(e) => setShadowEnabled(e.target.checked)} />
                  <label className="form-check-label" htmlFor="shadowToggle">Shadow</label>
                </div>
                <div className="mb-2">
                  <label className="form-label">Shadow CSS</label>
                  <input className="form-control" value={shadowCss} onChange={(e) => setShadowCss(e.target.value)} />
                  <div className="form-text">CSS shadow string used for preview box (e.g. 0 6px 18px rgba(0,0,0,0.12))</div>
                </div>
              </div>
            )}
          </div>

          {/* File & Quality card */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'file' ? null : 'file')}>
              <strong className="mb-0">File & Quality</strong>
              <span className="small">{openAccordion === 'file' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'file' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">Format</label>
                  <select className="form-select" value={format} onChange={(e) => setFormat(e.target.value)}>
                    <option value="png">PNG</option>
                    <option value="jpg">JPG</option>
                    <option value="webp">WebP</option>
                  </select>
                </div>
                {(format === "jpg" || format === "webp") && (
                  <div className="mb-2">
                    <label className="form-label">Quality</label>
                    <input className="form-range" type="range" min={0.1} max={1} step={0.05} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} />
                    <div className="form-text">{quality}</div>
                  </div>
                )}

                <div className="mb-2">
                  <label className="form-label">Target file size (MB) — optional</label>
                  <input className="form-control" type="number" step="0.1" min={0} value={targetSizeMB} onChange={(e) => setTargetSizeMB(e.target.value)} placeholder="e.g. 1" />
                  <div className="form-text">If set, system will try to inflate or compress to match target size (best effort).</div>
                </div>
              </div>
            )}
          </div>

          {/* Extras card */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'extras' ? null : 'extras')}>
              <strong className="mb-0">Extras</strong>
              <span className="small">{openAccordion === 'extras' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'extras' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">Icon / Logo</label>
                  <input className="form-control" type="file" accept="image/*" onChange={handleIconFile} />
                </div>
                <div className="row mb-2">
                  <div className="col-4">
                    <label className="form-label">X</label>
                    <input className="form-control" type="number" value={iconX} onChange={(e) => setIconX(Number(e.target.value))} />
                  </div>
                  <div className="col-4">
                    <label className="form-label">Y</label>
                    <input className="form-control" type="number" value={iconY} onChange={(e) => setIconY(Number(e.target.value))} />
                  </div>
                  <div className="col-4">
                    <label className="form-label">Size</label>
                    <input className="form-control" type="number" value={iconSize} onChange={(e) => setIconSize(Number(e.target.value))} />
                  </div>
                </div>

                <div className="mb-2">
                  <button className="btn btn-outline-secondary me-2" onClick={() => { navigator.clipboard?.writeText(apiPreview()); }}>Copy API</button>
                  <button className="btn btn-outline-secondary me-2" onClick={() => { navigator.clipboard?.writeText(suggestAltText()); }}>Copy Alt Text</button>
                  <button className="btn btn-outline-secondary" onClick={() => { navigator.clipboard?.writeText(generateEmbedSnippet()); }}>Copy &lt;img&gt; snippet</button>
                </div>
              </div>
            )}
          </div>

          {/* Developer card */}
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setOpenAccordion(openAccordion === 'dev' ? null : 'dev')}>
              <strong className="mb-0">Developer</strong>
              <span className="small">{openAccordion === 'dev' ? '−' : '+'}</span>
            </div>
            {openAccordion === 'dev' && (
              <div className="card-body">
                <div className="mb-2">
                  <label className="form-label">API Example</label>
                  <div className="form-control monospace" style={{ whiteSpace: 'nowrap', overflow: 'auto' }}>{apiPreview()}</div>
                </div>
                <div className="mb-2">
                  <label className="form-label">Base64</label>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary" onClick={async () => { await handleCopyBase64(); }}>Copy Base64</button>
                    <div className="form-text align-self-center">(copies data URL to clipboard)</div>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Reset</label>
                  <button className="btn btn-sm btn-warning" onClick={resetDefaults}>Reset to defaults</button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right: preview */}
        <div className="col-lg-8">
          <div className={`card p-3 ${darkMode ? 'bg-secondary text-light' : ''}`}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">Live Preview</h5>
              <div className="small text-muted">{generatedBytes ? `${(generatedBytes / (1024*1024)).toFixed(2)} MB` : 'not generated'}</div>
            </div>

            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 280 }}>
              <div style={{ width: '100%', maxWidth: 960 }}>
                <div style={{ width: '100%', paddingBottom: `${(height/width)*100}%`, position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {previewUrl ? (
                      <img src={previewUrl} alt={suggestAltText()} style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', borderRadius: `${borderRadius}px`, boxShadow: shadowEnabled ? shadowCss : 'none', border: borderWidth ? `${borderWidth}px solid ${borderColor}` : 'none' }} />
                    ) : (
                      <div className="text-muted">Preview will appear here</div>
                    )}
                  </div>
                </div>

                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-primary" onClick={handleDownload}>Download</button>
                  <button className="btn btn-outline-secondary" onClick={handleCopyBase64}>Copy Base64</button>
                  <button className="btn btn-outline-secondary" onClick={handleCopyEmbed}>Copy &lt;img&gt; Snippet</button>
                  <button className="btn btn-outline-secondary ms-auto" onClick={() => { navigator.clipboard?.writeText(suggestAltText()); }}>Alt text</button>
                </div>

                {error && <div className="mt-2 text-danger">{error}</div>}

                <div className="mt-3 small text-muted">API endpoint (example): <code>{apiPreview()}</code></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}
