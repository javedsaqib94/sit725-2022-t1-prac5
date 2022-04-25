var express = require("express");
const controller = require("../controller");
var router = express.Router();


router.get('/', (req, res) => {
    controller.userController.getUser(req,res);
})


module.exports = router;