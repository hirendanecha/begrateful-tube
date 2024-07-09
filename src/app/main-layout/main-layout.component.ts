import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  tokenData: any;
  constructor(
  ) {}

  ngOnInit(): void {
    // this.spinner.show();
    // const url = environment.apiUrl + 'login/me';
    // this.commonService
    //   .get(url, {
    //     withCredentials: true,
    //   })
    //   .subscribe({
    //     next: (res) => {
    //       this.spinner.hide();
    //       this.tokenData = { ...res };
    //       const auth = this.tokenData?.user;
    //       const token = this.tokenData?.accessToken;
    //       const isLogin = token && auth ? true : false;
    //       this.authService.setToken(token);
    //       this.shareService.getUserDetails(auth?.profileId);
    //       this.authService.userDetails = auth;
    //       this.authService.token = token;
    //       // if (!isLogin) {
    //       //   location.href = environment?.loginUrl;
    //       // }
    //     },
    //     error: (err) => {
    //       this.spinner.hide();
    //       // window.location.href = environment?.loginUrl;
    //       console.log(err);
    //     },
    //   });
  }
}
