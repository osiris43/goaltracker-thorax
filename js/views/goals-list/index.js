define([
  'view',
  'hbs!templates/goals-list/index',
  'views/goals-list/goal-form',
  'views/goals-list/activity-tracker'
], function (View, template, GoalFormChildView, ActivityTrackerChildView) {
  return View.extend({
    name: 'goal-list/index',
    template: template,
    events: {},
    initialize: function(){
      this.goalForm = new GoalFormChildView({
        collection: this.collection
      });

      this.activityTracker = new ActivityTrackerChildView({
        collection: this.collection,
        progress: this.progress
      });
    }
  });
});
