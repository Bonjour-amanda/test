const { user } = require("../models")

const Sequelize = require('sequelize')
const Op = Sequelize.Op

class UserController {

    // GET ALL User
    async getAllUser(req, res) {
        try {
            user.findAll()
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed get all User"
            })
        }

    }

    // GET ONE SINGLE User BY ID
    async getOneUserId(req, res) {
        try {
            user.findOne({
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed get one User by id"
            })
        }

    }
    // CREATE NEW User 
    async addUser(req, res) {
        try {
            const result = user.create({
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result,
                        message: "new User has been suceessfully added"
                    })
                })

        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed adding new user"
            })
        }
    }
    // UPDATE User
    async updateUser(req, res) {
        try {
            user.update({
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: "success",
                        data: result,
                        message: "User has been sucessfully updated"
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed updating User"
            })
        }

    }
    // DELETE User
    async deleteUser(req, res) {
        try {
            user.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        message: "User has been deleted"
                    })
                })
        } catch {
            return res.status(401).json({
                status: "Error!",
                message: "failed deleting User"
            })
        }

    }

}
module.exports = new UserController;