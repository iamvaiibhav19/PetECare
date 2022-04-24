const express = require("express");

const { newService, deleteService, updateService, getAllServices, getService } = require("../controllers/servicesController");

const router = express.Router();

router.route('/newService').post(newService);
router.route('/deleteService/:id').delete(deleteService);
router.route('/updateService/:id').put(updateService);
router.route('/getAllServices').get(getAllServices);
router.route('/getService/:id').get(getService);


module.exports = router;
