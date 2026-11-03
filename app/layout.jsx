import { Button } from "@/components/ui/button";
import "./globals.css";

export const metadata = {
  title: "Dhivon AI · Intelligence is on.",
  description:
    "Dhivon builds AI tooling for engineering teams. Explore Cadre, MCP Gateway and our roadmap for model access, coding, review and shared knowledge.",
  alternates: { canonical: "https://dhivon.ai/" },
  icons: { icon: "/assets/favicon.svg" },
};

export const viewport = { themeColor: "#102c4c" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <a className="identity" href="/" aria-label="Dhivon home">
            <img
              src="/assets/dhivon.svg"
              width="142"
              height="44"
              alt="Dhivon"
            />
          </a>
          <nav aria-label="Main navigation">
            <a href="/#philosophy">Philosophy</a>
            <a href="/#products">Products</a>
            <a href="/#roadmap">Roadmap</a>
            <Button asChild size="navigation">
              <a href="https://github.com/dhivon-ai">
                GitHub <span aria-hidden="true">&nbsp;↗</span>
              </a>
            </Button>
          </nav>
        </header>
        {children}
        <footer>
          <a className="identity" href="/">
            <img
              src="/assets/dhivon.svg"
              width="142"
              height="44"
              alt="Dhivon"
            />
            <span>AI tooling for engineering teams</span>
          </a>
          <nav aria-label="Footer">
            <a href="/sitemap">Sitemap</a>
            <a href="https://github.com/dhivon-ai">GitHub</a>
            <a href="mailto:contact@dhivon.ai">Contact</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
