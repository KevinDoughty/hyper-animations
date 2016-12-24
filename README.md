This is a fork of (https://github.com/web-animations/web-animations-js).
Eventually this might provide CSS property handlers for (https://github.com/kevindoughty/hyperact).

To implement additive compositing, property handlers need to be converted to objects that 
each implement the following functions:
 - add
 - subtract
 - zero
 - interpolate
 - input
 - output
 - unspecified (optional)