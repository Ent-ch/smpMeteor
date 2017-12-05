import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { withTracker } from 'meteor/react-meteor-data';
import { userForms } from '../api/userForms';

class FormsData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        const { userForms } = this.props;
        
        return <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Phone</TableHeaderColumn>
                    <TableHeaderColumn>E-mail</TableHeaderColumn>
                    <TableHeaderColumn>Address</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {userForms.map((el, i) => 
                    <TableRow key={i}>
                        <TableRowColumn>{el.name + (el.firstName || ' ')}</TableRowColumn>
                        <TableRowColumn>{el.phone}</TableRowColumn>
                        <TableRowColumn>{el.email}</TableRowColumn>
                        <TableRowColumn>{el.Address ? `${el.Address.Detail}, ${el.Address.City}, ${el.Address.Province}, ${el.Address.postalCode} , ${el.Address.Country}` : ''}</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>;
    }
};

export default withTracker(() => {
    Meteor.subscribe('userForms');

    return {
        userForms: userForms.find({}, { sort: { name: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
})(FormsData);