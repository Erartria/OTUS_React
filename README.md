# Otus ReactJS lessons

## Initialized React application

### Scripts
```json
"scripts": {
    "storybook:start": "storybook dev -p 6006",
    "storybook:build":"storybook build",

    "deploy:gh-pages": "npm run build && gh-pages -d build",
    "deploy:chromatic": "npx chromatic --project-token=chpt_a36ecc0344f9f14",
    
    "test:loki": "npx loki test",
    "test:jest": "jest",

    "update:loki": "npx loki update",

    "lint": "npx eslint --ext .js,.jsx,.ts,.tsx --fix ./",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
  }
```
To start project just write `npm start` command at terminal

### Libs and features

1. Husky - lib for prechecking local commits and pushes
2. Loki - lib for testing screenshots
3. elsint - lib for checking code style
4. jest - testing lib
5. storybook - preview for UI components

