import "./StatCard.css";

const StatCard = ({ titel, waarde }) => {
	return (
		<div className="stat-card">
			<p className="stat-card-title">{titel}</p>
			<h2 className="stat-card-value">{waarde}</h2>
		</div>
	);
};

export default StatCard;
