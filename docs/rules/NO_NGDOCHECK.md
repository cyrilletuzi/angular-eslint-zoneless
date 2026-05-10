# no-ngdocheck

Restrict the usage of `ngDoCheck`.

Resources and signals are designed to be reactive, so waiting manually for the `ngDoCheck` phase is not needed anymore.

## Documentation

- [Signals guide](https://angular.dev/guide/signals)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-ngdocheck": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class SomeComponent implements DoCheck {
  ngDoCheck(): void {}
}
```

[Back to README](../../README.md)
