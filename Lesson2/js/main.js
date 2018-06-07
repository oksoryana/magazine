
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

for (let i=0; i<3; i++)
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
} while (num<3);
*/

// мой способ 3
/*var num=0;
while (num<3)
{
	mainList.shopGoods [num] = prompt ("какой тип товаров будем продавать?");
	num++;
}
*/
