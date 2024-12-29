const express = require("express");
const {createRegistration, getAllRegistration, deleteRegistration} = require('../controllers/workshopRegController.js');
const {getAllWorkshops, getWorkshopCount} = require("../controllers/workshopController.js")

const router = express.Router();

router.get('/', getAllWorkshops); // Fetch all workshops
router.get('/workshop-count', getWorkshopCount);
router.route('/registration/:id').post(createRegistration);
router.route('/getregs').post(getAllRegistration);
router.route('/registration/delete/:id').delete(deleteRegistration); // a middleware has to be injected which can 
// query for the current userid by which deletion can be done there on controller side

module.exports = router;
