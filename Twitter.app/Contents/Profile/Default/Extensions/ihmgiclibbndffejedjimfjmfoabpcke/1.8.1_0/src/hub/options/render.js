/* Kumquat Hub Options Render
 * 
 **/

(function (undefined) {

    pl.extend(ke.app.render, {
        organize: {},

        events: {
            tabChange: function () {
                pl('.settings-tab').bind('click', ke.particles.sett_tabber.model.setTab);
            },

            clickableLabel: function () {
                var labels = 'all-variants,instant-translation,key-combo,context,save,history,pamazon'.split(',');

                pl.each(labels, function (k, v) {
                    pl('.' + v + '-label').bind('click', ke.app.handlers.onLabelClick);
                });
            },

            onCtxSwitchClick: function () {
                pl('.sw-item').bind('click', ke.particles.sett_trans_context.model.onCtxSwitchClick);
            }
        }
    });

})();