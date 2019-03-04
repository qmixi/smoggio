import React, { Component, Suspense, lazy } from 'react';
import { observer, inject } from "mobx-react";
import _ from 'lodash';

import './styles.scss';
import '../../components/Nav/styles.scss';
import CoordsInput from '../../components/CoordsInput';
import Installations from '../../components/Installations/Installations';
import GeolocationFetcher from '../../components/GeolocationFetcher';
import Loader from '../../components/Loader';


@inject('installations')
@observer
class Home extends Component {

    constructor(props) {
        super(props);
    }

    fetchCoords = address => {
        const { installations: { setLoadingValue } } = this.props;
        setLoadingValue(true)
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
        const { installations: { fetchInstallations, setLoadingValue, setInstallations } } = this.props;
        fetchInstallations(lat, lng)
            .then(data => {
                setLoadingValue(false);
                setInstallations(data);
            })
            .catch(() => {
                setLoadingValue(false);
            });
    }

    render() {
        const { installations: { installations, isLoading, setLoadingValue } } = this.props;
        return (
            <div className="home-page">
                <div className="title home-page__title">Welcome to Smoggio!</div>
                <div className="subtitle home-page__subtitle">Let's check air condidtion in your city 🚀</div>
                <div className="home-page__coords-input">
                    <CoordsInput fetchCoords={this.fetchCoords} />
                </div>
                {_.isEmpty(installations) && <GeolocationFetcher fetchInstallations={this.fetchInstallations} setLoadingValue={setLoadingValue} />}
                {/* <Suspense fallback={<div>...Loading</div>}> */}
                {isLoading ? <Loader /> : <Installations installations={installations} />}
                {/* </Suspense> */}
            </div >
        )
    }
}
export default {
    component: Home
}    