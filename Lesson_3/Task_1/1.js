let degree_cel = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Градусы Цельсия: ${degree_cel}\nГрадусы Фаренгейта: ${((9 / 5) * degree_cel + 32).toFixed(2)}`)