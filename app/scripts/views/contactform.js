var Backbone = require('backbone');
var template = require('../../templates/contactform.hbs');

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  template: template,
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});


module.exports = {
  'ContactFormView': ContactFormView
}
