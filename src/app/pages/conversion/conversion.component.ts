import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  inputValue: number|null = 0;
  fromUnit: string = '';
  toUnit: string = '';
  conversionResult: string = '';

  constructor() {
    this.convert(); // Anropar convert vid initialisering
  }

// Lägg till en mapping mellan från-enheter och till-enheter
unitMapping: { [key: string]: string } = {
  meters: 'feet',
  feet: 'meters',
  celsius: 'fahrenheit',
  fahrenheit: 'celsius',
};

// Använd denna funktion för att uppdatera till-enheten när från-enheten ändras
updateToUnit() {
  this.toUnit = this.unitMapping[this.fromUnit];
  this.convert();
}



  handleInputChange(newValue: string) {
    // Kontrollera om newValue inte är en tom sträng
    if (newValue !== '') {
      this.inputValue = parseFloat(newValue);
    this.convert();}
  }
  
  convert() {
    // Om inputValue är null (eller annat värde som indikerar tomt), gör ingenting
    if (this.inputValue === null || !this.fromUnit || !this.toUnit) {
      this.conversionResult = '';
      return;
    }
/*    if (this.fromUnit === this.toUnit) {
      this.conversionResult = 'Both units are the same!';
      return;
    }*/

if(this.inputValue.toString() === 'NaN') { // Kontrollera om inputValue är NaN händer om man raderar allt i inputfältet
  this.conversionResult = 'Please enter a valid number'; 
  return;
}


    const conversionKey = `${this.fromUnit} to ${this.toUnit}`;
    const conversions: { [key: string]: (input: number) => string } = {
      'meters to feet': input => {
        const result = (input * 3.28084).toFixed(2);
        return result + (result === "1.00" ? ' foot' : ' feet');
      },
      'feet to meters': input => {
        const result = (input / 3.28084).toFixed(2);
        return result + (result === "1.00" ? ' meter' : ' meters');
      },
      'celsius to fahrenheit': input => ((input * 9/5) + 32).toFixed(2) + '°F',
      'fahrenheit to celsius': input => ((input - 32) * 5/9).toFixed(2) + '°C',
    };
    const conversionFunction = conversions[conversionKey as keyof typeof conversions];
    if (conversionFunction) {
      const result = conversionFunction(this.inputValue);
      this.conversionResult = `Result: ${result}`;
    } else {
      this.conversionResult = 'Conversion not supported.';
    }
  }
  
}

