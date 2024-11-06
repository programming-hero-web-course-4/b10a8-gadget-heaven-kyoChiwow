# Gadget Heaven
**Live Link**: [https://gadgetsheaven-assignment-8-kyochi-ph.surge.sh/](https://gadgetsheaven-assignment-8-kyochi-ph.surge.sh/)

---

**Requirement Document**
[Click Here](https://drive.google.com/file/d/1KLoUJhM9ij77VF6YK_c5ERBCKUCFVbMX/view?usp=sharing)

---

#### List of Fundamental concepts:
- ***Context API*** : For effecient data management and usage all across the project.
- ***React Router*** : This was used for dynamic routing, nested routes, active links. It became extremely handy when I wanted my components to have dynamic routes.
- ***Helmet for Dynamic Meta Data*** : For having dynamic meta data I found no alternative. This gave me a way to show the user which page they are on even on the browser tabs.
- ***Conditional Rendering*** : With this feature I was able make my website alot user friendly and show dynamic styling using TailwindCSS and DaisyUI. Not only that I was able to render components upon certain condition as well.
- ***Error Handling*** : I have added an error page for the handling unexpected errors. This is a fundamental part of my website as user can run into errors sometime.

---

#### What have I used for handling data?
**Context API** is what I used primarily for data managing and other components using it. But I have also used **Prop Drill** here and there. If it was a single level drill, there I have used **Prop Drill**. But on the other cases where I have to send the data 4-5 level deep, there I have used **Context API**. It took me little while to grasp the functionality of **Context API**. But once I did with research and practice, It became a really handy tool for me. And as for this project managing data became way less complicated and easy!

#### 5 Features of this project:
- ***Dynamic Cart Management:*** Users can view their selected products in the cart, see the total price, sort items by price, and clear the cart. Upon purchasing, a modal displays the total cost and a success message, and the user is redirected to the home page.
- ***Detailed Product Display:*** Each product has a dedicated detail page showing images, price, availability, description, specifications, and user ratings. Users can also add items directly to the cart or wishlist from this page.
- ***Wishlist Functionality:*** A separate wishlist dashboard allows users to save and view products they are interested in purchasing later, with duplicate additions prevented.
- ***Seamless Navigation with React Router:*** Dynamic routes enable quick access to different pages, such as the cart and wishlist dashboards, without page reloads, making for a smooth user experience.
- ***Enhanced User Feedback with Toast Notifications:*** Adding products to the cart or wishlist triggers toast notifications, providing users with instant feedback on their actions, improving engagement and interactivity.


