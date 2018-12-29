import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import _ from 'lodash';
import { withCookies, Cookies } from 'react-cookie';

import './styles.scss';
import '../../components/Nav/styles.scss';
import CoordsInput from '../../components/CoordsInput';
import Installations from '../../components/Installations';


@inject('installations')
@observer
class Favourites extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.fetchCoords('Warszawa')
    }

    fetchCoords = address => {
        this.props.installations.fetchGeocodingData(address)
            .then(data => {
                const coords = _.get(data, 'results[0].geometry.location', {})
                const { lat, lng } = coords;
                if (lat && lng) {
                    this.props.installations.fetchInstallations(lat, lng)
                        .then(data => {
                            this.props.installations.installations = data;
                        });
                }
            })
            .catch(console.log)
    }

    render() {
        const { installations: { favs } } = this.props;
        return (
            <div className="home-page">
                <div className="title home-page__title">Favoutires</div>
                <div className="subtitle home-page__subtitle">Here are your favorite installations 🔥</div>
                <Installations installations={favs} />
            </div >
        )
    }
}
export default {
    component: withCookies(Favourites),
    loadData: (state, params, cookies) => {
        console.log('cookies', cookies);
        const favs = cookies.get('favInstallations') || [];
        console.log('favs', favs);

        return {
            promise: Promise.all(
                favs.map(installation => state.installations.fetchInstallation(installation))
            ),
            callback: data => {
                state.installations.favs = data;
            }
        }
    }
}    