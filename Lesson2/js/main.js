
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


//мой способ 1

for (let i=0; i<2; i++)
{
	mainList.shopGoods [i] = prompt ("какой тип товаров будем продавать?");
	mainList.price [i] = prompt ("Цена товара");
}

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










