import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
    welcome = 'Hola hugo'
    tasks = [
    'Instalar Angular Cli',
    'Crear proyecto',
    'Crear componentes'
  ]
  name = 'Hugo Ponce'
  age = 30
  disabled = true
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Hugo Ponce',
    age: 30,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  }
}
