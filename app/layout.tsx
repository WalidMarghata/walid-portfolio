import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Walid Marghata | Senior Full Stack Developer — C#, .NET, Azure",
    template: "%s | Walid Marghata",
  },
  description:
    "Senior Full Stack Developer specialized in C#, .NET Core, ASP.NET, Java and system integrations. 9+ years building scalable APIs and enterprise software. Remote-ready. Open to global opportunities in Canada, France and the US.",
  keywords: [
    "Walid Marghata",
    "Senior Full Stack Developer",
    "C# Developer",
    ".NET Developer",
    "ASP.NET Core",
    "Azure Developer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "API Integration",
    "System Integration",
    "Remote Developer",
    "Remote Full Stack",
    "Software Engineer Brazil",
    "Belo Horizonte Developer",
  ],
  authors:   [{ name: "Walid Marghata", url: "https://github.com/WalidMarghata" }],
  creator:   "Walid Marghata",
  publisher: "Walid Marghata",
  metadataBase: new URL("https://walidmarghata.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type:        "website",
    url:         "https://walidmarghata.dev",
    siteName:    "Walid Marghata",
    title:       "Walid Marghata | Senior Full Stack Developer — C#, .NET, Azure",
    description: "Senior Full Stack Developer with 9+ years in C#, .NET Core, Java and enterprise integrations. Remote-ready. Open to global opportunities.",
    locale:          "en_US",
    alternateLocale: "pt_BR",
    images: [{
      url:    "/og-image.png",
      width:  1200,
      height: 630,
      alt:    "Walid Marghata — Senior Full Stack Developer",
      type:   "image/png",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Walid Marghata | Senior Full Stack Developer",
    description: "C#, .NET, Azure & system integrations. 9+ years. Remote-ready 🌍",
    images:      ["/og-image.png"],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:  true,
      follow: true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
  icons: {
    icon:     [{ url: "/logo.png" }, { url: "/icon-32.png", sizes: "32x32", type: "image/png" }],
    apple:    [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#050a0e" },
    { media: "(prefers-color-scheme: light)", color: "#050a0e" },
  ],
};

const jsonLd = {
  "@context":  "https://schema.org",
  "@type":     "Person",
  name:        "Walid Marghata",
  jobTitle:    "Senior Full Stack Developer",
  description: "Senior Full Stack Developer specialized in C#, .NET Core, ASP.NET, Java and system integrations. Remote-ready.",
  url:         "https://walidmarghata.dev",
  email:       "walidmarghatadevfullstack@gmail.com",
  telephone:   "+55-31-92000-9948",
  address: {
    "@type":          "PostalAddress",
    addressLocality:  "Belo Horizonte",
    addressRegion:    "MG",
    addressCountry:   "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/walidmarghata/",
    "https://github.com/WalidMarghata",
  ],
  knowsLanguage: ["Arabic", "French", "English", "Portuguese", "Russian"],
  knowsAbout: ["C#", ".NET Core", "ASP.NET Core", "Azure", "Java", "Spring Boot",
               "React", "Node.js", "Angular", "Python", "SQL", "MongoDB", "REST APIs"],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Estácio", description: "Software Engineering Post-Grad 2023–2024" },
    { "@type": "EducationalOrganization", name: "Estácio", description: "Computer Science 2020–2023" },
  ],
  worksFor: { "@type": "Organization", name: "MIP Engenharia" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#050a0e] text-[#c8dde8] antialiased">
        {children}
      </body>
    </html>
  );
}
