import axios from "axios";

export default {
  // Gets all comments
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Gets the comment with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Gets all comments with the given username
  getCommentUser: function(user) {
    return axios.get("/api/comments/user/" + user);
  },
  // Gets all comments with the search filter
  getSearchComment: function(search) {
    return axios.get("/api/comments/search/" + search);
  },
  // Deletes the comment with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Update the comment with the given id
  updateComment: function(commentData) {
    return axios.put("/api/comments", commentData);
  },
  // Saves a comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  }
};
