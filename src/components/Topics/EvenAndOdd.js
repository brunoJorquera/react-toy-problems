import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor(props){
        super(props)
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(input){
        this.setState({ userInput: input })
    }

    handleClick(userInput){
        let array = userInput.split(',');
        let evens = [];
        let odds = [];

        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){
                evens.push((array[i]));
            } else{
                odds.push((array[i]));
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Even and Odds</h4>
               <input 
               className="inputLine"
               type="number"
               onChange={ (e) => this.handleChange(e.target.value) }
               />
               <button 
               className="confirmationButton" 
               onClick={ () => {this.handleClick(this.state.userInput)} }
               >Click Here</button>
               <span className="resultsBox">evens: {this.state.evenArray}</span>
               <span className="resultsBox">odds: {this.state.oddArray}</span>
            </div>
        )
    }
}