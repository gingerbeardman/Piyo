/* Kumquat Hub Window Render
 * 
 **/

(function (undefined) {

    var i18n_agreementTitle = ke.getLocale('Window_Agreement_Title');
    var i18n_agreementBody = ke.getLocale('Window_Agreement_Body');
    var i18n_agreementPos = ke.getLocale('Window_Agreement_Positive');
    var i18n_agreementNeg = ke.getLocale('Window_Agreement_Negative');

    pl.extend(ke.app.render, {
        organize: {
            ctrlHistoryLinkVisibility: function () {
                pl('.collapsable-history').css('display', ke.ext.util.storageUtil.isTrueOption('history') ? 'inline-block' : 'none');
            },

            askAmazonAffialiate: function () {
                if (!ke.ext.util.storageUtil.isTrueOption('partnership_enquired')) {
                    ke.ui.tooltip.confirm.ask([i18n_agreementTitle, i18n_agreementBody, i18n_agreementPos, i18n_agreementNeg], ke.app.handlers.handleAffiliateResponse);
                }
            }
        },

        events: {
            swap: function () {
                pl('.lang-swap').bind('click', ke.particles.lang_swap.model.onSwapLang);
            },

            toggleTextareaFocus: function () {
                pl('.translation-input').bind({
                    focus: ke.particles.tr_input.model.onTextareaFocus,
                    blur: ke.particles.tr_input.model.onTextareaBlur
                });
            },

            listenRaw: function () {
                pl('.listen-raw-button').bind('click', ke.particles.listen.model.playRaw);
            },

            listenTranslation: function () {
                pl('.listen-translation-button').bind('click', ke.particles.listen.model.playTranslation);
            },

            listen: function () {
                this.listenRaw();
                this.listenTranslation();
            },

            enableRawListen: function () {
                pl('.translation-input').bind('keyup', ke.particles.listen.model.ctrlRawVisibility);
            },

            onHistoryLinkClick: function () {
                pl('.history-button').bind('click', ke.app.handlers.onHistoryLinkClick);
            },

            onSettingsLinkClick: function () {
                pl('.settings-button').bind('click', ke.app.handlers.onSettingsLinkClick);
            },

            translateOnClick: function () {
                pl('.translate-button').bind('click', ke.particles.translate.model.translateSimple);
            },

            translateOnKeyCombinations: function () {
                pl('.translation-input').bind('keyup', ke.particles.translate.model.translateOnKeyCombinations);
            },

            translateOnKeyup: function () {
                pl('.translation-input').bind('keyup', ke.particles.translate.model.translateOnKeyup);
            },

            translateOnBlur: function () {
                pl('.translation-input').bind('blur', ke.particles.translate.model.translateSimple);
            },

            saveValueOnKeyup: function () {
                pl('.translation-input').bind('keyup', ke.particles.tr_input.model.saveValueOnKeyup);
            }
        }
    });

})();