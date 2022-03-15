// Require express 
const router = require('express').Router();

// Import API routes 
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

//  error message
router.use((req, res) => {
    res.status(404).send('<h1>404 Error....</h1>');
  });

// Module exports 
module.exports = router;