# no-zonejs-testing-functions

Restrict the usage of zone.js testing functions:
- `fakeAsync()`
- `discardPeriodicTasks()`
- `flush()`
- `flushMicrotasks()`
- `resetFakeAsyncZone()`
- `tick()`
- `waitForAsync()`

These functions are useless and do not work in a zoneless application.

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-zonejs-testing-functions": "error"
  }
}
```

## ❌ Invalid

```typescript
it(`should...`, fakeAsync(() => {}));
```

```typescript
it(`should...`, fakeAsync(() => {
  discardPeriodicTasks();
}));
```

```typescript
it(`should...`, fakeAsync(() => {
  flush();
}));
```

```typescript
it(`should...`, fakeAsync(() => {
  flushMicrotasks();
}));
```

```typescript
beforeEach(() => {
  resetFakeAsyncZone();
});
```

```typescript
it(`should...`, fakeAsync(() => {
  tick();
}));
```

```typescript
it(`should...`, fakeAsync(() => {
  waitForAsync();
}));
```

[Back to README](../../README.md)
