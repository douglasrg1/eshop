import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SecurityUtil } from 'src/app/utils/security.util';
import { StatusUtil } from 'src/app/utils/status.uitl';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.page.html',
  styleUrls: ['./orders-details.page.scss'],
})
export class OrdersDetailsPage implements OnInit {

  public order = null;

  constructor(
    private route: ActivatedRoute,
    private service: DataService
  ) { }

  ngOnInit() {
    const number = this.route.snapshot.paramMap.get('number');
    this.service.getOrder(number).subscribe(
      (data: any)=>{
        this.order = data;
      }
    )
  }

  isManager(): boolean{
    return SecurityUtil.isInRole('manager');
  }
  translateOrderStatus(status: string): string{
    return StatusUtil.Convert(status);
  }

}
