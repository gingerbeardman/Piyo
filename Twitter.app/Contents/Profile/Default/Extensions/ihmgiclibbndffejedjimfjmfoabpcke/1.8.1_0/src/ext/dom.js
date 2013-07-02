(function (undefined) {

    pl.extend(ke.ext.dom, {
        getPosition: function (e) {
            var left = 0;
            var top = 0;

            if (e.offsetParent) {
                do {
                    left += e.offsetLeft;
                    top += e.offsetTop;
                } while (e = e.offsetParent);
            }

            return [left, top];
        },

        getX: function (e) {
            return ke.ext.dom.getPosition(e)[0];
        },

        getY: function (e) {
            return ke.ext.dom.getPosition(e)[1];
        }
    });

    pl.implement({
        rev: function () {
            this.elements.reverse();
            return this;
        }
    });

})();