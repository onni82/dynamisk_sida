import { useLocation } from "react-router-dom";
import { Link } from "react-router";

const Header = () => {
	const location = useLocation();

	return (
		<header>
			<div>
				<a href="/" aria-label="Home" id="header-logo"></a>
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
						<a
							className="clickable coding"
							href="/dynamisk_sida/coding"
							aria-current={location.pathname === "/dynamisk_sida/coding" ? "page" : undefined}
						>
							Coding
						</a>
					</li>
					<li>
						<a
							className="clickable education"
							href="/dynamisk_sida/education"
							aria-current={location.pathname === "/dynamisk_sida/education" ? "page" : undefined}
						>
							Education
						</a>
					</li>
					<li>
						<a
							className="clickable skills"
							href="/dynamisk_sida/skills"
							aria-current={location.pathname === "/dynamisk_sida/skills" ? "page" : undefined}
						>
							Skills
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
