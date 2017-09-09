const Controller = require('bak/lib/controller');
const Boom = require('boom');
class PublicController extends Controller {

    constructor() {
        //noinspection JSAnnotator
        super({
            default: {}
        });
    }

    async _(request, reply) {
        reply('Hello World!');
    }

    async getHello(request, reply) {
        reply(' World!');
    }
}

module.exports = PublicController;