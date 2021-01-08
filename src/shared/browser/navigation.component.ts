import {Component, Inject, Input, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from '../../app/modules/popup/pop-up/pop-up.component';
import {CommonService} from '../../app/apiServices/common.service';
import {element} from 'protractor';
import {of} from "rxjs";

@Component({
  selector: 'app-browser',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
  currentPath: string;


  constructor(private router: Router,
              private dialog: MatDialog,
              private commonService: CommonService) {

    this.navLinks = [
      {
        label: 'Accueil',
        path: '/',
        style: 'button-style',
        index: 0
      },
      {
        label: 'Recette',
        subLabel1: 'Ajouter une recette',
        dropDown: 'recipe',
        subLabel2: 'Voir liste des recettes',
        // subPath2: './see_recipes_list',
        style: 'button-style',
        index: 1
      },
      {
        label: 'Magasin',
        subLabel1: 'Ajouter un magasin',
        dropDown: 'shop',
        subLabel2: 'Voir liste des magasins',
        // subPath2: './see_shops_list',
        style: 'button-style',
        index: 2
      },
      {
        label: 'Restaurant',
        subLabel1: 'Ajouter un restaurant',
        dropDown: 'restaurant',
        subLabel2: 'Voir liste des restaurants',
        // subPath2: './see_restaurants_list',
        style: 'button-style',
        index: 3
      },
      {
        label: 'Connexion',
        path: '/login',
        style: 'connexion-button-style',
        index: 4
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => {
        if (tab.path !== undefined && tab.path.charAt(0) === '.'){
          return tab.path;
        } else {
          return {subLabelIndex: tab.subPath, subLabelIndex2: tab.subPath2};
        }
       }));
    });
    this.commonService.setListData(this.navLinks);
  }

  onAdd(event: any): void {
    if (event.target.textContent === 'Ajouter un restaurant'){
      this.commonService.setElement('un restaurant');
    }
    if (event.target.textContent === 'Ajouter un magasin'){
      this.commonService.setElement('un magasin');
    }
    if (event.target.textContent === 'Ajouter une recette'){
      this.commonService.setElement('une recette');
    }
    console.log(event.target);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = '500px';
    dialogConfig.width = '600px';
    this.dialog.open(PopUpComponent, dialogConfig);
  }

  onList(event: any): void {
    console.log(event.target);
    if (event.target.textContent === 'Voir liste des restaurants'){
      this.router.navigate(['/restaurantList']);
    }
    if (event.target.textContent === 'Voir liste des magasins'){
      this.router.navigate(['/storeList']);
    }
    if (event.target.textContent === 'Voir liste des restaurants'){
      this.router.navigate(['/recepeesList']);
    }
  }


}

