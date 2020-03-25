class Receipt extends React.Component {
    render () {
        return (
            <div>
                <ul>
                <li>
                {this.props.receipt.person}
                <ul>
                    <li>
                        {this.props.receipt.order.main}
                    </li>
                    <li>
                        {this.props.receipt.order.protein}
                    </li>
                    <li>
                        {this.props.receipt.order.rice}
                    </li>
                    <li>
                        {this.props.receipt.order.sauce}
                    </li>
                    { this.props.receipt.order.toppings.map( item => { return <li> {item}</li>})}
                </ul>
                </li>
              </ul>
            </div> )
}
}
class App extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
    };
}
    render () {
        return (
            <div>       
                <h1 className="truck">Korilla</h1>
                <div className="receipts">
                    <Receipt receipt={this.state.receipt1}/>
                    <Receipt receipt={this.state.receipt2}/>
                    <Receipt receipt={this.state.receipt3}/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector(".container")
)