## postMessage跨域通信

## 启动A页面

`node pageA.js`

## 启动B页面

`node pageB.js`

pageA.html页面为父级页面， 包含向iframe以及pageB.html子页面的通信。

```js
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

`otherWindow`: 其他窗口的引用

`message` 要发送的信息，字符串或者对象

`targetOrigin` 发送的目标域名

`transfer` 可选，暂时没用到过

tip:

1. A页面向B页面通信，需要通过`window.open()`的方法打开才有效；

2. 打开B页面后需要等到B页面加载完成之后才能进行postMessage跨域通信，所以postMessage方法做延迟处理`setTimeout` or `setInterval`；

3. 通过`window.open()`打开的B页面不能主动发送消息给A页面，需要在A发送过来消息时通过`event.source`回传消息给A，此时的window就是`event.source`；

4. 若A打开的是内嵌iframe页面B，B向A主动发消息时，`otherWindow`为`top`或者`parent`。
