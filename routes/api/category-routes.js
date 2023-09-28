const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      //JOIN with products, using the productData through table
      include: [{ model: Product, through: Product, as: 'category_id' }]
    })
      return res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
  });


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
  const categoryData = await Category.findOne(req.params.id, {
    //JOIN with products
    include: [{ model: Product, through: productData, as: 'category_id' }]
  })
  return res.json(categoryData);
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    let newCategory = await Category.create(req.body);
    return res.status(200).json(newCategory);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
    where: { id: req.params.id
    },
  })
  return res.status(200).json(deletedCategory);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
