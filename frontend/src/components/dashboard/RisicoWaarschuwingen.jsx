import "./RisicoWaarschuwingen.css";

const RisicoWaarschuwingen = ({ waarschuwingen = [] }) => {
	return (
		<section className="risico-waarschuwingen">
			<h2>Risico-waarschuwingen</h2>

			{waarschuwingen.length === 0 ? (
				<p className="geen-waarschuwingen">
					Geen actieve risico-waarschuwingen.
				</p>
			) : (
				waarschuwingen.map((waarschuwing, index) => (
					<div className="waarschuwing" key={`${waarschuwing.zone}-${index}`}>
						<strong>
							{waarschuwing.zone} - {waarschuwing.niveau}
						</strong>

						<p>{waarschuwing.bericht}</p>
					</div>
				))
			)}
		</section>
	);
};

export default RisicoWaarschuwingen;
