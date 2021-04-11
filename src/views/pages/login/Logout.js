import React, { useEffect } from 'react'

const Logout=(props)=>{
    useEffect(()=>{
        window.localStorage.removeItem('Auth_token');
        props.history.push({
            pathname: "login",
            // record: record,
          });
    },[]);
    
    return (
        <p>Logout</p>
    )

}
export default Logout;