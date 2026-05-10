# no-content-decorator

Restrict the usage of `@ContentChild()` and `@ContentChildren()`.

Use the `contentChild()` and `contentChildren()` signal versions instead.

## Documentation

- [`contentChild()` API reference](https://angular.dev/api/core/contentChild)
- [`contentChildren()` API reference](https://angular.dev/api/core/contentChildren)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-content-decorator": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class ProductsPage {
  @ContentChild(Product) product?: Product;
}
```

```typescript
@Component()
export class ProductsPage {
  @ContentChild(Product) product!: Product;
}
```

```typescript
@Component()
export class SomeComponent {
  @ContentChildren(Product) products!: QueryList<Product>;
}
```

## ✅ Valid

```typescript
@Component()
export class ProductsPage {
  readonly product = contentChild(Product);
}
```

```typescript
@Component()
export class ProductsPage {
  readonly product = contentChild.required(Product);
}
```

```typescript
@Component()
export class ProductsPage {
  readonly products = contentChildren(Product);
}
```

[Back to README](../../README.md)
