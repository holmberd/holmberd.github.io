/*
 * HTTP request helper library
 * Author: Dag Holmberg
 * Github: https://github.com/holmberd
 */

var http = (function() {

	var http = {
		getJSON: function(url) {
			return this.get(url).then(JSON.parse);
		},

		get: function(url) {
			return new Promise(function(succeed, fail) {
				var req = new XMLHttpRequest();
				req.open("GET", url, true);
				req.addEventListener("load", function() {
					if (req.status < 400) {
						succeed(req.responseText); 
					} else {
						fail(new Error("Request failed: " + req.statusText));
					}
				});
				req.addEventListener("error", function() {
					fail(new Error("Network error"));
				});
				req.send(null);
			});
		}
	};

	return http;

})();

