/** 
 * @param remainder 判断是否为倍数
 * @description 输入目标值resultNum与倍数，判断是否是倍数,返回值为booleam
*/
export function remainder(resultNum: number, multiple: number): boolean {
    return resultNum % multiple === 0
}
/**
 * @param getNum 判断数字
 * @description 输入目标值,如果是3的倍数，则返回Fizz,是5则返回Buzz,是3或者5的倍数则返回FizzBuzz 
 * */
export function getNum(num: number) {
    if (remainder(num, 3) && remainder(num, 5)) {
        return 'FizzBuzz'
    }
    if (remainder(num, 3)) {
        return 'Fizz'
    }
    if (remainder(num, 5)) {
        return 'Buzz'
    }
    return num
}

/**
 * @param outNumber 输出数字
 * @description 输入相应的目标数目result，输出长度为result的数组
 * */
export function outNumber(result: number): any[] {
    let arr: any[] = []
    for(let i = 1;i < result + 1; i ++) {
        arr.push(getNum(i))
    }
    return arr
}