(function(undefined) {
  
  ke.import('templates.helpSelectedTooltip');
  ke.import('ui_components.tooltip.simple');
  ke.import('ui_components.tooltip.help'); // To get the access to position-computing techniques
  ke.import('s:ui_components.tooltip.helpSelected');

  pl.extend(ke.ui.tooltip.helpSelected, {
    _getSelectionParameters: function(s) {
      return s.getRangeAt(0).getBoundingClientRect();
    },

    _createAndAppendTooltip: function(c, doc) {
      ke.ui.tooltip.help.setXOffset(3);
      ke.ui.tooltip.simple.create(ke.ext.tpl.compile(ke.templates.helpSelectedTooltip, {
        content: c,
        prefix: ke.getPrefix()
      }), 0, 0, 250, 200, doc);
    },

    _addToggleClasses: function() {
      pl(ke.ui.tooltip.simple.Id + ' *').addClass('TnITTtw-t');
    },

    show: function(code, selection, predef_coor, doc, iframe) {
      var sel_params = this._getSelectionParameters(selection);
      this._createAndAppendTooltip(code, doc);

      setTimeout(function() {
        ke.ui.tooltip.help.attachArrows();

        var left = 0;
        var top = 0;
        var params;

        if(!pl.type(iframe, 'undef')) {
          var iframePos = ke.ext.dom.getPosition(iframe);
          left = iframePos[0];
          top = iframePos[1];
        }

        if(predef_coor) {
          var e_coordinates = ke.ext.dom.getPosition(predef_coor);
          left += e_coordinates[0];
          top += e_coordinates[1];
          params = ke.ui.tooltip.help.computeOParams(predef_coor);
        } else {
          left += sel_params.left;
          top += sel_params.top;
          params = ke.ui.tooltip.help.getOParamsInstance(sel_params);
        }

        var ap = ke.ui.tooltip.help.computeArrowPosition(left, top, params);
        var tp = ke.ui.tooltip.help.computeTooltipPosition(left, top, params);

        ke.ui.tooltip.help.applyArrowPosition(ap);
        ke.ui.tooltip.help.applyTooltipPosition(tp);

        ke.ui.tooltip.helpSelected._addToggleClasses();
      }, 20);
    }
  });

})();