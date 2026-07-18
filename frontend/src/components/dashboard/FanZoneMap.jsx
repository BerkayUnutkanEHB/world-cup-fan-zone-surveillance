import "./FanZoneMap.css";

const getRiskClass = (bezettingsgraad) => {
	if (bezettingsgraad >= 80) return "zone-card zone-card--high";
	if (bezettingsgraad >= 60) return "zone-card zone-card--medium";
	return "zone-card zone-card--low";
};

const FanZoneMap = ({ zones }) => {
	return (
		<section className="fan-zone-overview">
			<h2 className="fan-zone-overview-title">Fan Zone Overzicht</h2>

			<div className="fan-zone-map">
				{zones.map((zone) => (
					<div className={getRiskClass(zone.bezettingsgraad)} key={zone.naam}>
						<span className="zone-card-name">{zone.naam}</span>
						<span className="zone-card-density">
							{zone.bezettingsgraad}% bezet
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default FanZoneMap;
