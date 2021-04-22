import React, { useEffect } from 'react'
const Message=(props)=>{
useEffect(()=>{
window.open(
  'https://logistic.svtinfra.com/sms.php',
  '_blank' 
);
},[]);
return(
  <></>
);
}
export default Message;