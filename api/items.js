const itemsRouter = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler } = require("./utils");

itemsRouter.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const items = await prisma.Items.findMany();
    res.send(items);
  })
);
