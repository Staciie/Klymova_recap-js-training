// вернуть строку в формате 'hello-world-good' если буквы в верхнем регистре, сделать в нижнем
export function parameterize(str) {
    if (typeof str == "string") {
        str = str.toLowerCase()
                 .replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '')
                 .replace(/\s{2,}/g, ' ');
        let arr = str.split(' ');
        return arr.includes('') ? '' :  arr.join("-");
      } 
      return '';
    
}    

// заменить в строке на выходе слово bad на слово good
// если в стоке изначально есть слово good то сделать его в верхнем регистре
export function positiveFunction(str) {
    if (typeof str == 'string') {
        if (str.indexOf('bad') == -1 && str.indexOf('good') == -1) {
            return ':)';
        }
        return str.replace('good', 'GOOD')
                  .replace(/bad/g, 'good');
        }
        return ':)';
    } 

// проверить, являеться ли номер телефона валидным
export function isValidPhoneNumber(str) {
    if (typeof str == 'string') {
        let reg = /^(\+?3)(\(?80\)?)\s?(\d*\-?){1,4}$/;
        return reg.test(str);
    }
    return false;
}

console.log(isValidPhoneNumber('+380502205025'))
console.log(isValidPhoneNumber('+3(80) 502-20-50-25'))

// проверить являеться ли url валидным
export function isValidURL(str) {
    if (typeof str == 'string') {
        let reg = /^(www.)?\w*\.[A-z\/]{2,}$/;
        return reg.test(str);
    }
    return false;
}
