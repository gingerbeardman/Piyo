(function (undefined) {

    ke.import('ext.util.storageUtil');

    var DELIMITER_WIDTH = 32;

    pl.extend(ke.particles.sett_tabber.view, {
        displayCurrentTab: function () {
            var tab = ke.ext.util.storageUtil.getVal('settings_tab');

            // Tab
            pl('.settings-tab').removeClass('active-tab');
            pl('.tab-' + tab).addClass('active-tab');

            // Tab contents
            pl('.tab-contents').hide();
            pl('.tc-' + tab).show();
        },

        displayTabberArrow: function (t) {
            var tab = +(t || ke.ext.util.storageUtil.getVal('settings_tab'));
            pl('.floating-arrow').animate({left: ke.ext.dom.getX(pl('.tab-' + tab).get()) + parseInt(pl('.tab-' + tab).css('width')) / 2 - 9});
        }
    });

})();