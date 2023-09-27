const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll()
      return res.json(categoryData);
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
  });


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
  const categoryData = await Category.findOne(req.params.id)
  return res.json(categoryData);
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    let newCategory = await Category.create(req.body)
    return res.json(newCategory);
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.params.category_id
    },
  })
  .then((deletedCategory) => {
  return res.json(deletedCategory);
  })
  .catch ((err => res.json(err)));
});

module.exports = router;
