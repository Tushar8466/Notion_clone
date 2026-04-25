import React from 'react';
import './Team.css';
import Footer from '../ui/Footer';
import Ballpit from '../ui/BallPit';

const developers = [
  {
    id: 1,
    name: "Tushar Singla",
    designation: "Frontend Developer",
    image: "https://github.com/Tushar8466.png",
    bio: "Passionate about creating beautiful and intuitive user interfaces. Specializes in React and modern CSS."
  },
  {
    id: 2,
    name: "Harshita Jain",
    designation: "Software Engineer",
    image: "https://github.com/treeshax.png",
    bio: "Expert in full-stack development and system architecture. Loves solving complex logical problems."
  },
  {
    id: 3,
    name: "Sunny Kushwaha",
    designation: "Software Engineer",
    image: "https://github.com/smoky4g4h.png",
    bio: "Focused on performance optimization and scalable backend systems. Enthusiast for emerging web technologies."
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <div className="ballpit-background">
      </div>
      <div className="team-container">
        <div className="team-header">
          <h1 className="team-title">Meet the Team</h1>
          <p className="team-subtitle">The creative minds behind Scribo's powerful workspace.</p>
        </div>

        <div className="team-grid">
          {developers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <div className="member-info">
                <h2 className="member-name">{member.name}</h2>
                <p className="member-designation">{member.designation}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="member-social">
                  <a href={`https://github.com/${member.image.split('/').pop().split('.')[0]}`} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
