var $ = require('jquery');
var ContactCollection = require('./models/contacts').ContactCollection;
var views = require('./views/contactform');

console.log('ContactCollection', ContactCollection);
console.log('views', views);

var contacts = new ContactCollection();

var contactForm = new views.ContactFormView();

$('.app').append(contactForm.render().el);
