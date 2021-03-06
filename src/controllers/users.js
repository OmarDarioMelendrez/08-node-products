const express = require('express');
const User = require('../models/user')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err)
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = async (req, res) => {
    try {
        let user = req.body;
        user = await User.create(user);
        const result = {
            message: "user created",
            user
        }
        res.status(201).json(result);
    } catch (err) {
        next(err)
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let user = req.body;
        user._id = id;
    
        await User.updateOne(user)
    
        const result = {
            message: 'User updated',
            user
        }
        res.json(result);
        
    } catch (err) {
        next(err)
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartialUser = (req, res) => {
    try {
        const result = {
            message: 'User updated with patch'
        }
        res.json(result);
    } catch (err) {
        next(err)
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id)
        const result = {
            message: `User with id: ${id} deleted`
        }
        res.json(result);
        
    } catch (err) {
        next(err)
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}