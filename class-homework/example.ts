let greeting: string = "hello, typescript";
console.log(greeting);

// not sure why getting error of
// error TS6053: File 'example.ts' not found.
//   The file is in the program because:
//   Root file specified for compilation
// Found 1 error.


//typescript ex 1
// creating and using interfaces
interface Book {
  title: string;
  author: string;
  year: number;
}

const book1: Book = {
  title: "to kill a mockingbird",
  author: "harper lee",
  year: 1960
};

function logBookDetails(book: Book): void {
  console.log(`${book.title} by ${book.author} was published in ${book.year}.`);
}

logBookDetails(book1);

// exercise 2 working with typed functions
function calculateArea(width: number, height: number): number {
  return width * height
}

const rectangleArea = calculateArea(5, 10);
console.log(`the area is: ${rectangleArea}`);

// ex 3 using arrays with typescript
type Movie = {
  title: string;
  year: number;
};

const favoriteMovies: Movie[] = [
  {title: "inception",
    year: 2010},
  {title: "the matrix",
    year: 1999}
];

function addMovie(movie: Movie): void {
  favoriteMovies.push(movie);
 }

addMovie({title: "interstellar", year: 2014});

favoriteMovies.forEach((movie) => {
  console.log(`${movie.title} (${movie.year})`);
});

// ex 4 understanding union types
function formatMessage(value: number | string): string {
  if (typeof value === 'number'){
    return `the number is: ${value}`
  } else if (typeof value === 'string'){
    return `the string is: ${value}}`
  } else return `value is not a number or string`
}

console.log(formatMessage(42));
console.log(formatMessage("hello im a string"));

// ex 5 exploring generics
function wrapInObject<T>(value: T): {data: T} {
  return {data: value};
}

const wrappedString = wrapInObject("typescript is fun");
console.log(wrappedString);

const wrappedNumber = wrapInObject(100);
console.log(wrappedNumber);


