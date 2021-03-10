import React from 'react'
import '../pages/home.css';
import { Link } from 'react-router-dom'


function ButtonZero() {
    let onButtonClickHandler = () => {
        window.alert('Hello')
    
    };
    return (
        <>
        <h3>Select Your Grade</h3>
        <Link to="/yearsix"><button className= 'zero'>year 6</button></Link><br/>
        <Link to="/yearSeven"><button onClick ={onButtonClickHandler} className= 'zero'>year 7</button></Link><br/>
        <Link to="/yearEight"><button className= 'zero'>year 8</button></Link><br/>
        <Link to="/yearNine"><button className= 'zero'>year 9</button></Link><br/>
        <Link to="/yearTen"><button className= 'zero'>year 10</button></Link><br/>
        <Link to="/yearEleven"><button className= 'zero'>year 11</button></Link>
         
            
        </>
    )
}

export default ButtonZero
