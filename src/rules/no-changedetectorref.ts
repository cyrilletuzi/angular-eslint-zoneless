import type { RuleDefinition } from "@eslint/core";
import { type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-changedetectorref";
const messageId = "noChangedetectorref";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ChangeDetectorRef()\` should be avoided in a zoneless application, use signals and resources reactivity instead.`,
    },
    docs: {
      description: `Checks that \`ChangeDetectorRef()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_CHANGEDETECTORREF.md',
    },
    schema: [],
  },
  create(context) {
    return {
      Identifier(node: TSESTree.Identifier) {
        if (node.name === 'ChangeDetectorRef') {
          context.report({
            node,
            messageId,
          });
        }
      },
    };
  },
};
