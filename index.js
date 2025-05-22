require("dotenv").config();
const app = require("./src/app.js");

app.listen(process.env.PORT, () => {
  console.log("Server ouvindo na porta " + process.env.PORT);
});