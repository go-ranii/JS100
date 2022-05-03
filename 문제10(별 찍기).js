// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
//  온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

// 입력이 5 일때,
//     *
//    ***
//   *****
//  *******
// *********

const tree=(num)=>{
    let star='*'
    let space=''
    let spaceArr=[]
    let result=''+ '\n'
    for(i=num; i>=1; i--){
      space+=' '
      spaceArr.push(space)
    }
    spaceArr.reverse()
    for (i=1; i<=num; i++){ 
      result += spaceArr[i-1]+star+ '\n' 
      star += '**'
      
    }
    return result
  }
  tree(5)