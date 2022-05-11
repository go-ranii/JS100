// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

const big=(str)=>{
    let temp= str.split(' ').sort((a,b)=> a-b)
    return Number(temp[temp.length-1])
  }
  big('1 5 4 6 2 3 7 9 10 8')