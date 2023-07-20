// 华为智选
// 提取数据
var huaweiData = [
	{
		img: "./images/801.webp", 
		name: "华为智选 海雀智能摄像头Pro", 
		info: "800万像素 | 4K画质 | 内置64GB安全存储", 
		price: 399
	},
	{
		img: "./images/802.png", 
		name: "华为智选 力博得智能声波牙刷·星钻 白色", 
		info: "36档洁齿护龈", 
		price: 197
	},
	{
		img: "./images/803.webp", 
		name: "华为智选 哈尔斯智能水杯 旋盖款 黑色", 
		info: "智能触控屏显 | 忘喝水智能提醒",  
		price: 139
	},
	{
		img: "./images/804.webp", 
		name: "华为智选 亿健精灵S7智能跑步机 白色", 
		info: "（下单即赠养护硅油） 柔性减震专利", 
		price: 1799
	},
	{
		img: "./images/805.webp", 
		name: "华为智选 达伦智能台灯2 白色", 
		info: "广角照明 | 无频闪 | 无蓝光", 
		price: 149
	},
	{
		img: "./images/806.webp", 
		name: "华为智选 力博得智能声波牙刷2 星夜黑", 
		info: "专业洁牙 | 无惧水洗", 
		price: 139
	},
	{
		img: "./images/807.webp", 
		name: "华为智选 720全效空气净化器1i 白色", 
		info: "H13高等级HEPA滤芯", 
		price: 639
	},
	{
		img: "./images/808.webp", 
		name: "华为智选 沃莱智能跳绳S2 曜石黑", 
		info: "精准计数 | 实时语音播报", 
		price: 109
	}
];
// 甄选推荐
var selectData = [
	{
		img: "./images/301.webp",
		name: "HUAWEI P60 Art", 
		info: "形随心动 海岛设计", 
		price: 8988
	},
	{
		img: "./images/302.webp",
		name: "HUAWEI WATCH Ultimate 非凡大师 驰骋山地 黑色丁腈橡胶表带 双向北斗卫星消息", 
		info: "双向北斗卫星消息 | 百米深潜科技", 
		price: 5999
	},
	{
		img: "./images/303.webp",
		name: "HUAWEI MateBook 16s", 
		info: "12代酷睿标压 | 2.5K高色准触控屏", 
		price: 8499
	},
	{
		img: "./images/304.webp",
		name: "HUAWEI P60 Art", 
		info: "形随心动 海岛设计", 
		price: 949
	}
];
// 平板专区
var ipadData = [
	{
		img: "./images/401.webp",
		name: "MatePad 11英寸 2023款", 
		info: "120Hz柔光屏 | 华为笔记", 
		price: 2199
	},
	{
		img: "./images/402.webp",
		name: "MatePad Pro 12.6英寸 2022", 
		info: "120Hz高刷原色全面屏", 
		price: 4999
	},
	{
		img: "./images/403.webp",
		name: "MateBook E Go", 
		info: "二合一平板电脑内含键盘 | 14小时长续航", 
		price: 4499
	},
	{
		img: "./images/404.webp",
		name: "MatePad Pro 11英寸", 
		info: "120Hz OLED原色全面屏", 
		price: 3299
	},
	{
		img: "./images/405.webp",
		name: "MatePad 11", 
		info: "120Hz高刷全面屏", 
		price: 1999
	},
	{
		img: "./images/406.webp",
		name: "MatePad Pro 10.8", 
		info: "10.8英寸绚丽全面屏 | 90%高屏占比", 
		price: 3199
	},
	{
		img: "./images/407.webp",
		name: "HUAWEI MatePad Paper", 
		info: "10.3英寸护眼全面屏 | 百万级阅读资源", 
		price: 3499
	},
	{
		img: "./images/408.webp",
		name: "MateBook E", 
		info: "二合一笔记本 | 11代酷睿", 
		price: 5499
	}
];
// 穿戴专区
var wearingData = [
	{
		img: "./images/501.webp",
		name: "WATCH Ultimate", 
		info: "双向北斗卫星消息 | 百米深潜科技", 
		price: 5999
	},
	{
		img: "./images/502.webp",
		name: "华为通话手环", 
		info: "腕上蓝牙耳机 | 弧面柔性彩屏", 
		price: 949
	},
	{
		img: "./images/503.webp",
		name: "WATCH 3 Pro new", 
		info: "血氧体温检测 | 呼吸健康研究", 
		price: 3199
	},
	{
		img: "./images/504.webp",
		name: "WATCH GT 3 Pro", 
		info: "血氧体温检测 | 全天候血氧检测", 
		price: 2188
	},
	{
		img: "./images/505.webp",
		name: "WATCH GT 3", 
		info: "血氧体温检测 | 呼吸健康研究 | 蓝牙通话", 
		price: 1188
	},
	{
		img: "./images/506.webp",
		name: "WATCH Buds", 
		info: "降噪通话", 
		price: 2988
	},
	{
		img: "./images/507.webp",
		name: "儿童手表 5X Pro", 
		info: "离线定位 | 双屏双摄 | 绿色守护", 
		price: 1948
	},
	{
		img: "./images/508.webp",
		name: "WATCH D", 
		info: "体温检测 | 血压测量 | 心电采集", 
		price: 2488
	}
];
// 精选爆款
var featuredData = [
	{
		img: "./images/601.webp",
		name: "华为凌霄子母路由Q6", 
		info: "电线变网线 | 全屋Wi-Fi 6+ | PLC Turbo 2.0", 
		price: 799
	},
	{
		img: "./images/602.webp",
		name: "FreeBuds Pro 2 +", 
		info: "超感知原声双单元", 
		price: 1399
	},
	{
		img: "./images/603.webp",
		name: "HUAWEI FreeBuds 5", 
		info: "超磁感澎湃单元", 
		price: 799
	},
	{
		img: "./images/604.webp",
		name: "华为智慧屏SE 65", 
		info: "4K全高清 | 10.7亿色 广色域", 
		price: 2299
	}
];
// 手机专区
var phoneData = [
	{
		img: "./images/701.webp",
		name: "HUAWEI P60 Pro", 
		info: "洛可可白 每一支都独一无二", 
		price: 6988
	},
	{
		img: "./images/702.webp",
		name: "HUAWEI P60", 
		info: "洛可可白 每一支都独一无二 | XMAGE影像", 
		price: 4488
	},
	{
		img: "./images/703.webp",
		name: "HUAWEI P60 Art", 
		info: "形随心动 海岛设计", 
		price: 8988
	},
	{
		img: "./images/704.webp",
		name: "HUAWEI Mate X3", 
		info: "超轻薄四曲折叠 | 超可靠昆仑玻璃", 
		price: 12999
	},
	{
		img: "./images/705.webp",
		name: "华为畅享 60", 
		info: "6000mAh大电池 | 4800万大底超清影像", 
		price: 1249
	},
	{
		img: "./images/706.webp",
		name: "nova 10 青春版", 
		info: "一亿像素 | AI美肤 | 经典直屏", 
		price: 1899
	},
	{
		img: "./images/707.webp",
		name: "HUAWEI Mate 50 Pro", 
		info: "超光变XMAGE影像 | 北斗卫星消息", 
		price: 6699
	},
	{
		img: "./images/708.webp",
		name: "HUAWEI Mate 50", 
		info: "北斗卫星消息 | 低电量应急模式", 
		price: 4799
	}
];
// 电脑专区
var computerData = [
	{
		img: "./images/901.webp",
		name: "MateBook X Pro 微绒典藏版", 
		info: "微绒金属机身 | 12代酷睿处理器", 
		price: 10999
	},
	{
		img: "./images/902.webp",
		name: "HUAWEI MateBook 14s", 
		info: "12代酷睿标压 | 14.2英寸触控屏", 
		price: 6799
	},
	{
		img: "./images/903.webp",
		name: "MateBook X Pro 12代酷睿", 
		info: "3.1K原色全面屏 | 12代酷睿处理器", 
		price: 9499
	},
	{
		img: "./images/904.webp",
		name: "HUAWEI MateBook 16s", 
		info: "12代酷睿标压 | 2.5K高色准触控屏", 
		price: 5999
	},
	{
		img: "./images/905.webp",
		name: "MateBook 14 12代酷睿", 
		info: "12代酷睿 | 2K触控屏 | 超级终端", 
		price: 5599
	},
	{
		img: "./images/906.webp",
		name: "MateBook D 15", 
		info: "15.6”护眼全面屏", 
		price: 4199
	},
	{
		img: "./images/907.webp",
		name: "MateBook E 12.6英寸", 
		info: "二合一笔记本 | 11代酷睿", 
		price: 6499
	},
	{
		img: "./images/908.webp",
		name: "HUAWEI MateView", 
		info: "内置音箱 | 4K+ |低蓝光", 
		price: 2799
	}
];



