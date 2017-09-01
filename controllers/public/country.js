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
        let newChartData
        await Country.findById(id, function (err, item) {
            newChartData = item.chartData
        })
        // console.log(newChartData)
        newChartData.datasets[0].data = newData
        await Country.findOneAndUpdate({_id: id}, { $set: {chartData: newChartData}}, {upsert: false}, function (err, doc) {
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

    async process_$id_put(request, reply, {id}) {
        var polling = request.payload.polling
        // delete process from array of country
        await Country.update({_id: id}, {$pull: {processes: {value: polling}}})
        reply({statusCode: 200})
    }

    async process_$id_post(request, reply, {id}) {
        var value = request.payload.polling
        var prId = request.payload.processId
        var newobj = {value: value, ref: prId}
        await Country.update({_id: id}, {$push: {processes: newobj}})
        reply({statusCode: 200})

    }
}

module.exports = CountryController;