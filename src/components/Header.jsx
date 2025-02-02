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
							href="/dynamisk_sida/"
							aria-current={location.pathname === "/dynamisk_sida/" ? "page" : undefined}
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="clickable work"
							href="/dynamisk_sida/work"
							aria-current={location.pathname === "/dynamisk_sida/work" ? "page" : undefined}
						>
							Work Experience
						</a>
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
