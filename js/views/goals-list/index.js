define([
  'view',
  'hbs!templates/goals-list/index',
  'views/goals-list/goal-form'
], function (View, template, GoalFormChildView) {
  return View.extend({
    name: 'goal-list/index',
    template: template,
    events: {},
    initialize: function(){
      console.log(this.collection);
      this.goalForm = new GoalFormChildView({
        collection: this.collection
      })
    }
  });
});
