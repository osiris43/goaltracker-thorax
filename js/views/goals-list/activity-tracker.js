define([
  'view',
  'hbs!templates/goals-list/activity-tracker',
  'models/progress-event'
], function (View, template, ProgressModel) {
  return View.extend({
    name: 'goals-list/activity-tracker',
    template: template,
    events: {"submit form": "addProgress"},


    addProgress: function(evt){
      evt.preventDefault();
      this.serialize(function(attrs){
        this.$('input').val('');
        var model = new ProgressModel(attrs)
        this.progress.create(model, {
          success: function(model, response, options){
            console.log("successfully added progress")
          }
        })
      })
    }
  });
});
