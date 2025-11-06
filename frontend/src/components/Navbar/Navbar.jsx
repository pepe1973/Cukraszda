import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return <div className='navbar-kontener'>
        <div className="frontend-nav">
            <Link to='/'>Home</Link>
            <Link to='/cakes'>Torták</Link>
        </div>
        <div className="backend-nav"></div>
    </div>;
};

export default Navbar;
