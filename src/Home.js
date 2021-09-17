import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

const { data: blogs, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  
return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Meus Blogs!"/>}
    </div>
  );
}
  
export default Home
