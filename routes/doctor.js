const express = require("express");
const router = express.Router();
const doctor = require("../controller/doctor");

router.get("/",doctor.authenticateDoctor,doctor.dashboard);
router.get("/login",doctor.checkLogin,doctor.getDoctorLogin);
router.post("/login",doctor.postDoctorLogin);
router.get("/logout",doctor.postDoctorLogout);

router.post("/search",(req,res)=>{
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.body.searchId],(error,results)=>{
    if (error) throw error;
    result = {results:results}
    res.render("doctor/index.ejs",result);
  });
});

router.get('/view_patient/:patient_id', (req, res)=>{
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.params.patient_id],(error,results)=>{
    if (error) throw error;
    result = {results:results}
    res.render("doctor/view_patient.ejs",result);
  });
}
)
router.post('/view_patient/:patient_id', (req, res)=>{
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.params.patient_id],(error,results)=>{
    if (error) throw error;
    result = {results:results}
    res.render("doctor/view_patient.ejs",result);
  });
})

module.exports = router;
