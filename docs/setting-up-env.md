# Setting Up Your Environment

## Installing git
The first step to setting your repo up is getting a source control management (SCM) software installed. For this, we will be using git. 

Follow the installation process outlined in [this git guide](https://github.com/git-guides/install-git). I **do not** recommend installing GitHub Desktop.

## Setting up GitHub auth token
In order to push code to your own repository, you will need to set up git authentication. While this step is optional, it is **highly** recommended. Setting up the auth token will allow you to use SSH repo urls, bypassing 2-factor authentication issues with HTTPS repo urls.

First, let's generate an ssh key
1. open a terminal. If using Windows, open the Git Bash program
1. run the command `ssh-keygen`
1. use the default location and file name if you don't have any other keys set up
1. add an optional password or just hit `enter` to leave it blank. Most people leave this blank
1. confirm your password (or lack of)
1. print out the public key to your terminal. You can use `cat ~/.ssh/id_rsa.pub`
    1. `~/.ssh` is the default location for the ssh key. Change this if you did not use the default location
    1. `id_rsa` is the default name of the file you gave. Change this if you did not use the default name
    1. `.pub` indicated this is the public file. Do not change this
1. copy the contents of the public file to your clipboard for future use

Next, we need to add that key to GitHub
1. open [GitHub](https://github.com) and log in
1. click your profile icon in the top right, and select `settings`
1. on the left side, click `SSH and GPG keys`
1. create a new SSH key
1. give it a title descibing what machine this key is for'
1. leave the type as `Authentication Key`
1. add the public key generated above

## Cloning this repo
Open the [main page](https://github.com/Remorc/node-kata-template) for this repository

You should see a green button that sayd `< > Code`. Click on that

Under the `Local` tab, click `SSH`. This will give you the URL to clone this repository. It should start with `git@github.com:`. Copy that URL

Open a terminal. If using Windows, open the Git Bash program. Navigate to where you want this code downloaded (using `cd` commands).

Run the command `git clone <URL_YOU_COPIED>`. This will download all of the source code into a new folder

## Pushing code to your own repo
Open [GitHub](https://github.com) and log in

On the left side, you should see a green button labeled `New`. Click on that

Give your repository a name. Leave it as public, and **do not** add a README, .gitignore, or licence file

You should see a large blue box. Make sure `SSH` is selected, and copy the URL. It should start with `git@github.com:`

Open a terminal. If using Windows, open the Git Bash program. Navigate to where this code is downloaded (using `cd` commands).

Run the following commands in order. I have also included a brief explination of what they do

`git remote remove origin` - Removes the originally downloaded GitHub repository from being the "source"

`git remote add origin <URL_YOU_COPIED>` - Adds a new "source" repository

`git remote -v` - Verifies the URL is correct and can be accessed. **Make sure this is pointing to your new repository before running the next command**

`git push origin master` - Pushes the local master branch to your GitHub repository

## Installing Node
If you are using Linux or OSX, install [nvm](https://github.com/nvm-sh/nvm)

If you are using Windows, install [nvm-windows](https://github.com/coreybutler/nvm-windows)

After installing, you may need to close and re-open any terminal windows you have open.

Open a terminal. If using Windows, open the Git Bash program. Navigate to where this code is downloaded (using `cd` commands).

Install node by running `nvm install latest`

Set the latest version to be your default by running `nvm use latest`
