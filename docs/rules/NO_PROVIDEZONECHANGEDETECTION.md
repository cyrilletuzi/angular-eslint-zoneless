# no-providezonechangedetection

Restrict the usage of `provideZoneChangeDetection()`.

## Documentation

- [Signals guide](https://angular.dev/guide/signals)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-providezonechangedetection": "error"
  }
}
```

## ❌ Invalid

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
  ],
};
```

[Back to README](../../README.md)