var interval = 4000,
	timer = null,
	index = 0,
	lis = document.querySelectorAll(".container>ul.img>li"),
	maxIndex = lis.length - 1,
	indicator = document.querySelectorAll(".indicator>li");

function toggleImg(nextIndex) {
	//让原来有show的li去掉show和active
	lis[index].classList.remove("show");
	indicator[index].classList.remove("active");
	// index自增，超过最大值后返回初始值
	index = nextIndex;
	//让后来没有show的li加上show和active
	lis[index].classList.add("show");
	indicator[index].classList.add("active");
}
timer = setInterval(function() {
	toggleImg(index === maxIndex ? 0 : index + 1)
}, interval);


var container = document.querySelector(".container");
//鼠标滑过的时候停止轮播
container.onmouseenter = function() {
	clearInterval(timer);
}
//鼠标滑出的时候开始轮播
container.onmouseleave = function() {
	timer = setInterval(function() {
		toggleImg(index === maxIndex ? 0 : index + 1)
	}, interval);
}
//绑定点击事件
for (var i = 0; i <= indicator.length - 1; i++) {
	indicator[i].index = i;
	indicator[i].onmouseover = function() {
		toggleImg(this.index)
	}
}

// 绑定click事件
var titles = document.querySelectorAll(".part_title>ul>li");
for (i = 0; i <= titles.length - 1; i++) {
	titles[i].onclick = function() {
		if (this.classList.contains("active")) return;
		// 去掉active
		var activeLi = document.querySelector(".part_title>ul>li.active_list");
		//如果有active的话就去掉active
		if (activeLi) activeLi.classList.remove('active');
		//没有的话就添加上active
		this.classList.add("active_list");
	}
}
