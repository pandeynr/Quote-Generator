const express = require('express');

let app = express();
    app.use(express.static(__dirname + '/public'));

app.listen(8000, ()=>{
    console.log('Quote Generator is running on port 8000');
})