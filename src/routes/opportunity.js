import { loginRequired } from '../controllers/user';
const opportunities = require('../controllers/opportunity');

module.exports = function(app) {
    app.route('/opportunity')
        .get(loginRequired, opportunities.getOpportunities)
        .post(loginRequired, opportunities.addNewOpportunity);

    app.route('/opportunity/:opportunityId')
        .get(loginRequired, opportunities.getOpportunityWithID)
        .put(loginRequired, opportunities.updateOpportunity)
        .delete(loginRequired, opportunities.deleteOpportunity);
}

