function isWindow(obj) {
    //window有一个window对象指向自身
    return obj!=null && obj.window === obj
}