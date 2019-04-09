import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  constructor(public router: Router){ }

  ngOnInit(){}

  toggleButton(wrapper){
    wrapper.querySelector('.circle').classList.toggle("closed");
    document.querySelector('#mobileNavbar').classList.toggle("reveal");
  }

  

  onSubmit(form: NgForm) {
    console.log(form.value.q);
    this.router.navigate(['/search'], { queryParams: { q: form.value.q }});
  }


}
