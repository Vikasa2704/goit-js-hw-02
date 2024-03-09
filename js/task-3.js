function getElementWidth(content, padding, border) {
  // Перетворюємо рядки в числа, видаляючи "px" та враховуючи box-sizing: border-box
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Розрахунок загальної ширини елемента
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
