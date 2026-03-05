import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold gradient-text">Lilah</span>
            <p className="text-xs text-text-muted mt-1">
              Your AI meeting sidekick
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="hidden md:inline text-border">|</span>
            <a
              href="/privacy"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Terms
            </a>
          </div>

          {/* Social placeholders */}
          <div className="flex items-center gap-4">
            {/* X/Twitter */}
            <a
              href="#"
              className="text-text-muted hover:text-text-secondary transition-colors"
              aria-label="Follow on X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="text-text-muted hover:text-text-secondary transition-colors"
              aria-label="Follow on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>&copy; 2026 Lilah by Strategic Automation</span>
          <span>Built with love in the UK</span>
        </div>
      </div>
    </footer>
  );
}
