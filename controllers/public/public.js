/**
 * Created by rajab on 5/28/2017.
 */
const Controller = require('bak/lib/controller');
const Boom = require('boom');
class PublicController extends Controller {

    constructor() {
        //noinspection JSAnnotator
        super({
            models: {},
            default: {}
        });
    }

    async _(request, reply) {
        reply('Hello World!');
    }

    async getHello(request, reply) {
        reply(' World!');
    }

    async register_post(request, reply) {

    }
}

module.exports = PublicController;