define([
  'backbone',
  'views/root',
  'views/goals-list/index',
  'collections/goals',
  'collections/progress-events'
], function (Backbone, RootView, GoalListIndexView, GoalsCollection, ProgressCollection) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
    },
    index: function(){
      var goals = new GoalsCollection();
      var progress = new ProgressCollection();
      progress.fetch();
      goals.fetch({
        success: function(){
          var view = new GoalListIndexView({
            collection: goals,
            progress: progress
          });
          RootView.getInstance().setView(view);
        }
      });

    },
  });
});
