'use strict'
const { sequelize } = require('../models');
const db = require('../models');
const Activity = db.activities;
const ActivityFeature = db.activities_features;
const Feature = db.features;
const Association = db.associations;
const Op = db.Sequelize.Op;

exports.findAllActivitiesFeatures = (req, res) => {
   // const activities_name = req.query.activities_name;
    //var condition = activities_name ? { activities_name: { [Op.iLike]: `%${activities_name}%` } } : null;
    ActivityFeature.findAll({
      include: [
          {
            model: Activity,
            as:'activities',
            attributes:['activities_id', 'activities_name']
          }
      ],
      include: [
        {
          model: Feature,
          as: 'features',
          attributes: ['features_id', 'features_name'],
        },
      ],
    
    })
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error retrieving all Features'
        })
        //console.log(">> Error while retrieving Features: ", err);
      });
  };