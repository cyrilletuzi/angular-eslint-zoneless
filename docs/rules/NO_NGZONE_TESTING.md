# no-ngzone-testing

Restrict the usage of `fixture.ngZone`.

It is useless and null in a zoneless application.

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-ngzone-testing": "error"
  }
}
```

## ❌ Invalid

```typescript
it('should...', () => {
  const fixture = TestBed.createComponent(SomeComponent);
  fixture.ngZone; 
});
```

[Back to README](../../README.md)
