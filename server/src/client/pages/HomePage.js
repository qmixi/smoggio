import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';

import { fetchTasks } from '../actions'

@inject('appstate')
@observer
class Home extends Component {

    addItem = () => this.props.appstate.addItem('tak tak')

    @action
    componentDidMount() {
        const { appstate } = this.props;

        appstate.fetchTasks()
            .then(tasks => {
                appstate.tasks = tasks
            })
            .catch(console.log)

    }

    render() {
        // const [count, setCount] = useState(2);
        const { appstate } = this.props;
        // console.log('taskooo', appstate.tasks)
        return (
            <div className="center-align" style={{ marginTop: '200px' }}>
                {/* <h3>Welcome!! Count: {count}</h3> */}
                <h3>Welcome!! </h3>
                <p>Check out my ssr app</p>
                {/* <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button> */}
                <button onClick={this.addItem}>tak tak</button>
                <ul>
                    {appstate.items.map((item, key) => <li key={key}>{item}</li>)}
                </ul>
                <h3>Tasks: {appstate.tasks.length}</h3>
                <ul>
                    {appstate.tasks.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}
export default {
    component: Home,
    loadData: (state, params) => {
        return {
            promise: state.appstate.fetchTasks(),
            callback: data => { state.appstate.tasks = data }
        }
    }
}    