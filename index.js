const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require("cookie-parser");

const app = express();

const userRouter = require('./routes/user');
const insertRouter = require('./routes/insert');
const linkRouter = require('./routes/link');
const updateRouter = require('./routes/update');
const deleteRouter = require('./routes/delete');
const oauthRouter = require('./routes/oauth');

// app.use(
//   session({
//     secret: 'vimo',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       domain: 'localhost',
//       path: '/',
//       maxAge: 24 * 6 * 60 * 10000,
//       // sameSite: 'strict',
//       httpOnly: true,
//       // secure: true,
//     },
//   })
// );

app.use(express.json());
app.use(cors({
  origin: ['https://vimo.link', 'http://localhost:3000', 'https://localhost:3000', 'http://vimo.link.s3-website.ap-northeast-2.amazonaws.com'],
  method: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
}));

app.use(cookieParser());

app.use('/user', userRouter);
app.use('/insert', insertRouter);
app.use('/link', linkRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/oauth', oauthRouter);

app.use('/', (req, res) => {
  res.send("Hello World");
})

app.listen(5000, () => {
  console.log('server on 5000');
})