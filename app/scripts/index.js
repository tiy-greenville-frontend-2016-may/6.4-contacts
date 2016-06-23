var $ = require('jquery');
var ContactCollection = require('./models/contacts').ContactCollection;
var ContactFormView = require('./views/contactform').ContactFormView;
var ContactListView = require('./views/contactlist').ContactListView;

var contacts = new ContactCollection();

var contactForm = new ContactFormView({collection: contacts});
$('.app').append(contactForm.render().el);

var contactList = new ContactListView({collection: contacts});
$('.app').append(contactList.render().el);

contacts.fetch();
