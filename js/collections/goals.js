define(['collection', 'models/goal', 'localstorage'], function (Collection, Model,localstorage) {
  return Collection.extend({
    name: 'goals',
    model: Model,
    localStorage: new Backbone.LocalStorage("OurVeryOwnContactsCollection")
    //url: "http://localhost:3000/goals"

  });
});
