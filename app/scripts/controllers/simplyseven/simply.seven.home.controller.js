'use strict';

/**
 * @ngdoc function
 * @name simply7.home.controller:Simply7Ctrl
 * @description
 * # Simply7Ctrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('Simply7Ctrl', function ($scope, $rootScope, $interval) {
  	$rootScope.mainDivBg = 's7bg';
  	$scope.aniClass = 's7DivAni';
    $('.absDiv').draggable();
    $scope.ktImgAnimate = true;
    $scope.ktAnimate = true;
    $scope.st1Animate = true;
    $scope.kfrAnimate = true;
    $scope.frBgAnimate = true;
    $scope.threeImgAnimate = true;
    $scope.fourImgAnimate = true;
    $scope.fiveImgAnimate =  true;

    function animateKtext(){
    	$scope.ktAnimate = false;
    }
    function animateS7text(){
    	$scope.st1Animate = false;
    }
    function animateKfrm(){
    	$scope.kfrAnimate = false;
    }
    function animateKatImg(){
    	$scope.ktImgAnimate = false;
    }
    function animateFrBgImg(){
    	$scope.frBgAnimate = false;
    }
    function animate3Img(){
    	$scope.threeImgAnimate = false;
    }
    function animate4Img(){
    	$scope.fourImgAnimate = false;
    }
    function animate5Img(){
    	$scope.fiveImgAnimate = false;
    }
   	$scope.activate = function() {
    	$interval(animateKtext, 1000);
    	$interval(animateKfrm, 2000);
    	$interval(animateFrBgImg, 3000);
    	$interval(animateS7text, 4000);
    	$interval(animateKatImg, 5000);
    	$interval(animate3Img, 6000);
    	$interval(animate4Img, 7000);
    	$interval(animate5Img, 8000);
    };

    $scope.activate();
  });

