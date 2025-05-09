// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white mt-5">
//       <Container fluid className="py-5">
//         <Row>
//           <Col md={3} className="mb-4 mb-md-0">
//             <h5>About Us</h5>
//             <p className="text-unstyled">
//              AbhiShek Yadav
//             </p>
//             <p className="text-unstyled">
//              Aman Sharma
//             </p>
//             <p className="text-unstyled">
//              Anjali Pal
//             </p>
//           </Col>
          
//           <Col md={3} className="mb-4 mb-md-0">
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="/" className="text-white">Home</a></li>
//               <li><a href="/about" className="text-white">About</a></li>
//               <li><a href="/services" className="text-white">Services</a></li>
//               <li><a href="/contact" className="text-white">Contact</a></li>
//             </ul>
//           </Col>
          
//           <Col md={3} className="mb-4 mb-md-0">
//             <h5>Contact Info</h5>
//             <address className="text-unstyled">
//                Mahadev ki Nagari <br />
//               Varansi, pin - 212011<br />
//               <abbr title="Phone">Phone :</abbr>9076504598
//             </address>
//           </Col>
          
//           <Col md={3}>
//             <h5>Follow Us</h5>
//             <div className="social-icons">
//             <a href="https://youtube.com/@aabhishekvlog?si=1NB1gm3lXo-tV4B9" className="text-white me-2"><FaYoutube  size={30} /></a>
//               <a href="#" className="text-white me-2"><FaFacebook size={30} /></a>
//               <a href="#" className="text-white me-2"><FaTwitter size={30} /></a>
//               <a href="https://www.instagram.com/itsabhi_yaduvanshi/?igsh=c2pnaDNrMWxqdDdp&utm_source=qr#" className="text-white me-2"><FaInstagram size={30} /></a>
//               <a href="www.linkedin.com/in/abhishek-yadav-79a930234" className="text-white"><FaLinkedin size={30} /></a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
      
//       <div className="bg-secondary py-3">
//         <Container>
//           <Row>
//             <Col className="text-center">
//               <p className="mb-0">&copy; {new Date().getFullYear()} Yadav Company. All rights reserved.</p>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </footer>
//   );
// };

// export default Footer;












// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const teamMembers = [
//     { name: "AbhiShek Yadav" },
//     { name: "Aman Sharma" },
//     { name: "Anjali Pal" }
//   ];
  
//   const quickLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/services", label: "Services" },
//     { path: "/contact", label: "Contact" }
//   ];
  
//   const socialLinks = [
//     { icon: <FaYoutube size={20} />, url: "https://youtube.com/@aabhishekvlog?si=1NB1gm3lXo-tV4B9" },
//     { icon: <FaFacebook size={20} />, url: "#" },
//     { icon: <FaTwitter size={20} />, url: "#" },
//     { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/itsabhi_yaduvanshi/?igsh=c2pnaDNrMWxqdDdp&utm_source=qr#" },
//     { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/abhishek-yadav-79a930234" }
//   ];

//   return (
//     <footer className="bg-dark text-white mt-auto">
//       <Container fluid className="py-4 px-4 px-md-3">
//         <Row className="justify-content-center">
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-3">About Us</h5>
//             <ul className="list-unstyled">
//               {teamMembers.map((member, index) => (
//                 <li key={index} className="mb-1">{member.name}</li>
//               ))}
//             </ul>
//           </Col>
          
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-3">Quick Links</h5>
//             <ul className="list-unstyled">
//               {quickLinks.map((link, index) => (
//                 <li key={index} className="mb-1">
//                   <a href={link.path} className="text-white text-decoration-none hover-primary">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Col>
          
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-3">Contact Info</h5>
//             <address>
//               <p className="mb-1">Mahadev ki Nagari</p>
//               <p className="mb-1">Varanasi, PIN - 212011</p>
//               <p className="mb-1">
//                 <abbr title="Phone" className="text-decoration-none">Phone:</abbr> 9076504598
//               </p>
//             </address>
//           </Col>
          
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-3">Follow Us</h5>
//             <div className="d-flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.url} 
//                   className="text-white text-decoration-none"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   aria-label={`Follow us on ${social.icon.type.displayName}`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </Col>
//         </Row>
//       </Container>
      
//       <div className="bg-secondary py-3">
//         <Container>
//           <Row>
//             <Col className="text-center">
//               <p className="mb-0 small">
//                 &copy; {currentYear} Yadav Company. All rights reserved.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


// // Import team member photos (replace with your actual image paths)
// import abhishekPhoto from './images/Abhishek_Yadav_KH.jpg';
// //import amanPhoto from './images/aman.jpg';
// //import anjaliPhoto from './images/anjali.jpg';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const teamMembers = [
//     { 
//       name: "AbhiShek Yadav",
//       photo: abhishekPhoto,
//       role: "Founder"
//     },
//     { 
//       name: "Aman Sharma",
//      // photo: amanPhoto,
//       role: "Developer"
//     },
//     { 
//       name: "Anjali Pal",
//      //  photo: anjaliPhoto,
//       role: "Designer"
//     }
//   ];
  
