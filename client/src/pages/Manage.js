import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Th, Td } from "../components/Table";
import { ForwardRefInput, TextArea, FormBtn } from "../components/Form";
import Categories from "../components/Categories"
import "../style.css";

// function Manage({ username }) {
//function Manage(props, user) {
function Manage({ username }) {

	// Setting our component's initial state
	const [comments, setComments] = useState([]);
	const [formObject, setFormObject] = useState({
	  title: "",
	  detail: "",
	  offer: "",
	  status: "A",
	  username: ""
	});
	
	console.log("heyola - we are in manage");
	// console.log(userName);
	console.log("what is it");
	//console.log(props);
	
    // const [formSearch, setFormSearch] = useState({
	// 	search: "",
	// 	username: ""
	// });
   
   // get input element ref for focus
   const titleInputElRef = useRef();
 
	// Load all comments and store them with setComments
	useEffect(() => {
      // set user after successful component mount
      setFormObject({
		 title: "",
		 detail: "",
		 offer: "",
		 status: "A",
         username: "",
         username})

      loadComments();

      // focus on titleInputEl if ref exists
      titleInputElRef.current.focus()
   }, [username]);
   

	// Loads all comments and sets them to comments
	function loadComments() {
		API.getComments()
			.then((res) => setComments(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a comment from the database with a given id, then reloads comments from the db
	function deleteComment(id) {
		API.deleteComment(id)
			.then((res) => loadComments())
			.catch((err) => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// function handleDetailChange(event) {
	// 	const { detail, value } = event.target;
	// 	this.setState({[detail]: value});
			  
	// 	setFormObject({ ...formObject, [detail]: value });
	// }

	// handleInputChange = event => {
	// 	const { name, value } = event.target;
	// 	this.setState({
	// 	  [name]: value
	// 	});
	//   };


	// *** start Search module
	// function handleSearchChange(event) {
	// 	const { search, value } = event.target;
    // 		this.setState({
    //   			[search]: value
    // 		});
  	// };
	

	// function handleSearchSubmit(event) {
	// 	console.log(event);
	// }
	// // *** end Search module
	



	// When the form is submitted, use the API.saveComment method to save the comment data
	// Then reload comments from the database
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.title.length > 3) {
			console.log(formObject.title);
			console.log(formObject.detail);
			console.log(formObject.offer);
			console.log(formObject.status);
			API.saveComment({
				title: formObject.title,
				detail: formObject.detail,
				offer: formObject.offer,
				status: formObject.status,
				username: formObject.username,
			})
            .then(loadComments)
            .then(() => setFormObject({
			   title: "",
			   detail: "",
			   offer: "",
               username: ""
            }))
				.catch((err) => console.log(err));
		}
	}

	return <>
		<Row>
			<Col size='md-12'>
				<h2 className="title">Add your Post</h2>
				<form>
					<Col size='sm-6' margin ="auto">
						<ForwardRefInput ref={ titleInputElRef } value={formObject.title} onChange={handleInputChange} name='title' placeholder='Enter your title here (required)' />
					</Col>
					<Col size='sm-6' margin ="auto">
						<TextArea value={formObject.detail} onChange={handleInputChange} name="detail" placeholder='Enter your request here (required)' />
					</Col>
					<Col size='sm-6' margin ="auto">
						<TextArea value={formObject.offer} onChange={handleInputChange} name="offer" placeholder='Enter your offer here (required)' />
					</Col>
					<FormBtn
						// disabled={!(formObject.body && formObject.detail)}
						onClick={handleFormSubmit}>
						Submit Request
					</FormBtn>
				</form>
			</Col>
		</Row>,
		<Row>
			<Col size='md-8'>
				{comments.length ? (
					<Table>
						<Tr>
							<Th>Title</Th>
							<Th>Detail</Th>
							<Th>Date</Th>
							<Th>action</Th>
						</Tr>
						{comments.map(comment => (
							<Tr key={comment._id}>
								<Td>
									<Link
										to={"/comments/" + comment._id}
										style={{ textAlign: "left", display: "block" }}>
										<span>{comment.title}</span>
									</Link>
								</Td>
								<Td>{comment.detail}</Td>
								<Td>{comment.date}</Td>
								<Td>
									<DeleteBtn onClick={() => deleteComment(comment._id)} />
								</Td>
							</Tr>
						))}
					</Table>
				) : (
					<h3>No Results to Display</h3>
				)}
			</Col>
			<Col size="sm-4">
			<Categories style={{ textAlign: "center", display: "block" }}/>
			</Col>
		</Row>,
	</>;
}

export default Manage;
