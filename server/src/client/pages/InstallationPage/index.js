import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Helmet } from 'react-helmet';

@inject('appstate')
@observer
class InstallationPage extends Component {
    componentDidMount() {
        
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
                <ul>                    
                    {this.props.appstate.stats.current.values.map(({name, value}) => <li key={name}>Name: {name}, Value: {value}</li>)}
                </ul>       
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
    component: InstallationPage,
    loadData: (state, params) => {
        console.log('params', params)
        return {
            promise: state.appstate.fetchStats(params.id),
            callback: data => { state.appstate.stats = data }
        }
    }
}