var nameList = [
    'Sanket', 'Rahul', 'Vishal', 'Vinayak',
    'Priya', 'Santosh', 'Shital', 'Pooja', 'Samiksha', 'Ram',
    'Krushna', 'Rutik', 'Virat', 'Samanta', 'Mr.White', 'Jessi', 'Hank',
    'Merry', 'Avadh', 'Gold', 'Demon', 'Rekha', 'Virat', 'Ms',
    'Rakesh', 'Sagar', 'Kuldeep', 'Mahesh', 'Sachin', 'John', 'Sehwag',
    'Pruthi', 'Virendra', 'Abhishek', 'Narendra', 'Namste', 'David', 'Raksha',
    'Omkar', 'Vinay', 'Pankaj', 'Shubham', 'Shashank', 'Suraj', 'Srushti',
    'Nana', 'Savita', 'Ramesh', 'Shreyansh', 'Saurabh', 'Mangal', 'Kavita',
    'Rohit', 'Salman', 'Swapnil', 'Sumedha', 'Kaveri', 'Siddhesh', 'Sammy',
    'Vickey', 'Eamma', 'Vina', 'Radhe', 'Radha', 'Pranjal', 'Prathamesh',
    'Ashutosh', 'Sita', 'Reema', 'Manu', 'Manoj', 'Sakshi', 'Sandesh', 'Ravindra',
    'Vanita', 'Sahil', 'Rushi', 'Rakshit', 'Mohit', 'Kishor', 'Lord', 'King',
    'Vamika', 'Durvesh', 'Ajinkya', 'Satyam', 'Satyajit', 'Malhar', 'Adarsh', 'Noob',
    'Aditya', 'Kanif', 'Kamishka', 'Arbaj', 'Shehal', 'Ashwini', 'Aditi', 'Shrirang',
    'Rutuja', 'Yash', 'Sanjay', 'Namrta', 'Dipika', 'Shweta', 'Ramesh', 'Virat',
    'Virat', 'Amol', 'Utkarsh', 'Akshay', 'Bunty', 'Aman', 'Love', 'Drarka',
    'Supriya', 'Prachi', 'Shivani', 'Sahil', 'Shivam', 'Ruturaj', 'Ravi', 'Vijay',
  ];
 export function generateRandomName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
       return finalName;
      };
 
 
 
 
 
 
 export function makeidRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}