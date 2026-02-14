Section II. MVP 

This is a priority list from top to bottom. These are the core essentials of the app that absolutely cannot be vulnerable in the CIA. It should take about 4 weeks. The most valuable part of the MVP is retrieving that business metadata.  

 

User registration and authentication: 

Register and or login with apple/google.  

Business authentication. 

Business categories. 

Login and Logout. Set session cookies. 

Forgot password 

Reset password. 

Onboard process. {optional} business scale, preferred audience business type, avatar, location, establishment year.  

User profiles: 

View profile(self). Including, avatar, name, business, {choices to display} and post(s) from oneself or saved.  

Edit profile. 

View others’ profiles. 

Following/connection feature.  

Unfollow/block feature.  

DM window. 

DM features. 

Content creation and feed: 

Create Posts, include text, link, photos, and videos. 

Fetch posts. Prioritize posts from followings.  

Post interaction, including likes, comments, save, and repost.  

Link post(s) to profile page. 

Fetch relevant posts. 

Business metadata.  

Search/discovery:  

Accounts search.  

Search priorities.  

Posts search. {most similar} 

In app notification  

Push notification  

View business metadata 

Deployment.  

____________________________________________________________________________________ 

 

 

Section III. Stage 1 

This is the point where we build ‘what sets this app apart?’ Analyze user feedback and roll out adjustments as well as shipping out additional features through the ci/cd pipeline. The k8 cluster must be done at this point in the development.  

The most important part is to be able to establish a subscription to use the app.  

 

Community: 

A user can create a community to allow other accounts to join. 

Public and Private mode. 

Kick out feature. 

Ruleset.  

Desktop View: 

Design desktop layout.  

Patch SSO login for desktop. 

Set up CORS allowable origin and defend from CORS attack. 

Create UI/UX for creating and going through Business Courses. 

Business Courses: 

Design courses business logic 

Design courses workflow 

Create a business course via desktop.  

Fetch courses, including filters. 

Integrate both desktop and mobile UI to attend courses.  

Chatbot 

Design the database schema, include an FK connected to the account id. 

Chatbot UI 

Test availability during concurrent chatbot interactions  

Advanced settings 

Notification settings. 

In app purchase  

subscription fee for the app 