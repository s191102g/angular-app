const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ps15394-cao-quang-sang-asm'));
app.get('/*', function(req,res)

{res.sendFile(path.join(__dirname+'/dist/ps15394-cao-quang-sang-asm/index.html'));});

app.listen(process.env.PORT || 8080);