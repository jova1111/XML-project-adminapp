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
    $('#name').val(this.selected.typeName);
  }

  showView(number) {
    console.log(number);
    this.view = number;
  }

  onSubmit() {
    this.selected.typeName = $('#name').val();
    this.categoryService.updateCategory(this.selected).then(
      (response) => console.log(response),
      (error) => console.log(error) 
    );
    this.view = 0;
  }

  add() {
    
    this.categoryAdd.typeName = $('#addname').val();
    this.categoryService.updateCategory(this.categoryAdd).then(
      (response) => {this.categories.push(response)
        alert("Uspesno ste dodali tip smestaja")
      },
      (error) => console.log(error) 
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

