import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  name: string;
  email: string;
  phone: string;
  message: string;

  onSubmit() {
    // You can implement the form submission logic here
    console.log(
      'Form submitted:',
      this.name,
      this.email,
      this.phone,
      this.message
    );
  }
}
