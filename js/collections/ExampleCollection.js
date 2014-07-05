define([
    'CollectionExtend',
    'backbone',
    'modules/aa_app_mod_boilerplate/js/models/ExampleModel'
], function (Collection, Backbone, ExampleModel) {
    'use strict';

    return function () {
        Collection.namespace = 'ExampleCollection';

        Collection.code = Backbone.Collection.extend({
            model: ExampleModel
        });

        return Collection;
    }
});