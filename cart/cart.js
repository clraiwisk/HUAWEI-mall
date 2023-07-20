//虚拟构建数据
var list = [
	// id只要唯一 就可以，连不连续无所谓，数据的id和元素的下标毛线关系没有
	{id: 7, img:"../images/cart1.png", details:"[现货速发] HUAWEI Mate 50 Pro 256GB (曜金黑)官方标配(含充电套装)", price: 6499, count: 1, maxCount: 9},
	{id: 14, img:"../images/cart1.png", details:"[现货速发] HUAWEI Mate 50 128GB (曜金黑)官方标配(含充电套装)", price: 4799, count: 1, maxCount: 9},
	{id: 24, img:"../images/cart2.png", details:"[新品上市] HUAWEI MatePad 11英寸2023款WIFI 6GB+128GB曜石黑", price: 2199, count: 1, maxCount: 9},
	{id: 25, img:"../images/cart3.png", details:"HUAWEI MateBook 16s 12代酷睿标压i9 16GB 1TB 16英寸2.5K高色准触控屏深空灰", price: 8499, count: 1, maxCount: 9}
];
var htmlStr = "";
//合并求和和求总金额
function totalAmount(){
	//找出tbody中所有的checkbox
	var checkedItems = document.querySelectorAll("tbody i.checkbox.checked");
	//循环遍历每条勾选的购物记录的购买数量累加求和
	var amount = 0; total = 0;
	checkedItems.forEach(function(item){
		//找出勾选的购物记录对应的id
		var id = parseInt(item.parentNode.parentNode.dataset.id);
		//用id找出list中对应的购物记录
		//find找一个，filter找一堆
		var target = list.find(function(item){
			return item.id === id;
		});
		//购物记录的count值进行累加
		amount += target.count;
		total += target.count * target.price;
	});
	document.querySelector("span.amount").innerText = amount;
	document.querySelector("span.total").innerText = total;
}
//渲染
list.forEach(function(item){
	htmlStr += `
		<tr data-id = "${item.id}">
			<td><i class="iconfont icon-checkbox checkbox checked"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			<td><a herf=""><img src ="${item.img}"></a></td>
			<td>${item.details}</td>
			<td>${item.price}</td>
			<td>
				<button class="btn-decrease" ${item.count === 1 ? "disabled" : ""}>-</button>
				<span class="count">${item.count}</span>
				<button class="btn-increase" ${item.count === item.maxCount ? "disabled" : ""}>+</button>
			</td>
			<td class="total-sub">￥${item.price * item.count}.00元</td>
			<td><button class="btn-delete">删除</button></td>
		</tr>
	`});
document.querySelector("table>tbody").innerHTML = htmlStr;
// updateAmount();
// updateTotal();
//首次更新总金额和总数目
totalAmount();

//给thead里面的checkbox绑定点击事件
document.querySelector("thead i.checkbox").onclick = function(){
	//切换他的checked class属性值
	this.classList.toggle("checked");
	//让tbody里面的所有的checkbox的选中状态和this一致
	document.querySelectorAll("tbody i.checkbox").forEach(function(item){
	item.classList.toggle("checked",this.classList.contains("checked"));
	},this);
	//更新总数量和总金额
	totalAmount();
}

//把tbody里面的checkbox点击事件委托到tbody上进行集中处理
document.querySelector("tbody").addEventListener("click",function(e){
	//判断是不是checkbox冒泡上来的事件
	if(!e.target.classList.contains("checkbox")) return;
	//切换自己的勾选状态
	e.target.classList.toggle("checked");
	//更新thead中的全选状态
	var isAllChecked = document.querySelectorAll("tbody i.checkbox:not(.checked)").length === 0;
	document.querySelector("thead i.checkbox").classList.toggle("checked",isAllChecked);
	//更新总数量和总金额
	totalAmount();
});

//把tbody里面的checkbox点击事件委托到tbody上进行集中处理
document.querySelector("tbody").addEventListener("click",function(e){
	//判断是不是btn-delete冒泡上来的事件
	if(!e.target.classList.contains("btn-delete")) return;
	//是否确认删除
	if(!confirm("是否要删除？")) return;
	//删除数组中的数据
	var id = parseInt(e.target.parentNode.parentNode.dataset.id);
	//用id找出list中对应的-
	var i = list.findIndex(function(item){
		return item.id === id;
	});
	list.splice(i,1);
	//修改页面上的数据
	e.target.parentNode.parentNode.remove();
	//更新thead中的全选状态
	var isAllChecked = document.querySelectorAll("tbody i.checkbox:not(.checked)").length === 0;
	document.querySelector("thead i.checkbox").classList.toggle("checked",isAllChecked);
	//更新总数量和总金额
	totalAmount();
	//提示删除成功
	alert("删除成功！");
});

//减少商品数目
//把tbody里面的checkbox点击事件委托到tbody上进行集中处理
document.querySelector("tbody").addEventListener("click",function(e){
		//判断是不是btn-decrease冒泡上来的事件
		if(!e.target.classList.contains("btn-decrease")) return;
		var id = parseInt(e.target.parentNode.parentNode.dataset.id);
		//用id找出list中对应的-,修改数组中的数据
		var target = list.find(function(item){
			return item.id === id;
		});
		target.count -= 1;
		//修改页面上的tr里的数量，小计，如果减到1了让自己禁用，加号取消禁用
		e.target.nextElementSibling.innerText = target.count;
		e.target.parentNode.nextElementSibling.innerText = `￥${target.count * target.price}.00元`;
		e.target.disabled = target.count === 1;
		e.target.nextElementSibling.nextElementSibling.disabled = false;	
	//更新总数量和总金额
	totalAmount();
});

//增加商品数目
//把tbody里面的checkbox点击事件委托到tbody上进行集中处理
document.querySelector("tbody").addEventListener("click",function(e){
		//判断是不是btn-increase冒泡上来的事件
		if(!e.target.classList.contains("btn-increase")) return;
		var id = parseInt(e.target.parentNode.parentNode.dataset.id);
		//用id找出list中对应的-,修改数组中的数据
		var target = list.find(function(item){
			return item.id === id;
		});
		target.count += 1;
		//修改页面上的tr里的数量，小计，如果加到最大了让自己禁用
		e.target.previousElementSibling.innerText = target.count;
		e.target.parentNode.nextElementSibling.innerText = `￥${target.count * target.price}.00元`;
		e.target.disabled = target.count === target.maxCount;
		e.target.previousElementSibling.previousElementSibling.disabled = false;	
	//更新总数量和总金额
	totalAmount();
});
