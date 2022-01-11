import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            text: "",
        }
    }
    render() {
        return (
            <button
                className="square"

            >
                {this.props.name}
                {this.props.text}
                {this.props.value}


            </button>

        );
    }
}

class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render () {
        if (this.props.value==0){
            return  (
            <button className="square"  >{
                "\uD83C\uDF50"
            }
                </button>
        )
    }
        else {

            return  (
                <button className="square"  >{
                    "\uD83C\uDF4E"
                }
                   </button>
            )
        }
    }
}

class ArrowBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: "",
        }
    }
    render () {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.direction}
            </button>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        const min = 0;
        const max = 1;
        const rand = min + Math.random() * (max - min);
        if (rand >0.5){
            this.state = {
                squares: Array(2).fill(0),
                nextfruit: 1,
            }
        }
        else {
            this.state = {
                squares: Array(2).fill(0),
                nextfruit: 0,
            }
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.state.nextfruit !== i){
            this.setState({
                squares: Array(2).fill(0)});
            alert("Game over");
            return null;
        }
        const min = 0;
        const max = 1;
        const rand = min + Math.random() * (max - min);
        if (rand >0.5){
            this.setState({
                nextfruit: 0})
        }
        else {   this.setState({
            nextfruit: 1})}
        squares[i] = squares[i] + 1;
        this.setState({
            squares: squares});
    }

    renderSquare(i,k,l) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
                name={k}
                text={l}
            />
        );;
    }

    renderMainBox () {
        return <MainBox value={this.state.nextfruit}/>
}
    renderArrow(i,k) {
        return <ArrowBox direction={i} onClick={() => this.handleClick(k)}/>;
    }

    render() {
        return (
            <div>
                <div className="status"></div>
                <div >
                    {this.renderSquare(0,"\uD83C\uDF50","pears ")}
                    {this.renderArrow("\u2B05\uFE0F",0)}
                    {this.renderMainBox()}
                    {this.renderArrow("\u27A1\uFE0F",1)}
                    {this.renderSquare(1,"\uD83C\uDF4E","apples ")}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
