import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Th, Td } from "../components/Table";
import { Input, FormBtn } from "../components/Form";
import UtilDate from "../utils/Utils";
import PeopleImage from "../img/people.jpg"
import "../style.css";

function Comments({ username }) {
	// Setting our component's initial state
	const [comments, setComments] = useState([]);
	const [formObject, setFormObject] = useState({
	  search: "",
	  username: ""
	});

 
	// Load all comments and store them with setComments
	useEffect(() => {
      // set user after successful component mount
      setFormObject({
		 search: "",
		 username: ""
		})

      loadComments();

   }, [username]);
   

	// Loads all comments and sets them to comments
	function loadComments() {
		API.getComments()
			//.then((res) => console.log(res.data))
			.then((res) => setComments(res.data))
			.catch((err) => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// When the form is submitted, use the API.saveComment method to save the comment data
	// Then reload comments from the database
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.search.length > 2) {
			API.getSearchComment(formObject.search)
			.then((res) => setComments(res.data))
            .then(() => setFormObject({
			   search: "",
	           username: ""
            }))
			.catch((err) => console.log(err));
		}
		else{
			loadComments();
		}
	}

	return <>
		<Row>
			{/* <Col size='md-'> */}
				<div className="col-md-8" style={{ display: "inline-block", float:"flex" }}>
					<img src={PeopleImage} className="img_Post" alt="Group people"  /> 
					<h2 className="title enter_text">List of all requests </h2>
			{/* </Col> */}
			{/* <Col size='md-6'> */}
				{/* style={{ float:"bottom"}} */}
				{/* <div className="d-flex justify-content-center" style={{ backgroundColor: "red", color: "white", display: "flex", justifycontent: "space-around"}}> */}
					<form> 
						<Input value={formObject.search} onChange={handleInputChange} name='search' id='search' placeholder='Enter your title search here' />
						<FormBtn
							onClick={handleFormSubmit}>
							Search
						</FormBtn>
					</form>
				</div>
			{/* </Col> */}
		</Row>,
		<Row>
			<Col size='md-12'>
				{comments.length ? (
					<Table>
						<Tr>
							<Th>Member</Th>
							<Th>Title</Th>
							<Th>Detail</Th>
							<Th>Offer</Th>
							<Th>Date</Th>
						</Tr>
						{comments.map(comment => (
							<Tr key={comment._id}>
								<Td><strong>{comment.username}</strong> 
								</Td>
								<Td>
									<Link
										to={"/comments/" + comment._id}
										style={{ textAlign: "left", display: "block" }}>
										<span>{comment.title}</span>
									</Link>
								</Td>
								<Td>{comment.detail}</Td>
								<Td>{comment.offer}</Td>
								<Td>{UtilDate.formatDate(comment.date)}</Td>
							</Tr>
						))}
					</Table>
				) : (
					<h3>No Results to Display</h3>
				)}
			</Col>
			{/* <Col size="sm-4">
			<Categories style={{ textAlign: "center", display: "block" }}/>
			</Col> */}
		</Row>,
	</>;
}

export default Comments;
