/**
 * Created by rajab on 5/28/2017.
 */


const  Controller = require('bak/lib/controller');
const {Country} = require('../../models');

class CountryController extends Controller {
   
    constructor() {
        super({
            models: {Country},
            default: {}
        });
    }

    /*
    ** Gives all categories populated with their foods
    */
    async _(request, reply) {
    }

    async $id_put(request, reply, {id}) {
        var newData = request.payload.country
        await Country.findOneAndUpdate({_id: id}, newData, {upsert: false}, function (err, doc) {
            if(err) {
                reply(500, {err: err})
                return
            }
            reply(200)
        })
    }
}

module.exports = CountryController();