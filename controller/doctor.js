const md5 = require("md5");

module.exports.dashboard = (req,res)=>{
    result = {  searchResults: [] , notFound : ""}
    res.render("./doctor/index.ejs", result);
}

module.exports.getDoctorLogin = (req,res)=>{
    var error = (req.cookies.error) ? req.cookies.error : "";
    res.clearCookie("error");
    res.render("./doctor/login.ejs",{
        error: error
    });
}

module.exports.postDoctorLogin = (req,res)=>{
    pool.query("SELECT * FROM doctor WHERE email = ? AND password = ?",[req.body.doctorEmail,md5(req.body.doctorPassword)],(error,results)=>{
        if (error) throw error;
        if (results.length > 0){
            var doctorId = results[0].doctor_id;
            var hash = md5(Date.now());
            res.cookie("doctorId",doctorId,{maxAge: 86400000});
            res.cookie("doctorHash",hash,{maxAge: 86400000});
            pool.query("INSERT INTO sessions (doctor_id, hash) VALUES (?,?)",[doctorId, hash],(error,results)=>{
                if(error) throw error;
            });

            // Redirect
            res.redirect("/doctor");
        }
        else{
            // Redirect
            res.cookie("error","Login Failed");
            res.redirect("/doctor/login");

        }
    });
}

module.exports.authenticateDoctor = (req, res, next) => {
    pool.query("SELECT COUNT(*) as num FROM sessions WHERE doctor_id = ? AND hash = ?",[req.cookies.doctorId, req.cookies.doctorHash], (error, results) => {
      if (error) throw error;
        if (results[0].num > 0) {
          next();
        } else{
          res.redirect("/doctor/login");
        }
    });
  };

module.exports.checkLogin = (req, res, next)=>{
    if(req.cookies.doctorId==null){
        next();
    }
    else{
        res.redirect("/doctor");
    }
}


module.exports.postDoctorLogout = (req,res)=>{
    pool.query("DELETE FROM sessions WHERE doctor_id = ?",[req.cookies.doctorId],(error,results)=>{
        if(error) throw error;
      })
    res.clearCookie("doctorId");
    res.clearCookie("doctorHash");
    res.redirect("/doctor/login");
}

module.exports.searchPatient = (req,res)=>{
  var notFound;
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.body.searchId],(error,searchResults)=>{
    if (error) throw error;
    if(searchResults.length==0){
    notFound = "Patient Id Not Found"
    }
    result = {searchResults:searchResults,notFound:notFound}
    res.render("doctor/index.ejs",result);
  });
}

module.exports.viewPatient = (req,res)=>{
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.params.patient_id],(error,results)=>{
    if (error) throw error;
    result = {results:results}
    res.render("doctor/view_patient.ejs",result);
  });
}

module.exports.postViewPatient = (req, res)=>{
  pool.query("UPDATE patient SET name = ? WHERE patient_id = ?",[req.body.Name,req.params.patient_id],(error,results)=>{
  res.redirect("/doctor/view_patient/"+req.params.patient_id);
  })
}

module.exports.viewHealthStatus = (req,res)=>{

}
module.exports.viewPatientHistory = (req,res)=>{

}
module.exports.viewMedication = (req,res)=>{

}
module.exports.viewLabTests = (req,res)=>{

}
module.exports.updateHealthStatus = (req,res)=>{

}
module.exports.addDiagnosis = (req,res)=>{

}
module.exports.updateLabTests = (req,res)=>{

}
module.exports.updateMedication = (req,res)=>{

}
module.exports.addAppointment = (req,res)=>{

}
module.exports.postUpdateHealthStatus = (req,res)=>{

}
module.exports.postAddDiagnosis = (req,res)=>{

}
module.exports.postUpdateLabTests = (req,res)=>{

}
module.exports.postUpdateMedication = (req,res)=>{

}
module.exports.postAddAppointment = (req,res)=>{

}

