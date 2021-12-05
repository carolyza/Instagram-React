import Icones from "icones.js";
import Logo from "Logo.js";

export default function Navbar() {
  const icons = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline",
  ];
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          {icons.map((icon) => (
            <Icones name={icon} />
          ))}
        </div>

        <div class="icones-mobile">
          <Icones name="paper-plane-outline" />
        </div>
      </div>
    </div>
  );
}