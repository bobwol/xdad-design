Readium.HttpFileApi = function(initCallback) {
    var api = {
        readTextFile: function(path, readCallback, errorCallback) {
            $.ajax({
                //'cache' : false,
                'url' : path,
                'dataType' : 'text',
                'success' : function(data, textStatus, jqXHR) {
                    readCallback(data, jqXHR)
                },
                'error' : function(data, textStatus, jqXHR) {
                    errorCallback(data, textStatus, jqXHR)
                }
            })
        },

        getFsUri: function(path, successCallback, errorCallback) {
            // successCallback(document.location.protocol + '//' + document.location.host + path)
            // var pathnames = document.location.pathname.split('/')
            // pathnames[pathnames.length-1] = path;
            // successCallback(document.location.protocol + '//' + document.location.host + pathnames.join('/'))
            successCallback(path)
        }
    }

    return function ( callback ) {
        callback(api);
        return api;
    }
}();

// patch in:
// TODO: Find a way to easily patch in
Readium.FileSystemApi = Readium.HttpFileApi