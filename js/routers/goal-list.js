define([
  'backbone',
  'views/root',
  'views/goals-list/index',
  'collections/goals'
], function (Backbone, RootView, GoalListIndexView, GoalsCollection) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "activity": "activity"
    },
    index: function(){
      var goals = new GoalsCollection();
      goals.fetch({
        success: function(){
          console.log("fetch success");
          console.log(goals);
          var view = new GoalListIndexView({
            collection: goals
          });
          RootView.getInstance().setView(view);
        }
      });
      console.log(goals);

    },
    activity: function(){
    }
  });
});
