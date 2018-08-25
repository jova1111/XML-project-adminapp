import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../model/category';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { componentRefresh } from '@angular/core/src/render3/instructions';

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
  index;
  private categoryAdd : Category = new Category();

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      result => {
        this.categories = result;
        console.log(this.categories)
      }
    );
    
  }

  setSelected(category) {
    this.selected = category;
    console.log(category);
    $('#name').val(this.selected.categoryName);
  }

  showView(number) {
    this.view = number;
  }

  onSubmit() {
    this.selected.categoryName = $('#name').val();
    this.categoryService.updateCategory(this.selected).then(
      (response) => alert("Uspesno izmenjana kategorija"),
      (error) => alert("Kategorija vec postoji") 
    );
    this.view = 0;
  }

  add() {
    
    this.categoryAdd.categoryName = $('#addname').val();
    this.categoryService.addCategory(this.categoryAdd).then(
      (response) => {this.categories.push(response)
        alert("Uspesno ste dodali kategoriju")
      },
      (error) =>  alert("Kategorija sa ovim imenom vec postoji")
    );
    this.view = 0;
    
  }

  delete(category) {
    
    this.selected = category;
    this.categoryService.deleteCategory(this.selected).then(
    (response) => {
      this.categories.splice(this.categories.indexOf(this.selected),1)    
      alert("Uspesno ste izbrisali kategoriju")
    },
    (error) => console.log(error) 
    );
    this.view = 0;
  }

}

