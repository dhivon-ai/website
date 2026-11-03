import "./globals.css";

export const metadata = {
  title: "Dhivon AI · Intelligence is on.",
  description:
    "Dhivon builds AI tooling for engineering teams. Explore Cadre, our spec-driven AI harness, and Dhivon MCP Gateway for enterprise tool access.",
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
