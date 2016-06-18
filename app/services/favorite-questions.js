import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(question){
    this.get('favorites').pushObject(question);
  },

  remove(question){
    this.get('favorites').removeObject(question);
  }
});
