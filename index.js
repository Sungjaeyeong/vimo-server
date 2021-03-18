const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

const postRouter = require('./routes/post');
const getRouter = require('./routes/get');
const patchRouter = require('./routes/patch');
const deleteRouter = require('./routes/delete');

app.use(
  session({
    secret: 'vimo',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'vimo.link',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    },
  })
);

app.use(express.json());
app.use(cors());

app.use('/post', postRouter);
app.use('/get', getRouter);
app.use('/patch', patchRouter);
app.use('/delete', deleteRouter);

app.use('/', (req, res) => {
  res.send("Hello World");
})

app.listen(5000, () => {
  console.log('server on 5000');
})
