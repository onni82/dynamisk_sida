import React from "react";
import { useEffect } from "react";

const Coding = () => {
	// useEffect(function() {
	// 	document.title = "Coding";
	// }, []);
	return (
		<main>
			<h1>Coding</h1>
			<div>
				<section>
					<div class="no-print">
						<p class="sub-category">Adventure Game</p>
						<img class="skill-logo" alt="Dotnet icon" src="./images/dotnet.png" />
						<p>A console based game written in C#.
							<a href="https://github.com/onni82/AdventureGame">GitHub repository link</a>.
						</p>
						<input type="checkbox" id="toggle-AdventureGame" class="toggle-info" hidden />
						<p>
							<label for="toggle-AdventureGame" class="toggle-link">Click here to read more</label>
						</p>
					</div>
					<div class="modal print">
						<div class="modal-content">
							<label for="toggle-AdventureGame" class="close">&times;</label>
							<h2>Adventure Game</h2>
							<p>A console based game written in C#.
								<a href="https://github.com/onni82/AdventureGame">GitHub repository link</a>.
							</p>
							<p>
								A text-based role playing game based on school assignment.<br />
								The original project was a school assignment while taking Programming 1 at a municipal
								school.<br />
								Originally it was written in C/C++.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div class="no-print">
						<p class="sub-category">Projektuppgift</p>
						<img class="skill-logo" alt="C++ icon" src="./images/cpp.png" />
						<p>A console based game written in C/C++. 
							<a href="https://github.com/onni82/projektuppgift">GitHub repository link</a>.
						</p>
						<input type="checkbox" id="toggle-projektuppgift" class="toggle-info" hidden />
						<p>
							<label for="toggle-projektuppgift" class="toggle-link">Click here to read more</label>
						</p>
					</div>
					<div class="modal print">
						<div class="modal-content">
							<label for="toggle-projektuppgift" class="close">&times;</label>
							<h2>Adventure Game</h2>
							<p>A console based game written in C/C++. <a
									href="https://github.com/onni82/projektuppgift">GitHub repository link</a>.</p>
							<p>
								A text-based role playing game, which was a school assignment while taking Programming 1
								at a municipal school.<br />
								All comments are in Swedish.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div class="no-print">
						<p class="sub-category">onnibucht.netlify.app</p>
						<img class="skill-logo" alt="React icon" src="./images/react.png" />
						<p>A website built using Gatsby, which is a React library.
							<a href="https://github.com/onni82/onnibucht">GitHub repository link</a>.
						</p>
						<input type="checkbox" id="toggle-onnibucht" class="toggle-info" hidden />
						<p>
							<label for="toggle-onnibucht" class="toggle-link">Click here to read more</label>
						</p>
					</div>
					<div class="modal print">
						<div class="modal-content">
							<label for="toggle-onnibucht" class="close">&times;</label>
							<h2>onnibucht.netlify.app</h2>
							<p>A website built using Gatsby, which is a React library and hosted on
								<a href="https://github.com/onni82/onnibucht">GitHub</a>. Link to website: 
								<a href="https://onnibucht.netlify.app">onnibucht.netlify.app</a>
							</p>
							<p>
								Created using Gatsby, based on an earlier GitHub repository called emanuelbucht,
								available on <a href="https://emanuelbucht.netlify.app">emanuelbucht.netlify.app</a>.<br />
								Hosted on Netlify.
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Coding;
