import { Component, OnInit } from '@angular/core';
import { ApprovedCommentService } from '../../services/approved-comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-comment',
  templateUrl: './approve-comment.component.html',
  styleUrls: ['./approve-comment.component.css']
})
export class ApproveCommentComponent implements OnInit {

  constructor(private approveCommentService: ApprovedCommentService, private router: Router) { }
  comments : any;
  selected;

  ngOnInit() {
    this.approveCommentService.getDisaproveComments().subscribe(
      result => {
        this.comments = result;
      }
    );
  }

  setSelected(comment) {
    this.selected = comment;
  }

  approved(comment) {
    
    this.selected = comment;
    this.approveCommentService.updateComment(this.selected).then(
    (response) => {this.comments[this.selected] = response
      alert("Komentar je odobren")
      this.approveCommentService.getDisaproveComments().subscribe(
        result => {
          this.comments = result;
        }
      );
    },
    (error) => console.log(error) 
    );

  }

}
