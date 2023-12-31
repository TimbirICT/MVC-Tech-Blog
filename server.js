const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const loginRoutes = require('./controllers/login-routes');
const signupRoutes = require('./controllers/signup-routes');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));
app.use(routes);
app.use(loginRoutes);
app.use(signupRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
