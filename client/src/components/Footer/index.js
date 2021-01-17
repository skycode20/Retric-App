import React from "react";
import useLogRender from "../../utils/useLogPath";

function Footer() {
	useLogRender();

	return (
		<footer className="footer">

			<div className="container-fluid h-25">

				<div className="row">
					<div className="col-lg-12 bg-light text-center text-bottom text-muted pt-3">
						<p>Copyright © Retric 2021</p>
					</div>
				</div>

			</div>
		</footer>
	);
}

export default Footer;
