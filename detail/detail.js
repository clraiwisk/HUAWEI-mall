var siteMainAs1 = document.querySelectorAll("ul.site-header-main>li>a"),
	siteMainDivs1 = document.querySelectorAll(".site-header-float-container"),
	siteMainUls1 = document.querySelector("ul.site-header-main"),
	index2 = 0;
// 我想划过时显示div，滑出时关掉div

// // 对每个标签监听其滑过事件
// for(var i = 0,len = siteMainAs1.length - 2; i < len; i++){
// 	siteMainAs1[i].index = i;
// 	siteMainDivs1.index = i;
// 	siteMainAs1[i].onmouseenter = function (){
// 		siteMainDivs1[this.index].classList.add("site-header-show");
// 	} 
// 	siteMainAs1[i].onmouseleave = function (){
// 		siteMainDivs1[this.index].classList.remove("site-header-show");
// 	} 
// }

// 滚动隐藏home标识栏
var homeMainTitles = window.onscroll = function() {
	var winScrollLen = document.documentElement.scrollTop || document.body.scrollTop;
	if (winScrollLen > 810) document.querySelector("a.returntop").classList.add("bottom-show");
	if (winScrollLen < 810) document.querySelector("a.returntop").classList.remove("bottom-show");
}

// banner的轮播效果
var imgesContainer = document.querySelector(".detail-info-banner"),
	images = document.querySelectorAll(".detail-info-banner img")
maxIndex = images.length - 2,
	minIndex = -1;
index = 0,
	timer = null,
	lock = false,
	indicators = document.querySelectorAll("div.indicator>span");

// 进行自动轮播
function toogle(indexNum) {
	if (lock) return;
	var currentIndicatorIndex = (index + maxIndex) % maxIndex;
	var nextIndicatorIndex = (indexNum + maxIndex) % maxIndex;
	indicators[currentIndicatorIndex].className =
		`deactive-${nextIndicatorIndex > currentIndicatorIndex ? "ltr" : "rtl"}`;
	indicators[nextIndicatorIndex].className =
		`active active-${nextIndicatorIndex > currentIndicatorIndex ? "ltr" : "rtl"}`;
	lock = true;
	// 让index的值自增
	index = indexNum;
	// 改变其转变的动画
	imgesContainer.style.transition = "all 0.4s";
	// 进行位置的变化
	imgesContainer.style.transform = `translateX(${-1 * index}00%)`;
}

function autoPlay() {
	// 循环轮播
	timer = setInterval(function() {
		toogle(index + 1);
	}, 3000);
}

// 实现无缝的关键
// 监听最后一张的transition动画是否结束，结束时将其直接拉回原位置
imgesContainer.ontransitionend = function() {
	lock = false;
	if (index !== maxIndex && index !== minIndex) return;
	if (index === maxIndex) index = 0;
	if (index === minIndex) index = maxIndex - 1;
	// 当回到最后一张则停止动画
	imgesContainer.style.transition = "all 0s";
	// 将其拽会原位置
	imgesContainer.style.transform = `translateX(${-1 * index}00%)`;
};

// 悬停时停止动画
document.querySelector(".detail-info-main-left").onmouseenter = function() {
	clearInterval(timer);
}
// 鼠标离开时继续轮播
document.querySelector(".detail-info-main-left").onmouseleave = function() {
	autoPlay();
}

// 对两个小耳朵添加点击事件
document.querySelector("span.detail-info-perv").onclick = function() {
	toogle(index - 1);
};

document.querySelector("span.detail-info-next").onclick = function() {
	toogle(index + 1);
};

// 点击事件
indicators.forEach(function(item, i) {
	item.index = i;
	item.onclick = function() {
		if (this.classList.contains("active")) return;
		toogle(this.index);
	}
});
// 调用轮播函数
autoPlay();

