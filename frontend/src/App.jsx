import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Supporters from "./pages/Supporters";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/supporters" element={<Supporters />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
