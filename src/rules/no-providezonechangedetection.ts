import type { RuleDefinition } from "@eslint/core";
import { type TSESTree } from "@typescript-eslint/utils";

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
      "CallExpression[callee.type='Identifier'][callee.name='provideZoneChangeDetection']"(node: TSESTree.CallExpression) {
        context.report({
          node,
          messageId,
        });
      },
    };
  },
};
