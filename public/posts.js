import Post from "post.js";

export default function Posts(){

    const users =[
        {perfil= "meowd", content ="gato-telefone", likeOne ="respondeai", numberLike ="101.523"},
        {perfil= "barked",content = "dog", likeOne = "adorable_animals", numberLike = "99.159"}]



    return(
        <div class="posts">
            {users.map((post)=>(
                <Post perfil={post.perfil}
                content = {post.content}
                likeOne={post.likeOne}
                numberLike={post.numberLike}/>
            ))}
</div>
 )
}