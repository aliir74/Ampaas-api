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
        var countries = Country.find({})
        reply(countries)
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

    async ampaas_$id_put(request, reply, {id}) {
        var newAmpaasStatus = request.payload.ampaas
        await Country.findOneAndUpdate({_id: id}, {ampaas: newAmpaasStatus}, function (err, doc) {
            if(err) {
                reply(500, {err: err})
                return
            }
            reply({statusCode: 200})
        })
    }

    async process_$id_delete(request, reply, {id}) {
        var polling = request.payload.polling
        // delete process from array of country
        await Country.update({_id: id}, {$pullAll: {processes: [{value: polling}]}})
        reply({statusCode: 200})
    }

    async process_$id_post(request, reply, {id}) {
        var value = request.payload.polling
        var prId = request.payload.processId
        var newobj = {value: polling, ref: prId}
        await Country.update({_id: id}, {$push: {processes: newobj}})
    }
}

module.exports = CountryController;