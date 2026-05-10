# no-detectchanges-testing

Restrict the usage of `fixture.detectChanges`.

Use `await fixture.whenStable()` instead.

## Documentation

- [`ComponentFixture.whenStable()` API reference](https://angular.dev/api/core/testing/ComponentFixture#whenStable)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-detectchanges-testing": "error"
  }
}
```

## ❌ Invalid

```typescript
it('should...', () => {
  const fixture = TestBed.createComponent(SomeComponent);
  fixture.detectChanges(); 
});
```

## ✅ Valid

```typescript
it('should...', async () => {
  const fixture = TestBed.createComponent(SomeComponent);
  await fixture.whenStable(); 
});
```

[Back to README](../../README.md)
