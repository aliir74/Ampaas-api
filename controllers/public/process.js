/**
 * Created by rajab on 5/28/2017.
 */


const Controller = require('bak/lib/controller');
const { Process } = require('../../models');

class FoodController extends Controller {

    constructor() {
        super({
            models: {Process},
            default: {}
        });
    }

    async _(request, reply) {
    }

    async $id(request, reply, { id }) {
        let user = User.findOne({
            _id: id
        }).populate({
            path: 'orders',
            populate: {
                path: 'foods',
                model: 'Food'
            }
        });
        reply(user);
    }
}

module.exports = FoodController;