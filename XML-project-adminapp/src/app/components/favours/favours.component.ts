import { Component, OnInit } from '@angular/core';
import { FavourService } from '../../services/favour.service';
import { Favour } from '../../model/favour';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favours',
  templateUrl: './favours.component.html',
  styleUrls: ['./favours.component.css']
})
export class FavoursComponent implements OnInit {

  constructor(private categoryService: FavourService, private router: Router) { }
//  categories : Array<Category> = new Array<Category>();
  categories : any;
  view = 0;
  selected;
  private categoryAdd : Favour = new Favour();

  ngOnInit() {
    this.categoryService.getFavours().subscribe(
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
      (response) => {this.categories.push(response)
        alert("Uspesno ste dodali uslugu semstaja")
      },
      (error) =>  alert("Vec postoji usluga sa ovim nazivom") 
    );
    this.view = 0;
  }

  delete(category) {
    
    this.selected = category;
    this.categoryService.deleteCategory(this.selected).then(
      (response) => {
        this.categories.splice(this.categories.indexOf(this.selected),1)    
        alert("Uspesno ste izbrisali uslugu smestaja")
      },
    (error) => console.log(error) 
    );
    this.view = 0;
  }

}


