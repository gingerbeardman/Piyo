/* Kumquat Hub Window Router
 * 
 **/

(function (undefined) {

    pl.extend(ke.app, {
        import: [
            'ext.const.lang',
            'ext.const.selectors',
            'ext.const.storage',
            'ext.util.langUtil',
            'ext.util.selectorsUtil',
            'ext.util.storageUtil',

            'ext.tpl',
            'ext.event',
            'ext.audio',
            'ext.input',
            'ext.errorManager',

            'particles.lang_selectors.lsView',
            'particles.lang_selectors.lsModel',
            'particles.lang_swap.lswModel',
            'particles.listen.lModel',
            'particles.translate.tModel',
            'particles.tr_input.trView',
            'particles.tr_input.trModel',
            'particles.scrollbars.sModel',

            'ui_views.i18n',
            'ui_views.empty_trans_states',

            'ui_components.tooltip.modal',
            'ui_components.tooltip.confirm',
            'ui_components.dropdown.dropdown',
            'ui_components.scrollbar.scrollbar'
        ],

        temp: {
            currentDetectedLang: ''
        },

        // Will be extended on init
        flags: {
            isCurrentTranslationMulti: false,
            rawUtterancePermission: false,
            transUterrancePermission: false,

            isTranslating: false,
            isPlayingRaw: false,
            isPlayingTrans: false
        },

        // Asynchronous initialization
        asyncInit: function () {
        },

        init: function () {
            ke.app.render.organize.ctrlHistoryLinkVisibility();

            ke.particles.lang_selectors.view.populateLangDropdown();
            this.initDropdown();

            ke.ui_views.i18n.init();

            ke.particles.listen.model.ctrlRawVisibility();
            ke.particles.listen.model.ctrlTransVisibility();

            this.initFlags();
            this.initInstant();

            ke.particles.scrollbars.model.setupTranslationScroll();

            ke.app.render.events.swap();
            ke.app.render.events.toggleTextareaFocus();
            ke.app.render.events.enableRawListen();
            ke.app.render.events.listen();
            ke.app.render.events.listenTranslation();
            ke.app.render.events.onHistoryLinkClick();
            ke.app.render.events.onSettingsLinkClick();

            ke.app.render.organize.askAmazonAffialiate();

            // Fucking Chrome does not give a focus on the first loading of the extension!
            // I hate damn Google. I want them burning in hell. Fucking morons!
            this.initSavedValue(ke.app.initEmptyCap);
        },

        initFlags: function () {
            this.flags.instant = ke.ext.util.storageUtil.isTrueOption('instant');
            this.flags.save = ke.ext.util.storageUtil.isActiveJsonOption('save');
        },

        initInstant: function () {
            if (this.flags.instant) {
                ke.particles.translate.model.ctrlInstantVisibility('hide');
                ke.app.render.events.translateOnKeyup();
                ke.app.render.events.translateOnBlur();
            } else {
                ke.app.render.events.translateOnClick();
                ke.app.render.events.translateOnKeyCombinations();
            }
        },

        initDropdown: function () {
            ke.ui.dropdown.init(
                ke.particles.lang_selectors.model.onLangDropdownChange,
                [ke.particles.lang_selectors.model.onOpen, ke.EF]
            );
        },

        initSavedValue: function (callback) {
            if (this.flags.save) {
                ke.app.render.events.saveValueOnKeyup();

                ke.particles.tr_input.view.displaySaveValue();
                ke.particles.translate.model.translateSimple();

                callback(pl.empty(ke.particles.tr_input.model.getSavedValue()));
            } else {
                callback(true);
            }
        },

        initEmptyCap: function (isEmpty) {
            if (isEmpty) {
                setTimeout(function () {
                    ke.ui_views.empty_trans_states.displayEmptiness();
                }, 10);
            }
        }
    });

})();