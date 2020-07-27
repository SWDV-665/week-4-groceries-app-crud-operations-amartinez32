import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List";

  constructor(public navCtrl: NavController, public toastController: ToastController,public alertController: AlertController,public dataService:GroceriesServiceService,public inputDialogService: InputDialogService) {

  }
  loadItems(){
    return this.dataService.getItems();
  }
  async removeItem(item,index){
    const toast = await this.toastController.create({
      message: 'Removing Item...',
      duration: 1000
    });
    toast.present();
    this.dataService.removeItem(index);
   
  }
  async editItem(item,index){
    const toast = await this.toastController.create({
      message: 'Editing Item',
      duration: 1000
    });
    toast.present();
    this.inputDialogService.showPrompt(item,index);

  }
  addItem(){
    console.log("Add Item");
    this.inputDialogService.showPrompt();
  }
 

  
}