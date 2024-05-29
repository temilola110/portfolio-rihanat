import React from 'react';

const ContactMe = () => {
  return (
  //   <section id="contact">
  //   <h2>Contact Me</h2>
  //   <form>
  //   <p>Email: temilolamustapha110@gmail.com </p>
  //       <p>Phone: 07013754086</p>
  //   </form>
  // </section>
  <section id="contact" class="s-contact ss-dark target-section">

        <div class="row heading-block aos-init aos-animate" data-aos="fade-up">
            <div class="column large-full">
                <h2 class="section-heading">Get In Touch</h2>
            </div>
        </div>

        <div class="row contact-main aos-init aos-animate" data-aos="fade-up">
            <div class="column large-full">
                <p class="contact-email">
                    <a href="mailto:#0" className='temi'>temilolamustapha110@gmail.com</a>
                </p>

                <p class="section-desc">
                Feel free to explore my portfolio and projects to see the work I've done so far.
                I'm happy to connect, listen and help. Let's work together and build
                something awesome. Let's turn your idea to an even greater product.
                If you have any questions or want to discuss a potential collaboration, I'd love to hear from you. Let's create exceptional web experiences together!.
                 <a href="mailto:#0" className='shesaidpink'>Email Me</a>.
                </p>
            </div>
        </div>

        <div class="row contact-infos aos-init aos-animate" data-aos="fade-up" data-aos-anchor=".contact-main">

            <div class="column large-5 medium-full contact-phone">
                <h4>Call Me</h4>
                <a href="tel:197-543-2345" className='work'>07013754086</a>
            </div>

            <div class="column large-7 medium-full contact-social">
                <h4>Social</h4>
                <ul>
                    <li ><a  className='work' href="https://www.facebook.com/mustapha.temilolarihanat?mibextid=haYZDX" title="Facebook">Facebook</a></li>
                    <li ><a  className='work' href="#0" title="Twitter">Twitter</a></li>
                    <li >< a  className='work' href="https://www.instagram.com/dear_temmy/?hl=en" title="Instagram">Instagram</a></li>
                </ul>
            </div>

        </div> 

    </section>
  );
};

export default ContactMe