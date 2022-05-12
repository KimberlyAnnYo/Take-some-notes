// dependencies
const express = require("express");

// express config
const app = express();

// initial port
const PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(express/urlendcoded({ extended: true }));
app.use(express.json());
app.use(express.status("public"));

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`app listening on PORT: ${PORT}`);
});