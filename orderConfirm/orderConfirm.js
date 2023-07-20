//人物信息
var arr = [
	{id : 2,name: "张三",address: "山东省 聊城市 东昌府区 东城街道",address2: "长江路",phone: "15829330254"},
	{id : 2,name: "张三",address: "山东省 青岛市 黄岛区 辛安街道",address2: "",phone: "19984938571"}
];
var container = document.querySelector(".container"),
	form = document.forms["dialog"],
	ul = document.querySelector("ul.list");
var htmlStr = "";

arr.forEach(function(item) {
	htmlStr += `
		<li>
			<span>${item.name}</span>
			<span>${item.phone}</span>
			<span>${item.address}${item.address2}</span>
			<div class="btn-container">
			<button data-id="${item.id}" class="btn-remove">删除</button>
			<button data-id="${item.id}" class="btn-revise">修改</button>
			</div>
		</li>
	`;
});
ul.innerHTML = htmlStr;
// 删除功能
ul.onclick = function(e) {
	if(e.target.classList.contains("btn-remove")) {
		// 如果不删除就取消
		if(!confirm("确定删除？")) return;
		var id = parseInt(e.target.dataset.id);
		var i = arr.findIndex(function(item){
			return item.id === id;
		});
		console.log(i);
		// 删除数组里面的元素
		arr.splice(i, 1);
		e.target.parentNode.parentNode.remove();
		alert("删除成功！")
	}
	// 如果点击的是修改按钮
	if(e.target.classList.contains("btn-revise")) {
		var id = parseInt(e.target.dataset.id);
		var i = arr.findIndex(function(item){
			return item.id === id;
		});
		// 回显数据
		form.index.value = id;
		form.name.value = arr[i].name;
		form.phone.value = arr[i].phone;
		form.address2.value = arr[i].address2;
		regionPicker.set(arr[i].address);
		container.classList.add("show");
	}
}

document.querySelector("button.btn-found").onclick = function() {
	container.classList.add("show");
	// 重置表单
	form.reset();
	regionPicker.reset();
	form.index.value = 0;
}
document.querySelector("button.btn-cancel").onclick = function() {
	container.classList.remove("show");
}
//保存按钮
document.querySelector("button.btn-save").onclick = function() {
	var id = parseInt(form.index.value);
		var newItem = {
			//获取表单中的数据
			id: id === 0 ? (arr[length] === 0 ? 1 : arr[arr.length - 1].id + 1) : id,
			name: form.name.value,	
			phone: form.phone.value,
			address: regionPicker.get(),
			address2: form.address2.value,
		};
		var i = arr.findIndex(function(item) {
			return item.id === id;
		});
		// 用id去判断是新增还是替换
		id === 0 ? arr.push(newItem) : arr.splice(i, 1, newItem);
		var newLi = document.createElement("li")
		newLi.innerHTML = `
				<span>${newItem.name}</span>
				<span>${newItem.phone}</span>
				<span>${newItem.address}${newItem.address2}</span>
				<div class="btn-container">
				<button data-id="${newItem.id}" class="btn-remove">删除</button>
				<button data-id="${newItem.id}" class="btn-revise">修改</button>
				</div>
		`;
		// 如果为0，就把之前i的那个替换掉 -1的话就是新增 在后面直接加入一个新的li
		id === 0 ? ul.appendChild(newLi) : ul.children[i].replaceWith(newLi);
		// 重置表单
		form.reset();
		container.classList.remove("show");
}