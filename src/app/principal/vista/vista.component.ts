import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})


export class VistaComponent {


  listado: Users[] = [];
  displayedColumns: string[] = ['id', 'name',"email", 'username'];
  dataSource: any;
  clickedRows = new Set<Users>();

  // ************ //

  constructor(private userService: UserserviceService){}

 
  ngOnInit(){

 
    this.userService.getUsersAll().subscribe({
      next: (UserAll: Users[]) => 
        {
          this.listado = UserAll,
          this.dataSource = this.listado
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }

}
