import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngaftercontentinit";
const messageId = "noNgaftercontentinit";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ngAfterContentInit()\` should be avoided in a zoneless application, use signals and resources reactivity instead.`,
    },
    docs: {
      description: `Checks that \`ngAfterContentInit()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGAFTERCONTENTINIT.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        if (
          node.key.type === AST_NODE_TYPES.Identifier &&
          node.key.name === "ngAfterContentInit"
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
