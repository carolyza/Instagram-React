import Logo from "Logo.js";
import Links from"links.js";
import Posts from "posts.js";
import Sidebar from "sidebar.js";
import Stories from "stories.js";
import Copyright from "copyright.js";
import Fundo from "fundo-mobile.js";
import Icones from "icones.js";
import IconesMobile from "icones-mobile.js";


export default function App(){
    return(
        <div class="navbar">
        <div class="container">
          <Logo/>
  
          <Icones/>

          <IconesMobile/>
        </div>
      </div>

      <div class="corpo">
        <div class="esquerda">
         <Stories/>

          <Posts/>

        <Sidebar/>

          <Links/>

         <Copyright/>

      <Fundo/>
    </div>
</div>
    )
}