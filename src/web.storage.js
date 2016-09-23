(function () {
    angular.module('web.storage', [])
        .factory('localStorage', LocalStorageFactory)
        .factory('sessionStorage', SessionStorageFactory);

    function LocalStorageFactory() {
        return StorageFactory('localStorage');
    }

    function SessionStorageFactory() {
        return StorageFactory('sessionStorage');
    }

    function StorageFactory(storage) {
        try {
            window[storage].setItem('storageAvailable', true);
            return window[storage];
        } catch (ignored) {
            return new InMemoryStorage(storage);
        }
    }

    function InMemoryStorage(id) {
        var self = this;

        this.setItem = function (k, v) {
            self[k] = '' + v
        };

        this.getItem = function (k) {
            return self[k] || null;
        };

        this.removeItem = function (k) {
            delete self[k];
        }
    }
})();
