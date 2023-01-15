import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LocalDataService } from '../services/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {

  users = [];
  selectedUser = null;
 
  constructor(
    public localDataService: LocalDataService,
    public dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
      this.dataService.getUsers()
      .subscribe(
        data => {        
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getSelectedUser(selectedUser) {
    this.selectedUser = selectedUser;
  }
  updateNameAndParentComponent(updatedNameValue: string) {
    console.log("master is called from child", updatedNameValue);

    let updateUser = this.users.find(this.findIndexToUpdate, this.selectedUser.name);

    let index = this.users.indexOf(updateUser);

    this.users[index].name = updatedNameValue;
  }
  findIndexToUpdate(updatedUser) { 
    return updatedUser.name === this;
  }
  
}
