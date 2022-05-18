import logo from "../images/airbnb-logo.jpg";

function NavBar() {
	return (
		<div className="navbar">
			<img src={logo} className="nav-logo" alt="airbnb logo"/>
		</div>
	);
}

export default NavBar;