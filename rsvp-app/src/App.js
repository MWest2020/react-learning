import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';

import './App.css';

class App extends Component {
  
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests:  [ ]
  };
  
  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }
  /**
  * This method flips the boolean. 
  * @param {num} id 
  */

  toggleGuestPropertyAt = (property, id) => this.setState({
    guests: this.state.guests.map(guest => {
      if(id === guest.id){
        return {
          ...guest,
          [property]: !guest[property]
          };
      }
      return guest;
    })
  });

  toggleConfirmationAt = id => this.toggleGuestPropertyAt('isConfirmed', id);

  removeGuestAt = id =>
  this.setState({
    guests: this.state.guests.filter(guest => id !== guest.id)
  });


  // removeGuestAt = id => 
  //   this.setState({
  //   guests: [
  //     ...this.state.guests.slice(0, index),
  //     ...this.state.guests.slice(index + 1)  
  //     ]
  //   })
  

  toggleEditingAt = id => this.toggleGuestPropertyAt('isEditing', id);

  setNameAt = (name, id) => this.setState({
    guests: this.state.guests.map((guest, index) => {
      if(id === guest.id){
        return {
          ...guest,
          name
          };
      }
      return guest;
    })
  });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState( { 
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ], 
      pendingGuest: ''
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
          pendingGuest={this.state.pendingGuest}

        />
        
        <Main 
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
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
                
      </div>
    );
  }
}

export default App;
