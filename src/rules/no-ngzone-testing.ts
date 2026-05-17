import type { RuleDefinition } from "@eslint/core";
import type { TSESTree } from "@typescript-eslint/utils";

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
      "MemberExpression[property.type='Identifier'][property.name='ngZone'][computed=false]"(node: TSESTree.MemberExpression) {
        context.report({
          node,
          messageId,
        });
      },
    };
  },
};
