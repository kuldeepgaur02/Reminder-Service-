const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail} = require('./services/email-services');

const setupAndStartServer =()=>{
    const app = express();

    app.use(bodyParser.json);

    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(3004,()=>{
        console.log(`the server is running on the prot ${PORT}`);

        sendBasicEmail (
            'support@admin.com',
            'kuldeepwork002@gmail.com',
            'This is the testing email',
            'hey how are you'
        );
    });

}

setupAndStartServer();