---
title: 'Serverless Framework Commands - Spotinst Functions - Plugin Uninstall'
menuText: 'Plugin Uninstall'
menuOrder: 13
description: 'Uninstall a Serverless plugin'
layout: Doc
gitLink: /docs/providers/spotinst/cli-reference/plugin-uninstall.md
---

# Plugin Uninstall

Uninstall a Serverless plugin and remove it from the services `plugins` array.

```bash
serverless plugin uninstall --name pluginName
```

## Options
- `--name` or `-n` The plugins name. **Required**.

## Provided lifecycle events
- `plugin:uninstall:uninstall`

## Examples

### Remove the `serverless-webpack` plugin

```bash
serverless plugin uninstall --name serverless-webpack
```
