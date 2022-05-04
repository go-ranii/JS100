// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

const obj=(name, score)=>{
    let key= name.split(' ')
    let value= score.split(' ')
    let result= new Object()
    result={
      [key[0]]:Number(value[0]),
      [key[1]]:Number(value[1])
    }
    return result
  }
  obj('Yujin Hyewon', '70 100')
  