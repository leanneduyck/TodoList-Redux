Overview:
This is a ReactJS application rebuilt from a previous JavaScript todo-list-app, now incorporating Redux for state management. The application leverages ReactJS with Redux for enhanced state management, ensuring a seamless user experience. It enables users to manage their todo list by adding, toggling, and deleting items. Actions are managed through actions/index.js, reducers are defined in reducers/index.js, and the store configuration is handled in store.js.

Key Features:

1. Add, Toggle, Delete: Users can add new items to the todo list, mark items as completed, and delete items as needed.
2. Keyboard Input: Supports adding new todo items by hitting the enter key after typing.
3. Redux State Management: Utilizes Redux for centralized state management, separating actions and reducers for predictable state updates.
4. Bootstrap-React UI: Built using Bootstrap-React components for a responsive and intuitive user interface.
5. Single View: MainView displays the entire todo list; users interact directly within this view.

Website: https://to-do-list-redux-app.netlify.app/

Technologies Used:

1. ReactJS: Frontend library for building user interfaces.
2. Redux: State management library for predictable state container.
3. Parcel: Bundler for packaging the application code.
4. React Bootstrap: UI framework for responsive design components.
5. Netlify: Platform for continuous deployment and hosting.

Setup Instructions/Commands:

1. Check Node.js Installation: Ensure Node.js is installed using node -v.
2. Initialize Project: Create a package.json file in the project folder with npm init. Remove "main": "index.js" from the package.json file.
3. Set up .gitignore: Add node_modules, .cache, and .parcel-cache to .gitignore.
4. Install Parcel: Globally install Parcel with sudo npm install -g parcel.
5. Install Dependencies: Install React, React DOM, React Redux, and React 6. Bootstrap with npm install --save react react-dom react-redux react-bootstrap.
6. Configure Index.html: Link index.html to index.jsx for application entry point.
7. Build Project: Use Parcel to build the project with parcel src/index.html.
8. Deploy to Netlify: Deploy automatically to Netlify using Parcel, ensuring updates reflect live.
