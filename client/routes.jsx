import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '/imports/ui/App';
import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper';
import HomePage from '/imports/ui/HomePage';
import AboutPage from '/imports/ui/AboutPage';
import FormsData from '/imports/ui/FormsData';
import Form from '/imports/ui/Form';

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
  name: 'login',
  action() {
    mount(App, {
      content: <AccountsUIWrapper />
    });
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    mount(App, {
      content: <AccountsUIWrapper />
    });
  }
});


FlowRouter.route('/data', {
  name: 'data',
  action() {
    mount(App, {
      content: <FormsData />
    });
  },
  triggersEnter: [function (context, redirect) {
    // TODO permission
    const userId = Meteor.userId();

    if (!userId) {
      redirect('/login');
    }
  }]
});

FlowRouter.route('/form', {
  name: 'form',
  action() {
    mount(App, {
      content: <Form />
    });
  }
});
