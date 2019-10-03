import { DefisService } from './../../../global/services/defis.service';
import { Defi } from './../../../global/models/defi.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-defi',
  templateUrl: './detail-defi.component.html',
  styleUrls: ['./detail-defi.component.scss']
})
export class DetailDefiComponent implements OnInit {
id: number;
defi: Defi;

  constructor(private route: ActivatedRoute, private defisService: DefisService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']});
    this.defisService.getDefis().subscribe(defis => {
      this.defi = defis[this.id];
      console.log(this.defi);
    })
  }
}
