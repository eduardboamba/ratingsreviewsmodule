var reviewsModule = angular.module('reviewsModule', ["builder"]);

 reviewsModule.controller('reviewsController', function ($scope, Restangular, currentAccountId, currentProjectId, notificationManager, linkManager) {

     $scope.ratingsreviewsServiceUrl = Builder.currentWidget.settings.ratingsreviewsServiceUrl;
     Restangular.setBaseUrl($scope.ratingsreviewsServiceUrl + "/" + currentProjectId);

     Restangular.all("reviews/").getList().then(function (response) {
         $scope.reviews = Restangular.stripRestangular(response)
     });
 } );