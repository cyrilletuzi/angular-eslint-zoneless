import type { ConfigObject, Plugin } from "@eslint/core";
import * as noChangedetectorref from "./rules/no-changedetectorref.js";
import * as noContentDecorator from "./rules/no-content-decorator.js";
import * as noDetectchangesTesting from "./rules/no-detectchanges-testing.js";
import * as noEagerChangeDetection from "./rules/no-eager-change-detection.js";
import * as noInputDecorator from "./rules/no-input-decorator.js";
import * as noNgaftercontentchecked from "./rules/no-ngaftercontentchecked.js";
import * as noNgaftercontentinit from "./rules/no-ngaftercontentinit.js";
import * as noNgafterviewchecked from "./rules/no-ngafterviewchecked.js";
import * as noNgafterviewinit from "./rules/no-ngafterviewinit.js";
import * as noNgdocheck from "./rules/no-ngdocheck.js";
import * as noNgonchanges from "./rules/no-ngonchanges.js";
import * as noNgondestroy from "./rules/no-ngondestroy.js";
import * as noNgoninit from "./rules/no-ngoninit.js";
import * as noNgzoneTesting from "./rules/no-ngzone-testing.js";
import * as noNgzone from "./rules/no-ngzone.js";
import * as noOutputDecorator from "./rules/no-output-decorator.js";
import * as noProvidezonechangedetection from "./rules/no-providezonechangedetection.js";
import * as noSubscribeInComponentConstructor from "./rules/no-subscribe-in-component-constructor.js";
import * as noViewDecorator from "./rules/no-view-decorator.js";
import * as noZonejsImport from "./rules/no-zonejs-import.js";
import * as noZonejsTestingFunctions from "./rules/no-zonejs-testing-functions.js";

const { name, version } =
  // importing here would bypass the tsconfig `"rootDir": "src"`
  require("./package.json") as typeof import("./package.json");

const plugin = {
  configs: {
    get recommended() {
      return recommended;
    },
    get all() {
      return all;
    }
  },
  meta: { name, version },
  rules: {
    [noZonejsImport.ruleName]: noZonejsImport.ruleDefinition,
    [noProvidezonechangedetection.ruleName]: noProvidezonechangedetection.ruleDefinition,
    [noEagerChangeDetection.ruleName]: noEagerChangeDetection.ruleDefinition,
    [noNgoninit.ruleName]: noNgoninit.ruleDefinition,
    [noNgdocheck.ruleName]: noNgdocheck.ruleDefinition,
    [noNgonchanges.ruleName]: noNgonchanges.ruleDefinition,
    [noNgaftercontentinit.ruleName]: noNgaftercontentinit.ruleDefinition,
    [noNgaftercontentchecked.ruleName]: noNgaftercontentchecked.ruleDefinition,
    [noNgafterviewinit.ruleName]: noNgafterviewinit.ruleDefinition,
    [noNgafterviewchecked.ruleName]: noNgafterviewchecked.ruleDefinition,
    [noNgondestroy.ruleName]: noNgondestroy.ruleDefinition,
    [noInputDecorator.ruleName]: noInputDecorator.ruleDefinition,
    [noOutputDecorator.ruleName]: noOutputDecorator.ruleDefinition,
    [noContentDecorator.ruleName]: noContentDecorator.ruleDefinition,
    [noViewDecorator.ruleName]: noViewDecorator.ruleDefinition,
    [noNgzone.ruleName]: noNgzone.ruleDefinition,
    [noNgzoneTesting.ruleName]: noNgzoneTesting.ruleDefinition,
    [noDetectchangesTesting.ruleName]: noDetectchangesTesting.ruleDefinition,
    [noZonejsTestingFunctions.ruleName]: noZonejsTestingFunctions.ruleDefinition,
    [noChangedetectorref.ruleName]: noChangedetectorref.ruleDefinition,
    [noSubscribeInComponentConstructor.ruleName]: noSubscribeInComponentConstructor.ruleDefinition,
  },
} satisfies Plugin;

const recommended: ConfigObject = {
  plugins: {
    [name]: plugin
  },
  rules: {
    [`${name}/${noZonejsImport.ruleName}`]: "error",
    [`${name}/${noProvidezonechangedetection.ruleName}`]: "error",
    [`${name}/${noEagerChangeDetection.ruleName}`]: "error",
    [`${name}/${noNgoninit.ruleName}`]: "error",
    [`${name}/${noNgdocheck.ruleName}`]: "error",
    [`${name}/${noNgonchanges.ruleName}`]: "error",
    [`${name}/${noNgaftercontentinit.ruleName}`]: "error",
    [`${name}/${noNgaftercontentchecked.ruleName}`]: "error",
    [`${name}/${noNgafterviewinit.ruleName}`]: "error",
    [`${name}/${noNgafterviewchecked.ruleName}`]: "error",
    [`${name}/${noNgondestroy.ruleName}`]: "error",
    [`${name}/${noInputDecorator.ruleName}`]: "error",
    [`${name}/${noOutputDecorator.ruleName}`]: "error",
    [`${name}/${noContentDecorator.ruleName}`]: "error",
    [`${name}/${noViewDecorator.ruleName}`]: "error",
    [`${name}/${noNgzone.ruleName}`]: "error",
    [`${name}/${noNgzoneTesting.ruleName}`]: "error",
    [`${name}/${noDetectchangesTesting.ruleName}`]: "error",
    [`${name}/${noZonejsTestingFunctions.ruleName}`]: "error",
  },
};

const all: ConfigObject = {
  plugins: {
    [name]: plugin
  },
  rules: {
    ...recommended.rules,
    [`${name}/${noChangedetectorref.ruleName}`]: "error",
    [`${name}/${noSubscribeInComponentConstructor.ruleName}`]: "error",
  },
};

export = plugin;