import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Status from '/imports/model/Status';

import './listStatus.html';

Template.listStatus.helpers({
  statusList() {
    return Status.find();
  },
});
