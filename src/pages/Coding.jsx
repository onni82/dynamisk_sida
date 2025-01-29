import React from "react";
import dotnetIcon from "../images/dotnet.png";
import cppIcon from "../images/cpp.png";
import reactIcon from "../images/react.png";
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
					<div className="no-print">
						<p className="sub-category">Adventure Game</p>
						<img className="skill-logo" alt="Dotnet icon" src={dotnetIcon} />
						<p>A console based game written in C#.
							<a href="https://github.com/onni82/AdventureGame">GitHub repository link</a>.
						</p>
						<input type="checkbox" id="toggle-AdventureGame" className="toggle-info" hidden />
						<p>
							<label for="toggle-AdventureGame" className="toggle-link">Click here to read more</label>
						</p>
					</div>
					<div className="modal print">
						<div className="modal-content">
							<label for="toggle-AdventureGame" className="close">&times;</label>
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
					<div className="no-print">
						<p className="sub-category">Projektuppgift</p>
						<img className="skill-logo" alt="C++ icon" src={cppIcon} />
						<p>A console based game written in C/C++. 
							<a href="https://github.com/onni82/projektuppgift">GitHub repository link</a>.
						</p>
						<input type="checkbox" id="toggle-projektuppgift" className="toggle-info" hidden />
						<p>
							<label for="toggle-projektuppgift" className="toggle-link">Click here to read more</label>
						</p>
					</div>
					<div className="modal print">
						<div className="modal-content">
							<label for="toggle-projektuppgift" className="close">&times;</label>
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
					<div className="no-print">
						<p className="sub-category">onnibucht.netlify.app</p>
						<img className="skill-logo" alt="React icon" src={reactIcon} />
						<p>A website built using Gatsby, which is a React library.
							<a href="https://github.com/onni82/onnibucht">GitHub repository link</a>.
						</p>
						<input type="checkbox" id="toggle-onnibucht" className="toggle-info" hidden />
						<p>
							<label for="toggle-onnibucht" className="toggle-link">Click here to read more</label>
						</p>
					</div>
					<div className="modal print">
						<div className="modal-content">
							<label for="toggle-onnibucht" className="close">&times;</label>
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
