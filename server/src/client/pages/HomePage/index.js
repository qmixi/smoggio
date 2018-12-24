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

    fetchCoords = address => {
        this.props.installations.fetchGeocodingData(address)
            .then(data => {
                const coords = _.get(data, 'results[0].geometry.location', {})
                const { lat, lng } = coords;
                if (lat && lng) {
                    this.props.installations.fetchInstalations(lat, lng)
                        .then(data => {
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
                <div className="title home-page__title">Welcome! Let's check air condidtion in your city 🚀</div>
                <CoordsInput fetchCoords={this.fetchCoords} />
                <Installations installations={installations} />
            </div >
        )
    }
}
export default {
    component: Home
}    