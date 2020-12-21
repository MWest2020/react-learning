import React from 'react';
import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';
import PropTypes from 'prop-types';


const Main = (props) => {

    return(
    <div className="main">
        <h2>Invitees</h2>
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
    toggleFilter: PropTypes.func,
    isFiltered: PropTypes.func
}

export default Main;