import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAnswer(){
      var params= {
        answer_name: this.get('answer_name') ? this.get('answer_name') : "",
        answer_text: this.get('answer_text') ? this.get('answer_text') : "",
        question: this.get('question')
      };
      this.sendAction('submitAnswer', params);
      this.set('answer_name', "");
      this.set('answer_text', "");
    }
  }
});
