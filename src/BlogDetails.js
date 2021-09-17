import { useParams, useHistory } from "react-router-dom";
import  useFetch  from "./useFetch"


const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const history = useHistory()

  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + blog.id, {
    method: 'DELETE'  
  }).then(()=>{
    history.push('/')
  })
  }

  return ( 
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Escrito por <em>Felipe Ds Martins</em></p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;