# abbreviate-number
JavaScript function to abbreviate a number to and return string with given scale (digits) and unit suffix.

###Example
```js  
   var abbr = abbreviate(123456,2);
   // '123.46 K'
```

###Usage
```js  
   <script src="abbreviate.js"></script>   
   abbreviate(number, scale);
```

  **Parameters**    
  @param *number* number -number to be abbreviated   
  @param *number* scale - the scale, or digits, to include in the abbreviation  
  @return *string* - abbreviated number with unit suffix   
 
 
###Attribution
original source [Stack Overflow](http://stackoverflow.com/):  
[Abbreviate numbers with with varying precision, august 2014](http://stackoverflow.com/questions/25502521/abbreviate-numbers-with-with-varying-precision)
  
*user contributions by*:   
caweren : [http://stackoverflow.com/users/3037359/caweren](http://stackoverflow.com/users/3037359/caweren)   
aymericbeaumet: [http://stackoverflow.com/users/1071486/aymericbeaumet](http://stackoverflow.com/users/1071486/aymericbeaumet)


code originally posted on [JSFiddle](http://jsfiddle.net/aymericbeaumet/zb5hqx83/)

*modified* :   
bradleynhicks, March 2016: [https://github.com/bradleynhicks](https://github.com/bradleynhicks)

###License  
This work is licensed under a [Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)]
(https://creativecommons.org/licenses/by-sa/3.0/).   
Feel free to use this material, but please retain attribution as per the license.
