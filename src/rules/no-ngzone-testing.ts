import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngzone-testing";
const messageId = "noNgzoneTesting";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`fixture.ngZone\` is useless and null in a zoneless application.`,
    },
    docs: {
      description: `Checks that \`fixture.ngZone\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGZONE_TESTING.md',
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node: TSESTree.MemberExpression) {
        if (
          node.property.type === AST_NODE_TYPES.Identifier &&
          node.property.name === "ngZone"
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
