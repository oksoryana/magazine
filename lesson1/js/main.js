
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
 

mainList.shopGoods[0] = prompt ("какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt ("какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt ("какой тип товаров будем продавать?");



alert(mainList.budget/30);
console.log(mainList);

