import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Testserver";
  serverCreated = false;
  clickMade: number[] = [];
  servers = ['TestServer', 'TestServer2']
  password = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);

  }



  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    
  }
  
  showPassword(){
    this.password = !this.password;
    this.clickMade.push(this.clickMade.length + 1);
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
