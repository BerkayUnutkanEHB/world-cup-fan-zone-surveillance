const StatCard = ({ titel, waarde }) => {
	return (
		<div>
			<p>{titel}</p>
			<h2>{waarde}</h2>
		</div>
	);
};

export default StatCard;
