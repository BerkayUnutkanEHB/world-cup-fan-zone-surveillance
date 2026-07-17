import "./RecenteDetecties.css";

const RecenteDetecties = ({ detecties }) => {
	return (
		<section className="recente-detecties">
			<h2 className="recente-detecties-title">Recente Detecties</h2>

			<table className="recente-detecties-table">
				<thead>
					<tr>
						<th>Supporter</th>
						<th>Zone</th>
						<th>Tijdstip</th>
					</tr>
				</thead>

				<tbody>
					{detecties.map((detectie, index) => (
						<tr
							key={
								detectie._id ||
								`${detectie.supporter.uid}-${detectie.tijdstip}` ||
								index
							}
						>
							<td>{detectie.supporter.naam}</td>
							<td>{detectie.zone.naam}</td>
							<td>{new Date(detectie.tijdstip).toLocaleString()}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default RecenteDetecties;
