JSTimeoutManager
================

## Description
Minimalistic timeout/interval manager by h0x91b

Ideal for stop all intervals on tab blur (check sample page)

Author: h0x91b (h0x91b@gmail.com Arseniy Pavlenko)
Date: 2013-03-06 19:50
Available via the MIT or new BSD license

## Example page
For example see [sample.html](https://github.com/h0x91b/JSTimeoutManager/blob/master/sample.html)

## Usage
Include js into html

<code><nowiki>&lt;script src="https://raw.github.com/h0x91b/JSTimeoutManager/master/timeout-min.js">< /script></nowiki></code>

Create on or more timeout managers 

<code>var timeout = new Timeout();</code>

Set timeout for one second:

<code>var id = timeout.set(function(){ console.log('execute at once after one second') },1000);</code>

Set interval:

<code>id = timeout.set(function(){ console.log('execute every second') },1000,true);</code>

Pause all timeouts/intervals:

<code>timeout.pause(); //pause all timeouts</code>

Pause specific timeout/interval:

<code>timeout.pause(id); //pause timeout with id</code>

Resume all timeouts/intervals:

<code>timeout.resume(); //resume all</code>

Resume specific timeout/interval

<code>timeout.resume(id); //resume timeout with id</code>

Cancel specific timeout/interval

<code>timeout.del(id); //pause and delete timeout by id</code>
