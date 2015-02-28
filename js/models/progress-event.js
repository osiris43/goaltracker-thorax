define(['model'], function (Model) {
  return Model.extend({
    name: 'progress-event',
    defaults: {
      goal: "",
      progress: ""
    }
  });
});
