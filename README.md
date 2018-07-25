### VISUAL REGRESSION TESTS FOR PORTAL THEMES

We use BackstopJs. It is a framework that allows using configuration objects to take and compare screenshots.


## INSTALLATION

After cloning, run

```npm install```

The only dependency at the time of writing for this repo is BackstopJs.
Useful Links

https://github.com/garris/BackstopJS

https://www.metaltoad.com/blog/backstopjs-part-deux-javascript-config-and-makefile

https://docs.npmjs.com/getting-started/installing-npm-packages-locally


## RUNNING

BackstopJs is a Local dependency (e.g. not installed with a -g flag). So, we can not call it directly,
e.g. ```backstop test```. We COULD it like ```./node_modules/.bin/backstop test```.

We also have some default parameters, e.g. ```--configFile=backstop.js```.

To work around typing a lot each time we run the tests, we use npm scripts (see the package.json).
We alias the backstop ```test``` and ```approve``` commands and add the default parameters we need.

We run the tests by running

```FLAVOUR=gh npm run test```

FLAVOUR : TOC short name. It is going to be used to choose the master portal url.
That runs all tests. Since there are not any previous files to compare to, all cases are going to fail)
Note - while developing the tests, we need to test and approve the same site (master is chosen).

```npm run approve```
This approves the tests that were just run. Any subsequent test would use the approved results to compare to.

Whilst we only need those 2 commands to work on the portal, a few more are needed for us to have the process as a part
of a continues integration


## CONTINUOUS INTEGRATION 

The current usage is :

* Developers create a PR in the portal repository.

* Jenkins sees the PR, creates a portal for it, then runs the tests against that portal and the
current master environment.

* Jenkins then adds a comment in the PR with the test results.

* It is then up to the developer to check if the tests that might have failed were expected to fail (e.g.
if the developer actually changes something on the interface - master would be different -> his code is not merged),
OR if it is a regression (e.g. the developer changed javascript, or did not expect that scenario to break, like - the developer
changed the homepage, but the test about the movie modal showed master renders differently).

Jenkins runs these tests towards ALL portals on each PR. E.g. if the developer was refactoring code that should have only affected C2C for example,
then if they see something for TPE broke - they can react.

## CONTINUOUS INTEGRATION COMMANDS (USED BY JENKINS)

```npm run ci-run```
This is the command that Jenkins calls. All it does is call another 3 different commands, described bellow.
Note, Jenkins calls it like `PORTAL_URL={some_temporary_site} FLAVOUR={flavour} npm run ci-run`
{some_temporary_site} is the new temporary portal, that Jenkins has just created from the PR, and {flavour} is the flavour.

```npm run clean```
Remove any reports that might have piled up in previous runs

```npm run ci-reference```
Run the scenarios against master and use the results as a base for comparison later

```npm run ci-test```
Take pictures of the temporary portal and compare with the base taken with npm run ci-reference

```npm run ci-summary```
By default, Backstop produces a very verbose and long text summary for the tests. This command
shortens it and turns it into something Jenkins can send as a comment.


NOTE:
Our code in backstop.js accepts ```PORTAL_URL``` to run the tests against.
Our npm scripts set that accordingly based on the passed ```FLAVOUR```, so that
backstop.js still accepts a PORTAL_URL, but so that we don't specify it, but rather -
only specify a flavour.
A particular result of this is - the ```ci-reference``` script overrides the
PORTAL_URL passed. The override only affects the ci-reference script, once it
is executed - the other scripts, e.g. npm run ci-test - see the original
PORTAL_URL passed


## IMPORTANT
Current code will not work. You nedd to update main portal link in package.json and paths in paths.js file.

You are done! Happy testing...
