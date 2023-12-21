# Tree View Apex Logs Prototype

## Big Learnings

1) There are going to be two different types of list views that we are going to make.
  1) One is going to be a server side log view. This view will do a sf data log list against your default org. This should be a "slower" log view that will show you the actual data of your org. You can retrieve logs for this in the following ways.
      1) When you first load up your ide, this view will be refreshed.
      2) You may click a "refresh" command on the Apex Server Side Logs.
      3) You can run a command named "SF ZSI: Refresh Server Side Apex Logs"
      4) (This one needs more thought). Some commands should instinctively know that they generated a server side log. Thus, the server side log should just refresh at this point.
  2) One is going to be a "local log view". This view will show a local log view that shows you all the log files that are stored in ".zf/logs". You can retrieve a local log in the following ways:
    1) You can run a command name "SF ZSI: Refresh Local Apex Logs"
    2) You may click a "refresh" command on the Apex Local Logs.
    3) You may click on one of the logs that is found in the "Server Side Apex Logs".

## Big steps that need to be done

### TreeView

#### For Local Logs

1) There must be an "apex log get" command implemented in the CLI.
2) There must be a "clean local apex logs" command implemented.
3) There must be a tree view implemented that can look through all the files in some directory.
4) The logs should really be split up based org... that should be helpful.

#### For Server Side Logs

1) There must be an "apex log list" command implemented in the CLI.
2) There must be a tree view implemented that will show the output of this command.
3) Since this should really only be ran against the default org... there may be an issue when you switch to a different org. That's why we should really do the tree view in here as well. Even though you will lose the other org when you refresh, it still explicitly states what org it is from.

There should exists a class such that it can represent both the folder and the apex log itself.

Make an interface called TreeDataProvider.
Its weird because they have a tree view and a tree data provider within vscode.
We had to separate them out because we need the onDidChangeSelection method to be exposed to us.
onDidChangeSelection is in here too.
You really only need... 

The vscode api should be able to work with whatever we give it here...

So a vscode.TreeDataProvider should be able to wrap whatever is called here...
And then we can test against that thing that is wrapped.

Remember... the vscode.TreeDataProvider works of vscode.TreeItems. We do not want this.
But it looks like the only thing that we need to worry about is label and collapsibleState

I wonder if we should just be able to turn the zf tree item into a vscode.TreeItem.

Why in the world do you need a tree data provider anyways? Can't you just have a tree?

So hmm... maybe there is some method to this madness...
If you just have a tree and you are at the root... and someone ask you for your children. You then just give them all of you children.

There's really nothing that complicated about this... we just have to make that tree property.
So definitely our mock ide is going to have to have a way to manually change what is going on here.

Is there anything weird about this when when do it through cli commands?
I don't see why you also can't create that same 

But at the end of the day... you need a tree... and you need some function for when elements of that tree are clicked upon.

Really what do you need? just a tree right?

```
const apexTreeView = new ApexTreeView();

vscode.

```