import React, { Component } from 'react'

export default class Sum extends Component {
    constructor (props){
        super(props)
        this.state={
            numberOne: 0,
            numberTwo: 0,
            sum: null
        }
    }

    handleChangeOne = (input) => {
        this.setState({ numberOne: input })
    };
    
    handleChangeTwo = (input) => {
        this.setState({ numberTwo: input })
    };

    handleClick = () => {
       let one = parseInt(this.state.numberOne, 10);
       let two = parseInt(this.state.numberTwo, 10);

       let total = (+one + +two);

       this.setState({ sum: total })
    };

    render() {
        return (
            <div className="puzzleBox sumPB">

                <h4>Sum</h4>

                <input
                onChange={(e) => this.handleChangeOne(e.target.value)}
                className="inputLine"
                type="number"
                />

                <input
                onChange={(e) => this.handleChangeTwo(e.target.value)}
                className="inputLine"
                type="number"
                />

                <button
                onClick={this.handleClick}
                className="confirmationButton">
                    Add
                </button>

                <span className="resultsBox">
                    Sum: {this.state.sum}
                </span>

            </div>
        )
    }
}
