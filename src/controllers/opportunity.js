const async = require('async')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const Opportunity = mongoose.model('Opportunity')

exports.getOpportunities = (req, res) => {
    Opportunity.find()
        .sort({name: 1})
        .exec((err, opportunities) => {
        if (err) {
            res.send(err);
        }
        res.json(opportunities);
    });
};

exports.getOpportunityWithID = (req, res) => {
    Opportunity.findById(req.params.opportunityId)
        .exec(function(err, opportunity) {
        if (err) {
            res.send(err);
        }
        res.json(opportunity);
    });
}

exports.addNewOpportunity = (req, res) => {
    Opportunity.create(req.body, (err, opportunity) => {
        if (err) {
            res.send(err);
        }
        res.json(opportunity);
    });
};

exports.updateOpportunity = (req, res) => {
    let opportunity = req.body
    Opportunity.findOneAndUpdate({ _id: req.params.opportunityId}, opportunity, { new: true }, (err, opportunity) => {
        if (err) {
            res.send(err);
        }
        res.json(opportunity);
    })
}

exports.deleteOpportunity = (req, res) => {
    Opportunity.remove({ _id: req.params.opportunityId }, (err, opportunity) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Opportunity'});
    })
}
