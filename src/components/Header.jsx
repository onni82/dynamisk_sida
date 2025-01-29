import { useLocation } from "react-router-dom";

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
						<a
							className="clickable index"
							href="/"
							aria-current={location.pathname === "/" ? "page" : undefined}
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="clickable work"
							href="/work"
							aria-current={location.pathname === "/work" ? "page" : undefined}
						>
							Work Experience
						</a>
					</li>
					<li>
						<a
							className="clickable coding"
							href="/coding"
							aria-current={location.pathname === "/coding" ? "page" : undefined}
						>
							Coding
						</a>
					</li>
					<li>
						<a
							className="clickable education"
							href="/education"
							aria-current={location.pathname === "/education" ? "page" : undefined}
						>
							Education
						</a>
					</li>
					<li>
						<a
							className="clickable skills"
							href="/skills"
							aria-current={location.pathname === "/skills" ? "page" : undefined}
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
