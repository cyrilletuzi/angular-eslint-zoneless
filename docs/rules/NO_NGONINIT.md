# no-ngoninit

Restrict the usage of `ngOnInit`.

Resources and signals are designed to be reactive, so waiting manually for the `ngOnInit` phase is not needed anymore.

## Documentation

- [Signals guide](https://angular.dev/guide/signals)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-ngoninit": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class ProductPage implements OnInit {
  readonly id = input.required<number>();

  ngOnInit(): void {
    const productApi = inject(ProductApi);
    productApi.getProduct(this.id()).subscribe();
  }
}
```

```typescript
@Component()
export class ProductsList implements OnInit {
  readonly list = input.required<readonly Product[]>();
  protected count = 0;

  ngOnInit(): void {
    this.count = this.list().length;
  }
}
```

## ✅ Valid

```typescript
@Component()
export class ProductPage {
  readonly id = input.required<number>();

  constructor() {
    const productApi = inject(ProductApi);
    rxResource({
      params: () => this.id(),
      stream: ({ params }) => productApi.getProduct(params),
    });
  }
}
```

```typescript
@Component()
export class ProductsList {
  readonly list = input.required<readonly Product[]>();
  protected readonly count = computed(() => this.list().length);
}
```

[Back to README](../../README.md)
