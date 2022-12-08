const express = require('express');

// ...
const app = express();
const { loginRoute } = require('./routes/login.route');
const { categoryRoutes } = require('./routes/categories.routes');
const { userRoutes } = require('./routes/user.routes');
const { postsRoute } = require('./routes/posts.route');

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', postsRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
