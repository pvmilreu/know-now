import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Status from '/imports/model/Status';

Meteor.methods({
  statusUpdate(local, status) {
    Status.insert({
      data:new Date(),
      local,
      status
    });
  }
})
