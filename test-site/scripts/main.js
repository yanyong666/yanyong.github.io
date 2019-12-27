// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/firefox2.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//添加函数个性化定制欢迎信息
function setUserName(){
	let myName = prompt('请输入您的名字：');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'MOZILLA 厉害了，'+ myName;
};
if(!localStorage.getItem('name')){
	setUserName(); 
}else{
	let storeName = localStorage.getItem('name');
	myHeading.textContent = 'MOZILLA 厉害了，'+ storeName;
}

//binding事件
myButton.onclick = function(){
	setUserName();
};

