// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

// 예
// 입력 : 20 30 40
// 출력 : 30

const aver=(num)=>{
    let a=num.split(' ')
    let add=0
    let result=0
    for(i=0; i<=a.length-1; i++){
      add += Number(a[i])
    }
    result= add/a.length
    return Math.floor(result)
  }
  aver('20 30 40')