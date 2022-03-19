// Require Users Model
const {Users} = require('../models');

// Set up Users Controller
const usersController = {
    
    // Create a new User
    createUsers({body}, res) {
        Users.create(body)
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => res.status(400).json(err));
    },

// Get All Users
getAllUsers(req, res) {
    Users.find({})
    
    .populate({path: 'thoughts', select: '-__v'})
  
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
  
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
},

// Get single user 
getUsersById({params}, res) {
    Users.findOne({_id: params.id })
    .populate({path: 'thoughts', select: '-__v'})
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
    // return if no user found 
    .then(dbUsersData => {
        if(!dbUsersData) {
            res.status(404).json({message: 'No User with this particular ID!'});
            return; 
        }
        res.json(dbUsersData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
},
