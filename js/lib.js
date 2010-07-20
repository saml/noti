var util = {};

util.clone = function(o) {
    // extend an object
    var F = function() {};
    F.prototype = o;
    return new F();
};

util.fo = function(s, o) {
    // >>> util.fo("Hi, %(x)ss! You are an %(x)s.", {"x": "apple"})
    // "Hi, apples! You are an apple."

    var r = function(matched, group_1) {
        return o[group_1];
    };
    return s.replace(/%\(([^)]+)\)s/g, r);
};

util.f = function(s) {
    // >>> util.f("Hi, %ss! You are an %s.", "apple", "orange");
    // "Hi, apples! You are an orange.

    var args = arguments;
    var index = 1;
    var rep = function() {
        return args[index++];
    };
    return s.replace(/%s/g, rep);
};

if (typeof(Object.create) !== 'function') {
    Object.create = util.clone;
}
if (typeof(String.prototype.f) !== 'function') {
    String.prototype.f = util.f;
}
if (typeof(String.prototype.fo) !== 'function') {
    String.prototype.fo = util.fo;
}


var noti = {};

noti.inbox_url = "inbox_url";
noti.inbox_freq = "inbox_freq";
noti.cal_url = "calendar_url";
noti.cal_freq = "calendar_freq";

noti.save = function(key, val) {
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key, val);
};
noti.get = function(key) {
    return window.localStorage.getItem(key);
};

var getInboxUrl = function() {      return noti.get(noti.inbox_url); };
var getInboxFreq = function() {     return noti.get(noti.inbox_freq); };
var getCalendarUrl = function() {   return noti.get(noti.cal_url); };
var getCalendarFreq = function() {  return noti.get(noti.cal_freq); };


