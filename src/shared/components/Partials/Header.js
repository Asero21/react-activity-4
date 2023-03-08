import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
    return (
      <div className="Header">
        <div class="container">
          <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
            <li class="nav-item"><a class="nav-link"><Link to="/home">Home</Link></a></li>
              <li class="nav-item"><a class="nav-link"><Link to="/Cars">Cars</Link></a></li>
              <li class="nav-item"><a class="nav-link"><Link to="/ContactUs">Contact Us</Link></a></li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
  
  export default Header;