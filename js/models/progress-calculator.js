define(['model'], function (Model) {
  return Model.extend({
    name: 'progress-calculator',
    initialize: function(goals, activity){
      console.log(activity);
      this.goals = goals;
      this.activity = activity;
      this.message = "hi I have a message";
      //this.calculateProgress();
    },

    calculateProgress: function(){
      _.each(this.goals.models, function(goal){
        hourlyProgress = _.filter(this.activity, function(evt){
          return evt.get("goal").indexOf(goal.get("activity"));
        }, this);

        //console.log(hourlyProgress);
        currentProgress = _.reduce(hourlyProgress, function(memo, goal){
          return memo + parseInt(goal.get("progress"));
        }, 0);

        var test = new Model({goal: goal.get("activity"), progress: currentProgress});
        this.add(test);
      }, this);
    }
  });
});
