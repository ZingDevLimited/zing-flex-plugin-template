import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import "./sass/setup.scss";
import { colorTheme } from "./pluginTheme";

import reducers, { namespace } from "./states";
import ExampleComponentContainer from "./components/ExampleComponent/ExampleComponent.Container";

const PLUGIN_NAME = "ExamplePlugin";

export default class Plugin extends FlexPlugin {
    constructor() {
        super(PLUGIN_NAME);
    }

    /**
     * This code is run when your plugin is being started
     * Use this to modify any UI components or attach to the actions framework
     *
     * @param flex { typeof Flex }
     * @param manager { Flex.Manager }
     */
    async init(flex: typeof Flex, manager: Flex.Manager) {
        this.registerReducers(manager);

        manager.updateConfig({
            colorTheme
        });

        flex.CRMContainer.Content.replace(<ExampleComponentContainer key="example-component" />);
    }

    /**
     * Registers the plugin reducers
     *
     * @param manager { Flex.Manager }
     */
    private registerReducers(manager: Flex.Manager) {
        if (!manager.store.addReducer) {
            // tslint: disable-next-line
            console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
            return;
        }

        manager.store.addReducer(namespace, reducers);
    }
}
