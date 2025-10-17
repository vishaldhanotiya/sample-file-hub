import {
  ImageIcon,
  Video,
  Music,
  FileText,
  Archive,
  MoreHorizontal,
} from "lucide-react";

export const isCloudinaryFiles = false;
export const updatedDatabaseKey = isCloudinaryFiles ? "files" : "r2Files";

export const imageTabData = [
  {
    key: "jpg",
    title: "JPG",
    resourceType: "images",
    path: "/sample-images/jpg",
  },
  {
    key: "png",
    title: "PNG",
    resourceType: "images",
    path: "/sample-images/png",
  },
  {
    key: "webp",
    title: "WEBP",
    resourceType: "images",
    path: "/sample-images/webp",
  },
  {
    key: "svg",
    title: "SVG",
    resourceType: "images",
    path: "/sample-images/svg",
  },
  {
    key: "gif",
    title: "GIF",
    resourceType: "images",
    path: "/sample-images/gif",
  },
  {
    key: "bmp",
    title: "BMP",
    resourceType: "images",
    path: "/sample-images/bmp",
  },
  {
    key: "psd",
    title: "PSD",
    resourceType: "images",
    path: "/sample-images/psd",
  },
  {
    key: "tiff",
    title: "TIFF",
    resourceType: "images",
    path: "/sample-images/tiff",
  },
  {
    key: "heic",
    title: "HEIC",
    resourceType: "images",
    path: "/sample-images/heic",
  },
  {
    key: "ico",
    title: "ICO",
    resourceType: "images",
    path: "/sample-images/ico",
  },
  {
    key: "avif",
    title: "AVIF",
    resourceType: "images",
    path: "/sample-images/avif",
  },
  {
    key: "dng",
    title: "DNG",
    resourceType: "images",
    path: "/sample-images/dng",
  },
  {
    key: "tga",
    title: "TGA",
    resourceType: "images",
    path: "/sample-images/tga",
  },
];

export const videoTabData = [
  {
    key: "3gp",
    title: "3GP",
    resourceType: "videos",
    path: "/sample-videos/3gp",
  },
  {
    key: "mp4",
    title: "MP4",
    resourceType: "videos",
    path: "/sample-videos/mp4",
  },
  {
    key: "mkv",
    title: "MKV",
    resourceType: "videos",
    path: "/sample-videos/mkv",
  },
  {
    key: "avi",
    title: "AVI",
    resourceType: "videos",
    path: "/sample-videos/avi",
  },
  {
    key: "flv",
    title: "FLV",
    resourceType: "videos",
    path: "/sample-videos/flv",
  },
  {
    key: "mov",
    title: "MOV",
    resourceType: "videos",
    path: "/sample-videos/mov",
  },
  {
    key: "webm",
    title: "WEBM",
    resourceType: "videos",
    path: "/sample-videos/webm",
  },
];

export const documentTabData = [
  {
    key: "pdf",
    title: "PDF",
    resourceType: "documents",
    path: "/sample-documents/pdf",
  },
  {
    key: "doc",
    title: "DOC",
    resourceType: "documents",
    path: "/sample-documents/doc",
  },
  {
    key: "docx",
    title: "DOCX",
    resourceType: "documents",
    path: "/sample-documents/docx",
  },
  {
    key: "xls",
    title: "XLS",
    resourceType: "documents",
    path: "/sample-documents/xls",
  },
  {
    key: "xlsx",
    title: "XLSX",
    resourceType: "documents",
    path: "/sample-documents/xlsx",
  },
  {
    key: "odt",
    title: "ODT",
    resourceType: "documents",
    path: "/sample-documents/odt",
  },
  {
    key: "rtf",
    title: "RTF",
    resourceType: "documents",
    path: "/sample-documents/rtf",
  },
  {
    key: "ppt",
    title: "PPT",
    resourceType: "documents",
    path: "/sample-documents/ppt",
  },
  {
    key: "pptx",
    title: "PPTX",
    resourceType: "documents",
    path: "/sample-documents/pptx",
  },
  {
    key: "txt",
    title: "TXT",
    resourceType: "documents",
    path: "/sample-documents/txt",
  },
  {
    key: "csv",
    title: "CSV",
    resourceType: "documents",
    path: "/sample-documents/csv",
  },
];

export const audioTabData = [
  {
    key: "mp3",
    title: "MP3",
    resourceType: "audios",
    path: "/sample-audios/mp3",
  },
  {
    key: "aac",
    title: "AAC",
    resourceType: "audios",
    path: "/sample-audios/aac",
  },
  {
    key: "wav",
    title: "WAV",
    resourceType: "audios",
    path: "/sample-audios/wav",
  },
  {
    key: "ogg",
    title: "OGG",
    resourceType: "audios",
    path: "/sample-audios/ogg",
  },
  {
    key: "aiff",
    title: "AIFF",
    resourceType: "audios",
    path: "/sample-audios/aiff",
  },
  {
    key: "flac",
    title: "FLAC",
    resourceType: "audios",
    path: "/sample-audios/flac",
  },
];

export const archiveTabData = [
  {
    key: "zip",
    title: "ZIP",
    resourceType: "archives",
    path: "/sample-archives/zip",
  },
  {
    key: "rar",
    title: "RAR",
    resourceType: "archives",
    path: "/sample-archives/rar",
  },
  {
    key: "7z",
    title: "7Z",
    resourceType: "archives",
    path: "/sample-archives/7z",
  },
  {
    key: "tar",
    title: "TAR",
    resourceType: "archives",
    path: "/sample-archives/tar",
  },
];

export const codeTabData = [
  { key: "xml", title: "XML", resourceType: "code", path: "/sample-code/xml" },
  {
    key: "json",
    title: "JSON",
    resourceType: "code",
    path: "/sample-code/json",
  },
  { key: "php", title: "PHP", resourceType: "code", path: "/sample-code/php" },
  {
    key: "js",
    title: "JAVASCRIPT",
    resourceType: "code",
    path: "/sample-code/js",
  },
  {
    key: "java",
    title: "JAVA",
    resourceType: "code",
    path: "/sample-code/java",
  },
  { key: "bat", title: "BAT", resourceType: "code", path: "/sample-code/bat" },
  { key: "rb", title: "RUBY", resourceType: "code", path: "/sample-code/rb" },
  { key: "c", title: "C", resourceType: "code", path: "/sample-code/c" },
  { key: "cpp", title: "C++", resourceType: "code", path: "/sample-code/cpp" },
  {
    key: "html",
    title: "HTML",
    resourceType: "code",
    path: "/sample-code/html",
  },
  {
    key: "yaml",
    title: "YAML",
    resourceType: "code",
    path: "/sample-code/yaml",
  },
  { key: "py", title: "PYTHON", resourceType: "code", path: "/sample-code/py" },
];

