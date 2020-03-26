# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:8080`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3000 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

> Note: I've encountered some webpack issues as of 05/03/2020 where craco and create-react scripts have different required versions of webpack.  
> The suggested resolutions didn't work, so the workaround was to set `SKIP_PREFLIGHT_CHECK` to `true` in `.env.development`

## Deploy

Once you are happy with your plugin, you have to bundle it in order to deploy it to Twilio Flex.

If this is the first time you are deploying your plugin, or you have made changed to your CSS, you will need to upload any custom CSS which is bundled from your plugin to Twilio assets.

Run the following command to start the bundling:

```bash
npm run build
```

In `build/static/css` you should find your compiled CSS files.  
Take the `*.css` file (no need for the `.css.map`), rename it to something simpler, and upload it as an asset via the Twilio console.  
Once complete, this upload will have a fixed URL. Modify `src/Plugin.tsx` to include a call to `loadCss("<YOUR ASSET URL>")` inside of `init`.  
For a production instance, we advise using a runtime variable to store the Twilio Runtime Domain at the start of the asset url.

You can now deploy the plugin with the following command:

```bash
npm run deploy
```

When prompted, enter your `Account SID` and `Auth Token` for the Twilio project you want to deploy to.
