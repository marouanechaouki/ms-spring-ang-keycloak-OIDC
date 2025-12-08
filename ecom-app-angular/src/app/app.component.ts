import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'ecom-app-angular';
  public profile! : KeycloakProfile;
  constructor(public keycloakService : KeycloakService) {
  }

  async ngOnInit() {
    try {
      // loadUserProfile après init réussi
      this.profile = await this.keycloakService.loadUserProfile();
    } catch (error) {
      console.error('Erreur Keycloak :', error);
    }
  }

  async handleLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  handleLogout(){
    this.keycloakService.logout(window.location.origin);
  }
}
