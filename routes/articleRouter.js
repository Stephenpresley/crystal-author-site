const express = require('express');
const articleRouter = express.Router();
const Article = require('../models/Article');

//all articles
articleRouter.route('/')

    .get((req, res) => {
        Article.find((err, articles) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(articles)
        })
    })

//all articles under one topic ID
articleRouter.route('/:topicID')

    .get((req, res) => {
        Article.find({ topic: req.params.topicID }, (err, articles) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(articles)
        })
    })

    .post((req, res) => {
        req.body.topic = req.params.topicID
        const newArticle = new Article(req.body)
        newArticle.save((err, article) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(article)
        })
    })

//one article
articleRouter.route('/oneArticle/:_id')

    .get((req, res) => {
        Article.findById(req.params._id, (err, article) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(article)
        })
    })

//put and delete one article
articleRouter.route('/oneArticle/:_id')

    .put((req, res) => {
        Article.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true },
            (err, article) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(article)
            }
        )
    })

    .delete((req, res) => {
        Article.findOneAndDelete(
            { _id: req.params._id },
            (err, article) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(article)
            }
        )
    })

module.exports = articleRouter