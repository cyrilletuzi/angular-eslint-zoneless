# angular-eslint-zoneless

ESLint rules for Angular zoneless.

**Checks that a zoneless application does not use zone.js-based features and that signals/resources patterns are used, for example:**
- no zone.js import and provider
- no zone.js testing functions like `fakeAsync()`
- no `NgZone`
- no `@Input()` and other decorators, to enforce `input()` and other signal equivalents
- no `ngOnInit()` and other component lifecycle methods, to enforce using signals and resources patterns

[The documentation is available on GitHub.](https://github.com/cyrilletuzi/angular-eslint-zoneless)
