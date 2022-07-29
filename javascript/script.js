// var _div_parent = document.getElementById('group');
// var _div_parent1 = document.querySelector('#group');
// var _p = document.getElementsByClassName('desc');
// var _h2 = document.getElementsByClassName('head');
// var _h4 = document.getElementById('head2');
// var _ul = document.getElementsByClassName('list');
// var _li = document.getElementsByClassName('desc-list');
// var _span = document.querySelector('#spanid');
// var _input = document.querySelector('.sea');
// // // console.log(div_parent , p, h2,ul,span)
// // _div_parent.insertBefore(_span,_h2[0]);
// // _div_parent.insertBefore(_span,_div_parent.children[2]);
// // window.
// // //open("https://www.youtube.com/watch?v=URyOlKnAAis&list=PLtFbQRDJ11kFJFzd5UNy5vSnkbR031vG9&index=40","videoo","width=200,height=500");
// // console.log(screen.width);
// // console.log(screen.availWidth);
// // console.log(screen.height);
// // console.log(screen.availHeight);
// // console.log(window.location.href);
// // console.log(window.location.hostname);
// // console.log(window.location.pathname);
// // console.log(window.location.protocol);
// // console.log(window.navigator.appName);

// // console.log(window.navigator.appCodeName);

// // console.log(window.navigator.platform);
// // console.log(window.navigator.appVersion);
// // console.log(window.navigator.language);
// // console.log(window.navigator.onLine);
// // var time1=setTimeout(alert('ffffff'),2000);
// // // setInterval(console.log('ffffff'),2000);
// // var time =setInterval(function(){
// //     console.log('gggggg');

// // }, 2000);
// // clearInterval(time);
// // clearTimeout(time1);
// // _h4.innerHTML = 10000;
// // var font ='px'
// // _h4.style.fontSize=100+font;

// // _h4.style.color='red';

// // var t=setInterval(function () {

// //         _h4.innerHTML-=10;
// //         if(_h4.innerHTML==500){
// //             clearInterval(t);
// //         }

// // }, 10000);
// //////////////////////////////////////////////////////
// // const template=`
// // <div>${5*10}
// //     <span>dddd</span>
// //     <h2>dddddddd</h2>
// // </div>
// // `
// // console.log(this);
// // var hh={ s:console.log(this)};
// ///////////////////////////////////////////////////////
// // var x=2;
// // function testCode(){
// //      var test =12;
// // }
// // {
// //     var h=13;
// // }
// // console.log("function testCode(){var test =12;}",test);//error not defined
// // console.log("{ var h=13;}",h);  // 13
// // console.log('x',x);  //2
// ///////////////////////////////////////////////////////// arrow function
// // var test=function(x,y){
// //     console.log(x+y);
// // };

// // var test =(x,y)=>console.log(x+y);
// // ////////////////////////////////////////////////////////default params
// // function print(a,b){
// //     console.log(a,b);
// // };
// // print(1,3);        //1   3
// // print(1);          //1   undefined
// // print();            //undefined undefined

// // //////
// // function print(a=4,b=5){
// //     console.log(a,b);
// // };
// // print(1,3);        //1   3
// // print(1);          //1   5
// // print();           //4   5


// // //////
// // function callSomething(thing=Something()){
// //     console.log(thing);
// // }
// // let number =0;
// // function Something(){
// //     number+=1;
// //     return number;
// // }
// // callSomething(); //1
// // callSomething(); //2
// // callSomething(5); //5
// // callSomething(); //3

// // //////
// // function greet(name,greeting,message=greeting+" "+name){
// //     return [name,greeting,message];
// // }
// // console.log(greet("hamza","hi"));  // ["hamza","hi","hi hamza"]
// // console.log(greet("hamza","hi","test"));  // ["hamza","hi","test"]



// // /////////////////////////////////////////////////////[Spread Operator  ... ]
// // const arr =[1,2,3];
// // function add(x,y,z){
// //     console.log(x+y+z);
// // }
// // add(...arr);

