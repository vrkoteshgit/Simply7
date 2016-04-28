'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('rphRadioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var r = Raphael("holder", 800, 600);
                var targets = r.set();
                targets.push(r.circle(300, 100, 20),
                   r.circle(300, 150, 20),
                   r.circle(300, 200, 20),
                   r.circle(300, 250, 20),
                   r.circle(300, 300, 20),
                   r.circle(300, 350, 20),
                   r.circle(300, 400, 20),
                   r.circle(300, 450, 20));
                targets.attr({fill: "#000", stroke: "#000", "stroke-dasharray": "- ", opacity: 0});
                var labels = r.set();
                labels.push(r.text(330, 100, "linear (default)"),
                            r.text(330, 150, ">"),
                            r.text(330, 200, "<"),
                            r.text(330, 250, "<>"),
                            r.text(330, 300, "bounce"),
                            r.text(330, 350, "elastic"),
                            r.text(330, 400, "backIn"),
                            r.text(330, 450, "backOut"));
                labels.attr({font: "12px Fontin-Sans, Arial", fill: "#000", "text-anchor": "start"});
                var movers = r.set();
                movers.push(r.circle(100, 100, 20),
                            r.circle(100, 150, 20),
                            r.circle(100, 200, 20),
                            r.circle(100, 250, 20),
                            r.circle(100, 300, 20),
                            r.circle(100, 350, 20),
                            r.circle(100, 400, 20),
                            r.circle(100, 450, 20));
                movers.attr({fill: "#000", stroke: "#000", "fill-opacity": 0});
                /*function setOnClick() {
                	for(var i = 0; i < labels.length; i++) {
	                    labels[i].click(function () {
	                        movers[i].cx = movers[i].cx || 300;
	                        movers[i].animate({cx: movers[i].cx, "stroke-width": movers[i].cx / 100, fill: movers[i].cx - 100 ? "hsb(0, .75, .75)" : "#000", "fill-opacity": +!!(movers[i].cx - 100)}, 1000);
	                        movers[i].cx = movers[i].cx == 300 ? 100 : 300;
	                    });
	                }
                }
                
  				setOnClick();*/

                labels[0].click(function () {
                    movers[0].cx = movers[0].cx || 300;
                    movers[0].animate({cx: movers[0].cx, "stroke-width": movers[0].cx / 100, fill: movers[0].cx - 100 ? "hsb(0, .75, .75)" : "#000", "fill-opacity": +!!(movers[0].cx - 100)}, 1000);
                    movers[0].cx = movers[0].cx == 300 ? 100 : 300;
                });
                movers[1].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.1, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, ">");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
                movers[2].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.2, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, "<");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
                movers[3].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.3, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, "<>");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
                movers[4].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.4, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, "bounce");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
                movers[5].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.5, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, "elastic");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
                movers[6].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.6, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, "backIn");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
                movers[7].click(function () {
                    this.cx = this.cx || 300;
                    this.animate({cx: this.cx, "stroke-width": this.cx / 100, fill: this.cx - 100 ? "hsb(.7, .75, .75)" : "#000", "fill-opacity": +!!(this.cx - 100)}, 1000, "backOut");
                    this.cx = this.cx == 300 ? 100 : 300;
                });
  });