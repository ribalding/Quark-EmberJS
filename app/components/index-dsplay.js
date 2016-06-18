import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['thumbs:desc'],
  sortedList: Ember.computed.sort('questions', 'sortBy'),
});
