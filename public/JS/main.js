function changePage() {
    window.location="form.html";
}

let todayDate = new Date();

let useString = todayDate.toDateString();

document.write(useString);

