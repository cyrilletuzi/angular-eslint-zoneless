# no-directive-writable-property

Restrict the usage of writable public and protected properties in components and directives.

In components and directives, a public or protected property can be binded to the UI. And in a zoneless application, mutating it will not update the UI anymore. So:
- if it is indeed used in the UI, mark it as `readonly` and use signals
- if it is only a property for the class itself, mark it as private (note: if you need to use it in tests, TypeScript allows `componentInstance['privateProperty']`)

## Documentation

- [Signals guide](https://angular.dev/guide/signals)

## Configuration

- in the recommended preset (see the [README](../../README.md) for the configuration)
- or just this rule:
```json
{
  "rules": {
    "angular-eslint-zoneless/no-directive-writable-property": "error"
  }
}
```

## ❌ Invalid

```typescript
@Component({
  template: `{{ name }}`,
})
export class Profile {
  name = 'Elmo';

  change(): void {
    this.name = 'Cookie Monster';
  }
}
```

```typescript
@Component({
  template: `{{ name }}`,
})
export class Profile {
  public name = 'Elmo';

  change(): void {
    this.name = 'Cookie Monster';
  }
}
```

```typescript
@Component({
  template: `{{ name }}`,
})
export class Profile {
  protected name = 'Elmo';

  change(): void {
    this.name = 'Cookie Monster';
  }
}
```

```typescript
@Directive()
export class Example {
  name = 'Elmo';

  change(): void {
    this.name = 'Cookie Monster';
  }
}
```

## ✅ Valid

```typescript
@Component({
  template: `{{ name() }}`,
})
export class Profile {
  readonly name = signal('Elmo');

  change(): void {
    this.name.set('Cookie Monster');
  }
}
```

```typescript
@Component({
  template: `{{ name() }}`,
})
export class Profile {
  public readonly name = signal('Elmo');

  change(): void {
    this.name.set('Cookie Monster');
  }
}
```

```typescript
@Component({
  template: `{{ name() }}`,
})
export class Profile {
  protected readonly name = signal('Elmo');

  change(): void {
    this.name.set('Cookie Monster');
  }
}
```

```typescript
@Component()
export class Profile {
  private name = 'Elmo';

  change(): void {
    this.name = 'Cookie Monster';
  }
}
```

```typescript
@Component()
export class Profile {
  #name = 'Elmo';

  change(): void {
    this.#name = 'Cookie Monster';
  }
}
```

```typescript
@Directive()
export class Example {
  readonly name = signal('Elmo');

  change(): void {
    this.name.set('Cookie Monster');
  }
}
```

[Back to README](../../README.md)
