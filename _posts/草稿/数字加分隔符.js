//数字加分隔符
parseInt('11123123231.3213').toLocaleString()//千位分隔符
//结果
//"11,123,123,231"

function toThousands(num) {
    var result = [ ], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
    return result.join('');
}

function toThousands(num) {
    var result = '', counter = 0;
    num = (num || 0).toString();
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) { result = ',' + result; }
    }
    return result;
}

function toThousands(num) {
    var num = (num || 0).toString(), re = /\d{3}$/, result = '';
    while ( re.test(num) ) {
        result = RegExp.lastMatch + result;
        if (num !== RegExp.lastMatch) {
            result = ',' + result;
            num = RegExp.leftContext;
        } else {
            num = '';
            break;
        }
    }
    if (num) { result = num + result; }
    return result;
}