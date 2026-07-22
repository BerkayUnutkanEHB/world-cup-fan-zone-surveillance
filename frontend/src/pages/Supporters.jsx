import { useEffect, useState } from "react";
import { getSupporters } from "../services/supporterService";
import "./Supporters.css";

const Supporters = () => {
	const [supporters, setSupporters] = useState([]);
	const [laden, setLaden] = useState(true);
	const [foutmelding, setFoutmelding] = useState("");

	useEffect(() => {
		const laadSupporters = async () => {
			try {
				const data = await getSupporters();
				setSupporters(data);
			} catch (error) {
				setFoutmelding(error.message);
			} finally {
				setLaden(false);
			}
		};

		laadSupporters();
	}, []);

	if (laden) {
		return (
			<main className="supporters-pagina">
				<p>Supporters worden geladen...</p>
			</main>
		);
	}

	if (foutmelding) {
		return (
			<main className="supporters-pagina">
				<p className="supporters-fout">{foutmelding}</p>
			</main>
		);
	}

	return (
		<main className="supporters-pagina">
			<div className="supporters-header">
				<div>
					<h1>Supporters</h1>
					<p>Overzicht van alle geregistreerde supporters.</p>
				</div>

				<div className="supporters-aantal">{supporters.length} supporters</div>
			</div>

			<div className="supporters-tabel-container">
				<table className="supporters-tabel">
					<thead>
						<tr>
							<th>UID</th>
							<th>Naam</th>
							<th>Nationaliteit</th>
							<th>Team</th>
							<th>Basisrisico</th>
							<th>Risicoscore</th>
						</tr>
					</thead>

					<tbody>
						{supporters.map((supporter) => (
							<tr key={supporter._id}>
								<td>{supporter.uid}</td>
								<td>{supporter.naam}</td>
								<td>{supporter.nationaliteit}</td>
								<td>{supporter.team}</td>
								<td>{supporter.basisrisico}</td>
								<td>{supporter.risicoscore}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default Supporters;
