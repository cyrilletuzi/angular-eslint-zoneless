import type { RuleDefinition } from "@eslint/core";
import { type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngzone";
const messageId = "noNgzone";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`NgZone()\` is useless and does not work in a zoneless application.`,
    },
    docs: {
      description: `Checks that \`NgZone()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGZONE.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      Identifier(node: TSESTree.Identifier) {
        if (node.name === 'NgZone') {
          context.report({
            node,
            messageId,
          });
        }
      },
    };
  },
};
