import React from "react";
import squareprofile from "../images/squareprofile.jpg";

const PageNotFound = () => {
	return (
		<main>
			<h1>⚔️ 404: Quest Failed! ⚔️</h1>
			<div>
				<section>
					<p>Adventurer, you have ventured into the unknown... but alas, this page does not exist!</p>
					<div class="options">
						<a href="/">🏰 Return to the Guild Hall</a>
						<a href="#" onclick="history.back()">📜 Search the Ancient Scrolls</a>
						<a href="/contact">🔮 Consult the Oracle</a>
					</div>
				</section>
			</div>
		</main>
	);
};

export default PageNotFound;