//   const quickLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/services", label: "Services" },
//     { path: "/contact", label: "Contact" }
//   ];
  
//   const socialLinks = [
//     { icon: <FaYoutube size={20} />, url: "https://youtube.com/@aabhishekvlog?si=1NB1gm3lXo-tV4B9" },
//     { icon: <FaFacebook size={20} />, url: "#" },
//     { icon: <FaTwitter size={20} />, url: "#" },
//     { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/itsabhi_yaduvanshi/?igsh=c2pnaDNrMWxqdDdp&utm_source=qr#" },
//     { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/abhishek-yadav-79a930234" }
//   ];

//   return (
//     <footer className="bg-dark text-white mt-auto">
//       <Container fluid className="py-5 px-4 px-md-3">
//         <Row className="justify-content-center">
//           {/* Team Members Column */}
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-4">Our Team</h5>
//             <div className="team-members">
//               {teamMembers.map((member, index) => (
//                 <div key={index} className="d-flex align-items-center mb-3">
//                   <div className="team-photo-container me-3">
//                     <img 
//                       src={member.photo} 
//                       alt={member.name} 
//                       className="rounded-circle team-photo"
//                       width="60"
//                       height="60"
//                     />
//                     <div className="team-photo-hover">
//                       <span>{member.role}</span>
//                     </div>
//                   </div>
//                   <div>
//                     <h6 className="mb-0">{member.name}</h6>
//                     <small className="text-muted">{member.role}</small>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Col>
          
//           {/* Quick Links Column */}
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-4">Quick Links</h5>
//             <ul className="list-unstyled">
//               {quickLinks.map((link, index) => (
//                 <li key={index} className="mb-2">
//                   <a 
//                     href={link.path} 
//                     className="text-white text-decoration-none footer-link"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Col>
          
//           {/* Contact Info Column */}
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-4">Contact Us</h5>
//             <address className="footer-contact">
//               <p className="mb-2 d-flex align-items-start">
//                 <i className="bi bi-geo-alt-fill me-2 mt-1"></i>
//                 <span>Mahadev ki Nagari, Varanasi, PIN - 212011</span>
//               </p>
//               <p className="mb-2 d-flex align-items-center">
//                 <i className="bi bi-telephone-fill me-2"></i>
//                 <a href="tel:9076504598" className="text-white text-decoration-none">9076504598</a>
//               </p>
//               <p className="mb-2 d-flex align-items-center">
//                 <i className="bi bi-envelope-fill me-2"></i>
//                 <a href="mailto:contact@yadavcompany.com" className="text-white text-decoration-none">contact@yadavcompany.com</a>
//               </p>
//             </address>
//           </Col>
          
//           {/* Social Media Column */}
//           <Col lg={3} md={6} className="mb-4">
//             <h5 className="text-uppercase mb-4">Connect With Us</h5>
//             <div className="social-links d-flex gap-3 mb-4">
//               {socialLinks.map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.url} 
//                   className="text-white social-icon rounded-circle d-flex align-items-center justify-content-center"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   aria-label={`Follow us on ${social.icon.type.displayName}`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
            
//             <div className="newsletter">
//               <h6 className="mb-3">Subscribe to Newsletter</h6>
//               <div className="input-group">
//                 <input 
//                   type="email" 
//                   className="form-control" 
//                   placeholder="Your email" 
//                   aria-label="Your email"
//                 />
//                 <button className="btn btn-primary" type="button">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
      
//       {/* Copyright Section */}
//       <div className="bg-secondary py-3">
//         <Container>
//           <Row>
//             <Col className="text-center">
//               <p className="mb-0 small">
//                 &copy; {currentYear} Yadav Company. All rights reserved. | 
//                 <a href="/privacy" className="text-white ms-2 text-decoration-none">Privacy Policy</a> | 
//                 <a href="/terms" className="text-white ms-2 text-decoration-none">Terms of Service</a>
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../Assest/Footer.css'; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    // { path: "/", label: "Home" },
    { path: "/aboutus", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];
  
  const socialLinks = [
    { icon: <FaYoutube size={20} color="red" />, url: "https://youtube.com/@aabhishekvlog?si=1NB1gm3lXo-tV4B9" },
    { icon: <FaFacebook size={20} color="blue" />, url: "#" },
    { icon: <FaTwitter size={20}  color="black" />, url: "#" },
    { icon: <FaInstagram size={20} color=" #e95950" />, url: "https://www.instagram.com/itsabhi_yaduvanshi/?igsh=c2pnaDNrMWxqdDdp&utm_source=qr#" },
    { icon: <FaLinkedin size={20}  color="#0077B5" />, url: "https://www.linkedin.com/in/abhishek-yadav-79a930234" }
  ];

  return (
    <footer className="footer-container">
      <Container>
        <Row>
          {/* Quick Links */}
          <Col md={4} className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Col>
          
          {/* Contact Info */}
          <Col md={4} className="footer-section">
            <h4>Contact Us</h4>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Mahadev ki Nagari, Varanasi
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 9076504598
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> contact@yadavcompany.com
            </p>
          </Col>
          
          {/* Social Media */}
          <Col md={4} className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Yadav Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;