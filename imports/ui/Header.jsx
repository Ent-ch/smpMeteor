import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Header = props => {
    const userId = this.Meteor.userId();
    const menu = <div>
        <FlatButton label='Home' href='/' />
        <FlatButton label='About' href='/about' />
        <FlatButton label='Form' href='/form' />
        {!userId ?
            <FlatButton label='login' href='/login' /> :
            <FlatButton label='Forms data' href='/data' />
        }
    </div>;

    return <AppBar title='Test app' iconElementRight={menu} />;
};

export default Header;
