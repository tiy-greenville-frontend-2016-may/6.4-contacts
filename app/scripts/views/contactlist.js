var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../../templates/contactlist.hbs');


var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
  }
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: template,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  'ContactListView': ContactListView,
  'ContactItemView': ContactItemView
}
