import React from 'react'
import useApi from 'src/core/useApi';
import "./account-login.css";
import "./colors.min.css";
// import "./bootstrap-extended.min.css"; 
// import "./bootstrap.min.css";
import "./components.min.css";





const Login = (props) => {
  let api=useApi();

  
  const doLogin=async ()=>{
    let email=document.getElementById("email_field").value;
    let password=document.getElementById("password_field").value;
    console.log('login');
    let response = await api.invoke({
      endPoint: "https://logistic.svtinfra.com/backend/api/login",
      method: "post",
      data: {"email":email,"password":password},
    });
    if(response.success){
      console.log('response',response.data);
      localStorage.setItem('Auth_token',JSON.stringify(response.data));
      
      props.history.push({
        pathname: "dashboard",
        // record: record,
      });
    }
  }
  return (
    <body className="vertical-layout vertical-compact-menu 1-column  bg-full-screen-image menu-expanded blank-page blank-page" data-open="click" data-menu="vertical-compact-menu" data-col="1-column">
    <div className="app-content content">
        <div className="content-wrapper">
            <div className="content-body">
                
                <div className="fullscreen-overlay">
                    <div className="wrap mt-2">
                        <button className="btn btn-default btn-sm btn-close fullscreen-overlay-open float-right"><i className="la la-times"></i></button>
                    </div>
                </div>
                <section classNameName="account-login" className="flexbox-container">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0" style={{"margin-right": "50%"}}>
                            <div className="backface">
                                <div className="card-content">
                                    <div className="card-body">
                                        <center>
                                            <img style={{"width":"33%","margin-bottom":"6%","margin-top":"-3%"}} src="https://svtinfra.com/images/svt%20infra.png" />
                                        </center>
                                        <div>
                                            <fieldset className="form-label-group">
                                                <input type="text" className="form-control" style={{"cursor":"text"}} id="email_field" placeholder="Your Email" name="email_field" onkeyup="this.value = this.value.toLowerCase();" required />
                                                <div hidden><input placeholder="" id="Refdivision" name="DIVISION" type="text" required />
                                                  
                                                </div>
                                                <label style={{"cursor":"text"}} for="email_field">Email</label>
                                            </fieldset>
                                            <fieldset className="form-label-group">
                                                <input type="password" className="form-control" style={{"cursor":"text"}} name="password_field" id="password_field" placeholder="Enter Password" required />
                                                <label style={{"cursor":"text"}} for="password_field">Password</label>
                                            </fieldset>
                                            
                                            <div className="form-group row">
                                                <div className="col-md-6 col-12 text-center text-sm-left">
                                                </div>

                                            </div>
                                            <button type="submit" className="btn-gradient-primary btn-block my-1 btnbackground" onClick={doLogin}>Log In</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    </body>
  )
}

export default Login
