exports.indexPage = function(req,res){
    res.render("index.ejs");
}

exports.patientLogin = function(req,res){
    res.render("./patient/login.ejs");
}

exports.patientSignup = function(req,res){
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