
export default function Sugestao(props){

return(
        <div class="sugestao">
              <div class="usuario">
                <img src={`./assets/img/${props.usuario}.svg`} />
                <div class="texto">
                  <div class="nome">{props.usuario}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
            
        )}