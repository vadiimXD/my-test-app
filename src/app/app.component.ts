import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test-app';
  colorValue: string = "blue"

  onOutPutFromChild(input: string) {
    console.log(input)
  }
}
