import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  profile;

  constructor(private auth: Auth){
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
