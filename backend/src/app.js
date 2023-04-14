require("dotenv").config();

const api = require("./api");

const port = process.env.PORT || 8080;

api.listen(port, () => {
  console.log("Server is now listening on port %s", port);
});
