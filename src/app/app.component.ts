import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ]
  tasksCount = 201
  genderCode = 3

  today: number = Date.now()

  company = "Lokalise"
  created_by = $localize`Created by ${this.company}`
  test_AAAAAA = $localize`Test AAAA`;
  test_BBBBB = $localize`Test BBBB`;
  test_CCCC = $localize`:@@unicId:Test changed 111111CCCCCAAAAAAAAAAAAAAAAA`;
  test_DDDD = $localize`:@@unicIdDDDDDD:Test DDDDDD111111111`;
  test_EEEE = $localize`:@@unicIdEEEE:Test EEEEEsdfsdfsdf44444`;

  male() { this.genderCode = 0; }
  female() { this.genderCode = 1; }
  other() { this.genderCode = 2; }
}
