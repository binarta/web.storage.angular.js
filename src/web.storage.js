(function () {
    angular.module('web.storage', [])
        .factory('localStorage', LocalStorageFactory)
        .factory('sessionStorage', SessionStorageFactory);

    function LocalStorageFactory() {
        return WebStorageFactory('localStorage');
    }

    function SessionStorageFactory() {
        return WebStorageFactory('sessionStorage');
    }
})();