//import React from "react";
import React from "react";
import useLogRender from "../../utils/useLogPath";


function Nav(props) {
	useLogRender();
	
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="/">
			Retric
  		</a>
		<button
			className="navbar-toggler"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<a className="nav-link" href="/">
						Welcome! <strong>{props.auth.username}</strong>  <span className="sr-only">(current)  </span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/manage">
						Manage your List
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/team">
						Team
					</a>
				</li>
			</ul>
		</div>
	</nav>
	);
}

export default Nav;