export const allFileType = [
  ...imageTabData,
  ...videoTabData,
  ...audioTabData,
  ...documentTabData,
  ...archiveTabData,
  ...codeTabData,
];

// Use to navigate on the particular path as per the file type
export const fileTypeToBasePath = {
  // Images
  jpg: "/sample-images/sample-jpg",
  png: "/sample-images/sample-png",
  webp: "/sample-images/sample-webp",
  svg: "/sample-images/sample-svg",
  gif: "/sample-images/sample-gif",
  bmp: "/sample-images/sample-bmp",
  psd: "/sample-images/sample-psd",
  tiff: "/sample-images/sample-tiff",
  ico: "/sample-images/sample-ico",
  heic: "/sample-images/sample-heic",
  avif: "/sample-images/sample-avif",
  dng: "/sample-images/sample-dng",
  tga: "/sample-images/sample-tga",

  // Video
  mp4: "/sample-videos/sample-mp4",
  avi: "/sample-videos/sample-avi",
  flv: "/sample-videos/sample-flv",
  mov: "/sample-videos/sample-mov",
  mkv: "/sample-videos/sample-mkv",
  webm: "/sample-videos/sample-webm",
  "3gp": "/sample-videos/sample-3gp",

  // Audio
  mp3: "/sample-audios/sample-mp3",
  wav: "/sample-audios/sample-wav",
  aac: "/sample-audios/sample-aac",
  ogg: "/sample-audios/sample-ogg",
  aiff: "/sample-audios/sample-aiff",
  flac: "/sample-audios/sample-flac",

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
  csv: "/sample-documents/sample-csv",

  // Archives
  zip: "/sample-archives/sample-zip",
  rar: "/sample-archives/sample-rar",
  "7z": "/sample-archives/sample-7z",
  tar: "/sample-archives/sample-tar",

  //code
  xml: "/sample-code/sample-xml",
  json: "/sample-code/sample-json",
  java: "/sample-code/sample-java",
  php: "/sample-code/sample-php",
  js: "/sample-code/sample-javascript",
  bat: "/sample-code/sample-bat",
  rb: "/sample-code/sample-ruby",
  c: "/sample-code/sample-c",
  cpp: "/sample-code/sample-cpp",
  py: "/sample-code/sample-python",
  html: "/sample-code/sample-html",
  yaml: "/sample-code/sample-yaml",
};

export const categories = [
  {
    key: "images",
    icon: ImageIcon,
    title: "Images",
    description:
      "Download high-quality sample images in 13+ formats, including JPG, PNG, WEBP, SVG, GIF, BMP, PSD, TIFF, HEIC, ICO, AVIF, DNG, and TGA. Instantly access diverse resolutions and sizes for testing UI layouts, validating uploads, or experimenting with compression. No registration required — perfect for developers, designers, and QA testers",
    downloads: "",
    color: "text-white",
    bgDownload: "bg-primary-subtle",
    textDownload: "text-primary-emphasis",
  },
  {
    key: "videos",
    icon: Video,
    title: "Videos",
    description:
      "Get free sample videos in 6+ popular formats like MP4, AVI, MKV, MOV, WebM, FLV, and 3GP. Available in multiple resolutions and frame rates, these files are ideal for testing playback, streaming performance, compression, or editing workflows. Instantly download and use in your projects.",
    downloads: "-",
    color: "text-white",
    bgDownload: "bg-info-subtle",
    textDownload: "text-info-emphasis",
  },
  {
    key: "audios",
    icon: Music,
    title: "Audio",
    description:
      "Access 50+ sample audio files, including MP3, WAV, AAC, OGG, AIFF, FLAC, and M4A. Explore royalty-free music, sound effects, and clips to test playback, compression, or audio editing. Perfect for developers, sound engineers, and content creators.",
    downloads: "-",
    color: "text-white",
    bgDownload: "bg-success-subtle",
    textDownload: "text-success-emphasis",
  },
  {
    key: "documents",
    icon: FileText,
    title: "Documents",
    description:
      "Download sample files in PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, TXT, ODT, RTF, and CSV formats. Test file uploads, formatting, parsing, and compatibility with various applications. Ideal for students, professionals, and developers working with reports, contracts, presentations, and more.",
    downloads: "-",
    color: "text-white",
    bgDownload: "bg-danger-subtle",
    textDownload: "text-danger-emphasis",
  },
  {
    key: "archives",
    icon: Archive,
    title: "Archives",
    description:
      "Access free test archives in ZIP, RAR, 7Z, and TAR formats. Explore different compression levels, file structures, and security settings to validate extraction algorithms, uploads, or system compatibility. Perfect for developers, QA engineers, and IT professionals",
    downloads: "-",
    color: "text-white",
    bgDownload: "bg-warning-subtle",
    textDownload: "text-warning-emphasis",
  },
  {
    key: "code",
    icon: MoreHorizontal,
    title: "Code",
    description:
      "Get sample files in HTML, PHP, JSON, JavaScript, Python, Java, XML, YAML, and C++. Test code editors, syntax highlighting, API responses, and security tools using professionally created test cases. Suitable for developers, students, and QA engineers.",
    downloads: "-",
    color: "text-white",
    bgDownload: "bg-primary-subtle",
    textDownload: "text-primary-emphasis",
  },
];

export const faqs = [
  {
    question: "Are all files really free?",
    answer:
      "Yes! All sample files on SampleFiles.dev are completely free to download and use. No hidden fees, no registration required.",
  },
  {
    question: "Can I request specific file formats?",
    answer:
      'Use the "Request File" button to submit requests for specific file types or formats you need for your projects.',
  },
  {
    question: "Do I need to create an account or sign up?",
    answer:
      "No account or signup is required. Simply browse the categories and download the files you need instantly.",
  },
  {
    question: "Is there a limit on how many files I can download?",
    answer: "No limits! Download as many files as you need, whenever you want.",
  },
  {
    question: "How often are new files added?",
    answer:
      "We regularly update our library with new images, videos, audios, and documents to keep our collection fresh and useful.",
  },
];

