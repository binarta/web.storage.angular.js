angular.module('web.storage', [])
    .factory('localStorage', function() {
        var local = {};
        try {
            localStorage.storageAvailable = true;
            return localStorage;
        } catch (e) {
            return local;
        }
    }).factory('sessionStorage', function() {
        var session = {};
        try {
            sessionStorage.storageAvailable = true;
            return sessionStorage;
        } catch (e) {
            return session;
        }
    });