import React from "react";
import "./table.css";

export function Table({ children }) {
	return (
		<table className="table table-dark table-striped text-center text-break">
			<tbody> 
            {children}
         	</tbody>
		</table>
	);
}

export function Th({ children }) {
	return <td scope="col" className="w-16 table-title">{children}</td>;
}

export function Tr(props) {
	return <tr {...props} >{props.children}</tr>;
}

export function Td({ children }) {
	return <td className="w-16">{children}</td>;
}

export default Table;
