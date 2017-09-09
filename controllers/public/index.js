const PublicController = require('./public');
const CountryController = require('./country');
const ProcessController  = require('./process');

module.exports = [
    PublicController,
    {prefix: '/country', routes: CountryController},
    {prefix: '/process', routes: ProcessController},
];
