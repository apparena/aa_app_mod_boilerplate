define([
    'ViewExtend',
    'jquery',
    'underscore',
    'backbone',
    'text!modules/aa_pp_mod_boilterplate/templates/example.html'
], function (View, $, _, Backbone, ExampleTemplate) {
    'use strict';

    return function () {
        View.namespace = 'ExampleView';

        View.code = Backbone.View.extend({
            el: $('body'),

            events: {},

            initialize: function () {
                _.bindAll(this, 'render');
                //this.render();
            },

            render: function () {
                 var data = {},
                 compiledTemplate = _.template(ExampleTemplate, data);
                 this.$el.html(compiledTemplate);
            }
        });

        return View;
    }
});