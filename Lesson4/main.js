
let money = prompt ("Ваш бюджет на месяц?");
let magazine = prompt ("Название вашего магазина");
let time = 19;

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
	let a =  prompt ( "какой тип товаров будем продавать? " );

//урок 4. 1-е задание
	
	if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
		mainList.shopGoods[i] = a;
	}
	
	mainList . price [i] =  prompt ( " Цена товара " );
}

if (time < 0) {
	console.log("Такого просто не может быть");
} else if(time > 8 && time < 20) {
	console.log('Время работать')
} else if(time < 24){
	console.log("Уже слишком поздно");
} else {
	console.log('В сутках только 24 часа');
};


//урок 4. 2-е задание

mainList.shopGoods.forEach(function(item,i,mainL) {
	alert ("У нас Вы можете купить:" + " " + (i+1) + " " + "-" + " " + item)

});

//урок 4. 3-е задание

var counter = 0;
for (var key in mainList.shopGoods) {
	counter++;
}
	console.log("Наш магазин включает:" + " " + counter + " " + "товара");



/*
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

*/