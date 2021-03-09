require("dotenv").config();
const server = require("./backend/api/server");

const PORT = process.env.PORT || 5333;
server.listen(PORT, () => console.log(`\n Running on port: ${PORT} \n`));
