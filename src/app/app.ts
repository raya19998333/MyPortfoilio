import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Componenets/home/home';
import { Education } from './Componenets/education/education';
import { Projects } from './Componenets/projects/projects';
import { Experience } from './Componenets/experience/experience';
import { Skills } from './Componenets/skills/skills';
import { Footer } from './Componenets/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,Education,Projects,Experience,Skills,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyPortfoilio');
}
