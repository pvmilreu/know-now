import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './newStatus.html';

Template.newStatus.events({
  'click .js-send-status'(event, instance) {
    if( !$('select[id=local]').val() ) {
      alert("Escolha o local para reportar o status");
      return;
    }
    if( !$('input[id=status]').val().trim() ) {
      alert("Informe como está o local agora preenchendo o seu status");
      return;
    }
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
  Meteor.setTimeout(()=> {
    this.$('select[id=local]').material_select();
  }, 200);
});