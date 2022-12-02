const express = require('express');

// ...
const app = express();
const { loginRoute } = require('./routes/login.route');
const { userRoutes } = require('./routes/user.routes');

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
