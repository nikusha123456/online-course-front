import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-user-forms',
  templateUrl: './edit-user-forms.component.html',
  styleUrls: ['./edit-user-forms.component.css'],
})
export class EditUserFormsComponent {
  @Input() username!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{
    username: string;
    description: string;
    imageUrl: string;
  }>();

  submitForm() {
    this.save.emit({
      username: this.username,
      description: this.description,
      imageUrl: this.imageUrl,
    });
  }
}
