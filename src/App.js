import Navbar from "./Components/Home/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";


function App() {
  return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
