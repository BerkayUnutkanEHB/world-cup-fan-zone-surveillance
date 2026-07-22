import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const getLinkClassName = ({ isActive }) =>
		isActive ? "navbar-link actief" : "navbar-link";

	return (
		<nav className="navbar">
			<div className="navbar-logo">Fan Zone Surveillance</div>

			<div className="navbar-links">
				<NavLink to="/" end className={getLinkClassName}>
					Dashboard
				</NavLink>

				<NavLink to="/supporters" className={getLinkClassName}>
					Supporters
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
