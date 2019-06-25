const mongoose = require('mongoose');
const Schema = new Schema();
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true

    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        min:0,
        required: true
        
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }

}, {
    timeStamps: true
}
);

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;