// // //////
// // const obj ={
// //     x:1,
// //     y:2,
// // };
// // // const obj2={
// // //     x:1,
// // //     y:2,
// // //     z:10,
// // // };
// // const obj2={
// //     ...obj,
// //     z:10,
// // };


// // //////////////////////////////////////////////////////Destruction  
// // const data = [1, 2, 3];
// // const n1 = data[0];
// // const n2 = data[1];
// // const n3 = data[2];
// // const [m1, m2, m3] = data; //m1=1  m2=2 m3=3
// // const [, , t3] = data;   //t3=3
// // const [t1, ,] = data;   //t1=1
// // const [, t2,] = data;    //t2=2
// // console.log(m1, m2, m3);      // 1   2   3 
// // /////////
// // const data2 = {
// //     x: 2,
// //     z: "hamza",
// // };
// // const X = data2.x;   // x=2
// // const Y = data2.z;   //z="hamza"

// // const { m, n } = data2;      //  m=2   n="hamza"
// // const { x, z: name, y = "test" } = data2;
// // console.log(x, name, y);  //2 "hamza" "test"


// // //////
// // let [name1, name2, ...rest] = ["x", "y", "a", "m"];
// // console.log(name1, name2, rest); // "x"   "y"  ["a","m"]

// // let [firstname = "hamza", lastname = "omar"] = [];  /// take default ===[]

// // ///////////////////////////////////////////////////////////////// write html code use ``
// // var b=10;
// // var template = `
// // <div>
// // <p>number ${b}</p>
// // <span>hello</span>
// // </div>
// // `

// // _h4.innerHTML=template;

// /////////////////////////////////////////////////////////////// this 

// // //////this inside global scope this=window

// // var n=10;
// // console.log(this.n);   //is equal          2
// // console.log(window.n); //is equal          2
// // //////in afunction , this refer to the global object
// // function test(){
// //     console.log(this)      //window
// // }
// // test();

// // //////in amethod , this refers to the owner object

// // var person ={
// //     firstname:"john",
// //     lastname:"ali",
// //     fullname: function(){
// //         console.log(this);                       //object{    ,       ,      };
// //         return this.firstname+" "+this.lastname;  // john ali
// //     },
// // };
// // console.log(person.fullname());
// // ///////in an event ,this refers to the element that received the event 
// // var item =`
// //  <button onclick="this.style.display='none'">click to remove me</button>
// // `;
// // _h4.innerHTML=item;

// // /////////////////////////////////////////////////////////////////// call       &  apply
// // var obj ={
// //     a:"custom",

// // };
// // var a=10;
// // function whatthis(){
// //     return this.a;
// // }
// // console.log(whatthis());           // 10
// // console.log(whatthis.call(obj));   // custom
// // console.log(whatthis.apply(obj));  // custom
// // ///////call & apply change position of declaring object


// // //////////////////////////////////////////////////////////////////////forEach 
// // var arr = [1, 2, 3];
// // var s=arr.forEach(function (ele,i,array) {
// //     // console.log(ele);       // 1  2  3
// //     // console.log(i);            //0   1  2
// //     //  console.log(array);        //[1,2,3,]  [1,2,3]  [1,2,3]
// //       //  console.log(this);
// // },this);
// // console.log(s);

// // console.log(arr.reduce((ele,i)=>ele+i,5));
// //////////////////////////////////////////////////////////////////////////
// // console.log([10,5,4,7,5,5,10,8].sort((a,b)=>{
// //     console.log(b-a)
// //     console.log('****',b,'******',a)
// //     return b-a}))

// /////////////////////////////////////////////////////////////////

// // var ele=document.createElement('button');
// // ele.innerHTML="click";
// // ele.className='alll';
// // ele.id="myname";
// // ele.click(ele.style.fontSize='150px')
// // // ele.name="ddddd";
// // //ele.onclick= ()=>ele.style.fontSize='80px';
// // //ele.addEventListener('click',()=>_span.append(ele))
// // _span.prepend(ele);
