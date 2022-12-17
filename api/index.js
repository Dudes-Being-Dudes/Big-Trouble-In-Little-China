const router = require("express").Router();

router.use("/items", require("./items"));
router.use("/categories", require("./categories"));
