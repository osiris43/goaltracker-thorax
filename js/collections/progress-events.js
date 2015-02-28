define(['collection', 'models/progress-event', 'localstorage'], function (Collection, Model) {
  return Collection.extend({
    name: 'progress-events',
    model: Model,
    localStorage: new Backbone.LocalStorage("ProgressCollection"),
  });
});
