const express = require("express");
const router = express.Router();
const doctor = require("../controller/doctor");

router.get("/",doctor.authenticateDoctor,doctor.dashboard);
router.get("/login",doctor.checkLogin,doctor.getDoctorLogin);
router.post("/login",doctor.postDoctorLogin);
router.get("/logout",doctor.postDoctorLogout);
router.post("/search",doctor.searchPatient);

router.get("/view_patient/:patient_id",doctor.viewPatient);
router.get("/view_health_status/:patient_id",doctor.viewHealthStatus);
router.get("/view_patient_history/:patient_id",doctor.viewPatientHistory);
router.get("/view_medication/:patient_id",doctor.viewMedication);
router.get("/view_labtests/:patient_id",doctor.viewLabTests);

router.get("/update_health_status/:patient_id",doctor.updateHealthStatus);
router.get("/diagnosis/:patient_id",doctor.addDiagnosis);
router.get("/update_labtests/:patient_id",doctor.updateLabTests);
router.get("/update_medication/:patient_id",doctor.updateMedication);
router.get("/add_appointment/:patient_id",doctor.addAppointment);

router.post('/view_patient/:patient_id', doctor.postViewPatient);
router.post("/update_health_status/:patient_id",doctor.postUpdateHealthStatus);
router.post("/diagnosis/:patient_id",doctor.postAddDiagnosis);
router.post("/update_labtests/:patient_id",doctor.postUpdateLabTests);
router.post("/update_medication/:patient_id",doctor.postUpdateMedication);
router.post("/add_appointment/:patient_id",doctor.postAddAppointment);




module.exports = router;
