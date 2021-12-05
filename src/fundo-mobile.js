import Icones from "./icones.js";

export default function Fundo() {
  const icones = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];
  return (
    <div class="fundo-mobile">
      {icones.map((icone) => (
        <Icones name={icone} />
      ))}
    </div>
  );
}