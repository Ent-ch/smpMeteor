import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

const Footer = props => {
    return <Toolbar>
        <ToolbarGroup>
            <ToolbarTitle text='Test app' />
        </ToolbarGroup>
    </Toolbar>;
};

export default Footer;
