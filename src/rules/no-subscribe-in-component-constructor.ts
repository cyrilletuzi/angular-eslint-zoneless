import type { RuleDefinition } from "@eslint/core";
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";
import { isInAngularComponentConstructor } from "../utils/in-constructor";

export const ruleName = "no-subscribe-in-component-constructor";
const messageId = "noSubscribeInComponentConstructor";

export const ruleDefinition: RuleDefinition = {
  meta: {
    type: "problem",
    messages: {
      [messageId]: `An observable inside a component constructor can generally be managed with \`toSignal()\` or \`rxResource()\` instead.`,
    },
    docs: {
      description: `Checks that observables are not explicitely subscribed in components constructors.`,
      url: 'https://github.com/cyrilletuzi/angular-eslint-zoneless/blob/main/docs/rules/NO_SUBSCRIBE_IN_COMPONENT_CONSTRUCTOR.md',
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        if (
          node.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.callee.property.type === AST_NODE_TYPES.Identifier &&
          node.callee.property.name === 'subscribe' &&
          isInAngularComponentConstructor(node)
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
