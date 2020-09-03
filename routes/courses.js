const express = require("express");
const router = express.Router();
const coursesCtrl = require("../controllers/courses");


router.get('/search', isLoggedIn, coursesCtrl.search);
router.get('/api', isLoggedIn, coursesCtrl.courseQuery);
router.post('/save', isLoggedIn, coursesCtrl.create);
router.get('/courselist', isLoggedIn, coursesCtrl.index);
router.post('/:id/details', isLoggedIn, coursesCtrl.courseDetails);
router.delete('/:id', isLoggedIn, coursesCtrl.deleteCourse);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
