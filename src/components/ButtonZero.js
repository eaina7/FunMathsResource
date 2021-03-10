import React from 'react'
import '../pages/home.css';
import { Link } from 'react-router-dom'
function ButtonZero() {
    return (
        <>
        <h3>Select Your Grade</h3>
        <Link to={"/yearsix"}><button className= 'zero'>year 6</button></Link><br/>
        <Link to={"/yearseven"}><button className= 'zero'>year 7</button></Link><br/>
        <Link to={"/yeareight"}><button className= 'zero'>year 8</button></Link><br/>
        <Link to={"/yearnine"}><button className= 'zero'>year 9</button></Link><br/>
        <Link to={"/yearten"}><button className= 'zero'>year 10</button></Link><br/>
        <Link to={"/yeareleven"}><button className= 'zero'>year 11</button></Link>
            
            
        </>
    )
}

export default ButtonZero
