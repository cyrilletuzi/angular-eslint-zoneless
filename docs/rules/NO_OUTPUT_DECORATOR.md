# no-output-decorator

Restrict the usage of `@Output()`.

Use the `output()` version instead

Note: technically, this rule is not related to signals and zoneless, but is for consistency with `input()`.

## Documentation

- [Outputs guide](https://angular.dev/guide/components/outputs)
- [`output()` API reference](https://angular.dev/api/core/output)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-output-decorator": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class SomeComponent {
  @Output() readonly selected = new EventEmitter<boolean>();
}
```

## ✅ Valid

```typescript
@Component()
export class SomeComponent {
  readonly selected = output<boolean>();
}
```

[Back to README](../../README.md)
