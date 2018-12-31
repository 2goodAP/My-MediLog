function changePage() {
  window.location="views/index.ejs";
}

let todayDate = new Date();

let useString = todayDate.toDateString();

//document.write(useString);

