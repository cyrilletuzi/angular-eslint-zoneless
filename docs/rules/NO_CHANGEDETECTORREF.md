# no-changedetectorref

Restrict the usage of `ChangeDetectorRef`.

With signals, acting explicitly on the change detection is generally not necessary anymore.

## Documentation

- [`ChangeDetectorRef` API reference](https://angular.dev/api/core/ChangeDetectorRef)

## Configuration

This rule is not in the recommended preset, as there are still valid use cases for `ChangeDetectorRef`. So it must be enabled individually:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-changedetectorref": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class SomeComponent {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
}
```

[Back to README](../../README.md)
