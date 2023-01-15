import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})

 
export class PagingComponent implements OnInit {

  data = [];
  dataString = '';

  currentPage = 1;
  recordsPerPage = 2;
  totalPages = 0;
  pageData = [];

  constructor() { }

  ngOnInit(): void {
    this.data = this.getData();
    this.dataString = JSON.stringify(this.data, null, 2);
    this.totalPages = Math.ceil(this.data.length / this.recordsPerPage);

    this.getPageData(this.getData());
  }

  getData = () => {
    return [
      {
        id: 1,
        name: "name-1",
        address: "address-1",
      },
      {
        id: 2,
        name: "name-2",
        address: "address-2",
      },
      {
        id: 3,
        name: "name-3",
        address: "address-3",
      },
      {
        id: 4,
        name: "name-4",
        address: "address-4",
      },
      {
        id: 5,
        name: "name-5",
        address: "address-5",
      },
      {
        id: 6,
        name: "name-6",
        address: "address-6",
      },
      {
        id: 7,
        name: "name-7",
        address: "address-7",
      },
      {
        id: 8,
        name: "name-8",
        address: "address-8",
      },
      {
        id: 9,
        name: "name-9",
        address: "address-9",
      },
    ];
  };

  getPageData(myData) {
    var pageData_ = [];

    let lastIndex = this.currentPage * this.recordsPerPage - 1;
    let beginIndex = lastIndex - this.recordsPerPage + 1;
    for (let r = beginIndex; r <= lastIndex; r++) {
      if (myData[r] !== undefined) pageData_.push(myData[r]);
    }
    this.pageData = [...pageData_];
  }
  nextPageData() {
    if (this.currentPage + 1 > this.totalPages) return;
    else {
      this.currentPage  = this.currentPage + 1;

      var pageData_ = [];
     
      let lastIndex = (this.currentPage * this.recordsPerPage) - 1;
      let beginIndex = lastIndex - this.recordsPerPage + 1;
      for (let r = beginIndex; r <= lastIndex; r++) {
        if (this.data[r] !== undefined) pageData_.push(this.data[r]);
      }
      this.pageData = [...pageData_];
    }
  }

  previousPageData() {
    if (this.currentPage - 1 === 0) return;
    else {
      this.currentPage = this.currentPage - 1;

      var pageData_ = [];
      let lastIndex = (this.currentPage * this.recordsPerPage) - 1;
      let beginIndex = lastIndex - this.recordsPerPage + 1;
      for (let r = beginIndex; r <= lastIndex; r++) {
        if (this.data[r] !== undefined) pageData_.push(this.data[r]);
      }
      this.pageData = [...pageData_];
    }
  }
}
