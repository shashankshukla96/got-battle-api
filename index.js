const express = require("express");
const battleRouter = require("./routes/battle");
const makeDbConnection = require("./utils/db");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(battleRouter);

app.listen(PORT, () => {
    console.log("The Server has started on PORT:", PORT);
    makeDbConnection();
});
