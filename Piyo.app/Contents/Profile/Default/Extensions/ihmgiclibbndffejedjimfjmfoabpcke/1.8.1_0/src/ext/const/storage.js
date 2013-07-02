(function (undefined) {

    pl.extend(ke.ext.const.storage, {
        FROM_LANG: 'It_Lang_From',
        TO_LANG: 'It_Lang_To',
        RECENTLY_USED_LANG: 'It_Lang_RecentlyUsed',

        SETTINGS_TAB: 'It_OptUi_SettingsTab',
        TRANS_COMBINATION: 'It_OptTrans_CombinationToTranslate',

        INSTANT: 'It_Ui_InstantTranslation',
        MULTI_VARIANT: 'It_Ui_MultiVariant',
        SAVE: 'It_Ui_Save',

        KEY_COMBO: 'It_Trans_KeyCombinations',
        CONTEXT: 'It_Trans_ContextMenu',
        HISTORY: 'It_Trans_HistoryOfTranslations',

        PARTNERSHIP_ENQUIRED: 'It_Monetization_Enquired',
        AMAZON_AFFILIATE: 'It_Monetization_IsAmazonAffialiate'
    });

    var DEFAULT_VALUES = {
        FROM_LANG: 'auto',
        TO_LANG: ke.getCurrentLocale(true),
        RECENTLY_USED_LANG: [],

        TRANS_COMBINATION: 't',
        SETTINGS_TAB: 1,

        INSTANT: false,
        MULTI_VARIANT: true,
        SAVE: {
            active: true,
            value: ''
        },

        KEY_COMBO: true,
        CONTEXT: {
            active: true,
            value: 1
        },
        HISTORY: true,

        PARTNERSHIP_ENQUIRED: false,
        AMAZON_AFFILIATE: true
    };

    // Simple getters
    pl.extend(ke, {
        getStorageConst: function (n) {
            return ke.ext.const.storage[n.toUpperCase()];
        },

        getStorageDefValue: function (n) {
            return DEFAULT_VALUES[n.toUpperCase()];
        }
    });

})();