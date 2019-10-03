import { DefisService } from './../../../../global/services/defis.service';
import { Defi } from './../../../../global/models/defi.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-defi-success',
  templateUrl: './detail-defi-success.component.html',
  styleUrls: ['./detail-defi-success.component.scss']
})
export class DetailDefiSuccessComponent implements OnInit {
  id: number;
  defi: Defi;
  private userData = localStorage.getItem('caeliUserData');
  private
  currentLevel = 0;
  newVariable: any = window.navigator;

  constructor(private route: ActivatedRoute, private defisService: DefisService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']});
    this.defisService.getDefis().subscribe(defis => {
      this.defi = defis[this.id];
      console.log(this.defi);
    })
    this.currentLevel = this.id + 1;
    var newScore = {
      name: JSON.parse(this.userData).name,
      email: JSON.parse(this.userData).email,
      score: JSON.parse(this.userData).score,
      level: this.currentLevel.toString()
    };
    localStorage.setItem('caeliUserData', JSON.stringify(newScore));
  }
  shareIt(){
    if (this.newVariable.share) {
      this.newVariable.share({
        title: this.defi.titre,
        text: this.defi.tooltip,
        url: this.route.url
      })
    }
    else {
      console.log('web share not supported');
    }
  }
}
