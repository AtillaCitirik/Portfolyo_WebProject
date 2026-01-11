export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="logo" href="#top">Atilla</a>

        <nav className="nav__links">
          <a href="#about">Hakkımda</a>
          <a href="#projects">Projeler</a>
          <a href="#skills">Yetenekler</a>
          <a href="#contact">İletişim</a>
        </nav>
      </div>
    </header>
  );
}
