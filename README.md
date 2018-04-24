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

## Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| el | string | '' | dom element which is rendered. |
| children | node | null | react element, you can use like `this.props.children` . |
| dom | string | div | wrapper dom element. when you render DOM through using portals api, you have to specify dom element. |

## Example
Let's say, you have a html file like below.

```html
<html>
<head>
  <title>portals component</title>
</head>
<body>
  <div id="app"></div>
  <div id="portals-test"></div>
  <script src="./index.js"></script>
</body>
</html>
```

then, you can use `portals-component` like below.
```jsx
import React from 'react';
import { render } from 'react-dom';
import PortalsComponent from '../lib';

const App = () => (
  <div>
    <PortalsComponent el="#portals-test">
      <div>app</div>
    </PortalsComponent>
    <div>different</div>
  </div>
)

render(<App />, document.getElementById('app'))
```

then, you can check dom which is rendered by using inspector like Google chrome.
`id app` will be rendered like below.

```html
<div>
  <div>different</div>
</div>
```

and inside of `id portals-test` is like below

```html
<div>
  <div>app</div>
</div>
```