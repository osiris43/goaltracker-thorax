define(['model'], function (Model) {
  return Model.extend({
    name: 'goal',
    defaults: {
      activity: "",
      measurement: "",
      timeframe: ""
    },
    //toJSON: function(){
    //  return {goal: _.clone(this.attributes)}
    //},
    //initialize: function(attrs){
    //  console.log("model initialize");
    //  console.log(attrs);
    //  this.set({
    //    activity: attrs.activity,
    //  });
    //},
    //parse: function(attrs){
    //  console.log('model parse');
    //  console.log(attrs);
    //  console.log(attrs.goal.activity);
    //  return attrs.goal;
    //},
  });
});
