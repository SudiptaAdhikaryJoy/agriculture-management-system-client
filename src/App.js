import Navbar from "./Components/Home/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import About from "./Components/About/About";


function App() {
  return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
