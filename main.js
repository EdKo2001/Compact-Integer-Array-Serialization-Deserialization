function serializeIntArray(arr) {
    arr.sort((a, b) => a - b); // Сортируем массив для более эффективного RLE

    let serialized = '';
    let count = 1;
    for (let i = 1; i <= arr.length; i++) {
        if (i === arr.length || arr[i] !== arr[i - 1]) {
            serialized += `${arr[i - 1]}x${count}|`;
            count = 1;
        } else {
            count++;
        }
    }

    return serialized;
}

function deserializeIntArray(str) {
    const arr = [];
    const groups = str.split('|').filter(Boolean); // Разбиваем строку по разделителю и удаляем пустые элементы

    for (const group of groups) {
        const [num, count] = group.split('x');
        const parsedNum = parseInt(num, 10);
        const parsedCount = parseInt(count, 10);

        for (let i = 0; i < parsedCount; i++) {
            arr.push(parsedNum);
        }
    }

    return arr;
}

// Пример использования
const originalArray = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 300];
const serialized = serializeIntArray(originalArray);
const deserialized = deserializeIntArray(serialized);

console.log('Original Array:', originalArray);
console.log('Serialized String:', serialized);
console.log('Deserialized Array:', deserialized);
