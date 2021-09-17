import { Link } from 'react-router-dom'
import { useSearchContext } from './SearchContext';


const Navbar = () => {
  
  return ( 
    
    <nav className="navbar">
      <h1>The Dojo Blog {setUser('Jesus')}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
    
  );
}
 
export default Navbar;