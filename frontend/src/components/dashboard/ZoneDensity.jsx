import "./ZoneDensity.css";

const ZoneDensity = ({ zones }) => {
	return (
		<section className="zone-density">
			<h2 className="zone-density-title">Bezettingsgraad per zone</h2>

			{zones.map((zone) => (
				<div className="zone-item" key={zone.naam}>
					<div className="zone-header">
						<span>{zone.naam}</span>
						<span>{zone.bezettingsgraad}%</span>
					</div>

					<div className="progress-bar">
						<div
							className="progress-fill"
							style={{
								width: `${zone.bezettingsgraad}%`,
							}}
						></div>
					</div>
				</div>
			))}
		</section>
	);
};

export default ZoneDensity;
