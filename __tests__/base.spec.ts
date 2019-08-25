import { sampleFunction, getNum, remainder, outNumber} from "../src";

describe("This is a simple test", () => {
    test("Check the sampleFunction function", () => {
        expect(sampleFunction("hello")).toEqual("hellohello");
    });
});

describe('判断该数是否是传入值的倍数', () => {
    test('是倍数返回true', () => {
        expect(remainder(3,1)).toBe(true)
    })
    test('不是倍数返回false', () => {
        expect(remainder(2,10)).toBe(false)
    })
})

describe('数字测试', () => {
    test('输入1，返回1', () => {
        expect(getNum(1)).toBe(1)
    })
    test('输入3的倍数,返回Fizz', () => {
        expect(getNum(3)).toEqual('Fizz')
    })
    test('输入5的倍数，返回Buzz', () => {
        expect(getNum(5)).toEqual('Buzz')
    })
    test('输入3与5的倍数，返回FizzBuzz', () => {
        expect(getNum(3 * 5)).toEqual('FizzBuzz')
    })
})

describe('数字测试游戏', () => {
    test('输出长度为100的数组', () => {
        expect(outNumber(100).length).toBe(100)
    })
    test('数组第一项为1', () => {
        expect(outNumber(100)[0]).toBe(1)
    })
    test('数组第3项为Fizz', () => {
        expect(outNumber(100)[2]).toEqual('Fizz')
    })
    test('数组第5项为Buzz', () => {
        expect(outNumber(100)[4]).toEqual('Buzz')
    })
    test('数组第15项为FizzBuzz', () => {
        expect(outNumber(100)[14]).toEqual('FizzBuzz')
    })
    test('数组元素全部测试', () => {
        const arr = outNumber(100)
        for(let i = 0;i < arr.length;i ++) {
            if(((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)) {
                expect(arr[i]).toEqual('FizzBuzz')
            }
            if(((i + 1) % 3 === 0) && ((i + 1) % 5 !== 0)) {
                expect(arr[i]).toEqual('Fizz')
            }
            if(((i + 1) % 3 !== 0) && ((i + 1) % 5 === 0)) {
                expect(arr[i]).toEqual('Buzz')
            }
            if(((i + 1) % 3 !== 0) && ((i + 1) % 5 !== 0)) {
                expect(arr[i]).toBe(i + 1)
            }
        }
    })
})