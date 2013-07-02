(function () {

    ke.import('templates.simpleTooltip');
    ke.import('s:ui_components.tooltip.simple');

    var SEL = '#' + ke.getPrefix() + 'tooltip-wrap';

    // The frame of all forth tooltips, because exactly these methods provides showing simple tooltips
    // and adjusting its position.

    pl.extend(ke.ui.tooltip.simple, {
        temp: {
            openCounter: 0
        },

        get Id() {
            return SEL;
        },

        _createAndAppendElement: function (ic) {
            pl('body').append(
                pl('<div>')
                    .append(ke.ext.tpl.compile(ke.templates.simpleTooltip, {
                        content: ic,
                        prefix: ke.getPrefix()
                    }))
                    .html()
            );
        },

        _applyStyles: function (mw, mh) {
            pl(SEL).css({
                maxWidth: mw,
                maxHeight: mh
            });
        },

        _computeAndAdjustPosition: function (xo, yo) {
            var xCenter = xo === 'center';
            if (xCenter) {
                xo = 0;
            }

            var yCenter = yo === 'center';
            if (yCenter) {
                yo = 0;
            }

            pl(SEL).css({
                left: xo,
                top: yo
            });

            if (xCenter) {
                var k = 0;
                var aw = parseInt(pl(SEL).css('width'));
                var pw = parseInt(pl('body').css('width')) / 2 - aw / 2;
                pl(SEL).css('left', pw + k);
            }

            if (yCenter) {
                var k = 0;
                var ah = parseInt(pl(SEL).css('height'));
                var ph = parseInt(pl('body').css('height')) / 2 - ah / 2 + parseInt(pl(SEL).find('.conf-tooltip-wrap').css('padding-top')) + parseInt(pl(SEL).find('.conf-tooltip-wrap').css('padding-bottom'));
                pl(SEL).css('top', ph + k);
            }
        },

        _bindCloseEvent: function (doc) {
            pl(doc || 'body').bind('click', ke.ui.tooltip.simple.close);
        },

        create: function (inner_code, xo, yo, mw, mh, doc) {
            this.close(true);

            var that = this;
            setTimeout(function () {
                that._createAndAppendElement(inner_code);
                that._applyStyles(mw, mh);
                that._computeAndAdjustPosition(xo, yo);
                that._bindCloseEvent(doc);
            }, 10);
        },

        close: function (e) {
            if ((pl.type(e, 'bool') && e) || (!pl.type(e, 'bool') && !pl(e.target).hasClass(ke.getPrefix() + 't'))) {
                pl('body').unbind();

                if (pl(SEL).get(0)) {
                    pl(SEL).remove();
                }
            }
        }
    });

})();