var application_root = __dirname,
    express = require("express"),
    path = require("path");

var app = express();

// Config

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "/www")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/hello', function (req, res) {
  res.send("{ 'hello': 'world' }");
});

app.use(function(req,res) { 
    res.redirect( '/index.html' );
});

// Launch server

app.listen(8888);
