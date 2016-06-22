import Ember from 'ember';

export function newestComment(params) {
  var then = params[0];
  if (moment().diff(then, 'minutes') < 1440){
    return Ember.String.htmlSafe("<span class='glyphicon glyphicon-star-empty'></span>");
  }
}

export default Ember.Helper.helper(newestComment);
