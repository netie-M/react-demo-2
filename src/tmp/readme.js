/*---------------------------------------------------------------------------*/
/**
 *
 )
 *
 */
/*
当期望父组件传值个子组件state时, 必须要使用componentWillReceiveProps,已方便接收新值时会刷新子组件state
 constructor(props){
 super(props);
 this.state = {
 showModal:props.showModal,
 userArch:null
 }
 }
 componentWillReceiveProps(nextProps) {
 this.setState({showModal: nextProps.showModal});
 }
 */
/*---------------------------------------------------------------------------*/
/*
 fetch 获取本地.json文件时, 当前地址为index所在目录
 例:
 fetch('./UserArchList.json') 则UserArchList.json必须与index.html在同一目录下


 fetch('./data/UserArchList.json')
 .then((response) => {
 // console.log(response.status);
 // console.log(response.statusText);
 // console.log(response.url);
 // console.log(response.type);
 // console.log(response.headers);
 // 获取头部信息需要使用 .get()
 // console.log(response.headers.get('Content-Type'));
 return response.json();
 }).then((data) => {
 this.setState({list:data.userArchList});
 }).catch((e) => {
 console.log(e.message);
 });

 使用 react-scripts 时 必须遵守以下目录结构
 --项目名
 ----public
 ------index.html
 ----src
 ------index.js
 ----package.json
 */
/*---------------------------------------------------------------------------*/
/*
 this 指代
 1.
 class UserArch extends React.Component {
 constructor(props){
 super(props);
 //缺少此语句,handleClick会在首次render之前即会调用,而不是期望的按钮点击后
 this.handleSearchClick = this.handleSearchClick.bind(this);
 }
 handleSearchClick(){

 }
 2.
 class UserArch extends React.Component {
 constructor(props){
 super(props);
 }
 handleSearchClick = () => {

 }
 3.
 1.
 class UserArch extends React.Component {
 constructor(props){
 super(props);
 }
 handleSearchClick(){

 }.bind(this);

 */
/*---------------------------------------------------------------------------*/
/*
 箭头函数
 // ES5
 var selected = allJobs.filter(function (job) {
 return job.isSelected();
 });
 // ES6
 var selected = allJobs.filter(job => job.isSelected());

 ES6中的规则是，紧随箭头的{被解析为块的开始，而不是对象的开始 job => {}这段代码就被解析为没有任何行为并返回undefined的箭头函数

 箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。1. 临时变量self用来将外部的this值导入内部函数。2.在内部函数上执行.bind(this)

 */
