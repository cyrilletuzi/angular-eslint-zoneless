import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-content-decorator";
const messageId = "noContentDecorator";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ContentChild()\` and \`ContentChildren()\` should not be used in a zoneless application, use \`contentChild()\` and \`contentChildren()\` instead.`,
    },
    docs: {
      description: `Checks that \`ContentChild()\` and \`ContentChildren()\` are not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_CONTENT_DECORATOR.md',
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
            node.expression.callee.name === "ContentChild" ||
            node.expression.callee.name === "ContentChildren"
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
