const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

const User = require('../models/Users')


router.post('/Register', (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email
    const password = req.body.password
    const password2 = req.body.confirm

    let error = [];
    //error messages
    if (!name || !username || !email || !password || !password2) {
        error.push({ msg: "Please fill all the blanks" })
    }
    if (password != password2) {
        error.push({ msg: "Password mismatch" })
    }

    if (password.length < 6) {
        error.push({ msg: "Password is too short" });
    }

    if (error.length > 0) {
        return res.json({ success: 'false', msg: "re render the register", error })
    }
    else {
        User.findOne({ username: username })             //finding id user exist or not
            .then(user => {
                if (user) {
                    error.push({ msg: 'username already exist' })
                    return res.json({ success: 'false', msg: 're render the page', error })
                }
                else {
                    const newuser = new User({
                        name,
                        username,
                        email,
                        password
                    })

                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(newuser.password, salt, function (err, hash) {
                            newuser.password = hash;


                            //save user

                            newuser.save()
                                .then(user => {
                                    return res.json({ success: 'true', message: "redirect to login" })
                                })
                                .catch(err => console.log(err))
                        })
                    })

                }
            })
    }
})


router.post('/Login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: res.json({ success: 'true', message: 'redirect to dashboard' }),
        failureRedirect: res.json({ success: 'false', message: 'login' }),
    })(req, res, next)

})



module.exports = router;