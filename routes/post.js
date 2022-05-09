import express from 'express';
const router = express.Router();

let obj = {msg: "Response"};

// all posts
router.route('*')
    .post((req, res, next) => {
        console.log("A: Handle post!");
        console.log(req.body);
        next();
    });

// post to /api
router.route('/')
    .post((req, res) => {
        console.log("B... ");
        res.send(JSON.stringify(obj));
    });

// post to /api/register
router.route('/register')
    .post((req, res) => {
        console.log("C... ");
        res.send(JSON.stringify(obj));
    });
 
export default router;