const express = require("express")
const bodyParser = require("body-parser")



const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "pug")
app.use(express.static("public"))



app.get("/", (req, res, next) => {
    res.render("home")
})

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

app.use( (err, req, res, next) => {
    res.render('error');
});



app.listen(3000, () => {
    console.log("The app is running on localhost:3000")
});


