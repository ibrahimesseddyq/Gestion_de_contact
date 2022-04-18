import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public currentUser: any = {};
  public parametrageDto: any = {};
  public vCltClient: any = {};
  public prsTicket: any = {};
  public labelList: any = [];
  public vStrStructure: any = {};
  public statistics: any = {};
  public rapportOptions: any={};
  getModuleId() {
    return this.currentUser.cltModuleId;
  }

  getTenantId() {
    return this.currentUser.tenantId;
  }
  
  getStructureId() {
    return this.currentUser.structureId;
  }
  

  getVStrStructure() {
    return this.vStrStructure;
  }

  
  getUser() {
    return this.currentUser;
  }

  getVCltClient() {
    return this.vCltClient;
  }

  getPrsTicket() {
    return this.prsTicket;
  }

  getLabelList() {
    return this.labelList;
  }
  getStructureName() {
    return this.currentUser.structureName;
  }
  getStatistics(){
    return this.statistics;
  }
  getRapportOptions(){
    return this.rapportOptions;
  }
}
