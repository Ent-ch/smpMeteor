import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { withTracker } from 'meteor/react-meteor-data';
import { userForms } from '../api/userForms';

class FormsData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
            open: false,
            seletedElement: null
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick = event => {
        console.log(event);
        this.setState({ seletedElement: event, open: true });
    }


    renderDialog() {
        const element = this.props.userForms[this.state.seletedElement];
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                <div>
                    {JSON.stringify(element)}
                </div>
            </Dialog>
        );
    }

    render() {
        const { userForms } = this.props;
        
        return <div>
            {this.renderDialog()}
                <Table onCellClick={this.handleClick.bind(this)}>
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
            </Table>
        </div>;
    }
};

export default withTracker(() => {
    Meteor.subscribe('userForms');

    return {
        userForms: userForms.find({}, { sort: { name: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
})(FormsData);