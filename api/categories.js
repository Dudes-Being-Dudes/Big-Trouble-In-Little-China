const categoriesRouter = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler } = require("./utils");

categoriesRouter.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const categories = await prisma.Categories.findMany();
    res.send(categories);
  })
);

module.exports = categoriesRouter;
