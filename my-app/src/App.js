import "./App.css";
import Home from "./home";

function App() {
  return (
    <div>
      <header className="app-header">
        <h1 className="title">Expense Detective</h1>
        <nav className="navbar">
          <div className="nav-item">Home</div>
          <div className="nav-item">Sign Up</div>
          <div className="nav-item">Login</div>
          <div className="nav-item">Contact Us</div>
          <div className="nav-item">About Us</div>
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;
