/**
 * Created by Konrad on 15.03.2016.
 */
angular
    .module("ngClassifieds",["ngMaterial"])
    .config(function($mdThemingProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange')

    })
    .directive("helloWorld", function(){
        return{
            template: "<h1>{{message}}</h1>"
        }
    });