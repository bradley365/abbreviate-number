/*
  original source  Stack Overflow : 
  Abbreviate numbers with with varying precision, august 2014
  http://stackoverflow.com/questions/25502521/abbreviate-numbers-with-with-varying-precision
  
  user contributions by:
  caweren : http://stackoverflow.com/users/3037359/caweren
  aymericbeaumet: http://stackoverflow.com/users/1071486/aymericbeaumet
  
  code originally posted on JSFiddle:
  http://jsfiddle.net/aymericbeaumet/zb5hqx83/
  
  modified by:
  bradleynhicks : https://gist.github.com/bradleynhicks
  march 2016
  
  this code is licensed under cc by-sa 3.0 
  https://creativecommons.org/licenses/by-sa/3.0/
*/

/**
  * @desc abbreviate a number and return string with given precision and unit suffix
  * @param number n -number to be abbreviated
  * @param number s - the scale, or digits, to include
  * @return string - abbreviated number with unit suffix
*/
function abbreviate(n,s) {
    var exp = n
        .toExponential()
        .split('e+')
        .map(function(el) { return +el; })
    ;
    var mod = exp[1] % 3;
    exp[0] = exp[0] * Math.pow(10, mod);
    exp[1] = [
        '',
        'K',
        'M',
        'B',
        'T',
        'P',
        'E',
        'Z',
        'Y'
    ][(exp[1] - mod) / 3];
 
    return exp[0].toFixed(s) + ' ' + exp[1];
}
