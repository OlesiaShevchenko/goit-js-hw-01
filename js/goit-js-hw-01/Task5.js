const delivery = prompt('Укажите страну, куда доставить товар');
let normalizedDelivery = delivery.toLowerCase();

switch (normalizedDelivery) {
  case null:
  case '':
    console.log('Отменено пользователем!');
    break;
  case 'китай':
    console.log(`Доставка в ${delivery} будет стоить 100 кредитов`);
    break;
  case 'чили':
    console.log(`Доставка в ${delivery} будет стоить 250 кредитов`);
    break;
  case 'австралия':
    console.log(`Доставка в ${delivery} будет стоить 170 кредитов`);
    break;
  case 'индия':
    console.log(`Доставка в ${delivery} будет стоить 80 кредитов`);
    break;
  case 'ямайка':
    console.log(`Доставка в ${delivery} будет стоить 120 кредитов`);
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
}
