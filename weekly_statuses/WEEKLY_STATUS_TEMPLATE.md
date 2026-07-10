# WEEKLY\_STATUS.md
## Project Milestone 3: Weekly Status Report

**Project:** WhatsForDinner

**Team Number:** 6

**Team Name:** Team 6
---
## Reporting Period

**Week:** 3

**Meeting Held:** Yes

**Meeting Date:** July 1

**Duration:** 30 minutes

**Meeting Format:** Google Meet

---

## Overview
This week primarily saw focus on pre-deployment. We researched the existing tools and API's, selected a database, wrote some user stories, and improved our website functionally. We also focused on development process: we embraced Trello as a tool for quick and adaptive progress-tracking, switched to using Google Meet for improved team meetings, and introduced this WEEKLY\_STATUS.md system for clear documentation of progress.  

---

## Project Management Snapshot
Our team is utilizing Trello for project tracking and management.  Everyone is responsible for adding tasks to the appropriate lists.  For simplicity, these lists include Meetings, Today, This Week, Later, and Done.  As work on the project advances, the team may opt for utilizing built-in visual features to designate priority in Trello to choose which tasks should be started first.  

![Screenshot of Team 6's Trello board](trello_screenshot.png) 

Our team uses Google Meet for meetings and WEEKLY\_STATUS.md files posted to our project repository for documenting progress.  

---

## Progress Since Last Week
- Added pages Team, Tool, and Docs.
    - <i>Team</i> documents the team.
    - <i>Tool</i> holds the tool.
    - <i>Docs</i> holds documentation and update logs.
- Built the site with Jekyll and practiced interacting with backend.
    - Script added to footer in 'layouts/default.html' to interact with prexisting Azure function.
    - Site generated Jekyll, a static site generator.
- Added 'user\_stories' and 'Tech' directories.
    - 3 User Stories
    - Description of tech stack focus
- Identified database source for recipes: [RecipeNLG](https://www.kaggle.com/datasets/paultimothymooney/recipenlg/data)

---

## Completed Tasks and Individual Contributions This Week
<details>
    <summary>Completed Tasks</summary>
    <details>
        <summary>Matt</summary>
        <ul>
                <li>Defined some user stories</li>
                <li>Generated the site with jekyll using layouts and added pages</li>
                <li>Connected pages to back end azure function using Javascript for practice</li>
        </ul>
    </details>
    <details>
        <summary>Zeke</summary>
        <ul>
                <li>Submitted Project Milestone #2</li>	
                <li>Tested out Google Meet for current and future meetings</li>
		<li>Read Matt's tech overview, Cameron's design examples, and Curry's/Cameron's suggestion of using RecipeNLG</li>
        </ul>
    </details>
    <details>
        <summary>Cameron</summary>
        <ul>
                <li>Researched similar sites/web tools including Supercook and Epicurious</li>
                <li>Put together a short presentation for the team on features and design</li>
                <li>Defined a list of pantry "staple" ingredients to be excluded from recipe searches</li>
        </ul>
    </details>
    <details>
        <summary>Jimmy</summary>
        <ul>
                <li>Added tasks on Trello for improved team organization</li>
        </ul>
    </details>
</details>

---

## Planned Tasks
- Update Trello with this week's tasks.
- Create this WEEKLY\_STATUS.md for progress tracking.
- Create a WEEKLY\_STATUS\_TEMPLATE.md for future progress tracking workflow.
- Submit Project Milestone #3.
- Review Project Milestone #4.
- Define MVP that will support completion of Project Milestone #4.
- Download the RecipeNLG source data, add it to repo, and describe its schema.
- Begin prepping to upload data to SQLite database.
- Team members will learn/practice SQL useage.
- Define more user stories (getting to at least 15).
- Switch from static Jekyll/Ruby site to dynamically generated Flask site for interactability and tool usage.
- The app's webpage will be pretty much the same appearance, but with new infastructure.
- Schedule Meeting for July 7th and prepare a notes page and meeting agenda to improve WEEKLY\_STATUS.md workflow for next week.
- Prepare sprint documentation to introduce next week to clearly segment our progress.

---

# Blockers and Issues
- MVP is not clearly defined, which inhibits communication between team members.
- Lack of experience with GitHub on team projects has impacted our ability to work simultaneously. We have contributed to this WEEKLY\_STATUS.md file via separate branches as practice.
- During this week's meeting, we got on the same page on prioritizing Project Milestones vs our own timeline for app development.

---

## Risks and Mitigation
**Identified Risk:** Working out of order/deprioritizing class timeline  
- *Mitigation:* Strict adherence to MVP scope and milestone requirements

**Identified Risk:** Frontend/backend integration complexity  
- *Mitigation:* Research and practice with SQL useage.

---

## Team Reflection
The team reported:
- Being ahead of schedule on features.
- Impovement on alignment of progess tracking and goal-setting.

The weekly status format was found to be useful for maintaining accountability and focus, although it was difficult to integrate into our meeting at first because it interrupted the flow of conversation.

---

## Notes
A WEEKLY\_STATUS file will henceforth be completed weekly. We will use WEEKLY\_STATUS\_TEMPLATE.md as a template. We will fill out the file during our team meeting, and we will polish and push the file to our repository after the team meeting.
