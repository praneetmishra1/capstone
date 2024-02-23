import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
 
export class HttpService {
 
  public serverName=environment.apiUrl;
 
  constructor(private http: HttpClient) {}
 
  getOrderStatus(cargoId:any):Observable<any> {
    //complete this function
    return this.http.get(this.serverName + '/api/customer/cargo-status?cargoId=' +cargoId);
  }
  updateCargoStatus(newStatus:any,cargoId:any):Observable<any> {
   //complete this function
   return this.http.put<any>(this.serverName+'/api/driver/update-cargo-status?cargoId='+cargoId+'&newStatus='+newStatus,{});
  }
  assignDriver(driverid: any, cargoId: any): Observable<any> {
   //complete this function
   return this.http.post(`${this.serverName}/api/business/assign-cargo?cargoId=${cargoId}&driverId=${driverid}`,{})
  }
 
  getAssignOrders(driverId:any):Observable<any> {
  //complete this function
    return this.http.get(this.serverName+'/api/driver/cargo?driverId='+driverId)
  }
  getCargo():Observable<any> {
   //complete this function
    return this.http.get(`${this.serverName}/api/business/cargo`)
  }
 
  getDrivers():Observable<any> {
    //complete this function
    return this.http.get(`${this.serverName}/api/business/drivers`)
  }
  addCargo(details:any):Observable<any> {
  //complete this function
    return this.http.post(`${this.serverName}/api/business/cargo`, details)
  }


  Login(details:any):Observable<any> {
  //complete this function
    return this.http.post(`${this.serverName}/api/login`, details)
  }
  registerUser(details:any):Observable<any> {
   //complete this function
    return this.http.post(`${this.serverName}/api/register`, details)
  }
}