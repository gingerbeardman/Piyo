/* Kumquat Kernel Additional Init
 * 
 * To avoid interfering the internal work of ./kernel.js user-init (additional) is passed to
 * another file (this).
 * 
 * It might be useful, if you have something that must initialized on every page or 
 * something like that.
 **/

(function (undefined) {

    // Will be fired along with ordinary Kernel Init
    ke.data.kernel.save.user_init = function () {
        // Complicated system of extensions
        pl.extend(ke.ext.const, {});
        pl.extend(ke.ext.util, {});
        pl.extend(ke.ext.compatibility, {});

        // Additional kernel parts
        pl.extend(ke, {
            particles: {},
            ui_views: {},
            templates: {}
        });

        // Particles initialization
        var so = {
            view: {},
            model: {}
        };

        pl.extend(ke.particles, {
            lang_selectors: so,
            lang_swap: so,
            listen: so,
            translate: so,
            tr_input: so,
            translate_ctt: so,
            scrollbars: so,
            context: so,
            sett_int_allvar: so,
            sett_int_instant: so,
            sett_int_save: so,
            sett_trans_combo: so,
            sett_trans_context: so,
            sett_trans_history: so,
            sett_gen_amzprtn: so,
            sett_tabber: so,
            hist_list: so,
            hist_opt_delete: so,
            hist_search: so
        });

        // UI Views initialization
        pl.extend(ke.ui_views, {
            i18n: {},
            multi_variant: {},
            empty_trans_states: {},
            visibility: {}
        });

        // Extend UI for new components, but not inherited from previous projects
        pl.extend(ke.ui, {
            tooltip: {
                simple: {},      // Core of all underwritten stuff
                modal: {},       // A modal window
                help: {},        // Exactly, a tooltip
                confirm: {},     // A modal window with two yes/no buttons
                helpSelected: {} // A tooltip, appending near the selected text and containing html code inside instead of plain text
            }
        });
    };

    // Standard empty function as a substitution of undefined callbacks
    pl.extend(ke, {
        EF: function () {
        }
    });

    // Application constants
    var APP_CONST = {
        DB: 'It_DbVault',
        T_HISTORY: 'History'
    };

    pl.extend(ke, {
        getAppConst: function (n) {
            return APP_CONST[n.toUpperCase()];
        }
    });

    // ===================
    // Some common methods

    // Add common constants
    pl.extend(ke.data.kernel.const, {
        PREFIX: 'TnITTtw'
    });

    pl.extend(ke, {
        capitalize: function (s) {
            return s[0].toUpperCase() + s.substring(1).toLowerCase();
        },

        getPrefix: function () {
            return ke.getConst('prefix') + '-';
        },

        // The following stuff should be here,
        // because there are certain problems with loading the scripts in the corretct order

        getCurrentLocale: function (simplify) {
            var ul = ke.getLocale('@@ui_locale')
            return simplify ? ke.simplifyLC(ul) : ul;
        },

        // en_GB => en, zh-CW => zh
        simplifyLC: function (c) {
            return c.split('-')[0].split('_')[0];
        }
    });

})();