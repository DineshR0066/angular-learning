import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-practice',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-practice.html',
  styleUrl: './reactive-form-practice.css',
})
export class ReactiveFormPractice implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 1. FormBuilder - creating FormGroup and FormControl with fb.group()
    this.registrationForm = this.fb.group({
      // 2. Validators - built-in and custom
      username: ['', [Validators.required, Validators.minLength(4), this.forbiddenNameValidator(/admin/i)]],
      email: ['', [Validators.required, Validators.email]],
      
      // 3. Nested FormGroup - grouping related fields
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]]
      }),

      // 4. FormArray - dynamic lists of form controls
      phoneNumbers: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')])
      ])
    });

    // 5. valueChanges - reacting to form value changes with RxJS
    this.registrationForm.get('username')?.valueChanges.subscribe(value => {
      console.log('Username changed to:', value);
    });
  }

  // Custom Validator
  forbiddenNameValidator(nameRe: RegExp) {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  // Getter for easy access in template
  get phoneNumbers() {
    return this.registrationForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]));
  }

  removePhoneNumber(index: number) {
    if (this.phoneNumbers.length > 1) {
      this.phoneNumbers.removeAt(index);
    }
  }

  // 6. patchValue / setValue - programmatically updating form values
  fillDefaultValues() {
    // patchValue can update a subset of the form
    this.registrationForm.patchValue({
      username: 'john_doe',
      email: 'john@example.com',
      address: {
        city: 'New York'
      }
    });
  }

  resetForm() {
    this.registrationForm.reset();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      alert('Form submitted successfully! Check console for data.');
    } else {
      console.log('Form is invalid. Cannot submit.');
      // Mark all as touched to display errors
      this.registrationForm.markAllAsTouched();
    }
  }
}
