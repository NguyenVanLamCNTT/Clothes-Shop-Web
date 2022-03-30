import { Injectable } from '@angular/core';
import {StorageInfo} from '../../constance/storage-info';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private cookie: CookieService
  ) { }

  getToken(): string{
    return this.cookie.get(StorageInfo.TOKEN);
  }
  saveToken(token: string): void{
    this.cookie.set(StorageInfo.TOKEN, token);
  }
  getRefreshToken(): string {
    return this.cookie.get(StorageInfo.REFRESH_TOKEN);
  }
  saveRefreshToken(refreshToken: string): void{
    this.cookie.set(StorageInfo.REFRESH_TOKEN, refreshToken);
  }
}
