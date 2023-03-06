import React from "react";
import '../aboutus.css'

class AboutUs extends React.Component {
    render() {
        return (
                <>
                <h2>About Us</h2>
            <section className="about-us">
                
                <div className="team-member">
                    <h2>Brenden</h2>
                    <img className="img-right" scr='./profile/br.png'  alt="/"  />
                    <p>Yoo! My name is Brenden and I'm new to the tech industry, looking to get into frontend/backend development. Though I may be new to the software development world, I stand out from the other devs with my creativity. Coming up with new ideas and work arounds are key to keeping a steady workflow and finishing projects with utmost efficiency. After all, a project starts out as an idea, which starts out as creativity.</p>
                </div>
                <div className="team-member">
                    <h2>Danner</h2>
                    <img className="img-left" src="https://placehold.co/200x200" alt="/" />
                    <p>Danner is currently working in the financial industry as a banker. He is also a co-founder, CEO, and CFO for a start-up tech company in the Cayman Islands, developing a hub for local services. He decided to learn about software development to pivot his career from the traditional financial industry to the fintech-oriented industry. Danner also wants to know how to code to be able to assist in the development of his start-up company. He plans to advance his technical knowledge in python to focus more on data analysis and building dashboards. He believes that his new technical skills, paired with his experience in the traditional financial industry, will boost his career in the fintech industry</p>
                </div>
                <div className="team-member">
                    <h2>Hannah</h2>
                    <img className="img-right" src="https://placehold.co/200x200" alt="/" />
                    <p>Yoo! My name is Brenden and I'm new to the tech industry, looking to get into frontend/backend development. Though I may be new to the software development world, I stand out from the other devs with my creativity. Coming up with new ideas and work arounds are key to keeping a steady workflow and finishing projects with utmost efficiency. After all, a project starts out as an idea, which starts out as creativity.</p>
                </div>
                <div className="team-member">
                    <h2>Yurii</h2>
                    <img className="img-left" src="./" alt="/" />
                    <p>Hi, I'm Yurii, and I'm transitioning from my previous career as a cable tech to become a full-stack developer. As a beginner in full-stack development, I'm eager to learn and gain hands-on experience in both front-end and back-end development. My experience in customer service and communication has taught me the importance of building relationships with clients and collaborating with team members to deliver quality work. I'm excited about the opportunities and challenges that lie ahead in this field, and I'm determined to work hard and continuously improve my skills to become a successful full-stack developer.</p>
                </div>
            </section>
                </>

        )
    }
}

export default AboutUs;

