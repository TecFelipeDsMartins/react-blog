import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    
    setIsPending(true)
    
    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('New blog added :)')
      setIsPending(false)
      history.push('/')
    })
  }


  return ( 
    <div className="create">
      <h2>Adicionar um novo blog</h2>
      <form
       onSubmit={handleSubmit}
      >
        <label>título:</label>
        <input 
        type="text"
        required 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Conteudo:</label>
        <textarea
        required
        value={body}
        onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled >Adding...</button>}
      </form>
    </div>
   );
}
 
export default Create;