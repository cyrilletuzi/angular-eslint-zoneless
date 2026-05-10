# no-ngzone

Restrict the usage of `NgZone`.

It is useless and does not work in a zoneless application.

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-ngzone": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class SomeComponent {
  private readonly ngZone = inject(NgZone);
}
```

[Back to README](../../README.md)
