// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // For Bootstrap JavaScript functionality

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand">
//           MyApp
//         </Link>
        
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarNav" 
//           aria-controls="navbarNav" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link to="/ExpenseTracker" className="nav-link">
//               ExpenseTracker
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/aboutus" className="nav-link">
//                 About Us
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/Home" className="nav-link">
//                 Add Expenses
//               </Link>
//             </li>


//             <li className="nav-item">
//               <Link to="/contact" className="nav-link">
//                 Contact Us
//               </Link>


//             </li>
//             <li className="nav-item">
              
//               <Link to="/" className="nav-link">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/signup" className="nav-link">
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  // Navbar style with background image and gradient overlay
  const navbarStyle = {
    backgroundImage: `linear-gradient(to right, rgba(25, 32, 85, 0.9), rgba(123, 31, 162, 0.9)), 
                      url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '0.5rem 1rem'
  };

  // Nav link style
  const navLinkStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff'
  };

  const brandStyle = {
    color: '#fff',
    fontWeight: '700',
    fontSize: '1.5rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={brandStyle}>
          MyApp
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255,255,255,0.5)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                to="/" 
                className="nav-link" 
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                ExpenseTracker
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/aboutus" 
                className="nav-link" 
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/Home" 
                className="nav-link" 
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                Add Expenses
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className="nav-link" 
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/login" 
                className="nav-link" 
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/signup" 
                className="nav-link" 
                style={{
                  ...navLinkStyle,
                  backgroundColor: 'rgba(106, 17, 203, 0.7)',
                  color: '#fff'
                }}
                activeStyle={activeNavLinkStyle}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;