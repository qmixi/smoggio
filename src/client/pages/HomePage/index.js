import React, { Component, Suspense, lazy } from 'react';
import { observer, inject } from "mobx-react";
import _ from 'lodash';

import './styles.scss';
import '../../components/Nav/styles.scss';
import CoordsInput from '../../components/CoordsInput';
import Installations from '../../components/Installations/Installations';

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
                    this.fetchInstallations(lat, lng);
                }
            })
            .catch(console.log)
    }

    fetchInstallations = (lat, lng) => {
        const { installations: { fetchInstallations } } = this.props;
        fetchInstallations(lat, lng)
            .then(data => {
                console.log('InnsTallatioS', data)
                this.props.installations.installations = data;
            });
    }

    render() {
        const { installations: { installations } } = this.props;

        return (
            <div className="home-page">
                <div className="title home-page__title">Welcome to Smoggio!</div>
                <div className="subtitle home-page__subtitle">Let's check air condidtion in your city 🚀</div>
                <div className="home-page__coords-input">
                    <CoordsInput fetchCoords={this.fetchCoords} fetchInstallations={this.fetchInstallations} />
                </div>
                {/* <Suspense fallback={<div>...Loading</div>}> */}
                    <Installations installations={installations} />
                {/* </Suspense> */}
            </div >
        )
    }
}
export default {
    component: Home
}    