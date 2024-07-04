import React from "react";
import Marquee from "react-fast-marquee";

const teamMembers = [
  {
    name: "John Doe",
    role: "Software Engineer",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Graphic Designer",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/4.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Manager",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
  },
  {
    name: "Peter Johnson",
    role: "Seo specialist",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
  },
  {
    name: "Emily Brown",
    role: "UX Designer",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/5.jpg",
  },
  {
    name: "Michael Davis",
    role: "Frontend Developer",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/6.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Content Writer",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/7.jpg",
  },
  {
    name: "David Wilson",
    role: "Project Manager",
    imageUrl: "https://spacema-dev.com/elevate/assets/images/team/8.jpg",
  },
];

const OurTeam = () => {
  return (
    <section id="our-team" className="bg-black py-32">
      <div className="container mx-auto px-4">
        <h2 className=" gradient-text text-3xl font-bold text-center mb-8 text-primary">
          Meet Our Team
        </h2>

        <div className="overflow-hidden">
          <Marquee gradient={false} speed={50}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black rounded-lg shadow-md p-6 mx-4 text-center border-2 border-[#E04716] "
              >
                <img
                  src={member.imageUrl}
                  alt={`Team Member ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-full mb-4 mx-auto"
                />
                <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white">Role: {member.role}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
