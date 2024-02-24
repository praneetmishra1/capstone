import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private isLoggedIn: boolean = false;

  constructor() {}

  // Method to save token received from login
  saveToken(token: string) {
    //complete this function
   //complete this function
   localStorage.setItem('token', token);
  }
   SetRole(role:any)
  {
   //complete this function
   localStorage.setItem('role', role);
  }
  get getRole ():string|null
  {
   //complete this function
   return localStorage.getItem('role');
  }
  // Method to retrieve login status
  get getLoginStatus(): boolean {
  
     //complete this function
     return !!localStorage.getItem('token');
   
  }
  getToken(): string | null {
 //complete this function
 this.token = localStorage.getItem('token');
 return this.token;
  }
  logout(){
  //complete this function
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  this.token=null;
  this.isLoggedIn=false
   }
}
