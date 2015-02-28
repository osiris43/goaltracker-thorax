define(['collection', 'models/goal', 'localstorage'], function (Collection, Model) {
  return Collection.extend({
    name: 'goals',
    model: Model,
    localStorage: new Backbone.LocalStorage("OurVeryOwnContactsCollection"),
    //url: "http://localhost:3000/goals",
    initialize: function(){
    },
    //parse: function(resp, options){
    //  console.log("parse");
    //  console.log(resp);
    //},
  });
});
