angular.module('web.storage', [])
    .factory('localStorage', function() {return localStorage;})
    .factory('sessionStorage', function() {return sessionStorage;});