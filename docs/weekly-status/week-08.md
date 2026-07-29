# Weekly Status: Week 08

**Project:** WhatsForDinner

**Team Number:** 6

**Team Name:** Team 6

---

## Reporting Period

**Week:** 08

**Meeting Held:** Yes

**Meeting Date:** 2026-07-08

**Meeting Duration:** 63 Minutes

**Meeting Format:** Google Meet

**Meeting Recording:** Meeting not recorded

---

## Project Management Snapshot

Our team uses Trello for project tracking and management. Each team member is responsible for adding their tasks to the appropriate lists: **Meetings**, **Today**, **This Week**, **Later**, and **Done**. As the project progresses, the team may begin using Trello's built-in visual features to prioritize tasks.

Trello is updated after each weekly meeting to reflect newly assigned work. During each meeting, the Scrum Master completes the `weekly-status` file using the `TEMPLATE.md` on GitHub. After reviewing the document, the Scrum Master is responsible for committing and pushing it to the project repository.

---

## Progress Summary Since Last Week

This week, the `weekly-status` documentation template was established, and the team continued researching Flask in preparation for migrating the application. Overall progress during week 8 was lighter than expected due to time spent completing the individual Lab 7 assignment.

---

## Completed Tasks

* **Matt**
  * Researched Flask and investigated challenges with generating dynamic responses in Flask pages.
* **Zeke**
  * Created `TEMPLATE.md` in `weekly-status/`.
* **Cameron**
  * Reviewed Project Milestone 4.
  * Pushed the Milestone 4 documentation to the project repository.
* **Jimmy**
  * Researched SQL/Database design.

---

## Additional Notes:

### Discussion of Project Milestone 4

- Up to four of the five pages can be static.
- Discussed how the search results page should function.
    - One HTML page and one CSS file.
    - A Python script will query the CSV dataset and dynamically display recipe information.
    - The CSV query should return the original recipe source, which will be displayed in an iframe.
    - Users can move to the next available recipe if they do not want the current suggestion.
- Considered whether recipe source links in the CSV are still valid. Even if some are broken, this is acceptable for the scope of the project.
- Discussed writing a script to validate links within the dataset.
- Agreed to create a smaller dataset (approximately 20–40 recipes) that includes images from Cookbooks.com.
- To reduce scope, recipes will not be rendered directly on our site. Instead, the application will follow SuperCook's approach by displaying recipe information, an image, and a link to the original source.
- Discussed how our website should differentiate itself from SuperCook. A similar workflow is acceptable since reinventing the interface is not required.
- Agreed on a simple, clean, and readable design.
    - Flat design with clear typography.
    - Avoid an overly plain appearance (e.g., Times New Roman on a blank white page).
- Referenced https://whatthefuckshouldimakefordinner.com/ as an example of a very simple interface.
- Discussed minimizing user decision fatigue by displaying only one recipe at a time while maintaining a hidden list of all matching recipes.
- Planned page structure:
    - **Landing Page**
        - Dynamic
        - No sidebar
        - May include a "Random Recipe" button.
        - Similar transition flow to Google Search, where the landing page differs from the results page.
    - **Tool / Output Page**
        - Similar to SuperCook, including a sidebar.
    - **About**
        - Static.
    - **Team**
        - Static.
    - **Documentation**
        - Static.
- Matt will write the technical description, including verification methods, required data, and parameters.
- Remaining work includes the mockups/wireframes, page descriptions, and page titles.
- Additional notes may be included where appropriate.

---

## Planned Tasks
* Cameron will create the five wireframe models by the evening of 07-08.
* Zeke will upload `week-08.md` to  `weekly-status/` on 07-08.
* Matt will assign development tasks to groupmates on 07-09.

---

## Document Status
Have all tasks been added to Trello after meeting?  
Not yet

This document will be pushed to the project repository by:  
Zeke Buckholz