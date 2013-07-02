/* Kumquat Hub Window Handlers
 * 
 **/

(function (undefined) {

    pl.extend(ke.app.handlers, {
        onHistoryLinkClick: function () {
            window.open('/pages/public/history.html');
        },

        onSettingsLinkClick: function () {
            window.open('/pages/public/options.html');
        },

        handleAffiliateResponse: function (f) {
            if (f) {
                console.log("Not an avid asshole!");
            }

            ke.ext.util.storageUtil.setOptionAsBoolean('amazon_affiliate', f);
            ke.ext.util.storageUtil.setOptionAsBoolean('partnership_enquired', true);
        }
    });

})();