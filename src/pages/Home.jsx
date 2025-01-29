import React from "react";
import squareprofile from "../images/squareprofile.jpg";

const Home = () => {
	return (
		<main>
			<h1>This is Onni Bucht</h1>
			<div>
				<section>
					<img class="fit-image" src="{squareprofile}" alt="Profile picture of Onni Bucht" />
				</section>
				<section>
					<p>Works as a <span class="bold-text">security guard</span>.</p>
					<p>Studying <span class="bold-text">.NET</span> full stack web development.</p>
					<p>Self-taught in <span class="bold-text">HTML</span>, <span class="bold-text">JavaScript</span>,
						<span class="bold-text">SQL</span>, <span class="bold-text">PHP</span> and
						<span class="bold-text">Java</span>.</p>
					<p>Has a bachelor's degree in <span class="bold-text">sound and music production</span>.</p>
					<p>Took a vocational course in <span class="bold-text">video production</span>.</p>
					<p>Have taken courses in <span class="bold-text">C++</span>, <span class="bold-text">Japanese</span>
						and <span class="bold-text">Korean</span>.</p>
				</section>
			</div>
		</main>
	);
};

export default Home;
