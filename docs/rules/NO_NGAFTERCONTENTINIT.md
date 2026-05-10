# no-ngaftercontentinit

Restrict the usage of `ngAfterContentInit`.

Resources and signals are designed to be reactive, so waiting manually for the `ngAfterContentInit` phase is not needed anymore.

## Documentation

- [Signals guide](https://angular.dev/guide/signals)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-ngaftercontentinit": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class ProductsList implements AfterContentInit {
  readonly list = contentChildren.required<readonly ProductItem[]>();
  protected count = 0;

  ngAfterContentInit(): void {
    this.count = this.list().length;
  }
}
```

## ✅ Valid

```typescript
@Component()
export class ProductsList {
  readonly list = contentChildren.required<readonly ProductItem[]>();
  protected readonly count = computed(() => this.list().length);
}
```

[Back to README](../../README.md)
