const skills = ["JavaScript", "React", "HTML", "CSS", "Git"];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Yetenekler</h2>
        <div className="tags">
          {skills.map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