export const getMetaData = (fileType) => {
  switch (fileType) {
    // ----------------- Images -----------------
case "home":
      return {
        title: "Download Free Sample Files – Images, Videos, PDFs & More",
        screenTitle: "",
        description:
          "Get free sample images, videos, PDFs, and documents instantly. Perfect for testing, demos, and learning.",
        keywords:
          "sample jpg, file",
        bodyText: ``,
      };
    

    case "jpg":
      return {
        title: "Sample JPG image download - Free Sample Files",
        screenTitle: "Sample jpg download",
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
        title: "Sample png image download - Free Sample Files",
        screenTitle: "Sample png download",
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
        title: "Sample WEBP image download - Free Sample Files",
        screenTitle: "Sample webp download",
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
        title: "Sample SVG image download - Free Sample Files",
        screenTitle: "Sample SVG download",
        description:
          "Download a sample SVG vector image file for testing in web and design projects. Scalable vector graphic format.",
        keywords: "sample svg, svg download, vector svg file, free svg example",
        bodyText: `<p><strong>SVG (Scalable Vector Graphics)</strong> file is a <strong>vector image format</strong> that retains perfect quality at any scale. The format was introduced in 1999 by the <strong>W3C</strong> to provide a resolution-independent alternative to raster formats like JPEG or PNG. <strong>SVG files</strong> are commonly used for <strong>web graphics, logos, icons, and illustrations</strong> due to their crisp visuals and small file size. One of the greatest advantages of <strong>SVG</strong> is its support for <strong>transparency, animation, and interactivity</strong>, which makes it ideal for modern <strong>web design and responsive layouts</strong>.</p>

They are perfect for <strong>UI/UX designers, web developers, and digital marketers</strong>. You can <strong>download SVG files free from our website</strong>, making them accessible for testing, design projects, and educational purposes. <strong>SVG remains a preferred choice</strong> for creating sharp, interactive, and visually appealing <strong>web content</strong>.</p>
`,
      };
    case "gif":
      return {
        title: "Sample GIF image - Download .gif Sample Files",
        screenTitle: "Sample GIF download",
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
        title: "Sample BMP image Download - Free Sample Files",
        screenTitle: "Sample BMP download",
        description:
          "Download a sample BMP image file for testing legacy formats and applications. Free BMP sample.",
        keywords:
          "sample bmp, bmp file download, bitmap image example, bmp test file",
        bodyText: `<p><strong>BMP (Bitmap Image)</strong> file is a raster <strong>image format</strong> used to store digital images pixel by pixel, ensuring high-quality visuals without compression. Developed by <strong>Microsoft in 1986</strong> for the Windows operating system, <strong>BMP files</strong> became popular for storing simple graphics, icons, and images where image fidelity was critical. The format preserves every pixel of the image, making it ideal for <strong>desktop publishing, graphic design, and image editing</strong>. Unlike compressed formats such as JPEG or PNG, <strong>BMP files</strong> retain full color information, resulting in larger file sizes but uncompromised visual quality.</p>

They are particularly useful for <strong>archiving original graphics</strong> and preparing images where accuracy is crucial. You can <strong>download BMP files free from our website</strong>, allowing designers, students, and hobbyists to access high-quality bitmap images for testing, learning, or creative projects. <strong>BMP remains a classic format</strong> for anyone needing accurate, uncompressed <strong>digital images</strong>.</p>
`,
      };
    case "psd":
      return {
        title: "Sample PSD file Download - Free Photoshop Sample Files",
        screenTitle: "Sample PSD download",
        description:
          "Download a sample PSD file for Adobe Photoshop testing, design projects, and image editing. Free PSD sample.",
        keywords:
          "sample psd, psd file download, photoshop file example, layered psd sample, psd test file",
        bodyText: `<p><strong>PSD (Photoshop Document)</strong> is the native <strong>file format</strong> of <strong>Adobe Photoshop</strong>, designed for <strong>graphic design, digital art, and advanced image editing</strong>. A PSD file can store multiple layers, effects, text, and image adjustments, allowing professionals to create and refine projects with flexibility.</p>

<p>With support for <strong>high-resolution graphics, transparency, and non-destructive editing</strong>, PSD files are essential for <strong>web designers, UI/UX developers, photographers, and artists</strong>. The format also supports integration with other Adobe Creative Cloud tools, making it an industry standard for creative workflows.</p>

<p>Download <strong>free PSD sample files</strong> from our site to test Photoshop features, try new templates, or experiment with design concepts. Perfect for anyone learning or working in <strong>graphic design and digital illustration</strong>.</p>`,
      };
    case "heic":
      return {
        title: "Sample HEIC image download - Free HEIC Sample Files",
        screenTitle: "Sample heic download",
        description:
          "Download a sample HEIC image file for testing modern formats and iOS compatibility. Free HEIC sample.",
        keywords:
          "sample heic, heic file download, high efficiency image format, apple heic sample file",
        bodyText: `<p><strong>HEIC (High Efficiency Image Coding)</strong> is a modern <strong>image format</strong> designed to store high-quality images in smaller file sizes. Introduced by <strong>Apple in iOS 11</strong> and based on the HEIF standard, <strong>HEIC files</strong> offer advanced compression techniques, allowing images to maintain exceptional detail while using significantly less storage space compared to JPEG or PNG.</p>

<p>HEIC files are widely used on <strong>iPhones, iPads, and macOS</strong> devices, making them ideal for <strong>mobile photography, digital albums, and high-resolution image sharing</strong>. With support for features like <strong>16-bit color depth, transparency, and live photos</strong>, HEIC is a powerful choice for modern image workflows.</p>

<p>Download <strong>free HEIC sample files</strong> from our website to test compatibility, software performance, and file conversions. This format is perfect for developers, designers, and photographers working with <strong>next-generation image standards</strong>.</p>`,
      };
    case "tiff":
      return {
        title: "Sample TIFF image download - Free TIFF Sample Files",
        screenTitle: "Sample tiff download",
        description:
          "Download a sample TIFF image file for high-quality print and archival purposes. Free TIFF sample.",
        keywords:
          "sample tiff, tiff file download, tiff image example, high-quality image format, tiff test file",
        bodyText: `<p><strong>TIFF (Tagged Image File Format)</strong> is a professional-grade <strong>image format</strong> widely used for <strong>high-resolution printing, scanning, and archiving</strong>. Developed in the mid-1980s by Aldus (later Adobe), <strong>TIFF files</strong> are highly versatile, supporting both <strong>lossless compression</strong> and uncompressed storage, ensuring superior image fidelity.</p>

<p>TIFF is a standard format for <strong>graphic designers, photographers, and publishers</strong> because it retains exact image details, making it ideal for <strong>image editing, document scanning, and pre-press workflows</strong>.</p>

<p>You can <strong>download free TIFF sample files</strong> from our site for software testing, quality checks, and professional use. This format is essential for those working with <strong>high-quality digital imaging</strong>.</p>`,
      };
    case "ico":
      return {
        title: "Sample ICO icon download - Free Icon Sample Files",
        screenTitle: "Sample ICO download",
        description:
          "Download a sample ICO file for app and web icon testing. Free ICO sample.",
        keywords:
          "sample ico, ico file download, icon file example, windows icon sample, favicon test file",
        bodyText: `<p><strong>ICO (Icon File)</strong> is a lightweight <strong>image format</strong> used to store <strong>icons for software, applications, and websites</strong>. Originally introduced for <strong>Microsoft Windows</strong>, ICO files can contain multiple image sizes and color depths within a single file, making them perfect for scalable icons.</p>

<p>This format is widely used for <strong>favicons, desktop shortcuts, and app branding</strong>, ensuring a professional and consistent appearance across devices. ICO files are small yet versatile, supporting resolutions from 16x16 to 256x256 pixels or more.</p>

<p>Download <strong>free ICO sample files</strong> from our website to test web design, software development, or icon rendering in different environments. Ideal for <strong>developers, designers, and branding professionals</strong>.</p>`,
      };
    case "avif":
      return {
        title: "Sample AVIF image file download - Free Image Sample Files",
        screenTitle: "Sample AVIF download",
        description:
          "Download a sample AVIF file for testing next-gen image compression. Free AVIF sample.",
        keywords:
          "sample avif, avif file download, avif image example, modern image format, high efficiency image",
        bodyText: `<p><strong>AVIF (AV1 Image File Format)</strong> is a modern, <strong>high-performance image format</strong> offering superior compression. Based on the open-source AV1 video codec, it delivers <strong>significantly smaller file sizes</strong> at equivalent or better quality compared to JPEG and PNG.</p>

<p>This format is ideal for <strong>web images, photography, and graphic design</strong> where fast loading and bandwidth savings are critical. AVIF supports advanced features like HDR, wide color gamut, and transparency, making it a future-proof choice for the web.</p><p>Download <strong>free AVIF sample files</strong> from our website to test compatibility, evaluate quality, and integrate into your development or design workflow. Essential for <strong>web developers, photographers, and content creators</strong>.</p>`,
      };
    case "dng":
      return {
        title: "Sample DNG file download - Free Raw Photo Sample Files",
        screenTitle: "Sample DNG download",
        description:
          "Download a sample DNG file for testing raw photo editing. Free DNG sample.",
        keywords:
          "sample dng, dng file download, digital negative example, raw photo sample, camera raw file",
        bodyText: `<p><strong>DNG (Digital Negative)</strong> is an open, non-proprietary <strong>raw image format</strong> developed by Adobe. It serves as a universal standard for <strong>digital camera raw files</strong>, preserving all the original data captured by the sensor without quality loss.</p>

<p>This format is essential for <strong>professional photography and post-processing</strong>, providing greater flexibility in adjusting exposure, white balance, and detail. Using DNG ensures that your raw images remain accessible and editable in the future, avoiding format obsolescence.</p><p>Download <strong>free DNG sample files</strong> from our website to test raw processing software, practice photo editing techniques, or verify software compatibility. A vital resource for <strong>photographers, photo editors, and software testers</strong>.</p>`,
      };
    case "tga":
      return {
        title: "Sample TGA file download - Free Raster Graphic Sample Files",
        screenTitle: "Sample TGA download",
        description:
          "Download a sample TGA file for testing images with transparency. Free TGA sample.",
        keywords:
          "sample tga, tga file download, targa image example, truevision tga, image with alpha channel",
        bodyText: `<p><strong>TGA (Truevision TGA)</strong>, also known as Targa, is a <strong>raster graphics file format</strong> known for its early support for high-color and <strong>alpha channel transparency</strong>. It was historically a premier format for professional video and animation work.</p>

<p>This format is commonly used in <strong>game development, video editing, and 3D rendering</strong> for storing high-quality textures and sprites with transparency. While less common on the web today, TGA remains a reliable format for many digital content creation pipelines.</p><p>Download <strong>free TGA sample files</strong> from our website to test texture loading in game engines, check alpha channel support in software, or for use in legacy applications. Ideal for <strong>game developers, 3D artists, and graphic designers</strong>.</p>`,
      };

    // ----------------- Videos -----------------
    case "3gp":
      return {
        title: "Sample 3GP video download - Free Mobile Video Sample Files",
        screenTitle: "Sample 3gp video download",
        description:
          "Download a sample 3GP file for testing mobile video playback. Free 3GP sample.",
        keywords:
          "sample 3gp, 3gp file download, 3gpp video example, mobile video format, multimedia container",
        bodyText: `<p><strong>3GP (3GPP file format)</strong> is a <strong>multimedia container format</strong> designed to reduce storage and bandwidth requirements, making it ideal for <strong>mobile phones and 3G networks</strong>. It is a simplified version of the MP4 format.</p>

<p>This format was historically the standard for <strong>recording and sharing video on feature phones</strong> and is still used for MMS messaging. While largely superseded by MP4 on modern smartphones, 3GP remains relevant for testing legacy mobile device compatibility.</p><p>Download <strong>free 3GP sample files</strong> from our website to test video playback on older mobile devices, verify compatibility with media players, or for use in application testing. A useful resource for <strong>mobile developers, QA testers, and multimedia archivists</strong>.</p>`,
      };
    case "mp4":
      return {
        title: "Sample mp4 Video Download - Free Sample Files",
        screenTitle: "Sample mp4 video download",
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
        screenTitle: "Sample mkv video download",
        description:
          "Free sample MKV video file available for testing video players and formats.",
        keywords: "sample mkv, mkv video download, mkv file example, free mkv",
        bodyText: `<p><strong>MKV (Matroska Video)</strong> file is a flexible <strong>multimedia container format</strong> capable of holding multiple <strong>video, audio, and subtitle tracks</strong> in a single file. Introduced in 2002, the <strong>Matroska format</strong> was designed as an open standard alternative to other containers, offering support for high-definition video and advanced multimedia features. <strong>MKV files</strong> are widely used for storing movies, TV shows, and complex video projects due to their versatility and support for a variety of codecs.</p>

<em>MKV files</em> are compatible with most media players, though some may require additional codecs. You can <strong>download MKV files free from our website</strong>, allowing users to explore, test, or use them in personal and professional video projects. <strong>MKV remains a trusted format</strong> for robust, high-quality <strong>video containers</strong>.</p>`,
      };
    case "avi":
      return {
        title: "Sample AVI Video Download - Free Sample Files",
        screenTitle: "Sample avi video download",
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
        screenTitle: "Sample flv video download",
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
        screenTitle: "Sample mov video download",
        description:
          "Download a sample MOV video file for playback testing. Free MOV example file.",
        keywords: "sample mov, mov video download, mov file example, free mov",
        bodyText: `<p><strong>MOV file</strong> is a QuickTime multimedia format. Introduced in 1991 by Apple, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. MOV files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download MOV files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>MOV remains a widely trusted format</strong> in its category.</p>`,
      };
    case "webm":
      return {
        title: "Sample webm Video Download - Free Sample Files",
        screenTitle: "Sample webm video download",
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
        title: "Sample mp3 audio file Download - Free Sample Files",
        screenTitle: "Sample mp3 audio download",
        description:
          "Download a sample MP3 audio file for playback and audio testing. Free MP3 sample provided.",
        keywords:
          "sample mp3, mp3 audio download, mp3 file example, free mp3 song",
        bodyText: `<p><strong>MP3 file</strong> is a digital audio format. Introduced in 1993 by Fraunhofer Society, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. MP3 files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download MP3 files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>MP3 remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "flac":
      return {
        title:
          "Sample flac audio file download - Free Lossless Audio Sample Files",
        screenTitle: "Sample flac audio download",
        description:
          "Download a sample FLAC file for testing high-fidelity audio. Free FLAC sample.",
        keywords:
          "sample flac, flac file download, lossless audio example, free flac sample, high resolution audio",
        bodyText: `<p><strong>FLAC (Free Lossless Audio Codec)</strong> is a <strong>lossless audio compression format</strong> that reduces file size without sacrificing any audio quality. Unlike lossy formats like MP3, FLAC preserves the original sound data perfectly.</p>

<p>This format is the preferred choice for <strong>audiophiles, music archivists, and audio professionals</strong> who require pristine sound quality. FLAC files provide a perfect copy of the source material, making them ideal for critical listening and long-term preservation of music collections.</p><p>Download <strong>free FLAC sample files</strong> from our website to test media player compatibility, evaluate audio equipment, or experience true lossless sound. A must-have for <strong>audiophiles, sound engineers, and music enthusiasts</strong>.</p>`,
      };
    case "aiff":
      return {
        title:
          "Sample AIFF audio file download - Free Uncompressed Audio Sample Files",
        screenTitle: "Sample aiff download",
        description:
          "Download a sample AIFF file for testing CD-quality audio. Free AIFF sample.",
        keywords:
          "sample aiff, aiff file download, audio interchange file format, uncompressed audio example, mac audio sample",
        bodyText: `<p><strong>AIFF (Audio Interchange File Format)</strong> is an <strong>uncompressed, high-quality audio format</strong> developed by Apple. It stores CD-quality audio (44.1 kHz, 16-bit) without any data loss, similar to a WAV file but primarily used within the Apple ecosystem.</p>

<p>This format is widely used in <strong>professional audio production, music mastering, and on Mac systems</strong> where fidelity is paramount. AIFF files deliver pristine audio reproduction, making them a standard for recording and archiving original audio tracks.</p><p>Download <strong>free AIFF sample files</strong> from our website to test audio software on macOS, verify playback on professional systems, or for use in digital audio workstations. Essential for <strong>music producers, audio engineers, and Mac users</strong>.</p>`,
      };
    case "aac":
      return {
        title: "Sample aac audio file Download - Free Sample Files",
        screenTitle: "Sample aac audio download",
        description:
          "Free sample AAC audio file for testing playback on different devices.",
        keywords: "sample aac, aac audio download, aac file example, free aac",
        bodyText: `<p><strong>AAC file</strong> is a modern audio format. Introduced in 1997 MPEG-2/4, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. AAC files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download AAC files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>AAC remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "wav":
      return {
        title: "Sample wav audio file Download - Free Sample Files",
        screenTitle: "Sample wav audio download",
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
        title: "Sample ogg Audio file Download - Free Sample Files",
        screenTitle: "Sample ogg audio download",
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
        title: "Sample pdf file - Free pdf Files for Testing",
        screenTitle: "Sample pdf download",
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
        title: "Sample odt file - Free odt Files for Testing",
        screenTitle: "Sample odt file",
        description:
          "Free sample ODT (OpenDocument Text) file for testing word processors.",
        keywords: "sample odt, odt file download, odt file example, free odt",
        bodyText: `<p><strong>ODT file</strong> is a OpenDocument Text format. Introduced in 2005 by OASIS, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. ODT files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download ODT files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>ODT remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "rtf":
      return {
        title: "Sample rtf file Download - Free Sample Files",
        screenTitle: "Sample rtf download",

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
        screenTitle: "Sample ppt download",
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
        screenTitle: "Sample pptx download",
        description:
          "Free sample PPTX presentation file for testing slides and office software.",
        keywords: "sample pptx, pptx download, pptx file example, free ppt",
        bodyText: `<p><strong>PPTX file</strong> is a PowerPoint presentation format. Introduced in 2007 Office Open XML, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. PPTX files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download PPTX files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>PPTX remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "doc":
      return {
        title: "Sample doc file  - Free .doc Files for Testing",
        screenTitle: "Sample doc download",
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
        title: "Sample docx file - Free .docx Files for Testing",
        screenTitle: "Sample docx download",

        description:
          "Download a sample DOCX Word file for testing. Free DOCX file available.",
        keywords: "sample docx, docx download, docx file example, free docx",
        bodyText: `<p><strong>DOCX file</strong> is a Word document format. Introduced in 2007 Office Open XML, it has become a standard in its category for <strong>quality, compatibility, and efficiency</strong>. DOCX files are widely used across <strong>professional, educational, and personal projects</strong>.</p>

You can <strong>download DOCX files free from our website</strong>, making them accessible for <strong>testing, learning, and creative projects</strong>. <strong>DOCX remains a widely trusted format</strong> in its category.</p>
`,
      };
    case "xls":
      return {
        title: "Sample xls file - Free .xls Files for Testing",
        screenTitle: "Sample xls download",
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
        title: "Sample xlsx file - Free .xlsx Files for Testing",
        screenTitle: "Sample xlsx download",

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
        title: "Sample text file",
        screenTitle: "Sample text download",

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
        screenTitle: "Sample zip download",
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
        title: "Sample 7Z File Download - Free 7-Zip Sample Files",
        screenTitle: "Sample 7z download",

        description:
          "Download a sample 7Z compressed archive for testing extraction, compression tools, and file handling. Free 7Z sample.",
        keywords:
          "sample 7z, 7z file download, 7-zip archive example, compressed 7z sample file, test 7z format",
        bodyText: `<p><strong>7Z (7-Zip Archive)</strong> is a <strong>compressed file format</strong> developed by Igor Pavlov for the <strong>7-Zip utility</strong>. Known for its <strong>high compression ratio</strong> and support for large files, <strong>7Z files</strong> are widely used for packaging and transferring data efficiently.</p>

<p>7Z supports advanced compression methods, <strong>AES-256 encryption</strong>, and multi-volume archives, making it a reliable choice for <strong>secure data storage and distribution</strong>. Compared to ZIP or RAR, 7Z files often achieve smaller sizes without sacrificing data integrity.</p>

<p>You can <strong>download free 7Z sample files</strong> from our site to test extraction tools, verify software compatibility, or evaluate performance. Ideal for <strong>developers, QA testers, and IT professionals</strong>.</p>`,
      };
    case "tar":
      return {
        title: "Sample TAR File - Download TAR Archive Sample",
        screenTitle: "Sample TAR download",
        description:
          "Download a sample TAR archive file for Linux, Unix, and backup testing. Free TAR sample.",
        keywords:
          "sample tar, tar file download, unix tar archive, linux tarball example, tar test file",
        bodyText: `<p><strong>TAR (Tape Archive)</strong> is a standard <strong>archiving format</strong> commonly used in <strong>Linux and Unix</strong> systems. TAR files (also called <strong>tarballs</strong>) are designed to package multiple files into a single archive without applying compression.</p>

<p>Often combined with <strong>Gzip (tar.gz) or Bzip2 (tar.bz2)</strong>, TAR is essential for <strong>backups, software distribution, and source code packaging</strong>. It preserves file system attributes like permissions and directory structures, making it highly reliable for system administration.</p>

<p>You can <strong>download free TAR sample files</strong> from our site to test extraction commands, evaluate backup tools, or check software compatibility. A must-have for <strong>developers, DevOps engineers, and system admins</strong>.</p>`,
      };
    case "rar":
      return {
        title: "Sample RAR File - Free RAR Sample Archives",
        screenTitle: "Sample RAR download",
        description:
          "Download a sample RAR archive file for testing extraction and compression. Free RAR sample.",
        keywords:
          "sample rar, rar file download, rar archive example, winrar sample file, test rar compression",
        bodyText: `<p><strong>RAR (Roshal Archive)</strong> is a popular <strong>compressed file format</strong> created by Eugene Roshal and commonly used with <strong>WinRAR</strong>. Known for <strong>strong compression</strong> and advanced features like <strong>error recovery</strong> and <strong>password protection</strong>, RAR files are widely used for packaging large datasets, software, and media files.</p>

<p>Unlike standard ZIP files, <strong>RAR archives</strong> often provide better compression ratios, making them ideal for efficient file sharing. They also support <strong>multi-part splitting</strong>, which helps in distributing large files across multiple volumes.</p>

<p>Download <strong>free RAR sample files</strong> from our website to test extraction, compatibility, and software handling. Perfect for <strong>developers, IT professionals, and students</strong> working with compressed archives.</p>`,
      };

    case "json":
      return {
        title: "Sample JSON File - Free JSON Sample Data",
        screenTitle: "Sample JSON download",
        description:
          "Download a sample JSON file for API testing, software development, and structured data analysis. Free JSON sample.",
        keywords:
          "sample json, json file download, json data example, api json test file, structured json format",
        bodyText: `<p><strong>JSON (JavaScript Object Notation)</strong> is a lightweight <strong>data format</strong> used to represent structured information in a simple, text-based form. It has become the most popular choice for <strong>APIs, web applications, and modern software development</strong>.</p>

<p>JSON is easy to read and write, with a <strong>key-value pair structure</strong> that makes it ideal for <strong>configuration files, API requests/responses, and database storage</strong>. It is supported across virtually all programming languages, making it highly versatile.</p>

<p>You can <strong>download free JSON sample files</strong> from our site to test data handling, simulate API responses, or practice coding with structured data. Perfect for <strong>developers, QA testers, and learners</strong>.</p>`,
      };
    case "xml":
      return {
        title: "Sample XML File - Free XML Sample Files",
        screenTitle: "Sample XML download",
        description:
          "Download a sample XML file for testing structured data, parsing, and software integration. Free XML sample.",
        keywords:
          "sample xml, xml file download, xml data example, structured data xml, test xml format",
        bodyText: `<p><strong>XML (Extensible Markup Language)</strong> is a widely used <strong>data format</strong> for representing structured information. It uses <strong>tag-based syntax</strong> to describe data in a way that is both <strong>human-readable and machine-readable</strong>.</p>

<p>XML is commonly applied in <strong>web services, configuration files, document storage, and data exchange</strong> between applications. Its flexibility makes it a cornerstone in industries like finance, healthcare, and enterprise software systems.</p>

<p>Download <strong>free XML sample files</strong> from our website to test parsing, API responses, or software compatibility. Perfect for <strong>developers, students, and testers</strong> working with structured data.</p>`,
      };
    case "csv":
      return {
        title: "Sample CSV File - Free CSV Sample Data",
        screenTitle: "Sample CSV download",
        description:
          "Download a sample CSV file for spreadsheet testing, data analysis, and database import. Free CSV sample.",
        keywords:
          "sample csv, csv file download, csv data example, excel csv test file, comma separated values sample",
        bodyText: `<p><strong>CSV (Comma-Separated Values)</strong> is a simple <strong>data format</strong> used for storing <strong>tabular data</strong> in plain text. Each line in a CSV file represents a row, with values separated by commas, making it compatible with <strong>spreadsheets, databases, and programming languages</strong>.</p>

<p>CSV is widely used for <strong>data analysis, machine learning, reporting, and data migration</strong>. It is supported by applications like <strong>Microsoft Excel, Google Sheets, Python, and SQL databases</strong>, making it a universal choice for structured data exchange.</p>

<p>Download <strong>free CSV sample files</strong> from our website to test imports, verify data processing scripts, or practice analysis. A go-to format for <strong>students, analysts, and developers</strong>.</p>`,
      };
    case "html":
      return {
        title: "Sample HTML File  - Free HTML Example Code",
        screenTitle: "Sample HTML download",
        description:
          "Download a sample HTML file for web development practice and browser testing. Free HTML sample.",
        keywords:
          "sample html, html file download, html example code, web development sample, test html file",
        bodyText: `<p><strong>HTML (HyperText Markup Language)</strong> is the core <strong>markup language</strong> for creating and structuring web pages. Every website relies on HTML to define headings, paragraphs, links, images, and other page elements.</p>

<p>HTML files are essential for <strong>web developers, students, and testers</strong> learning how to build websites. Combined with CSS and JavaScript, it powers modern web experiences across all devices and browsers.</p>

<p>Download <strong>free HTML sample files</strong> from our site to practice coding, test browser rendering, or experiment with design layouts. Perfect for anyone learning <strong>web design and development</strong>.</p>`,
      };
    case "bat":
      return {
        title: "Sample BAT File Download - Free Windows Batch Script",
        screenTitle: "Sample BAT download",
        description:
          "Download a sample BAT batch file for Windows scripting and automation testing. Free BAT sample.",
        keywords:
          "sample bat, bat file download, windows batch script example, command line bat file, test bat automation",
        bodyText: `<p><strong>BAT (Batch File)</strong> is a <strong>script file</strong> for Windows operating systems, containing a series of commands executed by the <strong>Command Prompt (CMD)</strong>. BAT files are commonly used for <strong>automation, task scheduling, and system configuration</strong>.</p>

<p>Developers and IT administrators rely on BAT files to streamline processes such as <strong>file backups, software installations, and command execution</strong>. They provide a fast and efficient way to handle repetitive tasks.</p>

<p>You can <strong>download free BAT sample files</strong> from our website to test scripts, learn Windows automation, or build your own workflows. Ideal for <strong>system admins, QA testers, and learners</strong>.</p>`,
      };
    case "c":
      return {
        title: "Sample C File  - Free C Program Example",
        screenTitle: "Sample C download",
        description:
          "Download a sample C file with source code for learning programming and compiler testing. Free C sample.",
        keywords:
          "sample c, c file download, c program example, c source code sample, test c language",
        bodyText: `<p><strong>C Language</strong> is a powerful, general-purpose <strong>programming language</strong> developed in the early 1970s by Dennis Ritchie. It is widely used for <strong>system programming, embedded systems, and operating systems</strong>.</p>

<p>C source code files use the <strong>.c extension</strong> and are compiled into machine code for execution. Its simplicity, efficiency, and portability have made C a foundation for many modern programming languages.</p>

<p>Download <strong>free C sample files</strong> from our site to practice coding, test compilers, or learn low-level programming concepts. Perfect for <strong>students, developers, and software engineers</strong>.</p>`,
      };
    case "cpp":
      return {
        title: "Sample C++ File Download - Free C++ Program Example",
        screenTitle: "Sample C++ download",
        description:
          "Download a sample C++ source code file for OOP learning, compiler testing, and coding practice. Free C++ sample.",
        keywords:
          "sample cpp, c++ file download, c++ program example, cpp source code sample, test c++ code",
        bodyText: `<p><strong>C++</strong> is a versatile <strong>programming language</strong> developed by Bjarne Stroustrup as an extension of C. It supports <strong>object-oriented programming (OOP)</strong>, making it suitable for <strong>software development, game engines, and system-level applications</strong>.</p>

<p>C++ source code files typically use the <strong>.cpp extension</strong> and allow developers to work with classes, inheritance, and polymorphism. Its speed and flexibility have made it a favorite for high-performance applications.</p>

<p>You can <strong>download free C++ sample files</strong> from our website to test compilers, practice coding, or explore advanced programming techniques. Ideal for <strong>students, developers, and programmers</strong>.</p>`,
      };
    case "py":
      return {
        title: "Sample Python File  - Free Python Script Example",
        screenTitle: "Sample Python download",
        description:
          "Download a sample Python script file for coding practice, automation, and software testing. Free Python sample.",
        keywords:
          "sample python, python file download, python script example, py file sample, test python code",
        bodyText: `<p><strong>Python</strong> is a high-level <strong>programming language</strong> known for its readability and versatility. Created by Guido van Rossum, it is widely used for <strong>web development, automation, data science, AI, and scripting</strong>.</p>

<p>Python files use the <strong>.py extension</strong> and can run on multiple platforms with ease. Its simplicity makes it a top choice for both beginners and experienced developers.</p>

<p>Download <strong>free Python sample files</strong> from our site to test code execution, practice programming, or build automation workflows. Perfect for <strong>learners, developers, and data analysts</strong>.</p>`,
      };
    case "rb":
      return {
        title: "Sample Ruby File  - Free Ruby Script Example",
        screenTitle: "Sample Ruby download",
        description:
          "Download a sample Ruby script file for coding practice and software testing. Free Ruby sample.",
        keywords:
          "sample ruby, ruby file download, ruby script example, rb file sample, test ruby code",
        bodyText: `<p><strong>Ruby</strong> is a dynamic, object-oriented <strong>programming language</strong> designed for simplicity and productivity. Created by Yukihiro Matsumoto, Ruby emphasizes human-friendly syntax and is widely used in <strong>web development</strong>, especially with the <strong>Ruby on Rails framework</strong>.</p>

<p>Ruby files typically use the <strong>.rb extension</strong> and are great for <strong>automation, web apps, and scripting</strong>. Its elegant syntax makes it easy for beginners while offering powerful features for experts.</p>

<p>You can <strong>download free Ruby sample files</strong> from our site to test scripts, learn coding basics, or explore web application development. Ideal for <strong>students, developers, and Ruby enthusiasts</strong>.</p>`,
      };
    case "js":
      return {
        title: "Sample JavaScript File Download - Free JS Script Example",
        screenTitle: "Sample JavaScript download",
        description:
          "Download a sample JavaScript file for web development, testing, and learning. Free JS sample.",
        keywords:
          "sample javascript, js file download, javascript example code, script sample file, test js file",
        bodyText: `<p><strong>JavaScript</strong> is the most widely used <strong>programming language</strong> for building interactive websites and web applications. It runs directly in the browser, making it essential for <strong>frontend development</strong> and increasingly popular in <strong>backend development</strong> with Node.js.</p>

<p>JavaScript files use the <strong>.js extension</strong> and control dynamic behavior such as animations, form validation, and API interactions. It is the backbone of modern web development.</p>

<p>Download <strong>free JavaScript sample files</strong> from our website to test code snippets, experiment with web projects, or practice programming. Perfect for <strong>students, developers, and web designers</strong>.</p>`,
      };
    case "yaml":
      return {
        title: "Sample YAML File Download - Free YAML Example",
        screenTitle: "Sample YAML download",
        description:
          "Download a sample YAML configuration file for testing and software development. Free YAML sample.",
        keywords:
          "sample yaml, yaml file download, yaml config example, yml sample file, test yaml format",
        bodyText: `<p><strong>YAML (YAML Ain’t Markup Language)</strong> is a <strong>human-readable data format</strong> often used for <strong>configuration files, DevOps tools, and cloud deployments</strong>. Its simple structure makes it easy to write and understand compared to XML or JSON.</p>

<p>YAML files, with extensions <strong>.yaml</strong> or <strong>.yml</strong>, are widely used in <strong>Kubernetes, Docker, CI/CD pipelines, and application settings</strong>. Its indentation-based structure ensures clean and readable data representation.</p>

<p>You can <strong>download free YAML sample files</strong> from our site to test configurations, validate parsers, or practice DevOps workflows. Perfect for <strong>developers, sysadmins, and cloud engineers</strong>.</p>`,
      };
    case "php":
      return {
        title: "Sample PHP File Download - Free PHP Script Example",
        screenTitle: "Sample PHP download",
        description:
          "Download a sample PHP file for web development, server-side scripting, and testing. Free PHP sample.",
        keywords:
          "sample php, php file download, php script example, php source code sample, test php file",
        bodyText: `<p><strong>PHP (Hypertext Preprocessor)</strong> is a server-side <strong>scripting language</strong> widely used for <strong>web development</strong>. It powers millions of websites, including popular CMS platforms like <strong>WordPress, Joomla, and Drupal</strong>.</p>

<p>PHP files use the <strong>.php extension</strong> and can generate dynamic web content, connect to databases, and handle server logic. Its flexibility makes it one of the most widely adopted programming languages on the web.</p>

<p>Download <strong>free PHP sample files</strong> from our website to test scripts, practice coding, or experiment with backend development. Great for <strong>students, web developers, and server administrators</strong>.</p>`,
      };
    case "java":
      return {
        title: "Sample Java File Download - Free Java Program Example",
        screenTitle: "Sample Java download",
        description:
          "Download a sample Java source code file for learning, compiler testing, and coding practice. Free Java sample.",
        keywords:
          "sample java, java file download, java program example, java source code sample, test java file",
        bodyText: `<p><strong>Java</strong> is a powerful, object-oriented <strong>programming language</strong> developed by Sun Microsystems in the mid-1990s (now owned by Oracle). It is designed with the principle of <strong>“write once, run anywhere”</strong>, thanks to its platform-independent <strong>Java Virtual Machine (JVM)</strong>.</p>

<p>Java files use the <strong>.java extension</strong> and are compiled into bytecode, which can run on any system with a JVM. It is widely used in <strong>enterprise applications, Android development, web applications, and backend services</strong>.</p>

<p>Download <strong>free Java sample files</strong> from our site to test compilers, practice coding, or experiment with object-oriented programming. Perfect for <strong>students, developers, and software engineers</strong> learning Java.</p>`,
      };

    case "converter":
      return {
        title: "Free JPG to PNG Converter - Convert Image Files Online",
        description:
          "Instantly convert your JPG images to PNG format online for free. Preserve transparency and get lossless quality for web and design projects.",
        keywords:
          "jpg to png, convert jpg to png, image converter, online file converter, jpg png conversion, free image tool",
      };
    case "placeholder-image-generator":
      return {
        title:
          "Free Placeholder Image Generator - Custom Dummy Images for Mockups",
        description:
          "Generate free placeholder images in any size or color. Create custom dummy images for website mockups, design layouts, and testing.",
        keywords:
          "placeholder image, dummy image, image generator, mockup image, test image, design placeholder",
      };

    //Blogs pages

    case "blogs":
      return {
        title: "Developer Blogs & Tutorials - SampleFiles.dev",
        description:
          "Explore our collection of articles, guides, and tutorials on file formats, conversion tools, software testing, and web development best practices.",
        keywords:
          "developer blogs, programming tutorials, file format guides, software testing tips, web development blog, tech articles",
        bodyText: `<p>Welcome to the <strong>SampleFiles.dev Blog</strong>, your resource for insightful articles and practical guides for <strong>developers, testers, and designers</strong>. Our content is designed to help you navigate the complexities of file formats, optimize your workflow, and implement best practices in your projects.</p>

<p>Explore in-depth tutorials on topics like <strong>image conversion, file compression, and security</strong>, alongside comparisons of different technologies and formats. Whether you're looking to solve a specific problem or deepen your understanding, our blogs provide the actionable knowledge you need.</p>

<p>Browse our latest posts to stay updated on <strong>industry trends, tool recommendations, and expert tips</strong> for working with sample files and beyond.</p>`,
      };
    case "blog-1":
      return {
        title: "How to Convert JPG to PNG - A Complete Step-by-Step Guide",
        description:
          "Learn how to convert JPG to PNG correctly. Our guide covers online tools, software, and best practices for preserving image quality and transparency.",
        keywords:
          "how to convert jpg to png, jpg png tutorial, image conversion guide, preserve transparency, change image format",
      };
    case "blog-2":
      return {
        title:
          "How to Use Sample Files for Software Testing - A Developer's Guide",
        description:
          "Learn best practices for using sample files to test your applications, from checking upload features to validating formats and stress-testing systems.",
        keywords:
          "use sample files, software testing, test files, developer testing, file upload test, qa testing with files",
      };
    case "blog-3":
      return {
        title: "PNG vs WebP vs 9-Patch Images - A Developer Comparison Guide",
        description:
          "Compare PNG, WebP, and 9-Patch image formats. Understand the differences in quality, file size, transparency, and use cases for web and mobile development.",
        keywords:
          "png vs webp, nine patch images, image format comparison, webp transparency, android 9-patch, image quality comparison",
      };
    case "blog-4":
      return {
        title:
          "Image Optimization Best Practices - Boost Web Performance Guide",
        description:
          "Master image optimization for faster websites. Learn best practices for compression, format selection, and responsive images to improve page speed and SEO.",
        keywords:
          "image optimization, web performance, page speed, image compression, best practices, core web vitals, seo images",
      };
    case "blog-5":
      return {
        title: "File Upload Security - A Complete Guide for Developers",
        description:
          "Secure your application's file upload feature. A comprehensive guide to preventing common vulnerabilities, validating files, and protecting against malicious uploads.",
        keywords:
          "file upload security, secure file upload, developer security, web application security, prevent malicious uploads, file validation",
      };
    case "blog-6":
      return {
        title:
          "The PNG Paradox - Fix Transparency, File Size & Quality Mistakes",
        description:
          "Solve the PNG paradox. Learn how to fix common issues with transparency, reduce bloated file sizes, and maintain optimal image quality for the web.",
        keywords:
          "png paradox, png transparency, reduce png file size, png optimization, png quality, fix png issues",
      };

    // For Legal & Standard Pages

    case "privacy-policy":
      return {
        title: "Privacy Policy - SampleFiles.dev | Your Data Security",
        description:
          "Read the SampleFiles.dev privacy policy. Learn how we collect, use, and protect your data and information when you use our free file services.",
        keywords:
          "privacy policy, samplefiles privacy, data security, information collection, website privacy",
      };
    case "terms-of-service":
      return {
        title: "Terms of Service - SampleFiles.dev | User Agreement",
        description:
          "Review the Terms of Service for SampleFiles.dev. Understand the rules and guidelines for using our free sample files and online conversion tools.",
        keywords:
          "terms of service, user agreement, website terms, terms and conditions, legal agreement",
      };

    // For Company & Contact Pages

    case "about-us":
      return {
        title:
          "About Us - SampleFiles.dev | Free Sample Files & Tools for Developers",
        description:
          "Learn about SampleFiles.dev, our mission to provide free sample files and tools for developers, testers, and designers worldwide.",
        keywords:
          "about us, about samplefiles, our mission, free tools for developers, who we are",
      };
    case "contact-us":
      return {
        title: "Contact Us - SampleFiles.dev | Get in Touch",
        description:
          "Have questions or feedback? Contact the SampleFiles.dev team. We're here to help you with your sample file and development tool needs.",
        keywords:
          "contact us, get in touch, customer support, feedback, questions",
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