// 点击更新页面的信息（金额的改变）
function updataAmountAndInfoStr() {
	var amount = 2000;
	var infoStr = "";
	var volumeChecked = document.querySelector("ul.volume a.checked");
	var phoneChecked = document.querySelector("ul.phone-color a.checked");
	var taocanChecked = document.querySelector("ul.taocan a.checked");
	var serviceChecked = document.querySelector("ul.service a.checked");
	//选中的check进行价格变动
	infoStr = "HUAWEI P60 " + volumeChecked.dataset.name + " " + phoneChecked.dataset.name + taocanChecked.dataset
		.name + " " + serviceChecked.dataset.name;
	amount += parseInt(volumeChecked.dataset.price) + parseInt(phoneChecked.dataset.price) + parseInt(taocanChecked
		.dataset.price) + parseInt(serviceChecked.dataset.price);
	document.querySelector(".select-info").innerText = infoStr;
	document.querySelectorAll(".amount").forEach(function(item) {
		item.innerText = "¥" + amount;
	});
}

document.querySelectorAll("ul.volume a").forEach(function(item) {
	item.onclick = function() {
		// 如果包含这个css就返回
		if (this.classList.contains("checked")) return;
		// 去除原来已经有checked的css样式
		document.querySelector("ul.volume a.checked").classList.remove("checked");
		// 添加一个checked的css样式
		this.classList.add("checked");
		// 查找已经选中的藏的值然后相加
		updataAmountAndInfoStr();

	}
});
document.querySelectorAll("ul.phone-color a").forEach(function(item) {
	item.onclick = function() {
		// 如果包含这个css就返回
		if (this.classList.contains("checked")) return;
		// 去除原来已经有checked的css样式
		document.querySelector("ul.phone-color a.checked").classList.remove("checked");
		// 添加一个checked的css样式
		this.classList.add("checked");

		// 查找已经选中的藏的值然后相加
		updataAmountAndInfoStr();

	}
});
document.querySelectorAll("ul.taocan a").forEach(function(item) {
	item.onclick = function() {
		// 如果包含这个css就返回
		if (this.classList.contains("checked")) return;
		// 去除原来已经有checked的css样式
		document.querySelector("ul.taocan a.checked").classList.remove("checked");
		// 添加一个checked的css样式
		this.classList.add("checked");

		// 查找已经选中的藏得值然后相加

		updataAmountAndInfoStr();

	}
});
document.querySelectorAll("ul.service a").forEach(function(item) {
	item.onclick = function() {
		// 如果包含这个css就返回
		if (this.classList.contains("checked")) return;
		// 去除原来已经有checked的css样式
		document.querySelector("ul.service a.checked").classList.remove("checked");
		// 添加一个checked的css样式
		this.classList.add("checked");
		// 查找已经选中的藏的值然后相加
		updataAmountAndInfoStr();
	}
});
// 商品详情锚与激活
document.querySelectorAll(".sticky a").forEach(function(item) {
	item.onclick = function() {
		if (this.classList.contains("active")) return;
		document.querySelector(".sticky a.active").classList.remove("active");
		this.classList.add("active");
	}
});
//滚动页面控制上面的title激活
var ob = new IntersectionObserver(
	function(entry) {
		if (entry[0].isIntersecting) {
			var activeLi = document.querySelector(".sticky a.active");
			//如果存在的话就去掉
			if (activeLi) activeLi.classList.remove("active");
			document.querySelectorAll(".sticky a")[entry[0].target.index].classList.add("active");
		}
	}, {
		root: null,
		//监听的位置
		rootMargin: "-45% 0px -50% 0px",
		threshold: [0]
	}
);
// 搜索想要监听的标签
var parts = document.querySelectorAll(".boxes");
for (var i = 0, len = parts.length; i < len; i++) {
	// 给没有关联的多个盒子设置一个属性，记录他是第几个
	parts[i].index = i;
	// 给每个盒子添加交叉监听事件
	ob.observe(parts[i]);
}