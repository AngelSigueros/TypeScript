enum Color {
Red,
Green,
Blue
}

let favoriteColor: Color = Color.Green;
console.log('Favorite color:', Color[favoriteColor]);

// Tuple
let carInfo: [string, number] = ['Tesla', 2021];
console.log('Car info:', carInfo);

// Any
let randomValue: any = 'A string';
randomValue = 42;
randomValue = true;
console.log('Random value:', randomValue);