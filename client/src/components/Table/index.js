import React from "react";
import "./table.css";

export function Table({ children }) {
	return (
		// <table className="table table-dark table-striped text-center text-break">
		<table class="demotbl">
			<tbody> 
            {children}
         	</tbody>
		</table>
	);
}

export function Th({ children }) {
	return <td scope="col" className="th_Header w-16">{children}</td>;
}

export function Tr(props) {
	return <tr {...props} >{props.children}</tr>;
}

export function Td({ children }) {
	return <td className="td_Col w-16">{children}</td>;
}

export default Table;
