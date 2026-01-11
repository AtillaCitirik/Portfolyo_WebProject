import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projeler</h2>

        <div className="grid">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>

              <div className="tags">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
