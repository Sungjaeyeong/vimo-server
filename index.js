const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

const userRouter = require('./routes/user');
const insertRouter = require('./routes/insert');
const linkRouter = require('./routes/link');
const updateRouter = require('./routes/update');
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
app.use(cors({
  origin: ['https://vimo.link', 'http://localhost:3000'],
  method: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
}));

app.use('/user', userRouter);
app.use('/insert', insertRouter);
app.use('/link', linkRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

app.use('/', (req, res) => {
  res.send("Hello World");
})

app.listen(5000, () => {
  console.log('server on 5000');
})
