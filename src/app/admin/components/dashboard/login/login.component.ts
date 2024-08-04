import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from '../../../../services/login/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,MatButtonModule, MatDividerModule, MatIconModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required]);

  errorMessage: string = '';
  hide = true;

  onLogin() {
    if (this.email.invalid || this.password.invalid) {
      this.errorMessage = 'Please enter a valid email and password.';
      return;
    }

    const loginObj = {
      userMail: this.email.value,
      password: this.password.value
    };

    this.auth.login(loginObj).subscribe(
      response => {
        console.log('Login successful');
        this.router.navigate(['admin/products']);
      },
      error => {
        console.log('Login failed');
        this.errorMessage = 'Invalid email or password.';
      }
    );
  }

  constructor(private auth: LoginService, private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges,)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Please enter a valid email address.';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Please enter a valid email address';
    } else {
      this.errorMessage = '';
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
