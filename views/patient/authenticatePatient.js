module.exports = (req,res,next) =>{
    pool.query("SELECT COUNT(*) as num FROM sessions WHERE userid = ? AND hash = ?",[req.cookies.userid,req.cookies.hash],(error,results)=>{
        if (error) throw error;
        if (results[0].num>0){
            next();
        }
        else{
            res.redirect("/patientLogin");
        }
    });
};