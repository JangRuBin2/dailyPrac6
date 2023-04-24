let baiscData = {
  header: {
    id : "header",
    type : "div",
    children : null
  },
  main: {
    id : "main",
    type : "div",
    // children : null
    children : 'null'
  },
  footer: {
    id : "footer",
    type : "div",
    children : null,
    // test: "되냐?"
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array) {
// console.log(baiscData.footer.children)
let values = ['header', 'main', 'footer'];
for(let i=0; i<values.length; i++) {
  // null 찾기
//  console.log(baiscData[values[i]].children);
  if(baiscData[values[i]].children === null) {
    console.log("children 속성은 null 입니다")
  } else {
    console.log(values[i]+"의 children 속성이 null이 아닙니다")
  }
 
}
  // basic 객체의 children 속성이 null 데이터 타입이 할당되있는지를 판별하고
  // null 데이터 타입이 할당 되있으면 매개변수를 각각 할당한다
  let value;
  // header, main, footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하세요
  return value;
}

console.log(exampleOne(baiscData, elementData));

// const whatObj = Object.keys(baiscData)
// // console.log(whatObj)
// const baiscDataChildren =Object.keys(whatObj[0])
// console.log(baiscDataChildren)
// if(test)
// console.log(baiscDataChildren[2])
// for(let i=0; i< whatObj.length; i++) {
//   const baiscDataChildren = Object.keys(baiscData[i]);
//   if(Object.keys(whatObj[i])) {
//     console.log(baiscDataChildren)
//   }
// }