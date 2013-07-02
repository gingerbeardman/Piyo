/* Kumquat Hub Options Router
 * 
 **/

(function (undefined) {

    pl.extend(ke.app, {
        import: [
            'ext.util.langUtil',
            'ext.const.selectors',
            'ext.const.storage',
            'ext.util.selectorsUtil',
            'ext.util.storageUtil',

            'ext.tpl',
            'ext.anim',
            'ext.dom',

            'particles.sett_int_allvar.staView',
            'particles.sett_int_allvar.staModel',
            'particles.sett_int_instant.stiView',
            'particles.sett_int_instant.stiModel',
            'particles.sett_int_save.sView',
            'particles.sett_int_save.sModel',
            'particles.sett_trans_combo.stcView',
            'particles.sett_trans_combo.stcModel',
            'particles.sett_trans_context.ctxView',
            'particles.sett_trans_context.ctxModel',
            'particles.sett_trans_history.hView',
            'particles.sett_trans_history.hModel',
            'particles.sett_gen_amzprtn.stpView',
            'particles.sett_gen_amzprtn.stpModel',
            'particles.sett_tabber.tabView',
            'particles.sett_tabber.tabModel',
            'particles.scrollbars.sModel',

            'ui_views.i18n',
            'ui_views.visibility',

            'ui_components.dropdown.dropdown',
            'ui_components.scrollbar.scrollbar',
            'ui_components.checkbox.checkbox'
        ],

        init: function () {
            ke.ui_views.i18n.init();
            ke.ui_views.i18n.setSettingsTitle();

            ke.particles.sett_int_allvar.view.displayACheckboxState();
            ke.particles.sett_int_instant.view.displayICheckboxState();
            ke.particles.sett_trans_combo.view.displayCCheckboxState();
            ke.particles.sett_trans_context.view.displayCtxCheckboxState();
            ke.particles.sett_trans_history.view.displayHCheckboxState();
            ke.particles.sett_int_save.view.displaySCheckboxState();
            ke.particles.sett_gen_amzprtn.view.displayApCheckboxState();

            ke.ui.checkbox.init(ke.app.checkboxController);

            ke.particles.sett_tabber.view.displayCurrentTab();
            ke.particles.sett_tabber.view.displayTabberArrow();

            ke.particles.sett_trans_context.view.displayCtxSwitchPosition();

            ke.particles.sett_trans_combo.view.populateComboVariants();
            ke.ui.dropdown.init(
                ke.particles.sett_trans_combo.model.onComboDropdownChange,
                [ke.particles.sett_trans_combo.model.onComboDropdownOpen, ke.EF]
            );

            ke.particles.sett_trans_combo.model.ctrlComboVisibility();
            ke.particles.sett_trans_context.model.ctrlContextVisibility();

            ke.app.render.events.tabChange();
            ke.app.render.events.clickableLabel();
            ke.app.render.events.onCtxSwitchClick();
        },

        checkboxController: function (e, flag) {
            ke.app.handlers._checkboxListeners[pl(e).attr('id')](flag);
        }
    });

})();