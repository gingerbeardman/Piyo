(function(undefined) {
  
  ke.import('templates.helpTooltip');
  ke.import('ui_components.tooltip.simple');
  ke.import('s:ui_components.tooltip.help');

  var Y_OFFSET = 10;
  var arrowXOffset = 0;

  pl.extend(ke.ui.tooltip.help, {
    setXOffset: function(offset) {
      arrowXOffset = offset;
    },

    show: function(text, e) {
      var elementPosition = ke.ext.dom.getPosition(e);
      var left = elementPosition[0];
      var top = elementPosition[1];
      var params = ke.ui.tooltip.help.getOParamsInstance(e);

      console.log('Mouse is over something:', e, elementPosition);

      ke.ui.tooltip.simple.create(ke.ext.tpl.compile(ke.templates.helpTooltip, {
        content: text
      }), -100, -100, 250, 200, document);
      
      setTimeout(function() {
        ke.ui.tooltip.help.attachArrows();

        var ap = ke.ui.tooltip.help.computeArrowPosition(left, top, params);
        var tp = ke.ui.tooltip.help.computeTooltipPosition(left, top, params);

        ke.ui.tooltip.help.applyArrowPosition(ap);
        ke.ui.tooltip.help.applyTooltipPosition(tp);
      }, 25);
    },

    getOParamsInstance: function(g) {
      return pl.extend({
        width: 0,
        height: 0,
        pl: 0,
        pr: 0,
        pt: 0,
        pb: 0
      }, g, true);
    },

    computeOParams: function(e) {
      return ke.ui.tooltip.help.getOParamsInstance({
        width: parseInt(pl(e).css('width')),
        height: parseInt(pl(e).css('height')),
        pl: parseInt(pl(e).css('padding-left')),
        pr: parseInt(pl(e).css('padding-right')),
        pt: parseInt(pl(e).css('padding-top')),
        pb: parseInt(pl(e).css('padding-bottom'))
      });
    },

    attachArrows: function() {
      pl(ke.ui.tooltip.simple.Id).prepend(
        pl('<div>')
          .addClass('TnITTtw-t').addClass(ke.getPrefix() + 'arrow').addClass(ke.getPrefix() + 'top-arrow')
          .get()
      );

      pl(ke.ui.tooltip.simple.Id).append(
        pl('<div>')
          .addClass('TnITTtw-t').addClass(ke.getPrefix() + 'arrow').addClass(ke.getPrefix() + 'bottom-arrow')
          .get()
      );
    },

    computeArrowPosition: function(ix, iy, oparams) {
      var top = 0;
      var onBottom = true;

      var tooltip_width = parseInt(pl(ke.ui.tooltip.simple.Id).css('width'));
      var tooltip_height = parseInt(pl(ke.ui.tooltip.simple.Id).css('height'));

      var absolute_selection_top_scroll = iy + document.body.scrollTop;
      var selection_absolute_height = oparams.height + oparams.pt + oparams.pb;

      top = absolute_selection_top_scroll - tooltip_height - Y_OFFSET;

      if(top - document.body.scrollTop < 1) {
        onBottom = false;
      }

      var selection_absolute_width = oparams.height + oparams.pl + oparams.pr;
      var cursorLeftMargin = (tooltip_width - selection_absolute_width) / 2 + arrowXOffset;

      return [onBottom ? 'bottom' : 'top', cursorLeftMargin];
    },

    computeTooltipPosition: function(ix, iy, oparams) {
      var pos = [0, 0];

      var tooltip_width = parseInt(pl(ke.ui.tooltip.simple.Id).css('width'));
      var tooltip_height = parseInt(pl(ke.ui.tooltip.simple.Id).css('height'));

      var absolute_selection_left_scroll = ix + document.body.scrollLeft;
      var absolute_selection_top_scroll = iy + document.body.scrollTop;

      var selection_absolute_width = oparams.width + oparams.pl + oparams.pr;
      var selection_absolute_height = oparams.height + oparams.pt + oparams.pb;

      pos[0] = absolute_selection_left_scroll - tooltip_width / 2 + selection_absolute_width / 2;
      pos[1] = absolute_selection_top_scroll - tooltip_height - Y_OFFSET;

      // Horizontal alignment
      if(pos[0] - document.body.scrollLeft < 1) {
        pos[0] = absolute_selection_left_scroll;
      } else if(pos[0] + tooltip_width > document.body.clientWidth) {
        pos[0] = document.body.clientWidth - tooltip_width;
      }

      // A vertical one
      if(pos[1] - document.body.scrollTop < 1) {
        pos[1] = absolute_selection_top_scroll + selection_absolute_height + Y_OFFSET;
      }

      return pos;
    },

    applyArrowPosition: function(c) {
      pl('.' + ke.getPrefix() + c[0] + '-arrow')
        .css('margin-left', c[1])
        .show();
    },

    applyTooltipPosition: function(pos) {
      pl(ke.ui.tooltip.simple.Id).css({
        left: pos[0],
        top: pos[1]
      });
    }
  });

})();