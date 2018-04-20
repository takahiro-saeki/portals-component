# portals-component
this is utility for portals api for React.js.

## Problem
Have you ever come across problem which to use React.js partially?
If so, you might have stribed to use React.js because you might have to `ReactDOM.render()` multiple times.
but if you don't twist your idea, you can't pass state data to other area of `ReactDOM.render()` .
If it's over middle apps, that's would be harder.

## Resolution
parhaps, you might have read this [official document](https://reactjs.org/docs/portals.html).
So, resolution is to use portals API!

This library is using portals API internally. if you use portals-component, this means you use portals api internal of this library.

## Why not just use it?
that's because I wanted to assemble as a utility. I was faced situations which I have to use portals in production. First, I used `ReactDOM.render` multiple times, but I realized I can't pass state to other `ReactDOM.render()` area. I didn't care of it for a long time like 2 or 3 month. but one day, I was faced problem which I had to pass state to `ReactDOM.render` area to different `ReactDOM.render` .

At the same time, Facebook published `portals` App, so I decided to use it. after that I came up with idea of this library of base.