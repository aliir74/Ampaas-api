// Globals
const {init} = require('bak');
const Config = require('config');

// Plugins
const MongoosePlugin = require('bak/lib/mongoose');
const AuthPlugin = require('bak/lib/auth');
const PolicyPlugin = require('bak/lib/policy');
const LoggingPlugin = require('bak/lib/logging');
const Scooter = require('scooter');

// App
const UserModel = require('./models/user');
const AppPolicy = require('./policy');

init({
    plugins: [
        // Logging
        {register: LoggingPlugin, options: Config.get('log')},

        // Mongoose
        {register: MongoosePlugin, options: Config.get('mongo')},

        // Auth
        {register: AuthPlugin, options: Object.assign({user_model: UserModel}, Config.get('auth'))},

        // Policy
        {register: PolicyPlugin, options: {policies: AppPolicy}},

        // User Agent
        {register: Scooter},
    ],

    routes: [
        // Public API
        {prefix: '/api', routes: () => require('./controllers/public')},

        // Admin API
        {prefix: '/api/admin', routes: () => require('./controllers/admin')}

    ]

});
