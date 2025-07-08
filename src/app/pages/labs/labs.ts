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
}
