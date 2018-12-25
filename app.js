const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.set("view-engine","ejs");
app.set("views", [path.join(__dirname, "views")],
                 [path.join(__dirname, "views/patient")],
                 [path.join(__dirname, "views/hospital")],
                 [path.join(__dirname, "views/pharmacy")],
                    );

const indexRoutes = require("./routes/index");
app.use("/",indexRoutes);
app.use("/patient",indexRoutes);
app.use("/patientLogin",indexRoutes);
app.use("/hospital",indexRoutes);
app.use("/hospitalLogin",indexRoutes);
app.use("/pharmacy",indexRoutes);
app.use("/pharmacyLogin",indexRoutes);
app.use("/medilogIndex",indexRoutes);

app.use("/awa",function(req,res){
    res.render("patient/ppp.ejs");
})

app.listen(3000, ()=> {
    console.log("Server listening at 3000");
})