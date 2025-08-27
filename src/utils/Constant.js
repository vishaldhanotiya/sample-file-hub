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
  { key: "doc", title: "DOC", path: "/sample-documents/doc" },
  { key: "docx", title: "DOCX", path: "/sample-documents/docx" },
  { key: "xls", title: "XLS", path: "/sample-documents/xls" },
  { key: "xlsx", title: "XLSX", path: "/sample-documents/xlsx" },
  { key: "odt", title: "ODT", path: "/sample-documents/odt" },
  { key: "rtf", title: "RTF", path: "/sample-documents/rtf" },
  { key: "ppt", title: "PPT", path: "/sample-documents/ppt" },
  { key: "pptx", title: "PPTX", path: "/sample-documents/pptx" },
  { key: "txt", title: "TXT", path: "/sample-documents/txt" },
  { key: "zip", title: "ZIP", path: "/sample-documents/zip" },
];

export const audioTabData = [
  { key: "mp3", title: "MP3", path: "/sample-audios/mp3" },
  { key: "aac", title: "AAC", path: "/sample-audios/aac" },
  { key: "wav", title: "WAV", path: "/sample-audios/wav" },
  { key: "ogg", title: "OGG", path: "/sample-audios/ogg" },
];

export const archiveTabData = [
  { key: "zip", title: "ZIP", path: "/sample-archives/zip" },
  { key: "rar", title: "RAR", path: "/sample-archives/rar" },
  { key: "7z", title: "7Z", path: "/sample-archives/7z" },
  { key: "tar", title: "TAR", path: "/sample-archives/tar" },
];

export const otherTabData = [
  { key: "xml", title: "XML", path: "/sample-archives/xml" },
  { key: "json", title: "JSON", path: "/sample-archives/json" },
  { key: "csv", title: "CSV", path: "/sample-archives/csv" },
];

export const fileTypeToBasePath = {
  // Images
  jpg: "/sample-images/sample-jpg",
  png: "/sample-images/sample-png",
  webp: "/sample-images/sample-webp",
  svg: "/sample-images/sample-svg",
  gif: "/sample-images/sample-gif",
  bmp: "/sample-images/sample-bmp",

  // Video
  mp4: "/sample-videos/sample-mp4",
  avi: "/sample-videos/sample-avi",
  flv: "/sample-videos/sample-flv",
  mov: "/sample-videos/sample-mov",
  mkv: "/sample-videos/sample-mkv",
  webm: "/sample-videos/sample-webm",

  // Audio
  mp3: "/sample-audios/sample-mp3",
  wav: "/sample-audios/sample-wav",
  aac: "/sample-audios/sample-aac",
  ogg: "/sample-audios/sample-ogg",

  // Documents
  pdf: "/sample-documents/sample-pdf",
  doc: "/sample-documents/sample-doc",
  docx: "/sample-documents/sample-docx",
  xls: "/sample-documents/sample-xls",
  xlsx: "/sample-documents/sample-xlsx",
  odt: "/sample-documents/sample-odt",
  rtf: "/sample-documents/sample-rtf",
  ppt: "/sample-documents/sample-ppt",
  pptx: "/sample-documents/sample-pptx",
  txt: "/sample-documents/sample-txt",

  // Archives
  zip: "/sample-archives/sample-zip",
  rar: "/sample-archives/sample-rar",
  "7z": "/sample-archives/sample-7z",
  tar: "/sample-archives/sample-tar",

  //others
  xml: "/sample-others/sample-xml",
  json: "/sample-others/sample-json",
  csv: "/sample-others/sample-csv",
};

