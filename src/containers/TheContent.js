import React, { Suspense, useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)



const TheContent = (props) => {
  useEffect(()=>{
    console.log('CheckingAuth',JSON.parse(localStorage.getItem("Auth_token")));
    if(JSON.parse(localStorage.getItem("Auth_token"))){
      props.history.push({
        pathname: "dashboard",
        // record: record,
      });
    }else{
      props.history.push({
        pathname: "login",
        // record: record,
      });
    }
  },[])
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              console.log('auth', routes);
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/login" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
