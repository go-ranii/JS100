// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const x=(num)=>{
    let a=num.split(' ')
    let result=0
    result= a[0]**a[1]
    return result
  }
  x('2 4')