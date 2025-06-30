
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, IonFab, IonFabButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonTextarea, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

interface EcoTask {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  date: Date;
  photo?: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, IonFab, IonFabButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonAvatar, IonImg, IonInput, IonTextarea, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class TasksPage implements OnInit {
  tasks: EcoTask[] = [
    {
      id: 1,
      title: 'Reciclar botellas de plástico',
      description: 'Separar y llevar botellas al punto de reciclaje',
      category: 'Reciclaje',
      completed: false,
      date: new Date()
    },
    {
      id: 2,
      title: 'Plantar un árbol',
      description: 'Plantar un árbol en el parque local',
      category: 'Reforestación',
      completed: true,
      date: new Date(Date.now() - 86400000)
    },
    {
      id: 3,
      title: 'Usar bicicleta al trabajo',
      description: 'Ir al trabajo en bicicleta en lugar de carro',
      category: 'Transporte',
      completed: false,
      date: new Date()
    }
  ];

  showAddForm = false;
  newTask = {
    title: '',
    description: '',
    category: 'Reciclaje'
  };

  constructor() { }

  ngOnInit() {}

  async takePicture(task: EcoTask) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      task.photo = image.dataUrl;
      task.completed = true;
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  toggleTask(task: EcoTask) {
    task.completed = !task.completed;
  }

  addTask() {
    if (this.newTask.title.trim()) {
      const task: EcoTask = {
        id: Date.now(),
        title: this.newTask.title,
        description: this.newTask.description,
        category: this.newTask.category,
        completed: false,
        date: new Date()
      };
      
      this.tasks.unshift(task);
      this.newTask = { title: '', description: '', category: 'Reciclaje' };
      this.showAddForm = false;
    }
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Reciclaje': 'success',
      'Reforestación': 'secondary',
      'Transporte': 'tertiary',
      'Energía': 'warning'
    };
    return colors[category] || 'medium';
  }
}
