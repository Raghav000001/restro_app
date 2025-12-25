import { Link } from "react-router-dom"

function Header(){
     return (
        <header className="site-header"> 
          <div className="header-inner">
            <h2 className="logo">Foodly</h2>
            <nav className="nav">
              <ul>
                 <li>home</li>
                 <li> <Link to={"/about"}> about </Link>   </li>
                 <li>contact us</li>
                 <li>feedback</li>
              </ul>
            </nav>
          </div>
        </header>
     )
 }

 export default Header