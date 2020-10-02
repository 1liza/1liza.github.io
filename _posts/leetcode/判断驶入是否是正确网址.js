const isURL = function(url) {
    try {
        new URL(url);
        return true;
    } catch(err){
        return false
    }
}