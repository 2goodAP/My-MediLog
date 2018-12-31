const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const app = express();

pool = mysql.createPool({
      pool:10,
      host:"localhost",
      user:"root",  
      password:"",
      database:"medilog"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cookieParser());

app.set("view-engine","ejs");
app.set("views", [path.join(__dirname, "views")],
                 [path.join(__dirname, "views/patient")],
                 [path.join(__dirname, "views/hospital")],
                 [path.join(__dirname, "views/pharmacy")],
);

const indexRoutes = require("./routes/index");
app.use("/",indexRoutes);
app.use("/medilogIndex", indexRoutes);
app.use("/patient",indexRoutes);
app.use("/patientSignup",indexRoutes);
app.use("/patientLogin",indexRoutes);
app.use("/hospital",indexRoutes);
app.use("/hospitalLogin",indexRoutes);
app.use("/pharmacy",indexRoutes);
app.use("/pharmacyLogin",indexRoutes);

// For linking external static stylesheets and JavaScript files
app.use(express.static(__dirname + "/public"));

app.listen(3000, ()=> {
  console.log("Server listening at 3000");
})
