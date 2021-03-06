import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ParticlesBg from 'particles-bg';

const Landing = ({isAuthenticated}) => {

  if(isAuthenticated){
   return <Redirect to ='/dashboard' />;
  }

    return ( 
      <section className="landing">
        <ParticlesBg num={20} type="circle" bg={true} />

        <div className="landing-inner">
          <h1 className="x-large">AskJC</h1>
          <p className="lead">
            Exclusive portal for JSSSTU Mysore. The best of guidance at one place.
          </p>
          <div className="buttons">
            <Link to='/register' className="btn btn-primary">Register</Link>
            <Link to='/login' className="btn btn-light">Login</Link>
          </div>
        </div>
    </section>
     );
}

Landing.propTypes ={
  isAuthenticated :PropTypes.bool
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})
 
export default connect(mapStateToProps)(Landing);