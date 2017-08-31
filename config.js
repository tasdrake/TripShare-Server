export const facebook = {
  clientID: process.env.ID,
  clientSecret: process.env.SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};
