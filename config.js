export const facebook = {
  clientID: process.env.ID,
  clientSecret: process.env.SECRET,
  callbackURL: 'https://split-trip.herokuapp.com/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};
