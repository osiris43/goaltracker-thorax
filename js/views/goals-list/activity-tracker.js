define([
  'view',
  'hbs!templates/goals-list/activity-tracker',
  'models/progress-event'
], function (View, template, ProgressModel) {
  return View.extend({
    name: 'goals-list/activity-tracker',
    template: template,
    events: {"submit form": "addProgress"},
    initialize: function(){
      this.goals.on("add", this.update, this);
    },

    update: function(){
      this.render();
    },
    addProgress: function(evt){
      evt.preventDefault();
      this.serialize(function(attrs){
        this.$('input').val('');
        var model = new ProgressModel(attrs)
        this.collection.create(model, {
          success: function(model, response, options){
            console.log("successfully added progress")
          },
          error: function(model, response, options){
            console.log(response);
          }
        })
      })
    }
  });
});
