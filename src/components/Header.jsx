function Header() {
	return (
		<header>
			<div>
				<a href="/" aria-label="Home" id="header-logo"></a>
				<span aria-label="Menu" id="menu-icon">&#9776;</span>
			</div>
			<nav id="menu">
				<ul>
					<li><a class="clickable index" href="/">Home</a></li>
					<li><a class="clickable work" href="/work">Work Experience</a></li>
					<li><a class="clickable coding" href="/coding">Coding</a></li>
					<li><a class="clickable education" href="/education">Education</a></li>
					<li><a class="clickable skills" href="/skills">Skills</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;