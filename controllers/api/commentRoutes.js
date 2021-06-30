const router = require('express').Router();


const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// Comments

router.post('/',  async (req, res) => {

 console.log("comment.post");
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_name: req.session.userName,
      user_id: req.session.user_id,
    });
console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/test/:id",  async (req, res) => {
  const id =  req.params.id;

  res.send ("get comments: "+id);
});
router.get('/delete/:id', withAuth, async (req, res) => {
  console.log ("delete comment: "+ req.session.user_id);
 
  try {
    const id = parseInt( req.params.id);
    const userId = parseInt(req.session.user_id);
    console.log ("UserID: "+userId);
    const commentData = await Comment.destroy({
      where: {
        id: id,
        user_id: userId,
      },
    });

    if (!commentData) {
      console.log("no data ")
      res.status(404).json({ message: 'No comments found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete('/:id', withAuth, async (req, res) => {
  //console.log ("delete comment: "+ req.session.user_id);
 
  try {
    const id = parseInt( req.params.id);
    const userId = parseInt(req.session.user_id);
   // console.log ("UserID: "+userId);
    const commentData = await Comment.destroy({
      where: {
        id: id,
        user_id: userId,
      },
    });

    if (!commentData) {
     // console.log("no data ")
      res.status(404).json({ message: 'No comments found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:id', withAuth, async (req, res) => {
  console.log("Add comment",req.body)
        try {
          const commentData = await Comment.create(req.boady, {
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            }
          });
        //  console.log("Updated ")

          if (!commentData) {
            res.status(404).json({ message: 'No comments found with this id!' });
            return;
          }

          res.status(200).json(commentData);
        } catch (err) {
          res.status(500).json(err);
            }

  });


  module.exports = router;
