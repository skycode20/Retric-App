import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Th, Td } from "../components/Table";
import { Input, TextArea, FormBtn, Dropbox } from "../components/Form";
import EditIcon from "../img/edit_2.svg";
import ThinkImage from "../img/manage.jpg"
import UtilDate from "../utils/Utils";
// import "../style.css";
import "./Manage.css";

function Manage({ username }) {

	// Setting our component's initial state
	const [comments, setComments] = useState([]);
	const [formObject, setFormObject] = useState( () => {
		return {
				_id: "",
				title: "",
				detail: "",
				offer: "",
				status: "",
				category: "",
				username: ""}
	});
    
    
	// Load all comments and store them with setComments
	useEffect(() => {
  	  
	  loadCommentsUser(username);

   }, [username]);
   
	
	// Clean all fields of page
	function cleanUpState() {
		console.log("cleanUpState");
		setFormObject({
			_id: "",
			title: "",
			detail: "",
			offer: "",
			status: "",
			category: "",
			username : ""
		})
	}

	// Deletes a comment from the database with a given id, then reloads comments from the db
	function loadCommentsUser(user) {
		API.getCommentUser(user)
		.then((res) => setComments(res.data))
		.catch((err) => console.log(err));
	}


	// Deletes a comment from the database with a given id, then reloads comments from the db
	function deleteComment(id) {
		API.deleteComment(id)
			.then((res) => loadCommentsUser(username))
			.catch((err) => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		console.log(event.target.value);
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// Handles Edit post when user click in Edit image
	function handlePostEdit(id) {

		const commentToEdit = comments.find( elem => elem._id === id);
		setFormObject(commentToEdit);
	}


	// When the form is submitted, use the API.saveComment method to save the comment data
	// Then reload comments from the database
	function handleFormSubmit(event) {
		event.preventDefault();

		//Check that all fields are filled
		if (formObject.title.length >= 3 && formObject.detail.length >= 3 && formObject.offer.length >= 3) {

			console.log(formObject.title);
			console.log(formObject.detail);
			console.log(formObject.offer);
			console.log(formObject.category);
			console.log(formObject.status);
			console.log(formObject.id);
			console.log(formObject.username)

			//Check if the id is empty, if true, add it to the database, otherwise, update the record in the database
			if (formObject._id === undefined || formObject._id === ""){
				console.log("add new register");
				API.saveComment({
					title: formObject.title,
					detail: formObject.detail,
					offer: formObject.offer,
					status: "A",
					category: formObject.category,
					username: username,
				})
				.then(loadCommentsUser(formObject.username))
				.then(() => cleanUpState())
				.catch((err) => console.log(err));
			}
			else {
				console.log("update")
				API.updateComment({
					id: formObject._id,
					title: formObject.title,
					detail: formObject.detail,
					offer: formObject.offer,
					status: "U",
					category: formObject.category,
					username: formObject.username,
				})
				.then(loadCommentsUser(formObject.username))
				.then(() => cleanUpState())
				.catch((err) => console.log(err));

			}
			
		}
		// loadCommentsUser(username)
	}

	return <>
		<Row>
			<Col size='md-5'>
				<div>
					<img src={ThinkImage} className="img_Post" alt="Add Post"  /> 
				</div>
 			</Col>
			<Col size='md-7'>
				<h2 className="title">Add your post</h2>
				<form>
					<Col size='sm-12' margin ="auto">
						{/* <ForwardRefInput ref={ titleInputElRef } value={formObject.title} onChange={handleInputChange} name='title' id='title' placeholder='Enter your title here (required)' /> */}
						<Input value={formObject.title} onChange={handleInputChange} name='title' id='title' placeholder='Enter your title here (required)' />
					</Col>
					<Col size='sm-12' margin ="auto">
						<Dropbox value={formObject.category} onChange={handleInputChange} name="category" id="category" />
					</Col>
					<Col size='sm-12' margin ="auto">
						<TextArea value={formObject.detail} onChange={handleInputChange} name="detail" id="detail" placeholder='Enter your request here (required)' />
					</Col>
					<Col size='sm-12' margin ="auto">
						<TextArea value={formObject.offer} onChange={handleInputChange} name="offer" id="offer" placeholder='Enter your offer here (required)' />
					</Col>
					<FormBtn
						// disabled={!(formObject.body && formObject.detail)}
						onClick={handleFormSubmit}>
						Submit Request
					</FormBtn>
					<FormBtn
						// disabled={!(formObject.body && formObject.detail)}
						onClick={cleanUpState}>
						Clean
					</FormBtn>
				</form>
			</Col>
		</Row>,
		<Row>
			<Col size='md-12'>
				{comments.length ? (
					<Table>
						<Tr>
							<Th>Title</Th>
							<Th>Category</Th>
							<Th>Detail</Th>
							<Th>Offer</Th>
							<Th>Date</Th>
							<Th>Action</Th>
						</Tr>
						{comments.map(comment => (
							<Tr key={comment._id}>
								<Td>{comment.title}</Td>
								<Td>{comment.category}</Td>
								<Td>{comment.detail}</Td>
								<Td>{comment.offer}</Td>
								<Td>{UtilDate.formatDate(comment.date)}</Td>
								<Td>
									<DeleteBtn onClick={() => deleteComment(comment._id)} alt="Remove post" />
									<img src={EditIcon} className="img_Icon" role="button" alt="Edit post" onClick={() => handlePostEdit(comment._id)} />
								</Td>
							</Tr>
						))}
					</Table>
				) : (
					<h3>No Results to Display</h3>
				)}
			</Col>
		</Row>,
	</>;
}

export default Manage;
