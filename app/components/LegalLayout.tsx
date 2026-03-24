import Image from "next/image";
import Link from "next/link";

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-6 sm:px-12 lg:px-16 flex items-center justify-between border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image src="/eh-logo.svg" width={32} height={32} alt="Edge Harbour" />
          <span className="text-lg font-black tracking-tight">
            <span style={{ color: "#172B4D" }}>Edge</span>
            <span style={{ color: "#137FEC" }}>Harbour</span>
          </span>
        </Link>
        <a
          href="mailto:hello@edgeharbour.co.uk"
          className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
        >
          Contact Us
        </a>
      </header>

      {/* Hero */}
      <div className="border-b border-gray-100 px-6 py-14 sm:px-12 lg:px-16 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.16em] text-gray-400 uppercase mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-950 mb-3">
            {title}
          </h1>
          <p className="text-base text-gray-500">{subtitle}</p>
          <p className="mt-4 text-xs text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-14 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto prose-legal">{children}</div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-7 sm:px-12 lg:px-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400">
            Edge Harbour Recruitment Company Ltd
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[11px] text-gray-400 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] text-gray-400 hover:text-gray-700 transition-colors">
              Terms of Business
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
