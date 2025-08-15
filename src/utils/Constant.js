export const imageTabData = [
  { key: "jpg", title: "JPG", path: "/sample-images/jpg" },
  { key: "png", title: "PNG", path: "/sample-images/png" },
  { key: "webp", title: "WEBP", path: "/sample-images/webp" },
  { key: "svg", title: "SVG", path: "/sample-images/svg" },
  { key: "gif", title: "GIF", path: "/sample-images/gif" },
  { key: "bmp", title: "BMP", path: "/sample-images/bmp" },
];

export const videoTabData = [
  { key: "mp4", title: "MP4", path: "/sample-videos/mp4" },
  { key: "mkv", title: "MKV", path: "/sample-videos/mkv" },
  { key: "avi", title: "AVI", path: "/sample-videos/avi" },
  { key: "flv", title: "FLV", path: "/sample-videos/flv" },
  { key: "mov", title: "MOV", path: "/sample-videos/mov" },
  { key: "webm", title: "WEBM", path: "/sample-videos/webm" },
];

export const documentTabData = [
  { key: "pdf", title: "PDF", path: "/sample-documents/pdf" },
  { key: "odt", title: "ODT", path: "/sample-documents/odt" },
  { key: "rtf", title: "RTF", path: "/sample-documents/rtf" },
  { key: "pptx", title: "PPTX", path: "/sample-documents/pptx" },
  { key: "docx", title: "DOCX", path: "/sample-documents/docx" },
  { key: "txt", title: "TXT", path: "/sample-documents/txt" },
  { key: "zip", title: "ZIP", path: "/sample-documents/zip" },
];

export const audioTabData = [
  { key: "mp3", title: "MP3", path: "/sample-audios/mp3" },
  { key: "aac", title: "AAC", path: "/sample-audios/aac" },
  { key: "wav", title: "WAV", path: "/sample-audios/wav" },
  { key: "ogg", title: "OGG", path: "/sample-audios/ogg" },
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
  webm: "/sample-videos/webm",

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
  zip: "/sample-documents/zip",
};
