import React, {Component} from 'react';



class AddPlayerForm extends Component{
    
    //before React.createRef
    // state= {
    //     value: ''
    // }
    
    /**
     * React.createRef
     * 
     * playerInput = React.createRef();
     * 
     * Use refs when you don't need to keep track of every keystroke(as with every keystroke the DOM is re-rendered). These are controlled components
     * 
     * Uncontrolled component rely on functions to update state
     * 
     */

    playerInput = React.createRef();

    //Before createRef

    // handleValueChange = (e) => {
    //     this.setState( 
    //         {value: e.target.value }
    //         )
    // }

    handleSubmit = (e) => {
        // if !e.preventDefault(); we will lose all application state data as it requests from server.
        e.preventDefault();
        //before createRef
        //this.props.addPlayer(this.state.value);
        this.props.addPlayer(this.playerInput.current.value);
        // this.setState = ""
        e.currentTarget.reset();
    }
    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                        type="text"
                        //createRef
                        ref={this.playerInput}
                        // value={this.state.value}
                        // onChange={this.handleValueChange}
                        placeholder="Add New Player's name"
                />

                <input
                    type="submit"
                    value="Add Player"
                />

            </form>

        )
    }
}

export default AddPlayerForm;


//Below is the code snippet from the teacher's note with the class Component as a function component, to demonstrate the use of ref within a function component

// const AddPlayerForm = ({ addPlayer }) => {

//     let playerInput = React.createRef();
//     let handleSubmit = (e) => {
//       e.preventDefault();
//       addPlayer(playerInput.current.value);
//       e.currentTarget.reset();
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           ref={playerInput}
//           placeholder="Enter a player's name"
//         />
  
//         <input 
//           type="submit" 
//           value="Add Player" 
//         />
//       </form>
//     ); 
//   }