import express from 'express';
import { SkillListing } from '../db/db';
import { Request, Response } from 'express';
import Jwt  from 'jsonwebtoken';
import { authenticateJwt, SECRET } from '../middleware/auth';
const router = express.Router();

router.post('/createskill', authenticateJwt, async(req : Request , res : Response) =>{
    const skill = new SkillListing(req.body);
    await skill.save();
    res.status(201).json({msg : "skill added Successfully"});
});

router.get('/skills', authenticateJwt, async(req : Request, res : Response) =>{
    const skills = await SkillListing.find({});
    res.status(200).json({skills});
});

router.get('/skills/:skillid', authenticateJwt, async(req : Request, res : Response) => {
    const skillid = req.params.skillid;
    const skill = await SkillListing.findById(skillid); 
    if(!skill) {
         res.status(404).json({msg : "skill not found"});
    }else{
        res.status(200).json({skill});
    }
})

export default router;