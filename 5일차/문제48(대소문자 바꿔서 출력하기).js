// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD
const change=(str)=>{
    let temp= str.split('')
    let lower=''
    let upper=''
    for(i=0; i<temp.length; i++){
      if(temp[i] === temp[i].toUpperCase()) lower += (temp[i].toLowerCase())
      else upper += temp[i].toUpperCase()
    }
    return lower+upper
  }
  change('AVVWasd')