import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const SkillListingSchema = new mongoose.Schema({
    skillName : String,
    image : String,
    description : String,
    category : String,
    proficiencyLevel : String,
    createdAt : String,
    experience : Number,
});

export const User = mongoose.model('User', userSchema);
export const SkillListing = mongoose.model('SkillListing', SkillListingSchema);
