# react-programming-task

Welcome to the test, purpose of this exercise is to see your coding style and overall approach to software engineering and planning. In order to start the test please fork this repo, choose tasks to complete and once you are done send pull request.

### Project overview

The project is a simple web app should allow user to login/logout and was created using Next.js (+TypeScript).
Once logged in, the user can see random name and a few widgets. The user's name is fetched from the https://randomuser.me/api/ API. The widgets are just placeholders for now.

### Tasks

#### Login Page

- UI:

  - [ ] Gradient background should be applied to the whole page
  - [ ] Sign in form should be centered horizontally and vertically
  - [ ] Logo should be at the top-left corner of the page
  - [ ] Page should be responsive and look good on mobile devices (iPhone 5/6/7/8)
  - [ ] Refactor HTML/CSS code

- Functionality:
  - [ ] Use localStorage to store current user login state
  - [ ] Use localStorage to store known user's email and password
  - [ ] Password should be stored in localStorage as irreversible hash
  - [ ] Do not allow to login until user enters email and password
  - [ ] If user enters invalid email or password show error message
  - [ ] If user enters valid email and password, store current user email in the localStorage and redirect to the home page
  - [ ] If user is logged in and goes to the /login page redirect to home page
  - [ ] If entered email does not exist in localStorage create a new user and redirect to the home page

#### Home Page

- UI:

  - [ ] Align widgets according to the layout:

  ```
    | nav |      | content |      | content |      |
    | 77px| 40px |  840px  | 32px | 408 px  | 40px |

    |---|-------------------------|
    | * | |=============| |-----| |
    |   |  _____________  |_____| |
    |   | |             |  _____  |
    |   | |             | |     | |
    |   | |             | |_____| |
    |   | |             |  _____  |
    |   | |_____________| |     | |
    |   |  _____   _____  |_____| |
    |   | |     | |     |         |
    | o | |_____| |_____|         |
    |---|-------------------------|
  ```

  - [ ] Navigation sidebar should be fixed to the left side of the page and take 100% of the page height
  - [ ] Navbar logo should be 24px from the top and centered horizontally
  - [ ] Logout button should be 60px from the bottom and centered horizontally
  - [ ] Horizontal space between the Navbar and Page content should be 40px
  - [ ] Horizontal and Vertical space between content widgets should be 32px
  - [ ] Widgets inner space should be 24px
  - [ ] Vertical space from page title to the first widget should be 48px and 64px from the top of the page
  - [ ] Vertical space from the last widget to the bottom of the page should be 40px
  - [ ] Page should be responsive and look good on mobile devices (iPhone 5/6/7/8)
  - [ ] Refactor HTML/CSS code

- Functionality:

  - [ ] Check if user is logged in, if not redirect to the /login page otherwise render the page
  - [ ] Allow User to logout
  - [ ] When logout redirect to the /login page
  - [ ] When logout clear current user from the localStorage (do not delete known users from the localStorage)
  - [ ] On page load you'll need to fetch random user from the https://randomuser.me/api/ API and store it in the Application State
  - [ ] Each 10 sec fetch another user and update the state so that we see new name appears on the page

#### Additional Notes

- In the code you'll see several TODOs which should be removed once addressed
- Feel free to refactor existing code as you see fit
- You're not required to complete all the tasks (hovewer, no one will hold back your desire 😎)
- Once you reach certain point of satisfaction, please write short estimation for the remaining tasks somewhere below

Good Luck!
