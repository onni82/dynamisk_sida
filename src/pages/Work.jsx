import React, { useState, useEffect } from 'react';

const Work = () => {
	return (
		<main>
			<h1>Work Experience</h1>
			<div>
				<section>
					<p class="sub-category">Securitas</p>
					<p>April 2022-Present - Security Guard</p>
					<p>Full-time contract as a security guard. On behalf of Securitas, I patrol several buildings at one
						of their clients' sites in Södertälje.<br/>This also includes report writing and getting called
						out on fire and emergency alarms, as well as working as a receptionist and escort when needed.
					</p>
					<p>Södertälje, Sweden</p>
				</section>
				<section>
					<p class="sub-category">Mind Proxy AB</p>
					<p>June 2023-Sept 2023 - Supervisor and Administrator</p>
					<p>Norberg, Sweden (Remote)</p>
				</section>
			</div>
		</main>
	);
};

export default Work;
