import express from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const router = express.Router()

// Create new user (/api/users/signup)
router.post('/signup', (req, res) => {
  // Get password and email data from body
  // const { data } = req.body
  const { email, password } = req.body

  // Create new user with user schema
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: email,
    isAdmin: false
  })

  // Hash password with user method
  user.setPassword(password)

  // Save user to database and send it in JSON format to client
  user.save()
  .then(user => res.status(200).json({ user: user.toAuthJSON() }))
  .catch(e => res.status(500).json({ error: e }))
});

export default router
