define([
  'view',
  'hbs!templates/goals-list/progress'
], function (View, template) {
  return View.extend({
    name: 'goals-list/progress',
    template: template,
    initialize: function(){
      this.collection.calculateProgress(this.goals.models, this.collection);
      this.collection.on("add", this.calculate, this);
    },

    calculate: function(){
      console.log("collection changed");
      this.collection.calculateProgress(this.goals.models, this.collection);
      this.render();
    }
  });
});
