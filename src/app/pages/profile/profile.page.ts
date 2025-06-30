
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon, IonProgressBar, IonList, IonAvatar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon, IonProgressBar, IonList, IonAvatar, CommonModule]
})
export class ProfilePage implements OnInit {
  user = {
    name: 'Usuario Eco',
    email: 'usuario@ecotracker.com',
    level: 3,
    totalTasks: 15,
    completedTasks: 12,
    ecoPoints: 240
  };

  achievements = [
    { name: 'Primer Reciclaje', icon: 'leaf', earned: true },
    { name: 'Plantador de Árboles', icon: 'tree', earned: true },
    { name: 'Ciclista Urbano', icon: 'bicycle', earned: false },
    { name: 'Eco Warrior', icon: 'shield', earned: false }
  ];

  constructor() { }

  ngOnInit() {}

  get completionPercentage(): number {
    return (this.user.completedTasks / this.user.totalTasks) * 100;
  }
}
