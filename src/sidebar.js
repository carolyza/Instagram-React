import Sugestao from "./sugestao.js";
import Links from "./links.js"
import Copyright from "./copyright.js";

export default function Sidebar(){
  const sugestoes=[
    {usuario : "bad.vibes.memes",razao:"Segue Você"},
{usuario:"chibirdart", razao:"Segue Você"},
{usuario:"razoesparaacreditar", razao:"Novo no Instagram"},
{usuario:"adorable_animals", razao:"Segue Você"},
{usuario:"smallcutecats", razao:"Segue Você"}
]


    return(
        <div class="sidebar">
          <div class="usuario">
            <img src="./assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            
            {sugestoes.map((sugestao)=>(
                <Sugestao usuario={sugestao.usuario}
                razao= {sugestao.razao}
                />
            ))}
            <div class="seguir">Seguir</div>
            </div>
            <Links/>
            <Copyright/>
          </div>
          
          
    )
}