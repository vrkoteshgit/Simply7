angular.module('ktoolsApp')
.controller('KfsCtrl', function MyCtrl($scope, $window, $timeout, $q, $http, fileSystem) {
	$scope.messages = ['Click a button'];
	
	var txtFileName = "msg2.txt";
	
	$scope.writeVal = function() {
		fileSystem.writeText(txtFileName, $window.prompt('Enter message to write', 'Hello World')).then(function(fs) {
			$scope.messages.push("data written");
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.readVal = function() {
		fileSystem.readFile(txtFileName).then(function(contents) {
			$scope.messages.push(contents);
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.getUsageInfo = function() {
		fileSystem.getCurrentUsage().then(function(usage) {
			$scope.messages.push(usage.used + " / " + usage.quota);
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.requestIncrease = function() {
		fileSystem.requestQuota(150).then(function(newQuota) {
			$scope.messages.push("New quota: " + (newQuota/1024/1024) + "mb");
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.getFiles = function(dir) {
		fileSystem.getFolderContents(dir).then(function(entries) {
			for(var i = 0; i<entries.length; i++) {
				$scope.messages.push(entries[i].fullPath);
			}
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.deleteFile = function(path) {
		fileSystem.deleteFile(path).then(function() {
			$scope.messages.push(path + " deleted");
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.deleteFolder = function(path, recursive) {
		fileSystem.deleteFolder(path, recursive).then(function() {
			$scope.messages.push(path + " deleted");
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.clearFS = function() {
		fileSystem.getFolderContents('/').then(function(entries) {
			var deletePromises = [];
			
			for(var i = 0; i<entries.length; i++) {
				var p;
				var e = entries[i];
				
				if(e.isDirectory) {
					p = fileSystem.deleteFolder(e.fullPath, true);
				} else {
					p = fileSystem.deleteFile(e.fullPath);
				}
				
				deletePromises.push(p);
			}
			
			return $q.all(deletePromises);
		}).then(function() {
			$scope.messages.push("Filesystem Cleared.");
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.cacheFile = function(url) {
		var filename = url.substr(url.lastIndexOf('/')+1);
		var path = 'test/';
		
		var createFolderPromise = fileSystem.createFolder(path);
		
		$http.get(url, {responseType: 'arraybuffer'})
			.success(function(res, status, header, config) {
				createFolderPromise.then(function() {
					return fileSystem.writeArrayBuffer(path + filename, res, 'image/jpeg');
				}).then(function() {
					$scope.messages.push('Cached file');
				}, function(err) {
					console.log(err);
					$window.alert(err.text);
				});
			})
			.error(function(res, status, header, config) {
				console.log('Failed to cache file: Status ' + status);
				$window.alert('Failed to cache file: Status ' + status);
			});
	};
	
	$scope.saveFileInput = function() {
		var f = document.querySelector('#fileInput').files[0];
		
		fileSystem.writeFileInput(f.name, f, "text/html").then(function() {
			$scope.messages.push("Copied file to FileSystem");
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
	
	$scope.createFolder = function(path) {
		fileSystem.createFolder(path).then(function(dirEntry) {
			$scope.messages.push(dirEntry.fullPath);
		}, function(err) {
			console.log(err);
			$window.alert(err.text);
		});
	};
});