const {Schema} = require('mongoose');
const {Model} = require('bak');

class Process extends Model{
    
    static get $schema() {
        return {
            text: {type: String, required: true},
            value: {type: Number, required: true},
            immediate: [
                {type: Number}
            ],
            period: {type: Number},
            gradual: [ {
                value1: {type: Number},
                value2: {type: Number},
                repeat1: {type: Number},
                repeat2: {type: Number},
            } ]
        }
    }
}

module.exports = Process.$model;
