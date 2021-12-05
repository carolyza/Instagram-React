import Icones from "./icones.js";

export default function Post(props){
const icones =["heart-outline","chatbubble-outline","paper-plane-outline"];

    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={`./assets/img/${props.perfil}.svg`}/>
                  {props.perfil}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
              <div class="conteudo">
                <img src={`./assets/img/${props.content}.svg`} />
              </div>

              <div class="fundo">
        <div class="acoes">
          <div>
            {icones.map((icone) => (
              <Icones name={icone} />
            ))}
          </div>
          <div>
            <Icones name="bookmark-outline" />
          </div>
        </div>

                <div class="curtidas">
                  <img src={`./assets/img/${props.likeOne}.svg`} />
                  <div class="texto">
                    Curtido por <strong>{props.likeOne}</strong> e <strong>{props.numberLike}</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}