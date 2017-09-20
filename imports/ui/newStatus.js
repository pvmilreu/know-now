import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './newStatus.html';

Template.newStatus.events({
  'click .js-send-status'(event, instance) {
    Meteor.call('statusUpdate',
      $('select[id=local]').val(),
      $('input[id=status]').val(),
      (error, result) => {
        if( error ) {
            alert("Erro ao reportar status");
            console.error( error );
            return;
        }
        FlowRouter.go('home');
      }
    );
  },
});

Template.newStatus.onRendered(function () {
  var self = this;
  Meteor.setTimeout(function() {
    self.$('select[id=local]').material_select();
  }, 250);

  
});