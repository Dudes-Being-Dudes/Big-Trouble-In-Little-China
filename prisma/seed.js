const prisma = require("../prisma/prisma");

const { Items, Categories } = require("./seedData");

const seedDb = async () => {
  //seeding our Categories
  console.log("creating Categories");
  await Promise.all(
    Categories.map(async (category) => {
      return prisma.Categories.create({
        data: category,
      });
    })
  );

  console.log("Finished creating Categories");
  //seeding items
  console.log("creating Items");
  await Promise.all(
    Items.map(async (item) => {
      return prisma.Items.create({
        data: item,
      });
    })
  );
  console.log("Finished creating items");
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
