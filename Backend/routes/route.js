const express = require("express");
const router = express.Router();
const usermodel = require('../models/user')

router.get('/',(req,res)=>{
  res.send('hello')
})

router.post('/register', async (req, res) => {
  try {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(422).json({ error: "Please fill all the data" })
    }
    const user = await usermodel.create({ name, email, password })

    res.status(200).json({
      status: "success",
      user
    })

  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    })
  }
})

router.post('/login', async (req, res) => {
  try {

    const { email, password } = req.body
     console.log(req.body);
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the data" })
    }

    const user = await usermodel.findOne({ $and: [ { email }, { password } ]})
    if (user) {
      res.status(200).json({
        status: "success",
        user
      })
    }else{
      res.status(404).json({
        status: "Something Wrong",
      })
    }


  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    })
  }
})




module.exports = router;