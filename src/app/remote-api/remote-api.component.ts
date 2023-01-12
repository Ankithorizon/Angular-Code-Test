import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LocalDataService } from '../services/local-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-remote-api',
  templateUrl: './remote-api.component.html',
  styleUrls: ['./remote-api.component.css']
})
export class RemoteApiComponent implements OnInit {

  randomUser = {
    info: {},
    results : []
  };
  randomUserString = null;

  // ?page=2
  pageData = {
    info: [],
    results: []
  };
  nextPage = 1;
  data = true;

  constructor(
    public localDataService: LocalDataService,
    public dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAnyRandomUser();

    this.nextPageDataFromRemoteApi();
  }

  getAnyRandomUser() {
      this.dataService.getAnyRandomUser()
      .subscribe(
        data => {        
          this.randomUser = data;
          this.randomUserString = JSON.stringify(data, null, 2);
        },
        error => {
          console.log(error);
        });
  }

  displayName(randomUserName) {
    return randomUserName.title + ' ' + randomUserName.first + ', ' + randomUserName.last;    
  }

  nextUserData() {
    this.nextPageDataFromRemoteApi();
  }
  nextPageDataFromRemoteApi() {
    if (this.nextPage > 10){
      this.data = false;
      return;
    }
      this.dataService.nextPageDataFromRemoteApi(this.nextPage)
      .subscribe(
        data => {        
          this.pageData = data;
          this.nextPage += 1;

          console.log(this.pageData);
        },
        error => {
          console.log(error);
        });
  }

}
