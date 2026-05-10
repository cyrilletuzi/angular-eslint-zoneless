import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-providezonechangedetection";
const messageId = "noProvidezonechangedetection";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`provideZoneChangeDetection()\` is forbidden in a zoneless application.`,
    },
    docs: {
      description: `Checks that \`provideZoneChangeDetection()\` is not called.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_PROVIDEZONECHANGEDETECTION.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        if (
          node.callee.type === AST_NODE_TYPES.Identifier &&
          node.callee.name === "provideZoneChangeDetection"
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
