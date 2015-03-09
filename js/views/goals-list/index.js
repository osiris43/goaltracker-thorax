define([
  'view',
  'hbs!templates/goals-list/index',
  'views/goals-list/goal-form',
  'views/goals-list/activity-tracker',
  'views/goals-list/progress'
], function (View, template, GoalFormChildView, ActivityTrackerChildView, ProgressView) {
  return View.extend({
    name: 'goal-list/index',
    template: template,
    events: {},
    initialize: function(){
      this.goalForm = new GoalFormChildView({
        collection: this.collection
      });

      this.activityTracker = new ActivityTrackerChildView({
        collection: this.progress,
        goals: this.collection
      });

      this.progressForm = new ProgressView({
        collection: this.progress,
        goals: this.collection
      })
    }
  });
});
