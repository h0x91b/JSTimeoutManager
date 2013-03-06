JSTimeoutManager
================

## Description


## Example page
For example see [sample.html](https://github.com/h0x91b/JSTimeoutManager/blob/master/sample.html)

## Usage


<code>var timeout = new Timeout();</code>

<code>var id = timeout.set(function(){ console.log('execute at once after one second') },1000);</code>
<code>var id = timeout.set(function(){ console.log('execute every second') },1000,true);</code>
<code>timeout.pause(); //pause all timeouts</code>
<code>timeout.pause(id); //pause timeout with id</code>
<code>timeout.resume(); //resume all</code>
<code>timeout.resume(id); //resume timeout with id</code>
<code>timeout.del(id); //pause and delete timeout by id</code>
