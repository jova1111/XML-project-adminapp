import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../model/category';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-category',
  templateUrl: './change-category.component.html',
  styleUrls: ['./change-category.component.css']
})
export class ChangeCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }
//  categories : Array<Category> = new Array<Category>();
  categories : any;
  view = 0;
  selected;
  private categoryAdd : Category = new Category();

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
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

