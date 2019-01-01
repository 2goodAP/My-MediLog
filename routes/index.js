const router = require("express").Router();
const indexController = require("../indexcontroller/indexcontroller");
const authenticatePatient = require("../views/patient/authenticatePatient");

router.get("/",indexController.indexPage)
router.get("/medilogIndex", indexController.medilogIndex)
router.get("/patientLogin",indexController.getPatientLogin)
router.post("/patientLogin",indexController.postPatientLogin)
router.get("/patientSignup",indexController.getPatientSignup)
router.post("/patientSignup",indexController.patientSignup)
router.get("/dashboard",(req,res)=>{
    res.render("./patient/patient_dashboard.ejs");
})

router.get("/patient",authenticatePatient,indexController.patient)
router.get("/hospital",indexController.hospital)
router.get("/hospitalLogin",indexController.hospitalLogin)
router.get("/pharmacy",indexController.pharmacy)
router.get("/pharmacyLogin",indexController.pharmacyLogin)

module.exports = router;
