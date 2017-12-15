// Dependencies
// =============================================================
const express    = require("express"),
      bodyParser = require("body-parser"),
      path       = require("path"),
      request    = require('request'),
      hbs     = require('express-handlebars');
// Sets up the Express App
// =============================================================
const app = express();
//      PORT = 3333;

app.use("/javascript", express.static(path.join(__dirname + '/javascript')));
app.use("/assets", express.static(path.join(__dirname + '/assets')));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");




// //Handlebars
// // Set up handlebars view engine
// app.engine('handlebars', hbs({defaultLayout:'main', extname: ".handlebars"}));
// //app.engine('handlebars', hbs.engine)
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views/'));


//app.use(express.static('public'));
//Body Parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Routes
app.get('/', (req, res) => {
  console.log("Test me");
 res.render("home");
});







//Starting server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`====🌎 🚈 🖥️ 📡===> App listening on PORT ${port} ✅`);
});








