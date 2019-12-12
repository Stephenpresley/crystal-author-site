const express = require('express');
const User = require('../models/User');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('/signup', (req, res, next) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, existingUser) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (existingUser !== null) {
                res.status(400);
                return next(new Error('That username already exists'));
            }
            const newUser = new User(req.body);
            newUser.save((err, user) => {
                if (err) {
                    res.status(500);
                    return next(err)
                }
                const token = jwt.sign(user.toObject(), process.env.SECRET);
                return res.status(201).send(
                    {
                        success: true,
                        user: user.toObject(),
                        token
                    })
            });
        });
});

authRouter.post('/login', (req, res, next) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, user) => {
            if (err) {
                return next(err)
            }
            if (!user) {
                res.status(403);
                return next(new Error("username or password are incorrect, but I'm not telling you which one"));
            }
            user.checkPassword(req.body.password, (err, match) => {
                if (err) {
                    res.status(500)
                    return next(err);
                }
                if (!match) {
                    res.status(401)
                    return send(
                        {
                            success: false,
                            message: "username or password are incorrect, but I'm not telling you which one"
                        });
                    }
                    const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
                    return res.send(
                        {
                            success: true,
                            user: user.withoutPassword(),
                            token
                        }
                );
            });
        }
    );
});

module.exports = authRouter