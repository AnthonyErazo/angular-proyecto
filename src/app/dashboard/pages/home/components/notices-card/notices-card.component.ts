import { Component, OnDestroy } from '@angular/core';
import { HomeService } from '../../home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notices-card',
  templateUrl: './notices-card.component.html',
  styleUrls: ['./notices-card.component.scss']
})
export class NoticesCardComponent implements OnDestroy{
  notices:any[]=[];
  loading = true;
  private dataSubscription: Subscription = new Subscription();
  constructor(private homeService:HomeService){
    this.dataSubscription =this.homeService.getNotices().subscribe({
      next:(notices)=>{
        this.notices=notices;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar los datos: ', error);
        this.loading = false;
      }
    })
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
