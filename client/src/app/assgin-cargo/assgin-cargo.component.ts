import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assgin-cargo',
  templateUrl: './assgin-cargo.component.html',
  styleUrls: ['./assgin-cargo.component.scss']
})

export class AssginCargoComponent {
  
 

  showError:boolean=false;
  errorMessage:any;
  cargList:any=[];
  statusModel: any={};
  showMessage: any;
  responseMessage: any;

  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
  {
  }
  ngOnInit(): void {

  }
  getAssginCargo() {
  //This func gets the cargo that has to assigned
  return this.httpService.getCargo();
  }

  addStatus(cargoId:any, newStatus:any)
  {
  //updates the cargo status
  return this.httpService.updateCargoStatus(cargoId, newStatus);
  }

  assignDriver(driverid: any, cargoId: any)
  {
    //It assigns the driver to respective driver based on cargoID
    return this.httpService.assignDriver(driverid, cargoId)
  }
}
