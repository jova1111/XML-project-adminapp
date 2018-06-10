import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { Type } from '../../model/type';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-type',
  templateUrl: './change-type.component.html',
  styleUrls: ['./change-type.component.css']
})
export class ChangeTypeComponent implements OnInit {

  constructor(private categoryService: TypeService, private router: Router) { }
//  categories : Array<Category> = new Array<Category>();
  categories : any;
  view = 0;
  selected;
  private categoryAdd : Type = new Type();

  ngOnInit() {
    this.categoryService.getTypes().subscribe(
      result => {
        this.categories = result;
        console.log(this.categories);
      }
    );
  }

  setSelected(category) {
    this.selected = category;
    console.log(category);
    $('#name').val(this.selected.name);
  }

  showView(number) {
    console.log(number);
    this.view = number;
  }

  onSubmit() {
    this.selected.name = $('#name').val();
    this.categoryService.updateCategory(this.selected).then(
      (response) => console.log(response),
      (error) => console.log(error) 
    );
    this.view = 0;
  }

  add() {
    
    this.categoryAdd.name = $('#addname').val();
    this.categoryService.updateCategory(this.categoryAdd).then(
      (response) => console.log(response),
      (error) => console.log(error) 
    );
    this.view = 0;
    this.router.navigateByUrl('/home');
  }

  delete(category) {
    
    this.selected = category;
    this.categoryService.deleteCategory(this.selected).then(
    (response) => console.log(response),
    (error) => console.log(error) 
    );
    this.view = 0;
    this.router.navigateByUrl('/home');

  }

}

