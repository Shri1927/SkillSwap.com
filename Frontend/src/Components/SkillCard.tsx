import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface SkillCard {
    _id: string;
    skillName: string;
    description: string;
    category: string;
    proficiencyLevel: string;
    experience: string;
    image: string;
}

const SkillCard = () => {
    const [skill, setSkill] = useState<SkillCard[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        function callback2(data: any) {
            setSkill(data.skills);
        }
        function callback1(res: { json: () => Promise<any>; }) {
            res.json().then(callback2);
        }
        fetch("http://localhost:8082/skill/skills", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {skill.map((skills : SkillCard) => (
                <div key={skills._id} className="flex flex-col items-center bg-white border shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <img src={skills.image} alt="img" className="h-[300px] w-[300px] rounded-xl mb-4 object-cover" />
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">{skills.skillName}</h3>
                        <p className="text-gray-600 mb-2">{skills.description}</p>
                        <p className="text-sm text-gray-500">Category: <span className="font-medium">{skills.category}</span></p>
                        <p className="text-sm text-gray-500">Proficiency Level: <span className="font-medium">{skills.proficiencyLevel}</span></p>
                        <p className="text-sm text-gray-500">Experience: <span className="font-medium">{skills.experience}</span></p>
                    </div>
                    <Button className="mt-3 bg-blue-500"
                    onClick={ () => {
                        navigate("/skillcard/"+skills._id)
                    }}>View</Button>
                </div>
            ))}
        </div>
    );
}

export default SkillCard;

