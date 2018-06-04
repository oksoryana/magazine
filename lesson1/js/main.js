
let money = prompt ("Ваш бюджет на месяц?");
let magazine = prompt ("Название вашего магазина");
//console.log(typeof(answer));



let mainList = {
	budget: money,
	nameMagazin: magazine,
	shopGoods: [],
	employers: {},
	open: false
}

for (let i=0; i<5; i++)

{
	let a = prompt ("какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a; 
}

//мой способ 1
/*
for (let i=0; i<5; i++)
{
	mainList.shopGoods [i] = prompt ("какой тип товаров будем продавать?");
}*/

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


alert(mainList.budget/30);
console.log(mainList);