export const getMetaData = (fileType) => {
  switch (fileType) {
    // ----------------- Images -----------------
    case "jpg":
      return {
        title: "Sample jpg Image Download - Free Sample Files",
        description:
          "Download a sample JPG image file for testing and development. High-quality JPEG format image available for free.",
        keywords:
          "sample jpg, jpg image download, jpeg file example, free jpg file",
        bodyText: `
      <article>
      <p>
        A <strong>JPG</strong> (or <strong>JPEG</strong>) file is a universally recognized <strong>image format</strong> known for its efficient <strong>compression</strong> and versatility. Standing for <strong>Joint Photographic Experts Group</strong>, this format was developed in the late 1980s and remains the go-to choice for <strong>digital photography</strong>, <strong>web graphics</strong>, and <strong>online sharing</strong>. Its <strong>lossy compression</strong> technology significantly reduces file sizes by removing unnecessary color data while maintaining high visual quality—making it perfect for <strong>websites</strong>, <strong>social media</strong>, and <strong>digital storage</strong>.
      </p>
      <p>
        <strong>JPEG</strong> remains the top <strong>image format</strong> for <strong>digital photos</strong> and <strong>web use</strong> due to its balance of <strong>quality</strong>, <strong>compression efficiency</strong>, and <strong>universal support</strong>. Whether you're <strong>optimizing a website</strong>, <strong>sharing on social media</strong>, or <strong>storing memories</strong>, <strong>JPEG</strong> delivers the perfect mix of <strong>performance</strong> and <strong>visual appeal</strong>.
      </p>
    </article>
`,
      };
    case "png":
      return {
        title: "Sample png Image Download - Free Sample Files",
        description:
          "Download a sample PNG image file for testing projects, design, and software. Free PNG sample available instantly.",
        keywords:
          "sample png, png image download, transparent png, free png file",
        bodyText: `<p>A <strong>PNG (Portable Network Graphics)</strong> file is a widely used <strong>image format</strong> known for its <strong>lossless compression</strong> and ability to preserve <strong>image quality</strong>. Developed in the mid-1990s as an improved alternative to GIF, <strong>PNG</strong> quickly became a favorite for <strong>web graphics</strong>, <strong>design projects</strong>, and images requiring <strong>transparency</strong>.</p>

<p>Unlike <strong>JPEG</strong>, which uses lossy compression, <strong>PNG</strong> keeps every detail intact without <strong>quality loss</strong>, making it ideal for <strong>logos</strong>, <strong>icons</strong>, and graphics with <strong>sharp edges</strong> or <strong>text</strong>. Its support for <strong>transparent backgrounds</strong> is especially useful in <strong>modern web design</strong>, <strong>branding</strong>, and <strong>UI/UX projects</strong>.</p>

<p>While <strong>PNGs</strong> aren’t always the best choice for <strong>large photos</strong> (due to bigger file sizes), they excel when you need <strong>crystal-clear graphics</strong> with no compromise on quality. For <strong>professional branding</strong> and <strong>web design</strong>, <strong>PNG</strong> is often the go-to format.</p>
`,
      };
    case "webp":
      return {
        title: "Sample webp Image Download - Free Sample Files",
        description:
          "Get a sample WEBP image file for testing and optimization. Free WEBP format download provided.",
        keywords:
          "sample webp, webp image download, webp example file, free webp",
        bodyText: `<p><strong>WEB file</strong> is a core <strong>web development format</strong> that contains code or markup essential for creating <strong>websites and web applications</strong>. The history of <strong>WEB files</strong> dates back to the early 1990s with the invention of <strong>HTML</strong> by Tim Berners-Lee, which revolutionized the way websites were built and accessed. These files often include <strong>HTML, CSS, and JavaScript</strong>, defining the structure, style, and functionality of a website. Over the years, <strong>WEB files</strong> have evolved to support modern frameworks, responsive designs, and interactive user experiences. Using <strong>WEB files</strong> ensures that websites are lightweight, fast, and compatible across all modern <strong>browsers and devices</strong>.</p>
Whether building a blog, e-commerce platform, or complex <strong>web application</strong>, <strong>WEB files</strong> provide the foundation for a strong <strong>digital presence</strong>. You can <strong>download WEB files free from our website</strong>, offering developers, designers, and learners the resources to create, test, and optimize <strong>web projects</strong> efficiently.</p>
`,
      };
    case "svg":
      return {
        title: "Sample svg Image Download - Free Sample Files",
        description:
          "Download a sample SVG vector image file for testing in web and design projects. Scalable vector graphic format.",
        keywords: "sample svg, svg download, vector svg file, free svg example",
        bodyText: `<p><strong>SVG (Scalable Vector Graphics)</strong> file is a <strong>vector image format</strong> that retains perfect quality at any scale. The format was introduced in 1999 by the <strong>W3C</strong> to provide a resolution-independent alternative to raster formats like JPEG or PNG. <strong>SVG files</strong> are commonly used for <strong>web graphics, logos, icons, and illustrations</strong> due to their crisp visuals and small file size. One of the greatest advantages of <strong>SVG</strong> is its support for <strong>transparency, animation, and interactivity</strong>, which makes it ideal for modern <strong>web design and responsive layouts</strong>.</p>

They are perfect for <strong>UI/UX designers, web developers, and digital marketers</strong>. You can <strong>download SVG files free from our website</strong>, making them accessible for testing, design projects, and educational purposes. <strong>SVG remains a preferred choice</strong> for creating sharp, interactive, and visually appealing <strong>web content</strong>.</p>
`,
      };
    case "gif":
      return {
        title: "Sample gif Image Download - Free Sample Files",
        description:
          "Free sample GIF image file for testing animations and image rendering. Download instantly.",
        keywords:
          "sample gif, gif animation, gif download free, gif file example",
        bodyText: `<p><strong>GIF (Graphics Interchange Format)</strong> file is a popular <strong>image format</strong> known for its <strong>ability to animate</strong>, making it a staple of <strong>internet culture, social media, and messaging apps</strong>. It was developed by <strong>Compaq</strong> in 1987 as a way to compress and transmit images efficiently on early internet networks. <strong>GIF files</strong> quickly became popular for <strong>web graphics, memes, and short animated clips</strong>. Unlike static formats such as JPEG or PNG, <strong>GIFs</strong> allow designers and creators to convey motion, humor, or instructions through looping visuals while maintaining <strong>broad compatibility</strong>.</p>

They are perfect for <strong>social media, marketing, tutorials, and messaging apps</strong>. You can <strong>download GIF files free from our website</strong>, allowing marketers, educators, and content creators to integrate engaging visuals into <strong>digital projects</strong>. <strong>GIFs continue to be widely used</strong> for entertaining, informative, and attention-grabbing online content.</p>
`,
      };
    case "bmp":
      return {
        title: "Sample bmp Image Download - Free Sample Files",
        description:
          "Download a sample BMP image file for testing legacy formats and applications. Free BMP sample.",
        keywords:
          "sample bmp, bmp file download, bitmap image example, bmp test file",
        bodyText: `<p><strong>BMP (Bitmap Image)</strong> file is a raster <strong>image format</strong> used to store digital images pixel by pixel, ensuring high-quality visuals without compression. Developed by <strong>Microsoft in 1986</strong> for the Windows operating system, <strong>BMP files</strong> became popular for storing simple graphics, icons, and images where image fidelity was critical. The format preserves every pixel of the image, making it ideal for <strong>desktop publishing, graphic design, and image editing</strong>. Unlike compressed formats such as JPEG or PNG, <strong>BMP files</strong> retain full color information, resulting in larger file sizes but uncompromised visual quality.</p>

They are particularly useful for <strong>archiving original graphics</strong> and preparing images where accuracy is crucial. You can <strong>download BMP files free from our website</strong>, allowing designers, students, and hobbyists to access high-quality bitmap images for testing, learning, or creative projects. <strong>BMP remains a classic format</strong> for anyone needing accurate, uncompressed <strong>digital images</strong>.</p>
`,
      };

    // ----------------- Videos -----------------
    case "mp4":
      return {
        title: "Sample mp4 Video Download - Free Sample Files",
        description:
          "Download a sample MP4 video file for playback and testing. Free MP4 example available.",
        keywords:
          "sample mp4, mp4 video download, mp4 file example, free mp4 video",
        bodyText: `<p><strong>MP4 (MPEG-4 Part 14)</strong> file is a highly popular <strong>multimedia container format</strong> used to store <strong>video, audio, and subtitle tracks</strong>. The MP4 format was introduced in 2001 as part of the <strong>MPEG-4 standard</strong>, providing a flexible solution for high-quality video compression and streaming. <strong>MP4 files</strong> are widely used because they offer <strong>efficient compression, high compatibility, and support for streaming</strong>, making them ideal for <strong>online video, tutorials, movies, and mobile playback</strong>.</p>

Content creators, educators, and marketers rely on <strong>MP4 files</strong> for their versatility and performance. You can <strong>download MP4 files free from our website</strong>, providing easy access to high-quality videos for <strong>personal, educational, or professional use</strong>. <strong>MP4 continues to be the preferred format</strong> for anyone needing reliable, high-quality <strong>video content</strong>.</p>
`,
      };
    case "mkv":
      return {
        title: "Sample mkv Video Download - Free Sample Files",
        description:
          "Free sample MKV video file available for testing video players and formats.",
        keywords: "sample mkv, mkv video download, mkv file example, free mkv",
        bodyText: `<p><strong>MKV (Matroska Video)</strong> file is a flexible <strong>multimedia container format</strong> capable of holding multiple <strong>video, audio, and subtitle tracks</strong> in a single file. Introduced in 2002, the <strong>Matroska format</strong> was designed as an open standard alternative to other containers, offering support for high-definition video and advanced multimedia features. <strong>MKV files</strong> are widely used for storing movies, TV shows, and complex video projects due to their versatility and support for a variety of codecs.</p>

<em>MKV files</em> are compatible with most media players, though some may require additional codecs. You can <strong>download MKV files free from our website</strong>, allowing users to explore, test, or use them in personal and professional video projects. <strong>MKV remains a trusted format</strong> for robust, high-quality <strong>video containers</strong>.</p>`,
      };
    case "avi":
      return {
        title: "Sample avi Video Download - Free Sample Files",
        description:
          "Download a sample AVI video file for testing playback compatibility. Free AVI sample.",
        keywords:
          "sample avi, avi video download, avi file example, free avi video",
        bodyText: `<p><strong>AVI file</strong> is a multimedia container format. Introduced in 1992 by Microsoft, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. AVI files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download AVI files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>AVI remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "flv":
      return {
        title: "Sample flv Video Download - Free Sample Files",
        description:
          "Free sample FLV video file for testing Flash Video compatibility. Download instantly.",
        keywords: "sample flv, flv video download, flv file example, free flv",
        bodyText: `<p><strong>FLV file</strong> is a video format for web streaming. Introduced in 2002 by Macromedia, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. FLV files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download FLV files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>FLV remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "mov":
      return {
        title: "Sample mov Video Download - Free Sample Files",
        description:
          "Download a sample MOV video file for playback testing. Free MOV example file.",
        keywords: "sample mov, mov video download, mov file example, free mov",
        bodyText: `<p><strong>MOV file</strong> is a QuickTime multimedia format. Introduced in 1991 by Apple, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. MOV files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download MOV files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>MOV remains a widely trusted format</strong> in its category.</p>`,
      };
    case "webm":
      return {
        title: "Sample webm Video Download - Free Sample Files",
        description:
          "Get a free sample WEBM video file for testing HTML5 playback and browsers.",
        keywords:
          "sample webm, webm video download, webm file example, free webm",
        bodyText: `<p><strong>WEBM file</strong> is a video format for HTML5 streaming. Introduced in 2010 by Google, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. WEBM files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download WEBM files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>WEBM remains a widely trusted format</strong> in its category.</p>
`,
      };

    // ----------------- Audio -----------------
    case "mp3":
      return {
        title: "Sample mp3 file Download - Free Sample Files",
        description:
          "Download a sample MP3 audio file for playback and audio testing. Free MP3 sample provided.",
        keywords:
          "sample mp3, mp3 audio download, mp3 file example, free mp3 song",
        bodyText: `<p><strong>MP3 file</strong> is a digital audio format. Introduced in 1993 by Fraunhofer Society, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. MP3 files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download MP3 files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>MP3 remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "aac":
      return {
        title: "Sample aac file Download - Free Sample Files",
        description:
          "Free sample AAC audio file for testing playback on different devices.",
        keywords: "sample aac, aac audio download, aac file example, free aac",
        bodyText: `<p><strong>AAC file</strong> is a modern audio format. Introduced in 1997 MPEG-2/4, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. AAC files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download AAC files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>AAC remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "wav":
      return {
        title: "Sample wav file Download - Free Sample Files",
        description:
          "Download a sample WAV audio file for testing uncompressed audio. Free WAV file available.",
        keywords:
          "sample wav, wav audio download, wav file example, free wav music",
        bodyText: `<p><strong>WAV file</strong> is a uncompressed audio format. Introduced in 1991 by Microsoft and IBM, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. WAV files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download WAV files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>WAV remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "ogg":
      return {
        title: "Sample ogg Audio Download - Free Sample Files",
        description:
          "Free sample OGG audio file for testing compatibility with media players.",
        keywords: "sample ogg, ogg audio download, ogg file example, free ogg",
        bodyText: `<p><strong>OGG file</strong> is a open-source audio format. Introduced in 1998 by Xiph.Org Foundation, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. OGG files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download OGG files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>OGG remains a widely trusted format</strong> in its category.</p>
`,
      };

    // ----------------- Documents -----------------
    case "pdf":
      return {
        title: "Sample pdf file Download - Free Sample Files",
        description:
          "Download a sample PDF document for testing. Free sample PDF file provided instantly.",
        keywords:
          "sample pdf, pdf download, pdf file example, free pdf document",
        bodyText: `
        <p>
          The <strong>PDF (Portable Document Format)</strong> is the world's most trusted file format for documents, 
          designed to preserve formatting across all devices and operating systems. Whether you use 
          <strong> Windows, Mac, iOS, Android, or Linux</strong>, a PDF file displays exactly as intended—unlike 
          Word or PowerPoint files, which often shift layouts between apps.
        </p>
        
        <p>
          Developed by <strong>Adobe</strong> and now an open <strong>ISO standard</strong>, PDFs support interactive 
          elements like hyperlinks, fillable forms, digital signatures, and even embedded videos. 
          Professionals rely on PDFs for resumes, contracts, eBooks, and invoices because they 
          guarantee print-ready quality and secure sharing (with password protection and encryption).  Students, businesses, and government agencies use free PDF readers like 
          <strong> Adobe Acrobat</strong> to view these files without compatibility issues.
        </p>
        
        <p>
          Unlike <strong>JPEGs</strong> or <strong>DOCs</strong>, a PDF document maintains text clarity at any zoom level 
          and embeds fonts so designs appear identical on every device.
          <strong> Download free PDF samples</strong> to test its versatility for your projects.
        </p>
  `,
      };
    case "odt":
      return {
        title: "Sample odt file Download - Free Sample Files",
        description:
          "Free sample ODT (OpenDocument Text) file for testing word processors.",
        keywords: "sample odt, odt file download, odt file example, free odt",
        bodyText: `<p><strong>ODT file</strong> is a OpenDocument Text format. Introduced in 2005 by OASIS, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. ODT files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download ODT files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>ODT remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "rtf":
      return {
        title: "Sample rtf fileDownload - Free Sample Files",
        description:
          "Download a free sample RTF document for testing text editors.",
        keywords: "sample rtf, rtf download, rtf file example, free rtf",
        bodyText: `<p><strong>RTF file</strong> is a Rich Text Format document. Introduced in 1987 by Microsoft, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. RTF files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download RTF files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>RTF remains a widely trusted format</strong> in its category.</p>

`,
      };
    case "ppt":
      return {
        title: "Sample ppt file Download - Free Sample Files",
        description:
          "Free sample PPT presentation file for testing slides and office software.",
        keywords: "sample ppt, ppt download, ppt file example, free ppt",
        bodyText: `<p><strong>PPT file</strong> is a PowerPoint presentation format. Introduced in 2007 Office Open XML, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. PPT files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download PPT files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>PPTX remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "pptx":
      return {
        title: "Sample pptx file Download - Free Sample Files",
        description:
          "Free sample PPTX presentation file for testing slides and office software.",
        keywords: "sample pptx, pptx download, pptx file example, free ppt",
        bodyText: `<p><strong>PPTX file</strong> is a PowerPoint presentation format. Introduced in 2007 Office Open XML, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. PPTX files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download PPTX files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>PPTX remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "doc":
      return {
        title: "Sample doc fileDownload - Free Sample Files",
        description:
          "Download a sample DOC Word file for testing. Free DOC file available.",
        keywords: "sample docx, docx download, docx file example, free docx",
        bodyText: `
  <p>
    <strong>DOC</strong> is a classic Microsoft Word document format widely used before the 2007 Office Open XML update.
    It’s great for creating and editing text-based files like letters, resumes, and reports, with support for
    formatted text, tables, and images.
  </p>

  <p>
    You can download free DOC files from our website
    for testing, learning, and sample projects. While largely replaced by DOCX, DOC remains a widely recognized format.
  </p>`,
      };

    case "docx":
      return {
        title: "Sample docx file Download - Free Sample Files",
        description:
          "Download a sample DOCX Word file for testing. Free DOCX file available.",
        keywords: "sample docx, docx download, docx file example, free docx",
        bodyText: `<p><strong>DOCX file</strong> is a Word document format. Introduced in 2007 Office Open XML, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. DOCX files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download DOCX files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>DOCX remains a widely trusted format</strong> in its category.</p>
`,
      };

    case "xls":
      return {
        title: "Sample xls file Download - Free Sample Files",
        description:
          "Download a sample XLS Excel file for testing. Free XLS file available.",
        keywords: "sample xls, xls download, xls file example, free xls",
        bodyText: `
  <p>
    <strong>XLS</strong> is the legacy Microsoft Excel spreadsheet format based on BIFF (Binary Interchange File Format).
    It organizes data in rows and columns and supports formulas, basic charts, and simple data analysis.
  </p>

  <p>
    You can download free XLS files from our website
    for testing, analysis, and learning purposes. Though replaced by XLSX, XLS remains reliable for many workflows.
  </p>`,
      };

    case "xlsx":
      return {
        title: "Sample xlsx file Download - Free Sample Files",
        description:
          "Download a sample XLSX Excel file for testing. Free XLSX file available.",
        keywords: "sample xlsx, xlsx download, xlsx file example, free xlsx",
        bodyText: `
  <p>
    <strong>XLSX</strong> is the modern Excel spreadsheet format introduced with Office Open XML in 2007. It offers
    better compression, broad compatibility, and support for advanced spreadsheet features.
  </p>

  <p>
    You can download free XLSX files from our website,
    perfect for testing, learning, and professional use. XLSX is today’s most widely used spreadsheet format.
  </p>`,
      };

    case "txt":
      return {
        title: "Sample text file Download - Free Sample Files",
        description:
          "Free sample TXT text file for testing plain text support. Download instantly.",
        keywords: "sample txt, txt download, txt file example, free txt",
        bodyText: `<p><strong>TXT file</strong> is a plain text document. Introduced in Early personal computers, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. TXT files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download TXT files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>TXT remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "zip":
      return {
        title: "Sample zip file Download - Free Sample Files",
        description:
          "Download a free sample ZIP archive file for testing compressed files.",
        keywords:
          "sample zip, zip file download, zip example, free zip archive",
        bodyText: `<p><strong>ZIP file</strong> is a compressed archive format. Introduced in 1989 by Phil Katz, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. ZIP files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download ZIP files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>ZIP remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "7z":
      return {
        title: "Sample 7z file Download - Free Sample Files",
        description:
          "Download a free sample 7z archive file for testing compressed files.",
        keywords: "sample 7z, 7z file download, 7z example, free 7z archive",
        bodyText: ``,
      };
    case "tar":
      return {
        title: "Sample TAR file Download - Free Sample Files",
        description:
          "Download a free sample TAR archive file for testing compressed files.",
        keywords:
          "sample tar, tar file download, tar example, free tar archive",
        bodyText: ``,
      };
    case "rar":
      return {
        title: "Sample RAR file Download - Free Sample Files",
        description:
          "Download a free sample RAR archive file for testing compressed files.",
        keywords:
          "sample rar, rar file download, rar example, free rar archive",
        bodyText: ``,
      };
    case "json":
      return {
        title: "Sample JSON file Download - Free Sample Files",
        description:
          "Download a free sample JSON file for testing data interchange.",
        keywords:
          "sample json, json file download, json example, free json file",
        bodyText: ``,
      };
    case "xml":
      return {
        title: "Sample XML file Download - Free Sample Files",
        description:
          "Download a free sample XML file for testing data interchange.",
        keywords: "sample xml, xml file download, xml example, free xml file",
        bodyText: ``,
      };
    case "csv":
      return {
        title: "Sample CSV file Download - Free Sample Files",
        description:
          "Download a free sample CSV file for testing data interchange.",
        keywords: "sample csv, csv file download, csv example, free csv file",
        bodyText: ``,
      };

    case "converter":
      return {
        title: "PNG to JPG Converter – Free Online Image Conversion Tool",
        description:
          "Convert PNG to JPG online for free. Fast, easy, and secure image converter that works on all devices and keeps image quality. No signup required!",
        keywords:
          "Convert PNG to JPG, PNG to JPG converter, Free PNG to JPG online, Online image converter, PNG image to JPG",
        bodyText: ``,
      };

    // ----------------- Default -----------------
    default:
      return {
        title: "Free Sample Files - Images, Videos & Documents Instantly",
        description:
          "Browse and download free sample files including images, videos, audio, and documents. Perfect for testing and development.",
        keywords:
          "sample files, free files download, test files, sample pdf, sample mp4, sample mp3, sample jpg",
        bodyText:
          "The PDF (Portable Document Format) is the world most trusted file format for documents, designed to preserve formatting across all devices and operating systems. Whether you use Windows, Mac, iOS, Android, or Linux, a PDF file displays exactly as intended—unlike Word or PowerPoint files, which often shift layouts between apps. Developed by Adobe and now an open ISO standard, PDFs support interactive elements like hyperlinks, fillable forms, digital signatures, and even embedded videos. Professionals rely on PDFs for resumes, contracts, eBooks, and invoices because they guarantee print-ready quality and secure sharing (with password protection and encryption). Students, businesses, and government agencies use free PDF readers like Adobe Acrobat to view these files without compatibility issues. Key advantages include: cross-platform consistency, smaller file sizes (with compression), and long-term archiving. Unlike JPEGs or DOCs, a PDF document maintains text clarity at any zoom level and embeds fonts so designs appear identical on every device. From editable PDF forms to searchable scanned files, this format remains essential for digital workflows. Download free PDF samples to test its versatility for your projects.",
      };
  }
};
