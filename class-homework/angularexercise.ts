interface User  {
    id: number;
    name: string;
    email: string;
  };
  
  const users: User[] = [
    {id:1, name: "alice", email: "alice@example.com"},
    {id:2, name: "bob", email: "bob@example.com"}
  ]
  
  function findUserByid(users: User[], id: number): User | undefined {
    return users.find(users => users.id === id);
  }
  
  console.log(findUserByid(users, 1));
  
  //ex 2 validating input with type guards
  function isNumber(value: any) {
    if (typeof value === 'number') {
      return `${value} is a number`
    } else {
      return `${value} is not a number`
    }
  }
  
  const testValue = 42;
  console.log(isNumber(testValue));
  
  const testWord = "hello";
  console.log(isNumber(testWord));
  
  //not sure if ex 2 is right
  
  // ex 3 exploring enum
  enum TaskStatus {NotStarted, InProgess, Completed}
  
  const currentStatus = TaskStatus.NotStarted;
  
  function updateStatus(status: TaskStatus) {
    if (status === TaskStatus.NotStarted) {
      console.log("task is not started yer");
    } else if (status === TaskStatus.InProgess) {
      console.log("task is in progress");
    } else if (status === TaskStatus.Completed) {
      console.log("task is completed");
    } else {
      console.log("it hard to say, bro");
  }}
  
  updateStatus(TaskStatus.InProgess);
  updateStatus(TaskStatus.Completed);
  
  //ex 4 leveraging type alias
  type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  const products: Product[] =[
    {id: 1, name: "laptop", price: 1000},
    {id: 2, name: "mouse", price: 50},
    {id:3, name: "keyboard", price: 100}
  ]
  
  function calculateTotalCost(products: Product[]) {
    let sum = 0;
    for (let i = 0; i < products.length; i++){
      sum += products[i].price;
    }
    return sum;
  }
  
  calculateTotalCost(products);
  
  // ex 5 type assertion practice
  const unknownInput = '12345' as string;
  
  function getLength(input: string) {
    return input.length
  }
  
  getLength(unknownInput);
  
  // ex 6 working with optional properties
  interface Car {
    make: string;
    model: string;
    year: number;
    hasSunRoof: boolean;
  };
  
  const car1 = {make: 'honda', model: 'civic', year: 2007, hasSunRoof: true};
  
  const car2 = {make: 'honda', model: 'accord', year: 2017, hasSunRoof: false};
  
  function describeCar(car: Car){
    if(car.hasSunRoof === true){
      return `the car is a ${car.year} ${car.make} ${car.model} and has a sun roof`
    } else{
    return `the car is a ${car.year} ${car.make} ${car.model} and does NOT have a sunroof`}
  }
  
  describeCar(car1);
  describeCar(car2);
  