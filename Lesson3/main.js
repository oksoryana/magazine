
let money = prompt ("Ваш бюджет на месяц?");
let magazine = prompt ("Название вашего магазина");
//console.log(typeof(answer));



let mainList = {
	budget: money,
	nameMagazin: magazine,
	shopGoods: [],
	price: [],
	employers: {},
	open: false
}

//for (let i=0; i<5; i++){
//	let a = prompt ("какой тип товаров будем продавать?");
//	mainList.shopGoods[i] = a; 
//}
//for (let i=0; i<5; i++) {
//	let a = prompt("Какой тип товаров будем продавать?");

/*	if ((typeof(a)) === 'string' &&(typeof(a)) !=null && a!='' && a.length<50) {
		console.log("Все верно");
		mainList.shopGoods[i]=a;
	} else {
		i=i-1;
	}
*/
//}

//мой способ 1

for (let i=0; i<2; i++)
{
	mainList.shopGoods [i] = prompt ("какой тип товаров будем продавать?");
	mainList.price [i] = prompt ("Цена товара");
}

var disk = prompt ("Есть дисконт? (y,n)", "");
if (disk == "y")
{
	for (let i=0;i<2;i++)
	{
	alert ("стоимость товара" + " " + mainList.shopGoods[i])
	alert (mainList.price[i]*80/100);
}

} else { alert ("Цена товара не поменялась по причине отсутствия дисконта");
}


//if (disk == 'y') {
//	let x = mainList.price [1]*10%
//}	else {
//	let x = mainList.price [1]*100%;
//}
//console.log('x');
//мой способ 2
/*var num=0;
do
{
	mainList.shopGoods [num] = prompt ("какой тип товаров будем продавать?");
	num++; 
} while (num<5);
*/

// мой способ 3
/*var num=0;
while (num<5)
{
	mainList.shopGoods [num] = prompt ("какой тип товаров будем продавать?");
	num++;
}
*/

/*
alert(mainList.budget/30);
console.log(mainList);
*/
/*

// вариант 1
function showmainList(){
	var bud = mainList.budget/30;
	alert(bud);
}
showmainList();
*/
// вариант 2

/*function showDiskount () {
		let x = prompt (mainList.diskount = "есть дисконт?");
		if (x=)
	alert(mainList.diskount);
}
showDiskount();
*/
//	if x = 1 {
//		console.log('mainList.shopGoods'*30%)
//	}
//	else
//		console.log('mainList.shopGoods'*0%)

//}

function showmainList(){
		alert(mainList.budget/30);
}
showmainList();



function diskount () {

}







