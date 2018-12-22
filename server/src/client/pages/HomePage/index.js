import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import './styles.scss'
import '../../components/Nav/styles.scss'

import CoordsInput from '../../components/CoordsInput'

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

        appstate.fetchInstalations()
            .then(tasks => {
                console.log('tssks', tasks)
            })
            .catch(console.log)

    }

    fetchCoords = address => {
        console.log('address', address);
        this.props.appstate.fetchGeocodingData(address)
            .then(data => {
                console.log('DATA ADDRESS', data)
            })
            .catch(console.log)
    }

    render() {
        // const [count, setCount] = useState(2);
        const { appstate } = this.props;
        console.log('installations', appstate.installations)
        // console.log('taskooo', appstate.tasks)
        return (
            <div className="center-align home-page" style={{ marginTop: '200px' }}>
                <div className="nav"></div>
                {/* <h3>Welcome!! Count: {count}</h3> */}
                <h3>Welcome!! </h3>
                <p>Check out my ssr app</p>
                <CoordsInput fetchCoords={this.fetchCoords} />
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
            </div >
        )
    }
}
export default {
    component: Home,
    loadData: (state, params) => {
        return {
            promise: state.appstate.fetchInstalations(),
            callback: data => { state.appstate.installations = data }
        }
    }
}    