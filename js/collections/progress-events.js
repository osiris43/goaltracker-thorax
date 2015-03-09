define(['collection', 'models/progress-event', 'localstorage'], function (Collection, Model) {
  return Collection.extend({
    name: 'progress-events',
    model: Model,
    localStorage: new Backbone.LocalStorage("ProgressCollection"),
    initialize: function(){
    },

    calculateProgress: function(goals, activities){
      this.test = activities;
      this.data = [];
      _.each(goals, function(goal){
        var d = {};
        var p = _.reduce(this.test.models, function(memo, a){
          if(a.get("goal") === goal.get("activity")){
            return memo + parseInt(a.get("progress"));
          }else{
            return memo;
          }
        }, 0);

        console.log("made it")
        var d = new Model({
          goal: goal.get("activity"),
          progress: p,
          measurement: goal.get("measurement").split(" ")[1],
          timeframe: goal.get("timeframe")})

        this.data.push(d);
      }, this);

      console.log(this.data);
    }
  });
});
