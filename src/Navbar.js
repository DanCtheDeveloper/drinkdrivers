import { Link } from "react-router-dom"
export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/cart">
                <img src={ require("./images/cart-logo.png")} alt="Cart" height={ 200 } width={ 200 }/>
            </Link>
            <Link to="/" className="drink-drivers">
                {/* <img src={ require("/images/app-logo.png")} alt="DRINK DRIVERS" height={ 200 } width={ 200 }/> */}
            </Link>
            <ul>
                <li>
                    <Link to="/login">
                        {/* <img src={ require("/images/settings-logo.png")} alt="Login" height={ 200 } width={ 200 }/> */}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}