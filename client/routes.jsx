import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '/imports/ui/App';
import HomePage from '/imports/ui/HomePage';
import AboutPage from '/imports/ui/AboutPage';
import FormsData from '/imports/ui/FormsData';
import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper';

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App, {
      content: <HomePage />
    });
  }
});

FlowRouter.route('/about', {
  name: 'About',
  action(){
    mount( App, {
      content: <AboutPage />
    });
  }
});

FlowRouter.route('/login', {
  name: 'About',
  action() {
    mount(App, {
      content: <AccountsUIWrapper />
    });
  }
});

FlowRouter.route('/data', {
  name: 'About',
  action() {
    mount(App, {
      content: <FormsData />
    });
  }
});
