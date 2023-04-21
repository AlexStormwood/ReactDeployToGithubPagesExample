# React Deploy To GitHub Pages Example

This project shows a setup that automates deployment of a React app to GitHub Pages.

## Steps - Setting Up The Project

This section contains two sets of instructions - one for if you're applying this content to a not-yet-started new React project, and one for if you're applying this content to an existing React project.

### Steps - New Project

1. Create a repo with fresh, empty branches - one `main` and  one `gh-pages` branch.
2. Push both branches up to GitHub.
3. Clone your repo from GitHub down to your development machine.
4. Within your cloned repo on your computer, create your React app.
	- If you're creating the React app in the root directory of the repo, and the repository's local clone has a folder name that is in all lower case letters, you can run `npx create-react-app .` to create a new React project in that current terminal directory. 
	- If you're creating the React app in a subfolder of the repo, just run `npx create-react-app reactprojectname`  as per normal. Remember the name of the folder containing the React app's `package.json` file!


### Steps - Existing Project

1. Add a branch named `gh-pages` to your repo.
2. Push the branch to GitHub.
3. Continue to the section titled "Steps - Implementing The Workflow".

## Steps - Implementing The Workflow

This sections assumes that your React app works when run locally, and that your repository has a branch named `gh-pages` in it.

These steps must be completed in the main/master branch of your repository, NOT the `gh-pages` branch!

1. Add a key named `homepage` to your project's `package.json` file. The value of this key is the URL of your intended deployment domain.  
	- If you just want to keep things "standard" and use a GitHub Pages domain name, keep in mind that it will use this structure by default: `https://somegithubusername.github.io/somerepositoryname/`.
	- Take a looka this repository's `package.json` file  if that helps. [./package.json](./package.json)
2. Go to the repository's settings page. We want to find the `Actions` section, and then the `General` section within that, and then the `Workflow permissions` section within that.
	- The URL for that page should follow this type of structure: `https://github.com/SomeGitHubUsername/SomeRepositoryName/settings/actions`
3. Enable or click on the setting that says `Read and write permissions` - this should be a toggle or radio button that unselects the `Read repository contents and packages permissions`. 
	- This is because the build & deploy process will create a bunch of files, **write** those files into the `gh-pages` branch, and tell GitHub Pages to pay attention to the newly-created or updated content. So, we need the GitHub Actions workflow to have **write** permissions.
4. Create a file in your repository named `cd.yml` or some other file name - as long as you know that it's the continuous deployment workflow file, and that it must be a `.yml` file. This file must be within a `workflows` folder inside of a `.github` folder. So, a path to the new file would be something like `.github/workflows/cd.yml` as shown in this project's contents.
	- This file: [./.github/workflows/cd.yml](./.github/workflows/cd.yml)
5. Give that new `cd.yml` file the contents found in our own - this is the workflow that readies the React app for deployment.
	- This file, again: [./.github/workflows/cd.yml](./.github/workflows/cd.yml)
6. Let the GitHub Actions workflows process. At the time of writing, there are two: the one we've added as a YML file, and one that GitHub will run automatically to feed the `gh-pages` branch in as GitHub Pages content.
7. Find your deployment status in the repository's Environments section on GitHub.
	- You can sort out a direct link to view your repository's deployments from this structure: `https://github.com/SomeGitHubUsername/SomeRepositoryName/deployments/`