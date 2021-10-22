import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(props){
        super(props)
        this.state= {
            unFilteredArray: [
                {id:1,name:"carlos",age:10, bread:"white"},
                {id:2, name:"chinchkilla",age:20},
                {id:3,name:"chinchdrilla", car:"chevy"}
            ],
            userInput: "",
            filteredArray: []
        }
    };

    handleChange = (input) => {
        this.setState({ userInput: input })
    };
    handleClick = (userInput) => {
        const clickArr = this.state.unFilteredArray.filter( (el) =>
             (el.hasOwnProperty(userInput)) );
          
        this.setState({ filteredArray: clickArr });
    };

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object</h4>
                <span className="puzzleText">
                Unfiltered Array:
                <br/> 
                {/* {this.state.unFilteredArray.map(( bum ) => <li key={bum.id}>{bum.name}:__{bum.age}y/o__ID#:{bum.id}</li>)} */}

                {JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input 
                type="text"
                onChange={ (e) => this.handleChange( e.target.value ) }
                className="inputLine" 
                />
                <button
                onClick={() => {this.handleClick(this.state.userInput)}}
                className="confirmationButton"
                >Click</button>
                <span className="resultsBox filterObjectRB">
                Filtered Array:
                <br/> 
                {/* {this.state.filteredArray.map(( data ) => <li key={data.id}>{data.name}</li>)} */}

                {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    };
};
