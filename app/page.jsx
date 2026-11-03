import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="headline">
        <div className="hero-copy">
          <h1 id="headline">
            Intelligence
            <br />
            is on.
          </h1>
          <p>
            Dhivon builds AI tooling for engineering teams. Our aim is to carry
            the reasoning behind a change from the first specification through
            implementation, review and the next team decision.
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
          aria-label="Our vision for engineering work. Team decisions and prior knowledge shape a specification. Agents use approved models and tools to implement it. Review findings and the reasons for a change inform future work."
        >
          <div className="diagram-control">
            <strong>Engineering team</strong>
            <small>Sets the scope · chooses models and tools</small>
          </div>
          <div className="policy-line">Engineering workflow ↓</div>
          <div className="diagram-flow">
            <div className="diagram-node">
              <strong>Specification</strong>
              <small>Intent and prior decisions</small>
            </div>
            <span className="arrow" aria-hidden="true">
              →
            </span>
            <div className="diagram-node gateway">
              <img src="/assets/logo.svg" width="54" height="54" alt="" />
              <strong>Implementation</strong>
              <small>Models and tools help turn intent into code</small>
            </div>
            <span className="arrow" aria-hidden="true">
              →
            </span>
            <div className="grid gap-5 max-[1100px]:grid-cols-2 max-[1100px]:gap-3">
              <div className="diagram-node">
                <strong>Code review</strong>
                <small>Check the change against its intent</small>
              </div>
              <div className="diagram-node">
                <strong>Team knowledge</strong>
                <small>Keep the reasoning for next time</small>
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
              “Intelligence is on” means a team can put what it knows to work at
              each stage of a change. A developer picking up a bug should be
              able to find the original decision, give an agent a clear task and
              see whether the proposed fix honours that decision.
            </p>
            <p>
              Cadre captures the approved intent. MCP Gateway gives agents
              access to the tools a team permits. Our roadmap extends that work
              to choosing a model, writing the fix, reviewing the result and
              preserving what the team learns for the next developer.
            </p>
          </div>
        </div>
      </section>
      <section className="roles" id="products" aria-labelledby="products-title">
        <h2 id="products-title">Current products</h2>
        <div className="role-row">
          <span className="role-number">01</span>
          <h3>Cadre</h3>
          <p>
            A spec-driven AI harness that turns an approved specification into a
            dependency-aware plan. Teams can review changes against the spec and
            resume interrupted work.
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
            Administrators set access, developers opt in, and the gateway checks
            policy when an agent discovers or calls a tool.
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
        <h2 id="roadmap-title">Product roadmap</h2>
        <p>
          These four planned products address different moments in a team’s
          workflow. Their scope and release dates are still open.
        </p>
        <ul className="roadmap-list">
          <li>
            <h3>LLM proxy / gateway</h3>
            <p>
              Give teams one place to choose which language models their tools
              can call. A team could use a faster model to summarise a bug
              report and a different one to reason through the fix.
            </p>
          </li>
          <li>
            <h3>Coding agent</h3>
            <p>
              Turn an approved task into a patch and tests. A developer could
              hand over a reproducible bug and get back a change they can run,
              inspect and revise.
            </p>
          </li>
          <li>
            <h3>Code review agent</h3>
            <p>
              Compare a proposed change with its specification and tests. Flag a
              missed requirement or an untested edge case while the author still
              has the reasoning fresh in mind.
            </p>
          </li>
          <li>
            <h3>Organisation knowledge base</h3>
            <p>
              Make past decisions available when a new question arises. The next
              engineer touching a workaround could find why it exists and what
              would make it safe to remove.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
