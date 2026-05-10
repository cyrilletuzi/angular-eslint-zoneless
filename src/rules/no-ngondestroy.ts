import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-ngondestroy";
const messageId = "noNgondestroy";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `\`ngOnDestroy()\` should be avoided in a zoneless application, signals and resources destroy is automatic; if really needed, use \`DestroyRef.onDestroy()\`.`,
    },
    docs: {
      description: `Checks that \`ngOnDestroy()\` is not used.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_NGONDESTROY.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        if (
          node.key.type === AST_NODE_TYPES.Identifier &&
          node.key.name === "ngOnDestroy"
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
