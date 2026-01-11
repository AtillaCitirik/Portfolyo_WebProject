export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="badge">Web Teknolojileri • Portföy</p>
        <h1>Merhaba, ben Atilla.</h1>
        <p className="subtitle">
          Bu site web teknolojileri projesi için hazırlanmış kişisel portföy sayfamdır.
          Projelerimi ve yeteneklerimi burada paylaşıyorum.
        </p>

        <div className="hero__cta">
          <a className="btn" href="#projects">Projeleri Gör</a>
          <a className="btn btn--ghost" href="#contact">İletişime Geç</a>
        </div>
      </div>
    </section>
  );
}
