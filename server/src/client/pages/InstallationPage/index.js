import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

@inject('stats')
@observer
class InstallationPage extends Component {

    @action
    componentDidMount() {
        const { stats, match: { params } } = this.props;
        stats.fetchStats(params.id)
            .then(data => {
                stats.stats = data
            })
            .catch(console.log)

    }

    head() {
        return (
            <Helmet>
                <title>{`Installation`}</title>
                <meta property="og:title" content="Intallation" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                Installation

                Standards:
                {!_.isEmpty(this.props.stats.stats.current) && <ul>
                    {this.props.stats.stats.current.values.map(({ name, value }) => <li key={name}>Name: {name}, Value: {value}</li>)}
                </ul>}
            </div>
        );
    }
}

export default {
    component: withRouter(InstallationPage),
    loadData: (state, params) => {
        return {
            promise: state.stats.fetchStats(params.id),
            callback: data => { state.stats.stats = data }
        }
    }
}