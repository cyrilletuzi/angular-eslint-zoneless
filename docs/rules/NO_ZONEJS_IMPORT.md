# no-zonejs-import

Restrict the import of `zone.js`.

Note: most of the time, `zone.js` is imported via `angular.json` configuration, and this rule cannot detect that.

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-zonejs-import": "error"
  }
}
```

## ❌ Invalid

```typescript
import 'zone.js';
```

[Back to README](../../README.md)
