import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  public orders : any[] = null;
  constructor(
    private navCtrl: NavController,
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getOrders().subscribe(
      (data: any)=>{
        this.orders = data;
      }
    )
  }

  goToOrder(order){
    this.navCtrl.navigateRoot(`/orders/${order}`);
  }

}
