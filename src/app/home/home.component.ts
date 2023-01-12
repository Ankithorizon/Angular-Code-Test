import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute)
  { }

  ngOnInit(): void {
  }

  getCodeFor(redirectVal) {
    if (redirectVal == 'counter')
      this.router.navigate(['/counter']);  
    else if (redirectVal == 'remote-api')
      this.router.navigate(['/remote-api']);  
    else if (redirectVal == 'form-submit')
      this.router.navigate(['/form-submit']);  
  }
}
