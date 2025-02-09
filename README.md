# Project Title: Divine Slice Pizzeria

## Table of Contents
 
- [Purpose](#purpose)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)

## Purpose
Our project is a helpline hotline cleverly disguised as a pizza ordering website, designed to provide a discreet and accessible way for individuals in abusive situations to seek help. Inspired by real incidents where domestic violence victims called 911 and pretended to order pizza to signal for assistance, we aimed to create a digital alternative for those who may not be able to speak on the phone.

Through our system, each pizza option and topping selection corresponds to specific information about the user's situation, allowing them to communicate their needs without alerting their abuser. Our goal is to ensure that anyone in need has a safe, covert, and effective way to access support and escape dangerous environments. 

## Installation

### Prerequisites

Before beginning with the Installtion steps, ensure that the following requirements have been met:

- You have installed [Node.js](https://nodejs.org/). This is for frontend development.
- You have installed the package managers'npm', which will be installed via Node.js.
- All of the previous requirements are updated to the latest versions.
- Forked the repository "https://github.com/carmen-cruzarana/dv-pizza"

### Installation

Follow the steps to install the project onto your system with your own branch.

1. **Clone the repository**
   - Use the following command:
     ```bash
     git clone https://github.com/carmen-cruzarana/dv-pizza
     cd dv-pizza
     ```
2. **Add your Github remote repository**
   - Use the following command to see the available remote repository that Git is connected to:
     ```bash
     git remote -v
     ```
     - If done correctly, you should see a remote repository called origin or master, and its link is to the cloned Github.
   - The next step is optional and only depends on your personal preference, change the name of the remote repository "origin/master" to "upstream" to avoid confusion between the roles of the repository. Use the following command:
     ```bash
     git remote rename 'repo-name' 'new-repo-name'
     ```
   - The next step is to change the URL of your GitHub forked repository to point to your own remote repository. You can do this using the following command:
     ```bash
     git remote set-url <remote_name> <new_url>
     ```
     - After running the command you will see two remote repositories configured, meaning you will have authorization to the both of them.
3. **Creating and then switching to personal branch for contribution**
   - Use the following command to check to see if your branch exists in Github (meaning you made the branch in Github.com and not using Git in cmdline):
     ```bash
     git branch
     ```
     This should label all existing branches, and there should exist an asterisk next to a branch. This asterisk represents the branch the repository you are currently on.
   - If your branch is found then switch over using the following code:
     ```bash
     git checkout your-personal-branch
     ```
   - If your branch was not found then create your own branch and switch over using the following code:
     ```bash
     git checkout -b your-personal-branch
     ```
4. **Recreating the necessary environment for both back-end and front-end**
   - Use the following commands to set up your environment, specifically the .venv for node_modules/ for front-end:
     ```bash
      # For frontend
     cd .
     cd front-end
     npm install
     # To run application
     npm start
     ```
   - You are done setting it up.
5. **Push Your Files to Finalize your Personal Branch**
   - It is time to finalize your branch by pushing your branch onto the remote repository! Use the following command:
     ```bash
     git add .
     git commit -m "Your message!"
     git push -u forked-repo-name your-personal-branch
     ```
## Usage

The following commands will be to run the front-end or back-end scripts:
``` npm run dev ```

## Pages

1. Home Page -The homepage serves as a cover page, designed to appear as a typical pizza delivery website. This ensures that the platform remains inconspicuous, allowing users to access help without alerting their abuser.
2. Menu Page - The menu page presents various pizza options and toppings, each secretly corresponding to specific details about the user’s situation. When a user hovers over an item, a tooltip reveals what the selection represents for law enforcement. For example, selecting a thin crust pizza may indicate that children are involved. This feature enables victims to discreetly communicate their circumstances in a structured manner.
3. Order Page - The order page allows users to finalize their selections, providing crucial details to authorities. Here, users can enter their address, email, and date of birth, helping law enforcement build a profile and respond effectively. The system ensures that all provided information is securely relayed to the appropriate authorities while maintaining the disguise of a standard online order form.
4. Cart Page- TBD
   
