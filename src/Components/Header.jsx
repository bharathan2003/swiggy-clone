import {Link} from 'react-router-dom'
const Header =(props)=>{
    console.log("Header props", props.a);
    return(
      <>
      <div id="header"> 
      <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" alt="not" />
      <div id="head3">
      <h3><Link style={{color:'black',textDecoration:'none'}}to="/">Home</Link></h3>
      <h3><Link style={{color:'black',textDecoration:'none'}}to="/about">About</Link></h3>
      <h3><Link style={{color:'black',textDecoration:'none'}}to="/contact">Contact</Link></h3></div>
      </div>
      </>
    )
  }
export default Header