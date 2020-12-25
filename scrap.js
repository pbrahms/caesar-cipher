
// Create a react component (function component)
/*
const App = () => {

    return (
        <div>
            <label className="labelPlaintext" htmlFor="plaintext">
                Enter plaintext:
            </label>
            <input id="plaintext" type="text" />
            <br />
            <label className="labelShift" htmlFor="shift">
                Enter shift number:
            </label>
            <input id="shift" type="number" />
            <br />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div >
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
*/



/*

class CypherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plaintext: 'ghfh'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ plaintext: event.target.value });
        document.querySelector('resultH') = {plaintext};
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="plaintext">
                        Enter plaintext:
                    </label>
                    <input 
                        id="plaintext"
                        name="plaintext"
                        type="text"                        
                    />
                    <br />
                    <label htmlFor="shift">
                        Enter shift number:
                    </label>
                    <input 
                        id="shift"
                        name="shift"
                        type="number"                        
                    />
                    <br />
                    <input 
                        type="submit" 
                        style={{ backgroundColor: 'teal', color: 'white' }}
                    />                   
                    <h1 className="resultH">Result: {this.state.plaintext}</h1>
                </form>
            </div >
        );
    }
}

ReactDOM.render(
    <CypherForm />,
    document.querySelector('#root')
);

*/