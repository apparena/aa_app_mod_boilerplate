define([
    'ModelExtend',
    'backbone'
], function (Model, Backbone) {
    'use strict';

    return function () {
        Model.namespace = 'ExampleModel';

        Model.code = Backbone.Model.extend({
            defaults: {
                var1: 1,
                var2: 2,
                var3: 3,
                var4: 4
            }
        });

        return Model;
    }
});