let yearOfBirth = prompt("Ваш рік народження: ");
if (yearOfBirth == null) {
  alert("Шкода, що Ви не захотіли ввести свій рік");
} else {
  alert(`Ваш вік: ${2023 - yearOfBirth}`);
}

let city = prompt("Місто, в якому ви живите: ");
switch (city) {
  case null:
    alert("Шкода, що Ви не захотіли ввести своє місто");
    break;
  case "Київ":
    alert("Ти живешь у столиці України");
    break;
  case "Вашингтон":
    alert("Ти живешь у столиці США");
    break;
  case "Лондон":
    alert("Ти живешь у столиці Великобританії");
    break;
  default:
    alert(`Ти живешь у місті ${city}`);
}

let sport = prompt("Ваш улюбленний вид спорту: ");
switch (sport) {
  case null:
    alert("Шкода, що Ви не захотіли ввести свій улюбленний вид спорту");
    break;
  case "Теніс":
    alert("Круто! Хочеш стати як Роджер Федерер?");
    break;
  case "Футбол":
    alert("Круто! Хочеш стати як Неймар?");
    break;
  case "Бокс":
    alert("Круто! Хочеш стати як Мухамед Алі?");
    break;
}