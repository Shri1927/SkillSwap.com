import { Input } from "./ui/input";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle
} from "./ui/card";
import axios from 'axios';
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSkills = () => {
    const navigate = useNavigate();
    const [skillName, setSkillname] = useState("");
    const [description, setDescription] = useState("");
    const [proficiencyLevel, setProficiencyLevel] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [experience, setExperience] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    async function handleForm() {

        const skills = await axios.post("http://localhost:8082/skill/createskill", {

            skillName: skillName,
            image: image,
            description: description,
            category: category,
            proficiencyLevel: proficiencyLevel,
            experience: experience,
            createdAt: createdAt
        },{
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });

        navigate("/skillcard");
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-lg shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-mono font-bold">Add Skills</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div>
                        <label htmlFor="skillname" className="block text-sm font-bold mb-1">SkillName</label>
                        <Input
                            id="skillname"
                            placeholder="Enter skill name"
                            type="text"
                            className="w-full"
                            onChange={(e) => setSkillname(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-bold mb-1">Description</label>
                        <Input
                            id="description"
                            placeholder="Enter description"
                            type="text"
                            className="w-full"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-bold mb-1">Image URL</label>
                        <Input
                            id="image"
                            placeholder="Enter image URL"
                            type="text"
                            className="w-full"
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between">
                    <div>
                        <label htmlFor="proficiency" className="block text-sm font-bold mb-1">Proficiency</label>
                        <Input
                            id="proficiency"
                            placeholder="Enter proficiency"
                            type="text"
                            className="w-full"
                            onChange={(e) => setProficiencyLevel(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-bold mb-1">Category</label>
                        <Input
                            id="category"
                            placeholder="Enter category"
                            type="text"
                            className="w-full"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="flex justify-between">
                    <div>
                        <label htmlFor="experience" className="block text-sm font-bold mb-1">Experience</label>
                        <Input
                            id="experience"
                            placeholder="Enter years of experience"
                            type="text"
                            className="w-full"
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="createdAt" className="block text-sm font-bold mb-1">Created At</label>
                        <Input
                            id="createdAt"
                            placeholder="Enter creation date"
                            type="text"
                            className="w-full"
                            onChange={(e) => setCreatedAt(e.target.value)}
                        />
                    </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full text-center"
                    onClick={handleForm}>Add</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default AddSkills;
