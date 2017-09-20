import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import moment from 'moment';
import './itemStatus.html';

Template.itemStatus.helpers({
  friendlyDate() {
    return moment(this.data).fromNow();
  },
});
