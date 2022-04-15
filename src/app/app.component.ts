import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message('Merhaba!', 'Toastr fun!', {
      messageType:ToastrMessageType.Info,
      position: ToastrPosition.TopRight
    });
    toastrService.message('Merhaba!', 'Toastr fun!',{
      messageType:ToastrMessageType.Error,
      position: ToastrPosition.BottomCenter
    });
    toastrService.message('Merhaba!', 'Toastr fun!',{
      messageType:ToastrMessageType.Success,
      position: ToastrPosition.BottomLeft
    });
    toastrService.message('Merhaba!', 'Toastr fun!',{
      messageType:ToastrMessageType.Warning,
      position: ToastrPosition.TopLeft
    });
  } 
}
