import express from 'express';
import { User } from '../db/db';
import { Request, Response } from 'express';
import Jwt  from 'jsonwebtoken';
import { SECRET } from '../middleware/auth';
const router = express.Router();

router.get("/" , (req, res) => {
    res.send("Hello World!");
});

router.post('/signup', (req : Request, res : Response) => {
    const { username,email, password }  = req.body;
    function callback(user: any) {
      if (user) {
        res.status(403).json({ message: 'User already exists' });
        return;
      } else {
        const newUser = new User({username, email, password});
        newUser.save();
        const token = Jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'User created successfully', token });
      }
  
    }
    User.findOne({ username }).then(callback);
}); 

router.post('/login' , async(req, res) =>{
     const { username, password } = req.body;
     const user = await User.findOne({ username, password});
     if(!user){
         res.status(401).json({ message: 'Invalid username or password' });
     }else{
         const token = Jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h'});
         res.json({ message: 'User logged in successfully', token });
     }
});

export default router;