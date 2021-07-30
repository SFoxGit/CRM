const router = require('express').Router();

const userRoutes = require('./user-routes');
const orgRoutes = require('./org-routes');
const customerRoutes = require('./customer-routes');
const contactRoutes = require('./contact-routes');

router.use('/user', userRoutes);
router.use('/org', orgRoutes);
router.use('/customer', customerRoutes);
router.use('/contact', contactRoutes);

module.exports = router;