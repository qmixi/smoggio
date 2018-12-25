import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import _ from 'lodash';

import './styles.scss';
import '../../components/Nav/styles.scss';
import CoordsInput from '../../components/CoordsInput';
import Installations from '../../components/Installations';

@inject('installations')
@observer
class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchCoords('Warszawa')
    }

    fetchCoords = address => {
        this.props.installations.fetchGeocodingData(address)
            .then(data => {
                const coords = _.get(data, 'results[0].geometry.location', {})
                const { lat, lng } = coords;
                if (lat && lng) {
                    this.props.installations.fetchInstallations(lat, lng)
                        .then(data => {
                            console.log('data', data)
                            this.props.installations.installations = data;
                        });
                }
            })
            .catch(console.log)
    }

    render() {
        const { installations: { installations } } = this.props;
        console.log('installations', installations)
        return (
            <div className="home-page">
                <div className="title home-page__title">Welcome to Smoggio!</div>
                <div className="subtitle home-page__subtitle">Let's check air condidtion in your city 🚀</div>
                <div className="home-page__coords-input">
                    <CoordsInput fetchCoords={this.fetchCoords} />
                </div>
                <Installations installations={installations} />
            </div >
        )
    }
}
export default {
    component: Home
}    