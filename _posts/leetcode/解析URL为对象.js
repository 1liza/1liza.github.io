/**
 * escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。
 * encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。
 * encodeURIComponent方法在编码单个URIComponent（指请求参数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。
 */
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parseParam(url))
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function parseParam(url) {
    // const str = (/.+\?(.+)$/).exec(url)[1];
    const str = url.match(/.+\?(.+)$/)[1]
    const arr = str.split('&')
    const obj = {}
    arr.forEach((item)=>{
        if (/=/.test(item)) {
            [key, value] = item.split('=');
            value = decodeURIComponent(value);
            value = /^\d+$/.test(value) ? parseFloat(value) : value;

            if (obj[key]===undefined) {
                obj[key] = value;
            } else {
                obj[key] = [].concat(obj[key], value);
            }
        } else {
            obj[item] = true;
        }
    })
    return obj
}
