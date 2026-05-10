import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-view-decorator";
const messageId = "noViewDecorator";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ViewChild()\` and \`ViewChildren()\` should not be used in a zoneless application, use \`viewChild()\` and \`viewChildren()\` instead.`,
    },
    docs: {
      description: `Checks that \`ViewChild()\` and \`ViewChildren()\` are not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_VIEW_DECORATOR.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      Decorator(node: TSESTree.Decorator) {
        if (
          node.expression.type === AST_NODE_TYPES.CallExpression &&
          node.expression.callee.type === AST_NODE_TYPES.Identifier &&
          (
            node.expression.callee.name === "ViewChild" ||
            node.expression.callee.name === "ViewChildren"
          )
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
