# angular-eslint-zoneless

ESLint rules for Angular zoneless.

**Checks that a zoneless application does not use zone.js-based features and that signals/resources patterns are used, for example:**
- no zone.js import and provider
- no zone.js testing functions like `fakeAsync()`
- no `NgZone`
- no public or protected writable properties in components
- no `ChangeDectectionStrategy.Eager`
- no `@Input()` and other decorators, to enforce `input()` and other signal equivalents
- no `ngOnInit()` and other component lifecycle methods, to enforce using signals and resources patterns

A [blog post on Dev.to](https://dev.to/cyrilletuzi/) is planned to explain the context and the purpose of this tool in more details.

> [!NOTE]
> Find this tool useful? I’m open to freelance & full-time opportunities.
> Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/cyrilletuzi/) or [Bluesky](https://bsky.app/profile/cyrilletuzi.com).

## Requirements

- TypeScript ESLint v8
- New flat ESLint configuration (`eslint.config.js` or equivalent)

> [!NOTE]
> `.eslintrc.json` and other legacy ESLint configurations are not supported

## Getting started

1. Installation

```bash
npm install angular-eslint-zoneless --save-dev
```

2. ESLint flat configuration (`eslint.config.js` or equivalent)

```js
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tsEslint = require("typescript-eslint");
const angularEslintZoneless = require("angular-eslint-zoneless"); // ⬅️ add this

module.exports = defineConfig({
  files: ["**/*.ts"],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  extends: [
    eslint.configs.recommended,
    tsEslint.configs.strictTypeChecked,
    tsEslint.configs.stylisticTypeChecked,
    angularEslintZoneless.configs.recommended, // ⬅️ add this (or one of the other presets below)
  ],
  rules: {},
});
```

3. `npm run lint`

> [!NOTE]
> In VS Code, it may be required to restart for the ESLint extension to apply the new rules.

## Rules and presets

There are 3 presets available:
- `minimal`: restrict what really does not work without zone.js
- `recommended`: `minimal` + enforce signals patterns
- `strict`: `recommended` + go even further in signals patterns

| Rule & documentation | in minimal| in recommended | in strict |
|---|---|---|---|
| [no-zonejs-import](./docs/rules/NO_ZONEJS_IMPORT.md) | ✅ | ✅ | ✅ |
| [no-providezonechangedetection](./docs/rules/NO_PROVIDEZONECHANGEDETECTION.md) | ✅  | ✅ | ✅ |
| [no-ngzone](./docs/rules/NO_NGZONE.md) | ✅ | ✅ | ✅ |
| [no-ngzone-testing](./docs/rules/NO_NGZONE_TESTING.md) | ✅ | ✅ | ✅ |
| [no-zonejs-testing-functions](./docs/rules/NO_ZONEJS_TESTING_FUNCTIONS.md) | ✅ | ✅ | ✅ |
| [no-directive-writable-property](./docs/rules/NO_DIRECTIVE_WRITABLE_PROPERTY.md) | ❌ | ✅ | ✅ |
| [no-directive-accessor](./docs/rules/NO_DIRECTIVE_ACCESSOR.md) | ❌ | ✅ | ✅ |
| [no-eager-change-detection](./docs/rules/NO_EAGER_CHANGE_DETECTION.md) | ❌ | ✅ | ✅ |
| [no-ngoninit](./docs/rules/NO_NGONINIT.md) | ❌ | ✅ | ✅ |
| [no-ngdocheck](./docs/rules/NO_NGDOCHECK.md) | ❌ | ✅ | ✅ |
| [no-ngonchanges](./docs/rules/NO_NGONCHANGES.md) | ❌ | ✅ | ✅ |
| [no-ngcontentviewinit](./docs/rules/NO_NGAFTERCONTENTINIT.md) | ❌ | ✅ | ✅ |
| [no-ngcontentviewchecked](./docs/rules/NO_NGAFTERCONTENTCHECKED.md) | ❌ | ✅ | ✅ |
| [no-ngafterviewinit](./docs/rules/NO_NGAFTERVIEWINIT.md) | ❌ | ✅ | ✅ |
| [no-ngafterviewchecked](./docs/rules/NO_NGAFTERVIEWCHECKED.md) | ❌ | ✅ | ✅ |
| [no-ngondestroy](./docs/rules/NO_NGONDESTROY.md) | ❌ | ✅ | ✅ |
| [no-input-decorator](./docs/rules/NO_INPUT_DECORATOR.md) | ❌ | ✅ | ✅ |
| [no-output-decorator](./docs/rules/NO_OUTPUT_DECORATOR.md) | ❌ | ✅ | ✅ |
| [no-content-decorator](./docs/rules/NO_CONTENT_DECORATOR.md) | ❌ | ✅ | ✅ |
| [no-view-decorator](./docs/rules/NO_VIEW_DECORATOR.md) | ❌ | ✅ | ✅ |
| [no-asyncpipe](./docs/rules/NO_ASYNCPIPE.md) | ❌ | ✅ | ✅ |
| [no-detectchanges-testing](./docs/rules/NO_DETECTCHANGES_TESTING.md) | ❌ | ✅ | ✅ |
| [no-changedetectorref](./docs/rules/NO_CHANGEDETECTORREF.md) | ❌ | ❌ | ✅ |
| [no-subscribe-in-component-constructor](./docs/rules/NO_SUBSCRIBE_IN_COMPONENT_CONSTRUCTOR.md) | ❌ | ❌ | ✅ |
| [no-reactive-forms](./docs/rules/NO_REACTIVE_FORMS.md) | ❌ | ❌ | ❌ |

> [!TIP]
> I also published [other lint rules for the Angular injection context](https://github.com/cyrilletuzi/angular-eslint-injection-context).

## FAQ

> Why not in Angular ESLint?

I proposed a [Pull Request](https://github.com/angular-eslint/angular-eslint/pull/2892) on another topic, but it has been ignored for months now. So I decided to publish rules by myself.

> Is Angular ESLint required?

No, these rules only depends on TypeScript ESLint.

> Is typed linting required?

[Typed linting](https://typescript-eslint.io/getting-started/typed-linting) is not required for now, but it could change in the future.

> Is adding a plugin making the project heavier?

No, the package has 0 dependency. It just add lint rules using TypeScript ESLint, which is already installed in the project.

## License

MIT
