import React from 'react';
import GuestInputForm from './GuestInputForm';

const Header = (props) => 

    <header>
          <h1>Quest Line</h1>
          <br></br>
          <p>A Quick Check App</p>
          <GuestInputForm 
              newGuestHandleSubmit={props.newGuestHandleSubmit}
              handleNameInput={props.handleNameInput}
              pendingGuest={props.pendingGuest}
          />
          
          
    </header>



export default Header;