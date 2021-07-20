const router = require('express').Router();

const userRoutes = require('./user-routes');
const orgRoutes = require('./org-routes');

router.use('/user', userRoutes);
router.use('/org', orgRoutes);

module.exports = router;