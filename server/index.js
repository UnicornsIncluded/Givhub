const express = require("express");
const socketio = require('socket.io');
const path = require("path");
const bodyParser = require("body-parser");

require("./config/environment");
require("./database");

const routes = require("./routes/index");
const configPassport = require("./config/passport");

const assetFolder = path.resolve(__dirname, "../dist/");
const port = process.env.PORT;
const app = express();

app.use(express.static(assetFolder));
app.use(bodyParser.json());

configPassport(app, express);

app.use("/", routes);

const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(port, () =>
        console.log(`Mixing it up on port ${port}`)
    )

    // set up our socket control center
    const io = socketio(server)
    require('./socket')(io)
}

async function bootApp() {
    await startListening()
}

bootApp()
