# no-ngafterviewchecked

Restrict the usage of `ngAfterViewChecked`.

Resources and signals are designed to be reactive, so waiting manually for the `ngAfterViewChecked` phase is not needed anymore.

## Documentation

- [Signals guide](https://angular.dev/guide/signals)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-ngafterviewchecked": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class ProductsList implements AfterViewChecked {
  readonly list = viewChildren.required<readonly ProductItem[]>();
  protected count = 0;

  ngAfterViewChecked(): void {
    this.count = this.list().length;
  }
}
```

## ✅ Valid

```typescript
@Component()
export class ProductsList {
  readonly list = viewChildren.required<readonly ProductItem[]>();
  protected readonly count = computed(() => this.list().length);
}
```

[Back to README](../../README.md)
