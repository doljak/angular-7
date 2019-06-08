import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isDisabled:boolean = true;
  serverCreationStatus:string = 'No server was created!';
  serverName:string = '';
  serverCreated:boolean = false;
  servers:array<string> = [
    'Test Server',
    'Test Server 2'
  ]

  constructor() { 
    setTimeout(() => {
      this.isDisabled=false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true; 
    this.servers.push(this.serverName); 
    this.serverCreationStatus = 'Server was created! The Name is ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
