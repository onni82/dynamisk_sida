import { useLocation } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
	const location = useLocation();
	const [isClicked, setIsClicked] = useState(false);

	const handleEasterEggClick = () => {
		setIsClicked(!isClicked);
		document.body.style.backgroundColor = isClicked ? "" : "lightblue";
	}

	return (
		<footer id="footer">
			<p>
				&copy; {new Date().getFullYear()}{" "}
				<span
				className={`black-text ${isClicked ? "clicked" : ""}`}
				id="easteregg"
				onClick={handleEasterEggClick}>
					Onni Bucht
				</span>
			</p>
			<a
			className="clickable contact"
			href="/contact"
			aria-current={location.pathname === "/contact" ? "page" : undefined}
			>Contact</a>
		</footer>
	);
};

export default Footer;