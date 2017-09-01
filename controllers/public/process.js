const Controller = require('bak/lib/controller');
const { Process } = require('../../models');

class ProcessController extends Controller {

    constructor() {
        super({
            models: {Process},
            default: {}
        });
    }

    async _(request, reply) {
    }

    async $id(request, reply, { id }) {

    }

    async _post(request, reply) {
        var obj = request.payload.obj
        var proc = new Process(obj)
        await proc.save()
        reply(proc)
    }
}

module.exports = ProcessController;