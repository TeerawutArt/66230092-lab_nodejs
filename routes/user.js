const express = require('express');
const router = express.Router();

const users = [
  {
    id: 1,
    fullname: 'Teerawut Kabkaew',
    avatar:
      'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/07/07/fef3ba07-78ab-4b6f-98bd-c4281caa0fa4_2b7d0fc3.jpg?itok=cGBIcWdn&v=1688725357',
  },
  {
    id: 2,
    fullname: 'Jame Gun',
    avatar:
      'https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg',
  },
];

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: [User]
 *     summary: Authenticate user.
 *     description: Authenticate user with provided credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 */
router.post('/user/login', function (req, res) {
  const { username, password } = req.body;
  const id = 1; //รหัส User 1
  // Validate username and password (example: check against database)
  if (username === '66230092' && password === '123456') {
    // Authentication successful
    res
      .status(200)
      .json({ id: id, message: 'User authenticated successfully' });
  } else {
    // Authentication failed
    res
      .status(401)
      .json({ id: 0, message: 'Unauthorized. Invalid credentials.' });
  }
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get a user by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: A single user object.
 *       404:
 *         description: user not found.
 */
router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const result = users.find((rs) => rs.id === parseInt(id));
  // console.log(id);
  res.json(result);
});

module.exports = router;
