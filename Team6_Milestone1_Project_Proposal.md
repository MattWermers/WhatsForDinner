# Milestone 1: Project Proposal

## Project Title
**Recpie Finder**

## Team Information
- **Team Number:** 6  
- **Team Name/Product Title:** What's for Dinner 

### Team Members
- **Zeke Buckholz** (GitHub: `ZekeBuckholz`, Email: zebu4871@colorado.edu)  
- **Jimmy Thomas** (GitHub: `jimmyytthomas` , Email: jath1436@colorado.edu)  
- **Matthew Wermers** (GitHub: `MattWermers`, Email: mawe2123@colorado.edu)  
- **Cameron Westbrook** (GitHub: `cwestbro`, Email: cawe3948@colorado.edu)  

### Scheduled Weekly Team Meeting
**Wednesdays, 12:00 PM MT**  
30 minutes via Zoom

---

## Vision Statement
**What’s for Dinner?** is a web application that quickly finds recipes well-suited to ingredients users have on hand.  It combines user-provided input (ingredients and quantities) with required “kitchen staples” (salt, pepper, oil, etc.) to suggest possible recipes that can be prepared without a trip to the grocery store.

---

## Motivation
Many people struggle to use up their groceries before they spoil, whether it’s due to a lack of time, limited store access, or just recipe burnout. **What’s for Dinner?** is a web-based platform that solves this issue by providing satisfying recipes that use only the ingredients in the user’s kitchen. **What’s for Dinner?** will have users saving time and money, reducing food waste, and enhancing their culinary skills.

---

## Risks to Project Completion
- **Scheduling and Coordination Challenges:** Team members are in different time zones, which may limit synchronous development time. Also Team members have different work schedules making it hard to coordinate meetings and tasks.
 
- **Learning Curve with Full-Stack Integration:** Some team members have limited experience connecting frontend interfaces with backend APIs and databases.

---

## Mitigation Strategy
- **Availability Alignment:** The team will rely on asynchronous communication tools such as Trello and GitHub and keep synchronous meetings focused and time-boxed in order to meet everyone's schedule. 
- **Minimum Viable Product First:** The initial goal will be a basic, functional, browser-based product that allows for multiple recipes to be outputted when given a list of ingredients.

---

## Development Method
The team will follow an Agile, sprint-based approach with weekly planning meetings, short development iterations, and continuous integration. Tasks will be broken into small, testable components, allowing the project to adapt based on progress and challenges. The team will elect a scrum master and reassign the scrum master role as seen fit. The active scrum master will facilitate meetings and remove roadblocks in the way of the team's progress. The team will also elect a product owner, who will guide the team through prioritizing the most valuable features. All teammates will act as developers on the delivery team, working together to build the project and tackle objectives collaboratively.

---

## Development Steps
- Define functional and pre-development requirements  
- Define user stories  
- Find targets for web scraping  
- Identify tools/APIs  
- What language will back end logic be in?  
- How will we host the SQL server?  
- How will we send the HTTP request and what will be at POST?  
- Create project website  
- Fulfill pre-deployment requirements and define database schema  
- Implement web scraper  
- Plan schema  
- Data Warehouse or Relational?  
- Primary and foreign keys  
- Build and initialize SQL database.  
- Implement table schema and begin populating tables  
- Test data retrieval directly against the database.  
- Develop backend API and finalize front end.
- Create and test scripts that can run the defined queries.  
- Finalize look and interactables on project front end.  
- Connect front and back end with an HTTP endpoint.  
- Test vs the user stories

---

## Project Tracking
Trello will be the primary tracking tool for this project.  Tasks will be assigned to team members each week with due dates, and lists will be an easy point-of-reference for weekly meetings.  This will streamline communication about weekly progress and provide clarity on each team member’s responsibilities for that week.

---

## Technology Stack
### Frontend
HTML/CSS for layout and styling  
JavaScript with React for managing the dynamic user ingredient list and displaying query results.

### Backend
Python with Flask for RESTful API development  
Python and Bash for web scraping (if implemented)  
Possible API’s, tools, or web scraping targets  
Ingredient parser, needs key, but free if key given: https://zestfuldata.com/  
Preexisting recipe database: https://recipeapi.io/

### Database
SQLite for development, with the option to migrate to PostgreSQL