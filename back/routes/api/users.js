const { json } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator');
const jwt = require('jsonwebtoken'); 
const config = require('config');
const User = require('../../models/User');

// @route   GET api/users
// @access Public

router.post('/', 
    [
        check('name', 'Le nom est requis')
        .not()
        .isEmpty(),
        check('email', 'Veuillez entrer un e-mail valide')
        .isEmail(),
        check('password', 'Veuillez entrer un mot de passe à 6 caractères minimum')
        .isLength({ min: 6 }),
        check('telephone', 'Veuillez entrer un numéro de téléphone')
        .isLength({ min: 10 })
    ],
    async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { email, telephone, password, name } = req.body
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: "L'email est deja prise."}]})
        }

        user = new User({
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
            "telephone": req.body.telephone
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();
        const payload = {
            user: {
                id: user._id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtToken'),
            { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err;
                console.log(token);
                res.json({ token });
            }
        )
    } catch (error) {
        console.log(error)
    }
});

router.get('/', (req, res) => {
    console.log('test');
    res.send('User route')
})

module.exports = router;