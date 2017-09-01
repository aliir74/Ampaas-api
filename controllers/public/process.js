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
}

module.exports = ProcessController;