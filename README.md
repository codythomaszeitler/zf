# ZeitlerForce README

ZeitlerForce is an visual studio code extension that significantly improves the salesforce developer experience while using Visual Studio Code. It's aim is to create a developer flow that is much more elegant than what is currently provided by the [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode).

The developer flow _should at minimum_ have the following elements:

- Have a non-intrusive way to deploy your salesforce metadata.
- Have a natural way to run tests that takes full utilization of the visual studio code native testing api.
- Have a natural way to view logs.
- Have a way to enable debug logging that does not require a developer to open up the "Developer Console" within the salesforce UI.
- Have a way to use an "offline symbol table" such that metadata that is in your org (that is not local) can be properly represented in intellisense.
- Be able to properly used within a repository that is gigantic (over 10k files).

Notice the words "natural" and "non-intrusive" that are used here. While the [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) _does_ do quite a few of the items above, they lack in terms of being "natural" and being "non-intrusive". A comparison of what ZeitlerForce does and how the Salesforce Extension Pack does it will be given in the "comparisons" section below.

## Installation Steps

Search for ZeitlerForce on the Visual Studio Code marketplace, and just click install! No other steps required.

## Guiding Principles

The following state the guiding principles of ZeitlerForce. You can be assured that the following will always be true, and they guide major design decisions of the extension.

1) ZeitlerForce aims to be a _supplement_ and not a replacement to the [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode). They will always be able to work hand in hand. While you could in _theory_ use ZeitlerForce without these extensions installed, having the Salesforce Extension Pack is only a benefit to your development experience.
2) ZeitlerForce will 100% work _if_ at least one sf command works (given that command reaches the salesforce org). Given that many salesforce developer's are behind corporate proxies, this means that if your sf cli works, then this extension works in its entire capacity. There are no usages of JsForce within this package for precisely this reason.
3) Given that you have the sf cli installed, ZeitlerForce will always be a one click install.
4) ZeitlerForce promises to always show progress when it can. If you are deploying 1000 files in a push, ZeitlerForce _promises_ you that it will show your progress on that command.

## Features

This section will describe every feature that ZeitlerForce has, and the repository structure that you should use in order to make the best of ZeitlerForce.

1) ZeitlerForce has the ability to deploy changed salesforce metadata on save, and this is controlled by the `sf.zsi.vscode.deployOnSave` configuration property. You may also use the `ZF: Project Deploy` command to push your entire sfdx-project to your current default org. This command has several benefits over the `Salesforce Extension Pack`. The first is that if a deployment is successful, no output panel is focused, and only a notification is shown. The second is that if there is a failure, the `problems` tab is properly focused, and you are able to interact with where the error is in a non-buggy manner. The third is that if you are to queue up multiple saves, without starting multiple deployments. Unlike the `Salesforce Extension Pack`, each save starts a deployment, where in `ZeitlerForce` only one deployment can be in progress at one time. If another deployment needs to start while one is running, it will be queued and will only be started one the current deployment has finished.
2) The `Zf: Open Org` command has the ability to open any org (not just the default) that is an active and auth'd against.
3) ZeitlerForce has the ability to view logs in a non-transient drop down within the `Testing: Apex Logs` view. To refresh the logs that are shown, run the `ZF: Refresh Apex Logs`. There is also a "refresh" icon that will appear on the `Testing: Apex Logs` view when hovered over that will accomplish the same task.
4) ZeitlerForce has the ability to generate local representations of all the SObjects that are currently within your org. This is done using the `ZF: Generate Faux SObjects` command. This command generates more faux sobjects than the `Salesforce Extension Pack's` `Refresh SObject Definitions`. To be more specific, it (depending on the object) generates the associated `ChangeEvent` `Feed` `History` and `Share` for that SObject, while the salesforce extension does not.
5) ZeitlerForce has the ability to generate an offline symbol table. The offline symbol table is defined as follows. Your org has two sets of apex classes. The first set are apex classes that are local to your visual studio code instance. The second set are the classes that are in your org _minus_ the apex classes that are local. These two sets make up all of the apex classes that constitute your org. The `ZF: Generate Apex Offline Symbol Table` will create the second set of apex classes, and put them into the directory `.zf/offlineSymbolTable`. In order for the `Apex Language Server` to use them in it's intellisense, you must update your sfdx-project.json to also point to the the `.zf/offlineSymbolTable` as well as your force-app directory (or whatever directories you have in there). In a future release, when project management is added to ZeitlerForce, this step will be automated.
6) ZeitlerForce integrates with the native vscode extension api. If an Apex Test Class is opened, the class (and all ifs methods) will be shown in the test explorer. Since ZeitlerForce is context aware of where the method is, you are able to use all of the `Test: N` functions that Visual Studio Code provides (such as `Run Test Under Cursor`).
7) ZeitlerForce has a way to start a debug trace flag for one full day (so it doesn't turn off half way through the day on you.) Generate this trace flag by running the `ZF: Enable Debug Logging` command.

## Requirements

ZeitlerForce only has one requirement. The sf command line must be installed. the `sf` command on your command line must be able to run one command successfully that talks to the server.

## Extension Settings

* `sf.zsi.vscode.shouldFocusProblemsWhenDeployFails`: Determine if the "problems" tab should focus when there is an issue during deployment.
* `sf.zsi.vscode.proxy`: Adds environment variables to the shell to allow cli commands to go through.
* `sf.zsi.vscode.deployOnSave`: Determines if files should be deployed automatically on save.

## Known Issues

## Release Notes
