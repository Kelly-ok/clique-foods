import {} from "expo-location";
//Category

export interface Category {
  title: String;
  icon: String;
}

// Food Model
export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  image: [string];
}

// Restaurant Model
export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  images: string;
  food: [FoodModel];
}

// FoodAvailability
export interface FoodAvailability {
  categories: [Category];
  restaurants: [Restaurant];
  foods: [FoodModel];
}

// User Model
export interface UserModel {
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

//user state model
export interface UserState {
  user: UserModel;

  error: string | undefined;
}
