const express = require('express');

// ...
const app = express();
const { loginRoute } = require('./routes/login.route');
const { categoryRoutes } = require('./routes/categories.routes');
const { userRoutes } = require('./routes/user.routes');

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
