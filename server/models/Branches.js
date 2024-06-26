const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    open:{
        type: mongoose.Schema.Types.String,
        required:true
    },
    close:{
        type: mongoose.Schema.Types.String,
        required:true
    },
    image:{
        type:String,
    }
    },
{
    timestamps: true
}
)
module.exports = mongoose.model("Branches", branchSchema)
 