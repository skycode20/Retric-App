const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create)
  .put(commentsController.update);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

// Matches with "/api/comments/:user"
router
  .route("/user/:user")
  .get(commentsController.findByUser);

// Matches with "/api/comments/:search"
router
  .route("/search/:search")
  .get(commentsController.findBySearch);
  
module.exports = router;
