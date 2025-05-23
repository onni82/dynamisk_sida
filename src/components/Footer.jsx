import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = ({ menuClose }) => {
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
			<NavLink to="/contact" onClick={menuClose}>Contact</NavLink>
		</footer>
	);
};

export default Footer;