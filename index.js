let sha1 = require("sha1");
module.exports = function(str) {
	return sha1(str);
}