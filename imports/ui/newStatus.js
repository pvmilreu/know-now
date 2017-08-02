import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './newStatus.html';

Template.newStatus.events({
  'click button'(event, instance) {
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
