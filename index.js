var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app=express();



app.get('/',function (req,res) {
    res.send('server');
});

app.listen(3000);
console.log('started');