module.exports = function(str, len, ch) {
  str = '' + str;
  if (!ch && ch !== 0) ch = ' ';
  var plen = len - str.length;
  if (plen > 0) {
    return new Array(plen + 1).join(ch) + str;
  }
  return str.slice(-len);
}
