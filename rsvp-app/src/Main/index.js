import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';


const Main = (props) => {

    return(
    <div className="main">
        
        <ConfirmedFilter 
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}
        />

        <Counter 
            
            totalInvited={props.totalInvited}
            numberAttending={props.numberAttending}
            numberUnconfirmed={props.numberUnconfirmed}
        />

         <GuestList 
            guests={props.guests}
            toggleConfirmationAt={props.toggleConfirmationAt}
            toggleEditingAt={props.toggleEditingAt}
            setNameAt={props.setNameAt}
            isFiltered={props.isFiltered}
            removeGuestAt={props.removeGuestAt}
            pendingGuest={props.pendingGuest}
        />
    </div>
    )};

Main.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalInvited: PropTypes.number.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default Main;