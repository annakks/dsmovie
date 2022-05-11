import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar () {

    return (
        <header>
            <nav className="container">
                <div className="dsmove-nav-content">
                    <h1>DSMovies</h1>
                    <a href="https://github.com/devsuperior">
                        <div className="dsmove-contact-container">
                            <GithubIcon />
                            <p className='dsmove-contact-link'>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;