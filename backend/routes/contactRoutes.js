const express = require("express");

const {
    newContact,
    getAllContacts,
    deleteContact,

    getContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/newContact").post(newContact);
router.route("/getAllContacts").get(getAllContacts);
router.route("/deleteContact/:id").delete(deleteContact);
router.route("/getContact/:id").get(getContact);


module.exports = router;