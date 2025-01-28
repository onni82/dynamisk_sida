function Footer() {
	return (
		<footer id="footer">
			<p>&copy; {new Date().getFullYear()} <span class="black-text" id="easteregg">Onni Bucht</span></p>
			<a class="clickable contact" href="./contact">Contact</a>
		</footer>
	);
}

export default Footer;