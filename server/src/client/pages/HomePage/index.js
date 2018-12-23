import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import _ from 'lodash';

import './styles.scss';
import '../../components/Nav/styles.scss';
import CoordsInput from '../../components/CoordsInput';
import Installations from '../../components/Installations';

@inject('appstate')
@observer
class Home extends Component {

    constructor(props) {
        super(props);
    }

    addItem = () => this.props.appstate.addItem('tak tak');

    fetchCoords = address => {
        this.props.appstate.fetchGeocodingData(address)
            .then(data => {
                const coords = _.get(data, 'results[0].geometry.location', {})
                const { lat, lng } = coords;
                if (lat && lng) {
                    this.props.appstate.fetchInstalations(lat, lng)
                        .then(data => {
                            this.props.appstate.installations = data;
                            console.log('data', data)
                        });
                }
            })
            .catch(console.log)
    }

    render() {
        const { appstate: { installations } } = this.props;
        console.log('installations', installations)
        return (
            <div className="home-page">
                <div className="title home-page__title">Welcome! Let's check air condidtion in your city 🚀</div>
                <CoordsInput fetchCoords={this.fetchCoords} />
                <Installations installations={installations} />


                {/* <h3>Tasks: {appstate.tasks.length}</h3>
                <ul>
                    {appstate.tasks.map(item => <li key={item.id}>{item.title}</li>)}
                </ul> */}
            </div >
        )
    }
}
export default {
    component: Home,
    // loadData: (state, params) => {
    //     return {
    //         promise: state.appstate.fetchInstalations(),
    //         callback: data => { state.appstate.installations = data }
    //     }
    // }
}    