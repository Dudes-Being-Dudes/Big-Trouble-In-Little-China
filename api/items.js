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

itemsRouter.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const {
      name,
      price,
      description,
      imageUrl,
      isSpicy,
      isVegan,
      isVegetarian,
      isDairyFree,
      isGlutenFree,
      category_id,
    } = req.body;

    const createdItem = await prisma.items.create({
      data: {
        name,
        price,
        description,
        imageUrl,
        isSpicy,
        isVegan,
        isVegetarian,
        isDairyFree,
        isGlutenFree,
        category_id,
      },
    });
    res.send(createdItem);
  })
);

itemsRouter.patch(
  "/:itemId",
  asyncErrorHandler(async (req, res, next) => {
    const {
      name,
      price,
      description,
      imageUrl,
      isSpicy,
      isVegan,
      isVegetarian,
      isDairyFree,
      isGlutenFree,
      category_id,
    } = req.body;
    const updatedItem = await prisma.items.update({
      where: {
        id: +req.params.itemId,
      },
      data: {
        name,
        price,
        description,
        imageUrl,
        isSpicy,
        isVegan,
        isVegetarian,
        isDairyFree,
        isGlutenFree,
        category_id,
      },
    });
    res.send(updatedItem);
  })
);

itemsRouter.delete(
  "/:itemId",
  asyncErrorHandler(async (req, res, next) => {
    const deletedItem = await prisma.items.delete({
      where: {
        id: +req.params.itemId,
      },
    });
    res.send(deletedItem);
  })
);
itemsRouter.get(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const itemById = await prisma.items.findUnique({
      where: {
        id: +req.params.itemId,
      },
    });
    res.send(itemById);
  })
);

itemsRouter.get(
  "/category/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const categoryById = await prisma.products.findMany({
      where: {
        category_id: +req.params.categoryId,
      },
    });
    res.send(categoryById);
  })
);

module.exports = itemsRouter;
