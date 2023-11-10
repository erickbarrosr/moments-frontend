import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Input() sendButton!: string;

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }

  submit() {
    console.log('Enviou o formulário...');
  }
}
