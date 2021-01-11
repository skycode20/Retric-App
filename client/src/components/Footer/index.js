import React from "react";
import useLogRender from "../../utils/useLogPath";

function Footer() {
	useLogRender();

	return (
		<footer class="footer">

			<div class="container-fluid h-25">

				<div class="row">
					<div class="col-lg-12 bg-light text-center text-bottom text-muted pt-3">
						<p>Copyright © Retric 2021</p>
					</div>


				</div>

			</div>
		</footer>
	);
}

export default Footer;
