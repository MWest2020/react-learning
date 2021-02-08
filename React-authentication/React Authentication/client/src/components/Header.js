import React, { PureComponent }  from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;

    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">MyAuth</h1>
          <nav>
            {authUser ? (
              <>
                <span>Welcome, {authUser.name}!</span>
                <Link to="/signout">Sign Out</Link>
              </>
            ) : (
              <>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    );
  }
};
