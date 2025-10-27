import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {} from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';

@Component({
  selector: 'app-root',
  imports: [CurrencyConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 amount=10;

}
