import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDetails: any;
  apiUrl = environment.apiUrl + 'customers/logout';
  userMenusOverlayDialog: any;
  channelList: any = [];

  constructor(
    private offcanvasService: NgbOffcanvas,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  isUserMediaApproved(): boolean {
    return this.userDetails?.MediaApproved === 1;
  }

  // openVideoUploadPopUp(): void {
  //   const modalRef = this.modalService.open(VideoPostModalComponent, {
  //     centered: true,
  //     size: 'lg',
  //   });
  //   modalRef.componentInstance.title = `Upload Video`;
  //   modalRef.componentInstance.confirmButtonLabel = 'Upload Video';
  //   modalRef.componentInstance.cancelButtonLabel = 'Cancel';
  //   modalRef.result.then((res) => {
  //     console.log(res);
  //   });
  // }
}
