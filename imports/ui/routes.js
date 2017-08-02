import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './layout.html';

FlowRouter.route('/', {
 name: 'home',
 action() {
  import './listStatus';
 	BlazeLayout.render('layout', {
 	  main: 'listStatus',
 	});
 }
});

FlowRouter.route('/newStatus', {
 name: 'newStatus',
 action() {
  import './newStatus';
 	BlazeLayout.render('layout', {
 	  main: 'newStatus',
 	});
 }
});
