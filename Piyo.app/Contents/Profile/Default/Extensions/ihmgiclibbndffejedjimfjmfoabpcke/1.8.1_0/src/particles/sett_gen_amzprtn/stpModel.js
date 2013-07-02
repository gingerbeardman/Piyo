(function (undefined) {

    ke.import('ext.util.storageUtil');

    pl.extend(ke.particles.sett_gen_amzprtn.model, {
        onApCheckboxChange: function (flag) {
            ke.ext.util.storageUtil.setOptionAsBoolean('amazon_affiliate', flag);
        }
    });

})();