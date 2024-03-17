/** App for broken-app */

const express = require('express');
const axios = require('axios');
const ExpressError = require("./expressError")
const app = express();

app.use(express.json());

const USER_API = 'https://api.github.com/users';

/** POST /   return GitHub user data
 *
 * Given {developers: [username1, username2]}
 *
 * Returns [{bio, name}, ...]
 *
 */

app.post('/', async function(req, res, next) {
  try {
    // get array of requests to github for info
    let promises = req.body.developers.map(developer =>
      axios.get(`${USER_API}/${developer}`)
    );

    // wait for all of these requests for finish
    let results = await Promise.all(promises);

    let out = results.map(r => ({
      name: r.data.name,
      bio: r.data.bio
    }));

    return res.json(out);
  } catch (err) {
    return next(err);
  }
});

/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError('Not Found', 404);
  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
  let status = err.status || 500;

  return res.status(status).json({
    status,
    message: err.message
  });
});

app.listen(3000, function() {
  console.log('server listening on 3000');
});

module.exports = app;
