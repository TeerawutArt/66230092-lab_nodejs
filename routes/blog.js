const express = require("express");
const router = express.Router();
const blogs = [
  {
    id: 1,
    title: "Apple Watch series 8",
    description: "Apple",
    cover:
      "https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg",
  },
  {
    id: 2,
    title: "Iphone 14 PRO",
    description: "Apple",
    cover:
      "https://promotions.co.th/wp-content/uploads/2022/09/iphone14-pro-max.jpg",
  },
  {
    id: 3,
    title: "Twice",
    description: "Korea",
    cover:
      "https://www.hallyukstar.com/wp-content/uploads/2023/03/twice-readytobe.webp",
  },
];

/**
 * @swagger
 * /blog:
 *   get:
 *     tags: [Blog]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/blog", (req, res) => {
  res.json(blogs);
});

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags: [Blog]
 *     summary: Get a blog by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *     responses:
 *       200:
 *         description: A single blog object.
 *       404:
 *         description: blog not found.
 */
router.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const result = blogs.find((rs) => rs.id === parseInt(id));
  console.log(id);
  res.json(result);
});

module.exports = router;
