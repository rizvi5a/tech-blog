const router = require('express').Router();
const { Post,User,Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

   
  
  
  
  
      // Serialize data so the template can read it
    //  const comments = commenttData.map((comment) => comment.get({ plain: true }));
      
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log ("ERROR:", err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  if (!req.session.user_id)
    res.end ("user not logged in");
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log ("POST: ",post);
    const userId = post.user_id | 0;
    const postId = parseInt(req.params.id);
    console.log ("USER ID: "+userId);
    const commenttData = await Comment.findAll({
     where: {post_id:postId} ,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


   // console.log ("commenttData", commenttData);

    let comments=[]
    // Serialize data so the template can read it
    if (commenttData!==null)
      comments = commenttData.map((comment) => comment.get({ plain: true }));

    console.log ("COMMENTS:");
    console.log(comments);
    res.render('post', {
      ...post,
      comments,
      userId: req.session.user_id,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log ("ERROR");
    res.status(500).json(err);
  }
});





// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
   // console.log ("PROFILE.ERROR")
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// 
router.get('/logout', (req, res) => {
  console.log("LOUGUT");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      //res.status(204).end();
      res.redirect('/login');
    });
  } else {
   // res.status(404).end();
   res.redirect('/login');
  }
});
// module.exports = router;

router.get('/comment/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const comment = commentData.get({ plain: true });

    res.render('comment', {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// 


module.exports = router;