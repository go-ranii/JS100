// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 예제
// 입력 : 거꾸로
// 출력 : 로꾸거

const reverse=(str)=>{
    let reverseStr=''
    for(i=str.length-1; i>=0; i--){
      reverseStr+=str[i]
    }
    console.log(reverseStr)
  }
  reverse('거꾸로')