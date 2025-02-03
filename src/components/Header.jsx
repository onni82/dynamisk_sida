import { useLocation } from "react-router-dom";
import { Link } from "react-router";

const Header = () => {
	const location = useLocation();

	return (
		<header>
			<div>
				<Link to="/" aria-label="Home" id="header-logo"></Link>
				<span aria-label="Menu" id="menu-icon">&#9776;</span>
			</div>
			<nav id="menu">
				<ul>
					<li>
						<Link className="clickable index" to="/" aria-current={location.pathname === "/dynamisk_sida/" ? "page" : undefined}>Home</Link>
					</li>
					<li>
						<Link className="clickable work" to="/work" aria-current={location.pathname === "/dynamisk_sida/work" ? "page" : undefined}>Work</Link>
					</li>
					<li>
						<Link className="clickable coding" to="/coding" aria-current={location.pathname === "/dynamisk_sida/coding" ? "page" : undefined}>Coding</Link>
					</li>
					<li>
						<Link className="clickable education" to="/education" aria-current={location.pathname === "/dynamisk_sida/education" ? "page" : undefined}>Education</Link>
					</li>
					<li>
						<Link className="clickable skills" to="/skills" aria-current={location.pathname === "/dynamisk_sida/skills" ? "page" : undefined}>Skills</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
