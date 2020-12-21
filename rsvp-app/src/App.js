import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';

import './App.css';

class App extends Component {
  
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests:  [
      {
        name: 'Eileen, the Crow',
        isConfirmed : false,
        isEditing: false
      },
      {
        name: 'Alfred, Vileblood hunter',
        isConfirmed : true,
        isEditing: false
      },
      {
        name: 'Amelia, last Vicar',
        isConfirmed : true,
        isEditing: false
      }
    ]
  };
  
  /**
  * This method flips the boolean. 
  * @param {num} indexToChange 
  */

  toggleGuestPropertyAt = (property, indexToChange) => this.setState({
    guests: this.state.guests.map((guest, index) => {
      if(index === indexToChange){
        return {
          ...guest,
          [property]: !guest[property]
          };
      }
      return guest;
    })
  });

  toggleConfirmationAt = index => this.toggleGuestPropertyAt('isConfirmed', index);

  removeGuestAt = (index) => 
    this.setState({
    guests: [
      ...this.state.guests.slice(0, index),
      ...this.state.guests.slice(index + 1)  
      ]
    })
  

  toggleEditingAt = index => this.toggleGuestPropertyAt('isEditing', index);

  setNameAt = (name, indexToChange) => this.setState({
    guests: this.state.guests.map((guest, index) => {
      if(index === indexToChange){
        return {
          ...guest,
          name
          };
      }
      return guest;
    })
  });

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState( { 
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
          
        },
        ...this.state.guests
      ], pendingGuest: ''
    });
  }

  

  toggleFilter = () => { 
    this.setState({ isFiltered: !this.state.isFiltered });
  }

  handleNameInput = e => 
    this.setState({pendingGuest: e.target.value})


  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => 
    this.state.guests.reduce(( total, guest  ) => guest.isConfirmed ? total + 1 : total  , 0)
    
  

  render(){
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.pendingGuest}

        />
        
          <Main 
            toggleFilter={this.toggleFilter}
            isFiltered={this.isFiltered}
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}

          />
          {/* <Counter 
            
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          />

         <GuestList 
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
             /> */}

        
      </div>
    );
  }
}

export default App;
