// let app = React.createElement("h3", null, "New feeds")

let app = (<div>
        <h3>newfeeds</h3>
        <h3>newfeeds</h3>
    </div>)

ReactDOM.render(app, document.getElementById("newfeeds"))

// clock

// let  timer = new Date().toLocaleTimeString()

// let clock = <div> 
//     <label>timer:</label>
//     <p>{timer}</p>
// </div>


class Clock extends React.Component {
    constructor (props) {
        super(props)
        // this.timer = new Date().toLocaleTimeString()
        this.state = {
            timer: "--:--",
            status: props.status
        }
        if (props.status === "start") {
            this.run()
        }
        // this.run()
    }

    run = () => {
        this.clockInterval = setInterval(()=>{
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    start = () => {
        this.run()
    }

    stop = () => {
        clearInterval(this.clockInterval)
    }

    btnClick = () => {
        if (this.state.status === "stop") {
            this.setState({status: "start"})
            this.start()
        } else {
            this.setState({status: "stop"})
            this.stop()
        }
    } 
    render() {
        return (
            <div>
                <label>Timer</label>
                <ShowTimer timer={this.state.timer} />
                <button onClick={this.btnClick}>{this.state.status === "stop" ? "start" : "stop"}</button>
            </div>
        )
    }
}

class ShowTimer extends React.Component {
    // constructor() {
        // dont do this
    //     this.props.timer = 'test'
    // }
    render() {
        return (
            <p> {this.props.timer}</p>
        )
    }
}

ReactDOM.render(<Clock status="stop" />, document.getElementById("clock"))
