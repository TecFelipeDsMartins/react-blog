import { Link } from 'react-router-dom'


const Navbar = () => {
  
  return ( 
    
    <nav className="navbar">
      <h1>Dev Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Criar novo Blog</Link>
      </div>
    </nav>
    
  );
}
 
export default Navbar;