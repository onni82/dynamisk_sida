import { useLocation } from "react-router-dom";

const Footer = () => {
	const location = useLocation();

	return (
		<footer id="footer">
			<p>&copy; {new Date().getFullYear()} <span className="black-text" id="easteregg">Onni Bucht</span></p>
			<a
			className="clickable contact"
			href="/contact"
			aria-current={location.pathname === "/contact" ? "page" : undefined}
			>Contact</a>
		</footer>
	);
};

export default Footer;