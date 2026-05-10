import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngaftercontentchecked";
const messageId = "noNgaftercontentchecked";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ngAfterContentChecked()\` should be avoided in a zoneless application, use signals and resources reactivity instead.`,
    },
    docs: {
      description: `Checks that \`ngAfterContentChecked()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGAFTERCONTENTCHECKED.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        if (
          node.key.type === AST_NODE_TYPES.Identifier &&
          node.key.name === "ngAfterContentChecked"
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
