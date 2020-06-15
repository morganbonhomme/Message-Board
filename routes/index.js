const express = require('express');

const router = express.Router();

const moment = require('moment');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini message board', messages });
});

router.post('/', (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
  };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
