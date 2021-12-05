import Links from"./links.js";
import Posts from "./posts.js";
import Sidebar from "./sidebar.js";
import Stories from "./stories.js";
import Copyright from "./copyright.js";
import Fundo from "./fundo-mobile.js";
import Navbar from "./navbar.js";


export default function App(){
    return(
 <div>
  <Navbar/>
    <div class = "corpo">

        <div class = "esquerda">
            <Stories/>
            <Posts/>
        </div>

      <Sidebar/>

    </div>

  <Fundo/>

 </div> 
     )
}