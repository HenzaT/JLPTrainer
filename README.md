# JLPTrainer - Japanese language flashcard app (for JLPT)
This is a self-directed project. This is a project intended to consolidate my ongoing learning of React.js and TypeScript.

## Goals
As I am half Japanese, I am fluent in Japanese but have never taken the UK Japanese language exam, the JLPT; it is something I'd like to do in the near future. Whilst working through the Scrimba React course, I had the idea to build a flashcard app to help me revise, as I thought React sounded perfect for it. This app will go through many iterations - features will be continuously integrated as I learn more about the React ecosystem and best practices. 

## Tech Stack
- React.js
- TypeScript
- Vite

## Process
I first set up my React project using Vite: 

`npm create vite@latest`\
Selected framework: `React`\
Selected variant: `TypeScript`\
`cd JLPTrainer`\
`npm install`\
`npm run dev`

As always with my projects, I started with a sketch of what I wanted the app to look like, and labelled components and some basic functionality. As components are absolutely vital in React, the sketch will help with the intial build (apologies for the rushed and messy kanji)

<img src="https://github.com/user-attachments/assets/30625f37-55e3-4c9e-ac17-1281181c2ce2" width=40% height=40%>

I first set up my project, thinking about the folder structure in particular. I did this for two reasons: 
- to help with separation of concerns
- I knew I would need to make API requests, but the Scrimba course hadn't covered this yet and so I could only work on the structure of the project.

Throughout the course and whilst building the app, I found it difficult to understand how parent components were related to child components (especially how data was passed down and props). As the course progressed however, and after building a tenzies react app, I understood this much better. At first, for example, I attempted to fetch the kanji api data in the Card component (child). The tenzies app and the smaller meme generator app helped me to understand that hooks like useEffect and API calls should be made in the parent component, which in this case is App.tsx. 

This was a much more ambitious project, as the state management was a lot mroe complex than my react weather app. As I wanted the flashcards to flip, I had to think hard about global vs independent state management. I kept running into issues where clicking one card would keep displaying the details of one kanji, regardless of the card that was clicked. This was due to having one global kanjiDetail state, which would only hold one kanji and update it to the one that was clicked. Therefore I had to change it so that it would keep every kanji that was clicked. This also allowed for easy caching if the kanji had already been clicked.
```
.then((data) => {
  setKanjiDetailsMap(prevKanjiDetailsMap => ({
    ...prevKanjiDetailsMap,
    [character]: data
  }));
```
```
if (kanjiDetailsMap[character]) {
  setFlippedKanji(character);
  return;
}
```

## Reflections
Many people I know who use React have said that it 'clicks' one day and they've never looked back. Although it hasn't clicked for me fully, I'm definitely getting there in some aspects (I particularly like how quickly a barebones app can be built, and how fast it is in terms of performance). I'm still learning about how data is passed down, and how parent/child components interact with each other. Some questions I find myself asking are:
- Where do I put this function?
- Should state be in this component?

## Future Additions
As I am working through a react course, I still need to work out how to:
- render specific sets of cards when the navbar link is clicked
- general refactoring


