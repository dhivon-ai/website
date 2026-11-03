export const metadata = {
  title: "Sitemap · Dhivon AI",
  description:
    "Find Dhivon’s philosophy, product roadmap and product sites for Cadre and MCP Gateway.",
  alternates: { canonical: "https://dhivon.ai/sitemap" },
};

export default function SitemapPage() {
  return (
    <main id="main" className="roles">
      <h1>Sitemap</h1>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <section aria-labelledby="organisation">
          <h2 id="organisation">Organisation</h2>
          <ul className="grid gap-3">
            <li>
              <a href="/">Dhivon home</a>
            </li>
            <li>
              <a href="/#philosophy">Our philosophy</a>
            </li>
            <li>
              <a href="/#products">Current products</a>
            </li>
            <li>
              <a href="/#roadmap">Product roadmap</a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="product-sites">
          <h2 id="product-sites">Product sites</h2>
          <ul className="grid gap-3">
            <li>
              <a href="https://cadre.dhivon.ai/">Cadre</a> · Spec-driven AI
              harness
              <br />
              <a href="https://cadre.dhivon.ai/overview/">
                Cadre documentation
              </a>
              {" · "}
              <a href="https://cadre.dhivon.ai/sitemap.xml">
                Cadre XML sitemap
              </a>
            </li>
            <li>
              <a href="https://mcp.gateway.dhivon.ai/">MCP Gateway</a> ·
              Enterprise tool access
              <br />
              <a href="https://mcp.gateway.dhivon.ai/docs/">
                All Gateway guides
              </a>
              {" · "}
              <a href="https://mcp.gateway.dhivon.ai/sitemap.xml">
                Gateway XML sitemap
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
