import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="identity" href="/" aria-label="Dhivon home">
          <img src="/assets/dhivon.svg" width="142" height="44" alt="Dhivon" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#philosophy">Philosophy</a>
          <a href="#products">Products</a>
          <a href="#roadmap">Roadmap</a>
          <Button asChild size="navigation">
            <a href="https://github.com/dhivon-ai">
              GitHub <span aria-hidden="true">&nbsp;↗</span>
            </a>
          </Button>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="headline">
          <div className="hero-copy">
            <h1 id="headline">
              Intelligence
              <br />
              is on.
            </h1>
            <p>
              Dhivon builds AI tooling for engineering teams. Give coding agents
              a specification to work from and decide which tools they can use.
            </p>
            <div className="mt-[38px] flex flex-wrap items-center gap-[30px]">
              <Button asChild>
                <a href="#products">Explore products</a>
              </Button>
              <a className="text-link" href="#philosophy">
                Our philosophy ↓
              </a>
            </div>
          </div>
          <div
            className="diagram"
            role="img"
            aria-label="Engineering teams guide their coding agents with two decisions. Cadre captures the work to do. MCP Gateway controls the tools an agent may use."
          >
            <div className="diagram-control">
              <strong>Engineering team</strong>
              <small>Sets the scope · grants tool access</small>
            </div>
            <div className="policy-line">Team decisions ↓</div>
            <div className="diagram-flow">
              <div className="diagram-node">
                <strong>Specification</strong>
                <small>What to build</small>
              </div>
              <span className="arrow" aria-hidden="true">
                →
              </span>
              <div className="diagram-node gateway">
                <img src="/assets/logo.svg" width="54" height="54" alt="" />
                <strong>Coding agent</strong>
                <small>Works within the team's scope</small>
              </div>
              <span className="arrow" aria-hidden="true">
                →
              </span>
              <div className="grid gap-5 max-[1100px]:grid-cols-2 max-[1100px]:gap-3">
                <div className="diagram-node">
                  <strong>Local tools</strong>
                </div>
                <div className="diagram-node">
                  <strong>Remote tools</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why" id="philosophy" aria-label="Our philosophy">
          <div className="why-intro">
            <h2>Our philosophy</h2>
            <div>
              <p>
                When intelligence is always on, a team should be able to answer
                two questions about an agent’s work. What did we ask it to do?
                What did we give it access to?
              </p>
              <p>
                These questions shape what we build. With Cadre, a reviewer can
                trace a change back to an approved spec. With MCP Gateway, a
                developer can see which tools the team permits and choose which
                to enable.
              </p>
            </div>
          </div>
        </section>
        <section
          className="roles"
          id="products"
          aria-labelledby="products-title"
        >
          <h2 id="products-title">Our products</h2>
          <div className="role-row">
            <span className="role-number">01</span>
            <h3>Cadre</h3>
            <p>
              A spec-driven AI harness that turns an approved specification into
              a dependency-aware plan. Teams can review changes against the spec
              and resume interrupted work.
            </p>
            <a className="text-link" href="https://cadre.dhivon.ai/">
              Explore Cadre ↗
            </a>
          </div>
          <div className="role-row">
            <span className="role-number">02</span>
            <h3>MCP Gateway</h3>
            <p>
              A self-hosted enterprise gateway for Model Context Protocol tools.
              Administrators set access, developers opt in, and the gateway
              checks policy when an agent discovers or calls a tool.
            </p>
            <a className="text-link" href="https://mcp.gateway.dhivon.ai/">
              Explore MCP Gateway ↗
            </a>
          </div>
        </section>
        <section
          className="roadmap-band"
          id="roadmap"
          aria-labelledby="roadmap-title"
        >
          <h2 id="roadmap-title">What comes next</h2>
          <p>
            We’re exploring four more areas of AI tooling. Their scope and
            release dates are still open.
          </p>
          <ul className="roadmap-list">
            <li>LLM proxy / gateway</li>
            <li>Coding agent</li>
            <li>Code review agent</li>
            <li>Organisation knowledge base</li>
          </ul>
        </section>
      </main>
      <footer>
        <a className="identity" href="/">
          <img src="/assets/dhivon.svg" width="142" height="44" alt="Dhivon" />
          <span>AI tooling for engineering teams</span>
        </a>
        <nav aria-label="Footer">
          <a href="https://github.com/dhivon-ai">GitHub</a>
          <a href="mailto:contact@dhivon.ai">Contact</a>
        </nav>
      </footer>
    </>
  );
}
