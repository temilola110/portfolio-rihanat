// import React from 'react';

// const Header = () => {
//   return (
//     <header className='s-header'> 
//       <nav className='header-nav-wrap'>
//         <ul className='header-main-nav' >
//           <li className='current'><a class="smoothscroll" href="#intro" title="Intro">Intro</a></li> 
//           <li> <a class="smoothscroll" href="#about" title="About">About</a></li>
//           <li><a class="smoothscroll" href="#services" title="Projects">Projects</a></li>
//           <li><a class="smoothscroll" href="#works" title="Contact">Contact</a></li>
//         </ul>

//         <ul className='header-social'>
//             <li><a href="#0"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
//             <li><a href="#1"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
//         </ul>
//       </nav>
//       <a classname ="header-menu-toggle" href="#"><span>Menu</span></a>
//       <marquee behavior="" direction=""></marquee>
//     </header>
//   );
// };

// export default Header
import React from 'react';

const Header = () => {
  return (
//  <div>
//   <div>
//     <div className='holders'>
//       <div>
//         <div>
//           <div className='temi'>Temilola.</div>
//         </div>
// </div>
//       <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
//         <div className='nav-holders'>
//           <div>
//             <span>
//               Home
//             </span>
//           </div>
//           <div>
//           <span>
//             About
//           </span>
//             </div>
//           <div>
//             <span>Works</span>
//           </div>
//           <div>
//             <span>Projects</span>
//           </div>
//           <div>
//             <span>Contact</span>
//           </div>
//           <div>
//             <span>Footer</span>
//           </div>
         
          
//         </div>
//       </div>
//       <div className='links'>links</div>
//     </div>
//   </div>
//  </div>

<header class="s-header sticky">

<div class="header-logo">
    <a class="site-logo" href="index.html">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJK06d9G1xyKICseY_ccgvu3Np4EgN2sJkw&usqp=CAU" alt="logo image" />
    </a>
</div>

<nav class="header-nav-wrap">
    <ul class="header-main-nav">
        <li class=""><a class="smoothscroll" href="#intro" title="intro">Intro</a></li>
        <li class=""><a class="smoothscroll" href="#about" title="about">About</a></li>
        <li class=""><a class="smoothscroll" href="#projects" title="projects">Projects</a></li>
        {/* <li class="current"><a class="smoothscroll" href="#wcontact" title="contact">Contact</a></li> */}
        <li><a class="smoothscroll" href="#contact" title="footer">CONTACT ME</a></li>	
    </ul>

    <ul class="header-social">
        <li><a href="#0"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
        <li><a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
        <li><a href="#0"><i class="fab fa-behance" aria-hidden="true"></i></a></li>
    </ul>
</nav>

<a class="header-menu-toggle" href="#"><span>Menu</span></a>

</header>
  );
};

export default Header