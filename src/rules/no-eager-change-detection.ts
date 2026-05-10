import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-eager-change-detection";
const messageId = "noEagerChangeDetection";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ChangeDetectionStrategy.Eager\` and \`ChangeDetectionStrategy.Default\` should not be used in a zoneless application, use \`ChangeDetectionStrategy.OnPush\` instead (the default in Angular >= 22).`,
    },
    docs: {
      description: `Checks that \`ChangeDetectionStrategy.Eager\` and \`ChangeDetectionStrategy.Default\` are not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_EAGER_CHANGE_DETECTION.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node: TSESTree.MemberExpression) {
        if (
          node.object.type === AST_NODE_TYPES.Identifier &&
          node.object.name === "ChangeDetectionStrategy" &&
          node.property.type === AST_NODE_TYPES.Identifier &&
          (node.property.name === "Eager" || node.property.name === "Default")
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
