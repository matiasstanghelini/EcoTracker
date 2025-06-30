
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonChip } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface EcoLocation {
  id: number;
  name: string;
  type: string;
  address: string;
  description: string;
  distance: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonChip, CommonModule]
})
export class MapPage implements OnInit {
  ecoLocations: EcoLocation[] = [
    {
      id: 1,
      name: 'Centro de Reciclaje Municipal',
      type: 'Reciclaje',
      address: 'Av. Principal 123',
      description: 'Acepta plásticos, papel, vidrio y metal',
      distance: '0.8 km'
    },
    {
      id: 2,
      name: 'Parque Ecológico Central',
      type: 'Reforestación',
      address: 'Calle Verde 456',
      description: 'Área para plantar árboles y actividades ambientales',
      distance: '1.2 km'
    },
    {
      id: 3,
      name: 'Estación de Bicicletas Públicas',
      type: 'Transporte',
      address: 'Plaza Mayor',
      description: 'Alquiler de bicicletas ecológicas',
      distance: '0.5 km'
    },
    {
      id: 4,
      name: 'Punto de Compostaje Comunitario',
      type: 'Compostaje',
      address: 'Mercado Local',
      description: 'Deposita tus residuos orgánicos aquí',
      distance: '1.5 km'
    }
  ];

  constructor() { }

  ngOnInit() {}

  getLocationIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'Reciclaje': 'leaf',
      'Reforestación': 'tree',
      'Transporte': 'bicycle',
      'Compostaje': 'flower'
    };
    return icons[type] || 'location';
  }

  getLocationColor(type: string): string {
    const colors: { [key: string]: string } = {
      'Reciclaje': 'success',
      'Reforestación': 'secondary',
      'Transporte': 'tertiary',
      'Compostaje': 'warning'
    };
    return colors[type] || 'medium';
  }
}
