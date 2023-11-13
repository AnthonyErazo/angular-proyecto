import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/authmodels';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public authUser$:Observable<User|null>
  constructor(private authService:AuthService){
    this.authUser$=this.authService.authUser$;
  }
  get username():Observable<string|undefined>{
    return this.authUser$.pipe(
      map((u)=>`${u?.usuario}`)
    );
  }
}
