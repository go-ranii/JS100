// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const vote=(str)=>{
    let arr=str.split(' ')
    let name= [...new Set(arr)]
    let count = []
    let result = {}
    let answer=[]
    for(i=0; i<name.length; i++){
      for(l=0; l<arr.length; l++){
        if(name[i] === arr[l]) count.push(i) 
      }
    }
    count.forEach((el) => { 
      result[name[el]] = (result[name[el]] || 0)+1; 
      });
    for(i=0; i<Object.keys(result).length; i++){
      if(Object.values(result)[i] > Object.values(result)[i+1]){
        answer.push(Object.keys(result)[i], Object.values(result)[i])
      }
    }
    
    return `${answer[0]}(이)가 총 ${answer[1]}표로 반장이 되었습니다.`
  }
  vote('정환 건 정환 건 기창 기창 기창 재민 재민 재민 재현 재현 재민 건 재민')