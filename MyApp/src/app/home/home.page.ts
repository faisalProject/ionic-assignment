// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   form = {
//     username: '',
//     password: ''
//   }

//   constructor() {}

// }
import { Component } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users : any;

  constructor(
    private api : ApiServiceService
  ) {}

  ngOnInit(){
    this.GetDataUserDiReqres();
    console.log(this.users);
  }

  GetDataUserDiReqres(){
    this.users = this.api.getUser().subscribe( (res:any) =>{
      this.users = JSON.stringify( res['data'] );
      console.log('Data User ===>'+JSON.stringify( res['data']));
    });
  }

}