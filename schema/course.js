var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myDb");

module.exports = mongoose.model('Course',{
    code : String,
    title : String,
    type : String,
    L : Number,
    T : Number,
    P : Number,
    J : Number,
    C : Number,
    owner : String,
    school : String,
    program : String,
    slot : String,
    nbr : Number,
    mode : String,
    seats : Number,
    fac_name : String,
    venue : String
},
'myCollection'
);