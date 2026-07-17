import "./TopRiskSupporters.css";

const TopRiskSupporters = ({ supporters }) => {
	return (
		<section className="top-risk">
			<h2 className="top-risk-title">Top Risk Supporters</h2>

			<table className="top-risk-table">
				<thead>
					<tr>
						<th>Naam</th>
						<th>Team</th>
						<th>Risicoscore</th>
					</tr>
				</thead>

				<tbody>
					{supporters.map((supporter, index) => (
						<tr key={supporter._id || supporter.uid || supporter.naam || index}>
							<td>{supporter.naam}</td>
							<td>{supporter.team}</td>
							<td>{supporter.risicoscore}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default TopRiskSupporters;
