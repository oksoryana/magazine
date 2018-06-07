
let money = prompt ("Ваш бюджет на месяц?");
let magazine = prompt ("Название вашего магазина");
//console.log(typeof(answer));



let mainList = {
	budget: money,
	nameMagazin: magazine,
	shopGoods: [],
	price: [],
	employers: {},
	open: false,
	discount: true
}



for ( let i = 0 ; i < 3 ; i ++ )
{
	mainList . shopGoods [i] =  prompt ( "какой тип товаров будем продавать? " );
	mainList . price [i] =  prompt ( " Цена товара " );
}

// дисконтная система

function showmainList () {
	for (let i=0;i<3;i++)
	{
	if (mainList.discount==true)
	{
		let q= mainList.price[i]*0.8;
		alert (q);

	} else {alert ("Скидка отсутствует")
}
}
}
showmainList ();

//Нанять сотрудников 3 и 4 задание

let employers = {
	number: [],
	name: []
}

function callname(x) {
	for (let i=1;i<=x;i++) {
		let a = prompt ("Как зовут сотрудника?");
		employers.number['i'] = i;
		employers.name['i'] = a;
		console.log (employers.number["i"]+" - "+employers.name['i']);
	}
}

let x = prompt ("Сколько сотрудников нанять?");
callname (x);



// подсчет бюджета

function  budg () {
		alert ("Бюджет =" + " " + mainList . budget / 30 );
}
budg ();

