"use strict";
let log = console.log


let h = 3.0 // Height of ball dropping.
let bounce = .66 // Percentage of "h" ball bounces back. 
let window = 1.5 // Height of window spectator is in.





function bouncingBall(h, bounce, window) {


    if (h <= 0) return -1 // Float parameter "h" in meters must be greater than 0
    if (bounce <= 0) return -1 // Float parameter "bounce" must be greater than 0 
    if (bounce >= 1) return -1 // And less than 1
    if (window >= h) return -1 // Float parameter "window" must be less than h.

    let sightings = 1; // Starts at one for initial drop. 
    h = h * bounce

    while (h > window) {
        sightings = sightings + 2
        h = h * bounce
    }
    return sightings

}



log(bouncingBall(h, bounce, window))
