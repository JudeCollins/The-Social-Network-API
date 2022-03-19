
const router = require('express').Router();

// Set routes (user and thought routes)
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

router.use('/users', usersRoutes);

router.use('/thoughts', thoughtsRoutes);

// Export Module Router
module.exports = router;