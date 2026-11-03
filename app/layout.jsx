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
      <body>{children}</body>
    </html>
  );
}
