import {Link} from 'react-router-dom'
import "./navbar.css"

function NavBar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to={`/`}>Manuela Sanchez</Link>
                    <button className="navbar-toggler" 
                            type="button" 
                             data-bs-toggle="collapse"
                             data-bs-target="#navbarSupportedContent" 
                             aria-controls="navbarSupportedContent" 
                             aria-expanded="false" 
                             aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={`/`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/AboutMe`}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Portfolio'}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/ContactMe'}>Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar