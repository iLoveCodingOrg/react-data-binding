import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            text: 'initial text'
        }
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return (
            <div>
                {this.state.text} <br />
                <input type="text"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.text} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)