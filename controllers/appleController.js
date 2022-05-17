// dependencies
import express from 'express';

// model
import appleModel from '../models/appleModel.js';

let obj = {user: "Flisa Hedenhös", navigationLinks: ["Start", "About", "Contact", "Apples"], page: "start"};


export default {
    getAll: (req, res) => {

        // get all apples using method
        let result = appleModel.getAll();

        obj.appleCollection = result;

        // end response - using core method res.end(), or express methods res.send(), res.json(), or template engine ejs method res.render()
        res.render('apples', obj);
    },
    addOne: (req, res) => {
        
        // from form
        let apple = req.body.apple;

        // use model to add apple
        let result = appleModel.addOne(apple);

        // use model to get apples
        result = appleModel.getAll(apple);

        // add apples to render object
        obj.appleCollection = result;

        // send response
        // res.json({apple: apple});
        res.render('apples', obj);
    }
}