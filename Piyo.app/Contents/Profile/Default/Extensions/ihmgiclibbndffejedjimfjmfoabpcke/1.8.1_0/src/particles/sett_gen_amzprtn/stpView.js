(function (undefined) {

    ke.import('ext.util.storageUtil');

    pl.extend(ke.particles.sett_gen_amzprtn.view, {
        displayApCheckboxState: function () {
            pl('#pamazon').get().checked = ke.ext.util.storageUtil.isTrueOption('amazon_affiliate');
        }
    });

})();