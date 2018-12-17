import React, {  Component } from 'react';
import { observer, inject } from "mobx-react";

@inject('appstate')
@observer
class Home extends Component {

    addItem = () => this.props.appstate.addItem('tak tak')

    render() {
        // const [count, setCount] = useState(2);
        const {appstate} = this.props;        
        return (
            <div className="center-align" style={{ marginTop: '200px' }}>
                {/* <h3>Welcome!! Count: {count}</h3> */}
                <h3>Welcome!! </h3>
                <p>Check out my ssr app</p>
                {/* <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button> */}
                <button onClick={ this.addItem }>tak tak</button>
                <ul>
                    { appstate.items.map((item, key) => <li key={ key }>{ item }</li>) }
                </ul>
            </div>
        )
    }
}
export default {
    component: Home
}    