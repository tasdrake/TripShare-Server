const express = require('express');
const users = require('./routes/users');
const trips = require('./routes/trips');
const total = require ('./routes/total');
const login = require ('./routes/login');
const alexa = require('./routes/alexa');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const PORT = process.env.PORT;
const { facebook } = require('./config');
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));

const transformFacebookProfile = (profile) => ({
  name: profile.name,
  avatar: profile.picture.data.url,
});

passport.use(new FacebookStrategy(facebook,
  // Gets called when user authorizes access to their profile
  async (accessToken, refreshToken, profile, done)
    // Return done callback and pass transformed user object
    => done(null, transformFacebookProfile(profile._json))
));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

app.use(bodyParser.json());

app.use('/login', login);
app.use('/users', users);
app.use('/trips', trips);
app.use('/total', total);
app.use('/alexa', alexa);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json(err);
});

app.listen(PORT || 3000, () => {
  console.log(`listening on port ${PORT || 3000}`);
});
module.exports = app;
