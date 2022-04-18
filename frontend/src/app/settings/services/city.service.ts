import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
url="";
  constructor(private http: HttpClient) { }

  modal$=new Subject();
  modalService=this.modal$.asObservable();
  viewDetails$=new Subject();
  viewService=this.modal$.asObservable();
  delete$=new Subject();
  deleteService=this.modal$.asObservable();
  addCityTotable$=new Subject();
  addCityTotable=this.addCityTotable$.asObservable();
  deleteCityTotable$=new Subject();
  deleteCityTotable=this.addCityTotable$.asObservable();

  addCityTotbl(city:any){
    this.addCityTotable$.next(city)
  }
  deleteCityTotbl(city:any){
    this.deleteCityTotable$.next(city)
  }
emitModal(content:any){
    this.modal$.next(content);
  }
  emitViewModal(content:any){
    this.viewDetails$.next(content);
  }
  deleteModalCity(id:number){
    this.delete$.next(id);

  }
getCities(id:any):any{
    return this.http.get(environment.apiAuthUrl+"/contacts?id="+id);
}
postCity(data:any){
   return this.http.post(environment.apiAuthUrl+this.url+"/contacts",data);

}
updateCity(id:number,data:any){
  console.log(environment.apiAuthUrl+this.url+'/contacts?id='+id);
  return this.http.put(environment.apiAuthUrl+this.url+'/contacts?id='+id,data);
}
deleteCity(id:number){
  return this.http.get(environment.apiAuthUrl+this.url+'/deletecontact?id='+id);

}
}
