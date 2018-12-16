import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        const { users } = this.props;
        return (
            <Helmet>
                <title>{`${users.length} users loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                List of users:
                <ul>{this.renderUsers()}</ul>
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
    loadData: ({ dispatch }) => dispatch(fetchUsers()),
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
}