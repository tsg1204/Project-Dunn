#Using the Branch Model
***

## 1. Make a fork of the repo
Visit the github repo and click the fork button, this will give you a copy of the master repository in your account.


## 2. Clone the repo to your local machine.

## 3. Add the master repo as a remote
Navigate to the master repo on github and copy the SSH link to the repo. Now in your terminal, change directory to your local repo and type `git remote add upstream [paste link here]`
Now type `git remote -v`.  You should now see a fetch and push for origin and a fetch and upstream for upstream like so:
```
origin	git@github.com:Michael-Anthony-Ryan/myrepo.git (fetch)
origin	git@github.com:Michael-Anthony-Ryan/myrepo.git (push)
upstream	git@github.com:MasterRepo/myrepo.git (fetch)
upstream	git@github.com:MasterRepo/myrepo.git (push)
```

## 4. Pulling down the latest changes
To pull the latest changes to the master repo, switch to your local master branch with `git checkout master` (make sure to commit changes first).  Running the following commands will fetch any new changes, rebase them with your current version of master, and push the changes to your remote origin:
```
git fetch upstream
git rebase upstream/master
git push origin master
```
This should be done before switching to a new feature branch, so that the branch will have the latest version of the code.

## 5. Creating a new branch
When your ready to make changes, you can switch to a new branch with `git checkout -b [new-branch]`.

## 6. Push to your local repo
When the changes are ready to be merged with the master, run your add and commit commands, then it is a good idea to rebase the newest version of upstream/master to make sure you have the latest changes before pushing.
Run: 
```
git fetch upstream
git rebase upstream/master
git push origin [branch-name]
```
This will push your changes to your repository on a branch with the same name as your local branch.

## 7. Make a pull request to the master branch
