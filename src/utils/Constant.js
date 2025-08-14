export const imageTabData = [
  { key: "jpg", title: "JPG" },
  { key: "png", title: "PNG" },
  { key: "webp", title: "WEBP" },
  { key: "svg", title: "SVG" },
  { key: "gif", title: "GIF" },
  { key: "bmp", title: "BMP" },
];

export const videoTabData = [
  { key: "mp4", title: "MP4" },
  { key: "mkv", title: "MKV" },
  { key: "avi", title: "AVI" },
  { key: "flv", title: "FLV" },
  { key: "mov", title: "MOV" },
];

export const documentTabData = [
  { key: "pdf", title: "PDF" },
  { key: "odt", title: "ODT" },
  { key: "rtf", title: "RTF" },
  { key: "pptx", title: "PPTX" },
  { key: "docx", title: "DOCX" },
  { key: "txt", title: "TXT" },
];

export const audioTabData = [
  { key: "mp3", title: "MP3" },
  { key: "aac", title: "AAC" },
  { key: "wav", title: "WAV" },
  { key: "ogg", title: "OGG" },
];

export const fileTypeToBasePath = {
  // Images
  jpg: "/sample-images/jpg",
  png: "/sample-images/png",
  webp: "/sample-images/webp",
  svg: "/sample-images/svg",
  gif: "/sample-images/gif",
  bmp: "/sample-images/bmp",

  // Video
  mp4: "/sample-videos/mp4",
  avi: "/sample-videos/avi",
  flv: "/sample-videos/flv",
  mov: "/sample-videos/mov",
  mkv: "/sample-videos/mkv",

  // Audio
  mp3: "/sample-audios/mp3",
  wav: "/sample-audios/wav",
  aac: "/sample-audios/aac",
  ogg: "/sample-audios/ogg",

  // Documents
  pdf: "/sample-documents/pdf",
  doc: "/sample-documents/docx",
  odt: "/sample-documents/odt",
  rtf: "/sample-documents/rtf",
  pptx: "/sample-documents/pptx",
  txt: "/sample-documents/txt",
};
