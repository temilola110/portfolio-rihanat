import React from 'react';

const Home = () => {
  return (
    <section >

        {/* <div class="row intro-content">

            <div class="column large-9 mob-full intro-text">
                <h3>Hello, I'm Temilola Mustapha</h3>
                <div className='sheslying'>
                    <h1>
                    Frontend 
                    Developer 
                    Based In Nigeria.
                </h1>
                </div>
                
            </div>

            <div class="intro-scroll">
                <a href="#about" class="intro-scroll-link smoothscroll">
                    Scroll For More
                </a>
            </div>

            <div class="intro-grid"></div>
            <div class="intro-pic"></div>

        </div>  */}
        <div className='hmmm'> 
        <div className='flex-div'>
                <div className='first'>
                    <div class="column large-9 mob-full intro-text"> 
                    <h3 style={{paddingBottom:'30px',color:'pink'}}>Hello, I'm Temilola Mustapha</h3>
                <div className='sheslying'>
                    <h1>
                    Frontend 
                    Developer 
                    Based In Nigeria.
                </h1>
                </div>
               
                    </div>
                    <div className="shegaveup">
                    <a href="#about" className=" smoothscroll">
                    Scroll For More
                </a>
                    </div>
                    {/* <div className="intro-scroll">
                <a href="#about" className="intro-scroll-link smoothscroll">
                    Scroll For More
                </a>
            </div> */}
                </div>
            <div className='second'>
            <div class="text">
                <div>fhffh</div>
            </div>
            </div>
        </div>
        
        </div>

    </section>
  );
};

export default Home;