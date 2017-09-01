const {Schema} = require('mongoose');
const {Model} = require('bak');

class Country extends Model{

    static get $schema() {
        return {
            name: {type: String, required: true},
            text: {type: String, required: true},
            value: {type: Number, required: true},
            ampaas: {type: Boolean, required: true},
            processes: [{
                value: {type: Number},
                ref: {type: Schema.Types.ObjectId, ref: 'Process'}
            }],
            chartData: {type: Object, required: true}
        }
    }
}

module.exports = Country.$model;
