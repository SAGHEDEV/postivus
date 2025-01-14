import React from "react";
import Subheads from "../../global-components/subheads";
import TeamCard from "../teamCard";

const TeamSection = () => {
  const teams = [
    {
      name: "Adekola Abdulhakeem",
      post: "CEO and Founder",
      desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image:
        "https://img.freepik.com/premium-vector/flat-illustration-arab-man_67813-1610.jpg?w=740",
    },
    {
      name: "Jane Doe",
      post: "Director of Operations",
      desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image:
        "https://img.freepik.com/premium-photo/young-african-american-woman-picture-dark-skinned-woman-with-hair-bun_259150-50377.jpg?w=360",
    },
    {
      name: "Michael Brown",
      post: "Senior SEO Specialist",
      desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image:
        "https://img.freepik.com/free-photo/medium-shot-smiley-man-ready-travel_23-2149380154.jpg?t=st=1736781258~exp=1736784858~hmac=a3f2902b1898dfa3eda9f3213e7fd1fbb9993df30d457a3c78821a765a6fbfc0&w=360",
    },
    {
      name: "Emily Johnson",
      post: "PPC Manager",
      desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image:
        "https://img.freepik.com/free-photo/portrait-young-girl-gray-t-shirt-purple-wall_197531-23362.jpg?t=st=1736781365~exp=1736784965~hmac=aaf09850206c114d6d8ee95ecdc8b9e2bb42520bf73aa67eb4b2a4d9a540eb5a&w=740",
    },
    {
      name: "Brian Williams",
      post: "Social Media Specialist",
      desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image:
        "https://img.freepik.com/premium-photo/portrait-attractive-african-american-businessman-wearing-black-suit-smart-look-isolated-white-background_640221-610.jpg?w=360",
    },
    {
      name: "Sarah Kim",
      post: "Content Creator",
      desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image:
        "https://img.freepik.com/free-photo/portrait-confident-business-woman-standing-with-her-arms-folded_1098-20791.jpg?t=st=1736781320~exp=1736784920~hmac=9991164432c0eed96f31f8b7ca0c24fcd47c4de8f2998c00f58716695ca4b533&w=360",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-10 ">
      <Subheads
        title={"Team"}
        desc={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {teams.map(({ name, post, desc, image }) => (
          <TeamCard name={name} post={post} desc={desc} image={image} />
        ))}
      </div>
      <div className="flex justify-end">
        <button className=" px-5 py-4 font-medium border-[0.5px] bg-black text-white rounded-lg  transition duration-500  w-full md:w-[264px] active:scale-75 hover:scale-105">
          See all team
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
