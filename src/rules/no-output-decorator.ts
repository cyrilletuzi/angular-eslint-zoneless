import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-output-decorator";
const messageId = "noOutputDecorator";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`Output()\` should not be used in a zoneless application, use \`output()\` instead.`,
    },
    docs: {
      description: `Checks that \`Output()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_OUTPUT_DECORATOR.md',
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
          node.expression.callee.name === "Output"
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
