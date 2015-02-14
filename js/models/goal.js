define(['model'], function (Model) {
  return Model.extend({
    name: 'goal',
    defaults: {
      activity: "Learn Spanish",
      measurement: "1 time",
      timeframe: "1 year"
    },
    toJSON: function(){
      return {goal: _.clone(this.attributes)}
    }
  });
});
