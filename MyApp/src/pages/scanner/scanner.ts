// import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { IonicPage, NavController, ToastController } from 'ionic-angular';
// import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
// 
// import { User } from '../../providers';
// import { MainPage } from '../';
// 
// @IonicPage()
// @Component({
//   selector: 'page-scanner',
//   templateUrl: 'scanner.html'
// })
// export class ScannerPage {
// 
//   // Our translated text strings
//   private scanErrorString: string;
// 
//   constructor(
//     public navCtrl: NavController,
//     public user: User,
//     public toastCtrl: ToastController,
//     private cameraPreview: CameraPreview,
//     public translateService: TranslateService) {
//     this.translateService.get('SCANNER_ERROR').subscribe((value) => {
//       this.scanErrorString = value;
//     })
// }

// scanner.ts
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
  // styleUrls:['scanner.scss']
})
export class ScannerPage implements OnInit {

  smallPreview: boolean;
  IMAGE_PATH: any;
  colorEffect = 'none';
  setZoom = 1;
  flashMode = 'off';
  isToBack = false;
  constructor(
    private cameraPreview: CameraPreview
  ) { }


  ngOnInit() {
  }

  startCameraAbove() {
    this.cameraPreview.stopCamera().then(() => {
      this.isToBack = false;
      this.cameraPreview.startCamera({ x: 80, y: 450, width: 250, height: 300, toBack: false, previewDrag: true, tapPhoto: true });
    })
  }

  startCameraBelow() {
    this.cameraPreview.stopCamera().then(() => {
      this.isToBack = true;
      this.cameraPreview.startCamera({ x: 0, y: 50, width: window.screen.width, height: window.screen.height, camera: "front", tapPhoto: true, previewDrag: false, toBack: true });
    })
  }


  stopCamera() {
    this.cameraPreview.stopCamera();
  }

  takePicture() {
    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 85
    }).then((imageData) => {
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'assets/img/test.jpg';
    });
  }

  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  show() {
    this.cameraPreview.show();
  }

  hide() {
    this.cameraPreview.hide();
  }

  changeColorEffect() {
    this.cameraPreview.setColorEffect(this.colorEffect);
  }

  changeFlashMode() {
    this.cameraPreview.setFlashMode(this.flashMode);
  }

  changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }

  showSupportedPictureSizes() {
    this.cameraPreview.getSupportedPictureSizes().then((sizes) => {
      console.log(sizes);
    }, (err) => {
      console.log(err);
    });
  }

}
