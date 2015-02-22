define([
  'view',
  'hbs!templates/goals-list/goal-form',
  'models/goal'
], function (View, template, GoalModel) {
  return View.extend({
    name: 'goals-list/goal-form',
    template: template,
    events: {
      "submit form": "addGoal"
    },
    addGoal: function(event){
      event.preventDefault();
      this.serialize(function(attrs){
        this.$('input').val('');
        console.log("add Goal")
        console.log(attrs);
        var model = new GoalModel(attrs);
        this.collection.create(model, {
          success: function(model, response, options){
            console.log("creation successful")
            console.log(model)
          }
        })
      })
    }
  });
});
