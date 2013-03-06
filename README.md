JSTimeoutManager
================

## Description


## Example page
For example see [sample.html](https://github.com/h0x91b/JSTimeoutManager/blob/master/sample.html)

## Usage

<code>
var timeout = new Timeout();

var id = timeout.set(function(){ console.log('execute at once after one second') },1000);
var id = timeout.set(function(){ console.log('execute every second') },1000,true);
timeout.pause(); //pause all timeouts
timeout.pause(id); //pause timeout with id
timeout.resume(); //resume all
timeout.resume(id); //resume timeout with id
timeout.del(id); //pause and delete timeout by id
</code>