import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngafterviewinit";
const messageId = "noNgafterviewinit";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ngAfterViewInit()\` should be avoided in a zoneless application, use signals and resources reactivity instead, or when really needed, use \`afterNextRender()\`.`,
    },
    docs: {
      description: `Checks that \`ngAfterViewInit()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGAFTERVIEWINIT.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        if (
          node.key.type === AST_NODE_TYPES.Identifier &&
          node.key.name === "ngAfterViewInit"
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
