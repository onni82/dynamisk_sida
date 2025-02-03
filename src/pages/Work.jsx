import React, { useState, useEffect } from 'react';

const Work = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('./data.json')
			.then((response) => response.json())
			.then((jsonData) => {
				setData(jsonData);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
	}, []
	);

	if (loading) return <main><p>Loading data</p></main>;

	return (
		<main>
			<h1>Work Experience</h1>
			<div>
				{data.work.map((work) => (
					<section key={work.id}>
						<p className="sub-category">{work.employer}</p>
						<p>{work.period} - {work.title}</p>
						<p>{work.description}</p>
						<p>{work.location}</p>
					</section>
				))}
			</div>
		</main>
	);
};

export default Work;
