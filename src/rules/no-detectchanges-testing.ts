import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";
import { isInAngularClass } from "../utils/angular-class-decorator";

export const ruleName = "no-detectchanges-testing";
const messageId = "noDetectchangesTesting";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`fixture.detectChanges()\` should be avoided in a zoneless application, use \`await fixture.whenStable()\` instead.`,
    },
    docs: {
      description: `Checks that \`fixture.detectChanges()\` is not called.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_DETECTCHANGES_TESTING.md',
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        if (
          node.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.callee.property.type === AST_NODE_TYPES.Identifier &&
          node.callee.property.name === "detectChanges" &&
          // Report only in tests, otherwise it will report on `ChangeDetectorRef.detectChanges()`
          !isInAngularClass(node, ["Component", "Directive"])
        ) {
          context.report({
            node,
            messageId,
          });
        }
      },
    };
  },
};
