import carambarLogo from "../assets/carambar_logo.webp";
import "./LandingPage.scss";

export function LandingPage({ onClick }) {
  return (
    <article className="landing">
      <img src={carambarLogo} alt="Logo Carambar" className="landing__logo" />
      <p className="landing__subtitle">
        Bienvenue dans l’univers des blagues Carambar !
      </p>
      <p className="landing__subtitle">
        Cliquez sur le bouton ci-dessous pour découvrir une nouvelle blague à
        chaque clic.
      </p>
      <button className="landing__button" onClick={onClick}>
        Donne-moi une blague
      </button>
    </article>
  );
}
