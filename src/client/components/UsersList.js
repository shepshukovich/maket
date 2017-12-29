import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount() {      // гарантирует наличие данных при использовании async или ajax(точно не знаю)
         this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

render() {
    return(
        <div>
            This user list is pulled up from APIserver by action dispatch
            <ul>{this.renderUsers()}</ul>
        </div>
    );
}}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
