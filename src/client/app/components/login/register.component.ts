import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { webService } from '../../web.service';

@Component({
    moduleId: module.id,
    selector: 'vs-register',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent {
    
      constructor(private webService: webService){}
    
      async ngOnInit(){
        var response = await this.webService.getMessages();
        console.log(response.json() );
      }
    
      user = [{name: 'Gaurav',email:'abc@xyz.com',country:'Canada',password:'1234'},
              {name: 'Gaurav1',email:'abc1@xyz.com',country:'Canada',password:'1234'}];
    }