const mongoose = require('mongoose')

const dbConnect = (uri)=>{
    return mongoose.connect(uri, {
        useUnifiedTopology:true
    });
}

module.exports = dbConnect;