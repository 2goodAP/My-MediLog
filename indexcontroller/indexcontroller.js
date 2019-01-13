const md5 = require("md5");

exports.indexPage = function(req,res){
  res.render("index.ejs");
}

exports.medilogIndex = function(req, res) {
  res.render("medilogIndex.ejs");
}

module.exports.getPatientLogin = (req,res)=>{
  var error = (req.cookies.error) ? req.cookies.error : "";
  res.clearCookie("error");
  res.render("./patient/login.ejs",{
    error: error
  });
};

module.exports.postPatientLogin = (req,res)=>{
  pool.query("SELECT * FROM patient AS result WHERE email = ? AND password = ?",[req.body.email,md5(req.body.password)],(error,results)=>{
    if (error) throw error;
    if (results.length > 0){
      var userId = results[0].id;
      var hash = md5(Date.now());
      // res.render('/patient',{print:results});
      res.cookie("userid",userId,{maxAge: 7*86400000});
      res.cookie("hash",hash,{maxAge: 7*86400000});
      pool.query("INSERT INTO sessions (userid, hash) VALUES (?,?)",[userId,hash], (error,results)=>{
        if (error) throw error;
      });
      // res.cookie("name","awan");
      res.redirect("/patient");
    } else{
      res.cookie("error","Login Failed");
      res.redirect("/patientLogin");

    }
  });
};

exports.getPatientSignup = function(req,res){
  res.render("./patient/signup.ejs");
}

exports.patient = function(req,res){
  res.render("./patient/patient.ejs");
}

exports.hospitalLogin = function(req,res){
  res.render("./hospital/login.ejs");
}
exports.hospital = function(req,res){
  res.render("./hospital/hospital.ejs");
}

exports.pharmacy = function(req,res){
  res.render("./pharmacy/pharmacy.ejs");
}

exports.pharmacyLogin = function(req,res){
  res.render("./pharmacy/login.ejs");
}

module.exports.patientSignup = (req,res)=>{
  if(req.body.password===req.body.password2){
    req.body.password = md5(req.body.password);
    pool.query("INSERT INTO patient (name, email, password, age, sex, address, phone) VALUES (?,?,?,?,?,?,?)" , [req.body.username,req.body.email,req.body.password,req.body.age,req.body.sex,req.body.address,req.body.phoneNo], (error, results) =>{
      if(error) throw error;
      res.send("Sign Up Successful ");
    });
  }
};

exports.postSignup = (req, res) => { res.render("./patient/post_signup.ejs") };
