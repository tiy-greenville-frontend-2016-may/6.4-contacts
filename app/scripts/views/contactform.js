var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../../templates/contactform.hbs');

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addContact'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    this.collection.create({
      email: $('#email').val(),
      name: $('#name').val()
    });

    $('#email').val('');
    $('#name').val('');
  }
});


module.exports = {
  'ContactFormView': ContactFormView
}
