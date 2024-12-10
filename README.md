(1)
# "parcel": "^2.13.2"  
- here "^" installs the latest minor version of the parcel dependencies. 

# "parcel": "-2.13.2"
- here "-" install the latest major verison of the parcel dependenices.

- It is advisable to use "^" in place of "-" because install some major version might break the app. 

(2)
# package.json 
- configuration for npm and keeps track of what version of the package is install in your system.

# package-lock.json 
- keeps the track of exact version and all the dependencies that is installed and kind of lock the version and keeps the record of it.

# node_modules
- contains all the code that we fetch from the npm and it basically fetches all the code of all the dependencies into our system and is kind of collection of dependencies. 

# .gitignore
- contains all the files that i dont want to put inside my github repo.

# transitive dependencies
- some dependencies can have more dependencies inside them and that is transitive dependencies.

# NOTE
- we can put package.json and package-lock.json in our git repo but no need to put node_modules in git repo.

- also whatever we can regenerate dont put on github. 

- if you have package.json and package-lock.json then you can generate all your node_modules itself by doing "npm install".    

(3) 
# npm
- calling the command for dependencies and JavaScript packages.

# npx 
- executing the package.   

# NOTE
- CDN links("https://unpkg.com/react@18/umd/react.development.js") are not the preferred way to bring react into our project.

(4)
# Parcel
- Dev Build 
- Local Server
- HMR = Hot Module Replacement
- Uses File Watching Algorithm - written in C++
- Caching = Faster Builds
- Image Optimization
- Minification of Files 
- Bundles the Files
- Compresses the Files
- Consistent Hashing 
- Code Splitting
- Differential Bundling = support older browsers
- Diagnostic 
- Error Handling 
- Tree Shaking = remove unused codes 
- Different Dev and Prod budles 

# NOTE
- If you want to start working on an existing proj just go to package.json and there in script you will find the command(start) to run the proj and to build the proj there will be another command(build). 

- npm start = npm run start = execute the package parcel with index.html because we have config this inside package.json. 

(5)
# React Element
- const heading = React.createElement("h1", {id : heading}, "yoo bitch!");
- React.createElement = creates React Element
- ("h1", {id : heading}, "yoo bitch!") = attributes inside the react element
- "h1" = element we want to create
- {id : heading} = id name of the element
- "yoo bitch!" = children of the element we created







 