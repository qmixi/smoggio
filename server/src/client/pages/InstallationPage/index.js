import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { action } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

@inject('appstate')
@observer
class InstallationPage extends Component {

    @action
    componentDidMount() {
        const { appstate, match: { params } } = this.props;

        appstate.fetchStats(params.id)
            .then(data => {
                appstate.stats = data
            })
            .catch(console.log)

    }

    head() {
        const { users } = this.props;
        return (
            <Helmet>
                <title>{`Installation`}</title>
                <meta property="og:title" content="Intallation" />
            </Helmet>
        );
    }

    render() {

        console.log('this.props', this.props.appstate.stats.current)
        return (
            <div>
                {this.head()}
                Installation

                Standards:
                {this.props.appstate.stats && <ul>
                    {this.props.appstate.stats.current.values.map(({ name, value }) => <li key={name}>Name: {name}, Value: {value}</li>)}
                </ul>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default {
    component: withRouter(InstallationPage),
    loadData: (state, params) => {
        console.log('params', params)
        return {
            promise: state.appstate.fetchStats(params.id),
            callback: data => { state.appstate.stats = data }
        }
    }
}