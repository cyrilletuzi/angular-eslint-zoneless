# no-input-decorator

Restrict the usage of `@Input()`.

Use the `ìnput()` signal version instead.

## Documentation

- [Inputs guide](https://angular.dev/guide/components/inputs)
- [`input()` API reference](https://angular.dev/api/core/input)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-input-decorator": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component()
export class SomeComponent {
  @Input() option = '';
}
```

```typescript
@Component()
export class SomeComponent {
  @Input({ required: true }) option!: string;
}
```

## ✅ Valid

```typescript
@Component()
export class SomeComponent {
  readonly option = input('');
}
```

```typescript
@Component()
export class SomeComponent {
  readonly option = input.required<string>();
}
```

[Back to README](../../README.md)
