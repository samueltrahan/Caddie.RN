var express = require("express");
var router = express.Router();
const userCtrl = require("../controllers/users");

/* GET users listing. */
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;