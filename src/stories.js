import Icones from "./icones.js";
import Story from "./story.js";



export default function Stories(){
const perfis = ["9gag",
"meowed",
"barked",
"nathanwpylestrangeplanet",
"wawawicomics",
"respondeai",
"filomoderna",
"memeriagourmet",
];


    return(
            <div class="stories">
      {perfis.map((perfil) => (
        <Story name={perfil} />
      ))}
      <div class="setinha">
        <Icones name="chevron-forward-circle" />
      </div>
    </div>

    )
}