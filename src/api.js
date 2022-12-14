const express = require('express');

const rescue = require('express-rescue');

const { error } = require('./middleware');

const { loginRouter } = require('./routes/loginRoute');
const { userRouter } = require('./routes/userRoute');
const { categoryRouter } = require('./routes/categoryRoute');
const { postRouter } = require('./routes/postRoute');

// ...

const app = express();

app.use(express.json());
app.use('/', rescue(loginRouter));
app.use('/', rescue(userRouter));
app.use('/', rescue(categoryRouter));
app.use('/', rescue(postRouter));

// ...
app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
