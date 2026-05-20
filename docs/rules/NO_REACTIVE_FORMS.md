# no-reactive-forms

Restrict the usage of legacy reactive forms (`ReactiveFormsModule`, `FormBuilder`, `FormGroup`, `FormControl`, `FormArray`, `FormRecord` and all their variants), as some parts of them are not reactive in a zoneless application.

Use signals `form()` instead.

## Documentation

- [Signals forms guide](https://angular.dev/essentials/signal-forms)
- [`form()` API reference](https://angular.dev/api/forms/signals/form)

## Configuration

```json
{
  "rules": {
    "angular-eslint-zoneless/no-reactive-forms": "error"
  }
}
```

> [!NOTE]
> This rule is not in a preset yet, as signals forms are not yet stable. They will be in Angular >=22, and when released, this rule will be added to the `recommended` preset.

## ❌ Invalid

```typescript
@Component({
  imports: [ReactiveFormModule],
  template: `
    <form [formGroup]="form">
      <input type="text" [formControl]="nameControl" />
    </form>
  `,
})
export class ProfileForm {
  protected nameControl = new FormControl('');
  protected readonly form = new FormGroup({
    name: nameControl,
  });
}
```

## ✅ Valid

```typescript
@Component({
  imports: [FormRoot, FormField],
  template: `
    <form [formRoot]="form">
      <input type="text" [formField]="form.name" />
    </form>
  `,
})
export class ProfileForm {
  private readonly formModel = signal({
    name: '',
  });
  protected readonly form = form(this.formModel);
}
```

[Back to README](../../README.md)
