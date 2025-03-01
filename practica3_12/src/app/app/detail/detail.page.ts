import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detail: any;
  numero?: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.detail = JSON.parse(params["detail"]);
      this.numero = params["numero"];
      console.log(this.detail);
    });
  }

  ngOnInit() {
    console.log(this.detail);
  }

}
