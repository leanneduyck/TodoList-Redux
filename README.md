<p>I rebuilt my JS todo-list-app using React and Redux.</p>
<p>It allows the user to add, toggle, and delete items from a list; the user is able to click the button or hit the enter key to submit.</p>
<p>MainView is the only view, Actions are created in "actions/index.js", Reducers are defined and stored in "reducers/index.js" and "store.js".</p>
<p>The UI is built using Bootstrap-React.</p>
<p>The Master Branch is the set as default.</p>

<p>Techs Used:</p>
   <ul>
     <li>ReactJS</li>
     <li>Parcel</li>          
   </ul>
<p>Setup Instructions/Commands:</p>
  <ul>
    <li>Check Node is Installed: "node -v"</li>
    <li>Initialize "package.json" file: inside project folder, "npm init"
      <p>- remove "main: index.js"</p></li>
    <li>.gitignore: add "node_modules", ".cache", ".parcel-cache"</li>
    <li>Install Parcel (global): inside project folder, "sudo npm install -g parcel"</li>
    <li>Install Packages+Dependencies: inside project folder, "npm install --save react react-dom"</li>
    <li>Link to "index.html" file: 
        <li>-body</li>
          <li>---div id="root"</div></li>
          <li>---script type="module" src="index.jsx"/script</li>
        <li>-/body</li>
        </li>
    <li>Parcel to Build Project (creates "dist" folder): inside project folder, "parcel src/index.html" (command also used to deploy app every time)</li>
  </ul>
  <p>Dependencies:</p>
  <ul>
     <li>"parcel": "^2.12.0"</li>
     <li>"react": "^18.2.0"</li>
     <li>"react-dom": "^18.2.0"</li>
     <li>"react-bootstrap": "^2.10.2"</li>
    <li>"bootstrap": "^5.3.3"</li>
    <li>"react-redux": "9.1.2"</li>
<li>"src": "1.1.2"</li>
  </ul>
  <p>devDependencies:</p>
  <ul>
     <li>"@babel/runtime": "7.13.8"</li>
     <li>"@parcel/transformer-sass": "^2.12.0"</li>
     <li>"typescript": "4.1.3"</li>
     <li>"process": "^0.11.10"</li>
  </ul>
