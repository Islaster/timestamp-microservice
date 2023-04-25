const express = require("express");
const router = express.Router();
const timeCtrl = require("../controllers/timestamp");

router.get("/*", timeCtrl.index);

module.exports = router;
