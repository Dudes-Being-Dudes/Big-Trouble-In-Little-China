const categoriesRouter = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler } = require("./utils");

categoriesRouter.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const categories = await prisma.categories.findMany();
    res.send(categories);
  })
);

categoriesRouter.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const { name } = req.body;

    const createdCategory = await prisma.categories.create({
      data: {
        name,
      },
    });
    res.send(createdCategory);
  })
);

categoriesRouter.patch(
  "/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const { name } = req.body;
    const updatedCategory = await prisma.categories.update({
      where: {
        id: +req.params.categoryId,
      },
      data: {
        name,
      },
    });
    res.send(updatedCategory);
  })
);

categoriesRouter.delete(
  "/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const deletedCategory = await prisma.categories.delete({
      where: {
        id: +req.params.categoryId,
      },
    });
    res.send(deletedCategory);
  })
);

//GET/api/categories/categoryId
categoriesRouter.get(
  "/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const getCategory = await prisma.products.findMany({
      where: {
        category_id: +req.params.categoryId,
      },
    });
    res.send(getCategory);
  })
);

module.exports = categoriesRouter;
