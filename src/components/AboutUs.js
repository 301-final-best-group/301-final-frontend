import React from "react";
import '../aboutus.css'
import br from '../profile/IMG_0072.jpg'
import dannertaylor from '../profile/dannertaylor.jpg'
import yurii from '../profile/yurii.jpg'
import hannah from '../profile/hannah.jpg'



class AboutUs extends React.Component {
    render() {
        return (
                <>
                <div className="aboutUsBg">               
                <h2 className="headerAbout" >About Us</h2>
            <section className="about-us">
                
                <div className="team-member">
                    <h2>Brenden</h2>
                    <img className="img-right" src={br} alt="brandon" width="200" />
                    <p>Yoo! My name is Brenden and I'm new to the tech industry, looking to get into frontend/backend development. Though I may be new to the software development world, I stand out from the other devs with my creativity. Coming up with new ideas and work arounds are key to keeping a steady workflow and finishing projects with utmost efficiency. After all, a project starts out as an idea, which starts out as creativity. In addition to my creativity, I also have a strong passion for learning and staying up-to-date with the latest technologies and trends in the tech industry. I believe that continuous learning is crucial to staying competitive in the fast-paced world of software development.</p>
                </div>
                <div className="team-member">
                    <h2>Danner</h2>
                    <img className="img-left" src={dannertaylor} alt="/" width={200}/>
                    <p>Danner  is  currently  working  in the financial industry  as a banker. He is also a co-founder, CEO, and CFO for a start-up tech company in the Cayman Islands, developing a hub for local services. He decided  to  learn  about software development  to pivot his career from the traditional financial industry to the fintech-oriented industry. Danner also wants to know how to code to  be  able to assist in the development of his start-up company. He plans to advance his technical knowledge in python to focus more on data analysis and building dashboards. He  believes that his new  technical skills, paired  with his  experience in the  traditional financial  industry, will  boost his career  in the fintech   industry</p>
                </div>
                <div className="team-member">
                    <h2>Hannah</h2>
                    <img className="img-right" src={hannah} alt="/" width={200}/>
                    <p>Hi I'm Hannah, and I am currently working as a pharmacy technician in an independent pharmacy where I have been working for just over three years. I learned about software development through friends who are in the field, and after doing some research and learning a bit on my own, I decided to take the step into taking classes at Code Fellows. Since I have always loved putting things together and problem-solving, I am excited to have found something I could enjoy and become passionate about. I plan on utilizing the skills she has learned in my past job experiences as well as the knowledge I has gained at Code Fellows to become a well-equipped software developer.</p>
                </div>
                <div className="team-member">
                    <h2>Yurii</h2>
                    <img className="img-left" src={yurii} alt="/" width={200}/>
                    <p>Hi, I'm Yurii, and I'm transitioning from my previous career as a cable tech to become a full-stack developer. As a beginner in full-stack development, I'm eager to learn and gain hands-on experience in both front-end and back-end development. My experience in customer service and communication has taught me the importance of building relationships with clients and collaborating with team members to deliver quality work. I'm excited about the opportunities and challenges that lie ahead in this field, and I'm determined to work hard and continuously improve my skills to become a successful full-stack developer. I am always eager to expand my knowledge and skills.</p>
                </div>
            </section>
            </div>
                </>

        )
    }
}

export default AboutUs;

