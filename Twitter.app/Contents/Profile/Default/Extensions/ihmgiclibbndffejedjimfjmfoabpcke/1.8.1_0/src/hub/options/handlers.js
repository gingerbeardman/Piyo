/* Kumquat Hub Options Handlers
 * 
 **/

(function (undefined) {

    pl.extend(ke.app.handlers, {
        onLabelClick: function (e) {
            var _class = pl(e.target).attr('class').split(' ')[1];
            ke.ui.checkbox.externalElementClicked(ke.getSelectorConst('settings', _class[0].toUpperCase() + '_CHECK'));
        },

        _checkboxListeners: {
            'all-variants': function (f) {
                ke.particles.sett_int_allvar.model.onACheckboxChange(f);
            },

            'instant-translation': function (f) {
                ke.particles.sett_int_instant.model.onICheckboxChange(f);
            },

            'key-combo': function (f) {
                ke.particles.sett_trans_combo.model.onCCheckboxChange(f);
            },

            context: function (f) {
                ke.particles.sett_trans_context.model.onCtxCheckboxChange(f);
            },

            history: function (f) {
                ke.particles.sett_trans_history.model.onHCheckboxChange(f);
            },

            save: function (f) {
                ke.particles.sett_int_save.model.onSCheckboxChange(f);
            },

            pamazon: function (f) {
                ke.particles.sett_gen_amzprtn.model.onApCheckboxChange(f);
            }
        }
    });

})();