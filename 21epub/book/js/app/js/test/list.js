requirejs.config({
	baseurl:'./',
	paths:path,
	shim:shim
})
require(['lists/test'],function(){
	test.render();
})