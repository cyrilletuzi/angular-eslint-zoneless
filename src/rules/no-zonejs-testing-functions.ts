import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";

export const ruleName = "no-zonejs-testing-functions";
const messageId = "noZonejsTestingFunctions";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `zone.js testing functions (\`fakeAsync()\`, \`discardPeriodicTasks()\`, \`flush()\`, \`flushMicrotasks()\`, \`resetFakeAsyncZone()\`, \`tick()\`, \`waitForAsync()\`) are useless and do not work in a zoneless application.`,
    },
    docs: {
      description: `Checks that zone.js testing functions are not called.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_ZONEJS_TESTING_FUNCTIONS.md',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        if (node.callee.type === AST_NODE_TYPES.Identifier) {
          const testingFunctions: ReadonlySet<string> = new Set([
            "fakeAsync",
            "discardPeriodicTasks",
            "flush",
            "flushMicrotasks",
            "resetFakeAsyncZone",
            "tick",
            "waitForAsync",
          ]);

          if (testingFunctions.has(node.callee.name)) {
            context.report({
              node,
              messageId,
            });
          }
        }
      },
    };
  },
};
