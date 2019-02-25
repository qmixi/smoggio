import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { withCookies } from 'react-cookie';

import InstallationHeader from '../../components/InstallationHeader';
import Disconnected from '../../components/Disconnected';
import StatsSummary from '../../components/StatsSummary';
import FavoriteIndicator from '../../components/FavoriteIndicator';
import LiveStats from '../../components/LiveStats';
import Stats from '../../components/Stats';
import Loader from '../../components/Loader';
import './styles.scss';

@inject('stats', 'installations')
@observer
class InstallationPage extends Component {

    @action
    componentDidMount() {
        const { installations, stats, match: { params } } = this.props;
        stats.fetchStats(params.id)
            .then(data => {
                stats.stats = data
            })
            .catch(console.log)
        installations.fetchInstallation(params.id)
            .then(data => {
                installations.installation = data
            })
            .catch(console.log)

    }

    head(address = {}) {
        const location = `${address.street}, ${address.number}`
        return (
            <Helmet>
                <title>{`Installation - ${location}`}</title>
                <meta property="og:title" content={`Intallation - ${location}`} />
            </Helmet>
        );
    }

    setFav = () => {
        const { installations: { installation: { id } } = {}, cookies } = this.props;
        const favoriteInstallations = cookies.get('favInstallations') || [];
        const items = [...favoriteInstallations, id];
        cookies.set('favInstallations', items, { path: '/' })
    }

    removeFav = () => {
        const { installations: { installation: { id } } = {}, cookies } = this.props;
        const favoriteInstallations = cookies.get('favInstallations');
        if (favoriteInstallations) {
            const items = favoriteInstallations.filter(item => item !== id);
            cookies.set('favInstallations', items, { path: '/' })
        }
    }

    isFav = () => {
        const { installations: { installation: { id } } = {}, cookies } = this.props;
        const favs = cookies.get('favInstallations');
        return favs && favs.includes(id);
    }

    render() {
        const { installations: { installation }, stats: { stats, isDisconnected }, match: { params } } = this.props;
        const summary = _.get(stats, 'current.indexes[0]', {});
        const liveValues = _.get(stats, 'current.values', []);
        const historyValues = _.get(stats, 'history', []);
        const forecastValues = _.get(stats, 'forecast', []);
        const description = _.get(summary, 'description', 'Sensor in this location has been probably disconnected from power.');
        const isLoading = !params || parseInt(params.id, 10) !== installation.id;

        return (
            <div className="installation-page">
                {this.head(installation.address)}
                {isLoading ? <Loader /> : <div>
                    <div className="installation-page__row">
                        <InstallationHeader installation={installation} />
                        <div className="installation-page__info">
                            <div className="installation-page__indicator">
                                <FavoriteIndicator isFav={this.isFav()} setFav={this.setFav} removeFav={this.removeFav} />
                            </div>
                            {!!summary && !isDisconnected && <StatsSummary summary={summary} />}
                        </div>
                    </div>
                    {isDisconnected && <div className="installation-page__disconnected">
                        <Disconnected description={description} />
                    </div>}
                    {!isDisconnected && <React.Fragment>
                        <LiveStats values={liveValues} />
                        <Stats history={historyValues} forecast={forecastValues} />
                    </React.Fragment>}
                </div>}
            </div>
        );
    }
}

export default {
    component: withCookies(withRouter(InstallationPage)),
    loadData: (state, params) => {
        return {
            promise: Promise.all([
                state.stats.fetchStats(params.id),
                state.installations.fetchInstallation(params.id)
            ]),
            callback: data => {
                state.stats.stats = data[0];
                state.installations.installation = data[1];
            }
        }
    }
}