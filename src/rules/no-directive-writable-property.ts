import type { RuleDefinition } from "@eslint/core";
import type { TSESTree } from "@typescript-eslint/utils";
import { isInAngularClass } from "../utils/angular-class-decorator";

export const ruleName = "no-directive-writable-property";
const messageId = "noDirectiveWritableProperty";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `Public and protected properties of components and directives should be readonly, as in a zoneless application, mutating them will not update the UI anymore.`,
    },
    docs: {
      description: `Checks that public and protected properties of components and directives are readonly.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_DIRECTIVE_WRITABLE_PROPERTY.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      /* React to: explicit `public` properties, explicit `protected` properties, implicit public properties which are not `#private` */
      "PropertyDefinition:not([accessibility='public']):not([readonly=true]), PropertyDefinition[accessibility='protected']:not([readonly=true]), PropertyDefinition:not([accessibility]):not([readonly=true]):not([key.type='PrivateIdentifier'])"(node: TSESTree.MethodDefinition) {
        if (isInAngularClass(node, ["Component", "Directive"])) {
          context.report({
            node,
            messageId,
          });
        }
      },
    };
  },
};
