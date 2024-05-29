import React from 'react';

const About = () => {
  return (
    <section id="about" class="s-about target-section">

    <div class="about-me">

        <div class="row heading-block aos-init aos-animate" data-aos="fade-up">
            <div class="column large-full">
                <h2 class="section-heading">About Me</h2>
            </div>
        </div>

        <div class="row about-me__content aos-init aos-animate" data-aos="fade-up">
            <div class="column large-full about-me__text">
                <p class="lead">
                "Hi, I'm Mustapha Temilola Rihanat, a passionate frontend developer with a strong focus on creating beautiful and user-friendly web experiences.
                 With a year of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, and various modern frontend frameworks like React.
                </p>

                <p>
                My journey in web development started with a keen interest in design aesthetics and a knack for problem-solving.
                I believe in the power of effective and intuitive interfaces to enhance user engagement and satisfaction. 
                As a frontend developer, I love transforming design concepts into interactive websites that not only look stunning but also provide seamless usability.
                </p>

                <p>
                I keep up with the latest web technology trends and continuously expand my knowledge to deliver cutting-edge solutions. Along with my technical expertise, I have a strong understanding of UI/UX principles and strive to create visually appealing designs while maintaining optimal performance and accessibility.
                I thrive in collaborative environments and enjoy working closely with designers and backend developers to bring projects to life. 
                I value effective communication and embrace feedback to ensure the final product meets both client and user expectations.
                In addition to my technical skills, I'm a creative thinker who enjoys brainstorming and finding innovative solutions to challenges. I'm always excited about learning new things, experimenting with new techniques, and pushing the boundaries of what's possible in frontend development.
                </p>
            </div>
        </div>

        <div class="row about-me__buttons">
            {/* <div class="column large-half tab-full aos-init aos-animate" data-aos="fade-up">
                <a href="#0" class="btn btn--stroke full-width">Hire Me</a>
            </div>
            <div class="column large-half tab-full aos-init aos-animate" data-aos="fade-up">
                <a href="#0" class="btn btn--primary full-width">Download CV</a>
            </div> */}
        </div>

    </div>  

    {/* <div class="about-experience">

        <div class="row heading-block aos-init aos-animate" data-aos="fade-up">
            <div class="column large-full">
                <h2 class="section-heading">Work &amp; Education</h2>
            </div>
        </div>

        <div class="row about-experience__timeline">

            <div class="column large-half tab-full aos-init" data-aos="fade-up">
                <div class="timeline">

                    <div class="timeline__icon-wrap">
                        <span class="timeline__icon timeline__icon--work"></span>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2018 - Present</p>
                            <h3 class="item-title">Awesome Studio</h3>
                            <h5>Lead Designer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2017 - June 2018</p>
                            <h3 class="item-title">Super Cool Agency</h3>
                            <h5>Frontend Developer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">March 2016 - June 2017</p>
                            <h3 class="item-title">Epic Design Studio</h3>
                            <h5>Frontend Developer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="column large-half tab-full aos-init" data-aos="fade-up">
                <div class="timeline">

                    <div class="timeline__icon-wrap">
                        <span class="timeline__icon timeline__icon--education"></span>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2011 - June 2015</p>
                            <h3 class="item-title">University of Life</h3>
                            <h5>Master Degree</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2009 - June 2011</p>
                            <h3 class="item-title">State Design University</h3>
                            <h5>Bachelor Degree</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2005 - June 2009</p>
                            <h3 class="item-title">School of Hard Knocks</h3>
                            <h5>Bachelor Degree</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>   */}

</section>
  );
};

export default About;