(function(undefined) {
  
  var i18n_deleteHeadline = ke.getLocale('History_Options_Delete_AllHeadline');
  var i18n_deleteProposal = ke.getLocale('History_Options_Delete_AllProposal');
  var i18n_deletePositive = ke.getLocale('History_Options_Delete_AllPos');
  var i18n_deleteNegative = ke.getLocale('History_Options_Delete_AllNeg');
  var i18n_deleteSelected = ke.getLocale('History_Options_Delete_Selected');
  var i18n_cancelButton   = ke.getLocale('History_Options_SelectToDelete_Cancel');

  pl.extend(ke.particles.hist_opt_delete.model, {
    onClearHistoryClick: function() {
      ke.ui.tooltip.confirm.ask([i18n_deleteHeadline, i18n_deleteProposal, i18n_deletePositive, i18n_deleteNegative], function(f) {
        if(f) {
          ke.db.execSql(
            'DELETE FROM ' + ke.getAppConst('t_history'),
            [],
            function() {
              ke.particles.hist_list.model.fadeOutList();
            },
            null
          );
        }
      });
    },

    _convertButtonToSelecting: function() {
      pl('.select-to-delete')
        .addClass('selecting')
        .html(ke.ext.tpl.compile(ke.templates.deleteSelectedButton, {
          button: i18n_deleteSelected,
          cancel: i18n_cancelButton
        }));
    },

    onSelectToDeleteClick: function() {
      ke.particles.hist_opt_delete.model._convertButtonToSelecting();
    }
  });

})();