import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngdocheck";
const messageId = "noNgdocheck";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ngDoCheck()\` should be avoided in a zoneless application, use signals and resources reactivity instead.`,
    },
    docs: {
      description: `Checks that \`ngDoCheck()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGDOCHECK.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        if (
          node.key.type === AST_NODE_TYPES.Identifier &&
          node.key.name === "ngDoCheck"
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
