const db = require("../models");
const Association = db.associations;
const Activity = db.activities;
const Area = db.areas;
const Op = db.Sequelize.Op;

// Create and Save a new Association
exports.create = (req, res) => {
  
  // Create a Association
   const associations_name = req.body.associations_name;

   const areas_id = req.body.areas_id;

  // Save Association in the database
  Association.create({
    associations_name:associations_name
  })
    .then(data => {
      Area.findByPk(areas_id)
      .then((area)=>{
        if(!area){
          return null;
        }
        data.addArea(area)
      })
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Association."
      });
    });
};

exports.addAreaToAssociation= (res,req) => {

  let associations_id = req.body.associations_id;
  let areas_id = req.body.areas_id;


  Association.findByPk(associations_id )
  .then((association) => {
    if (!association) {
      console.log("Association not found!");
      return null;
    }
    Area.findByPk(areas_id).then((areas) => {
      if (!areas) {
        console.log("Area not found!");
        return null;
      }

      association.addArea(area);
      res.send(association);
    });
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Error while adding  Feature to Activity: "
    });
  
  });


 }
/* Retrieve all Association from the database.
exports.findAll = (req, res) => {
    const ass_name = req.query.ass_name;
    var condition = ass_name ? { ass_name: { [Op.iLike]: `%${ass_name}%` } } : null;
  
    Association.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Association."
        });
      });
};*/

// Get all associations including Activities
exports.findAll = (req,res) => {
  Association.findAll({
    include: ["activities"],
    order: [['activities','activities_name','ASC']]
  }).then((data) => {
    res.send(data)
    //return categories;
  })

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Associations."
      });
  });
};

// Find an single Association with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Association.findOne({
      where:{
        associations_id: id
      },
      include: 
        ["activities","areas"]

    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Association with id=" + id
        });
      });
};

/* Update a Association by the id in the request
exports.update = (id, association) => {
  
  const associations_name = association.associtaions_name

  console.log("------------------------------------------------")
  console.log("ID " + id + " NAME " + association.associations_name)
  console.log("------------------------------------------------")

  return Association.update(association, {
    where: { associations_id: id }
  })
    .then(num => {
      if (num == 1) {
        
          console.log( "Association was updated successfully.")
      
      } else {
        
        console.log( `Cannot update Association with id=${id}. Maybe Association was not found or req.body is empty!`)
       
      }
    })
    .catch(err => {
     
       console.log( "Error updating Association with id=" + id)
  
    });
};*/

//Update a Association by the id in the request
exports.updateName = (req, res) => {
    const id = req.params.id;
    //const name = req.body.associations_name
    let associations_name = req.body.associations_name;

    Association.update(
     {associations_name: associations_name}, {
      where: { associations_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Association was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Association with id=${id}. Maybe Association was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Association with id=" + id
        });
      });
};

// Delete a Association with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Association.destroy({
      where: { associations_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Association was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Association with id=${id}. Maybe Association was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Association with id=" + id
        });
      });
};

// Delete all Association from the database.
exports.deleteAll = (req, res) => {
  Association.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Association were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Association."
          });
        })
};

