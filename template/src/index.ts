import * as FlexPlugin from 'flex-plugin';
import Plugin from './Plugin';
import { makeServer } from "./__mocks__/server";

if (process.env.NODE_ENV === "development") {
    makeServer();
}

FlexPlugin.loadPlugin(Plugin);
