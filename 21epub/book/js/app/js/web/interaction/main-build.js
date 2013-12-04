requirejs.config({
	waitSeconds:100,
	paths:path,
	shim:shim
});
requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    //document.body.removeChild(prewait);	
    alert('Module'+ err.requireModules+' Load Error ,Please try again!');
};
require(['interaction_build'],function(){
	//document.body.removeChild(prewait);	
})
