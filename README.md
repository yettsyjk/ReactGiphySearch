
# React Giphy Search


## Objective

Create a React app that lets a user search the Giphy API for gifs. 

There should be a search bar with a button. When the user presses enter or the button, display the results of the search.


## Instructions

### Step 1: Set up the app


- Navigate inside and run: `npx create-react-app react-giphy-search`
- `cd react-giphy-search`
- Open the code in your editor.
- Run `npm start`
- Commit your work

### Step 2: Create a `SearchContainer` component

- Create a new `SearchContainer` component.
- Import `SearchContainer` into `App.js`.
- Render `SearchContainer` inside `App.js`.
- Commit your work

### Step 3: Add UI for the Search component

- Create a new component called `Search`.
- Have the `Search` component render a search form. This can be a simple form with a single input and submit button.
- Import the `Search` component to your `SearchContainer` component.
- Render the `Search` component in the `SearchContainer` component.
- Commit your work

### Step 4: Wire up the search button

- Define your `Search` component's initial state. It should have a `query` property whose initial value is an empty string (we'll use this to eventually keep track of search terms entered into the form).
- Define a function that updates your `query` value in state whenever a change is made to the input field. You can do this using an `onChange` function in your input.
- Define a function that is triggered whenever the user submits the search form. Start by just logging `"searched!"` to make sure it works.
- Use an event listener to attach this function to your form. Try googling `onSubmit` or take a look at the example from previous lessons.
- Update your submit function so that it now console.logs the `query` value in state.
- **Hint:** Check out the [React docs for forms](https://reactjs.org/docs/forms.html).
- Commit your work

### Step 5: Lift up your state

- In your `SearchContainer` component, create a method that will be used to make the `fetch` call to the Giphy API.
- This method should take one parameter, which will be the query value that will from `Search`. For right now, just `console.log` the value that will get passed into this method.
- Pass this method down to the `Search` component.
- Inisde the `Search` component, call this method from inside the submit handler method that you created in **Step 4** and pass it the value of `query` from state.
- Commit your work

### Step 6: Create logic for when a user performs a search

- Create a `giphys` property in the `SearchContainer` state and set its value to an empty array.
- In the `SearchContainer` method that you created in **Step 5**, take that `query` value that was lifted up from `Search` and use it to make a `fetch` call to the Giphy API. Review the [Giphy search documentation](https://developers.giphy.com/docs/api/endpoint/#search) to see the structure of the API url, the query parameter options, and the structure of the JSON that it sends. At the bare minimum, you'll need to use the `api_key` and `q` query parameters. You can use the API key from this example: [api.giphy.com/v1/gifs/search?api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q=cheeseburgers](api.giphy.com/v1/gifs/search?api_key=QjXFDP8q5BRdZP5o4pZwDjfv7g46b7ve&q=cheeseburgers). When you look at the structure of the API url, how can you build that url in such a way so that the value of `q` is dynamically inserted into the `fetch` url?
- Once you get the results back and parsed them, set the data as the value of `giphys`.
- Commit your work

### Step 7: Display the results

- Create a `Results` component that will take the `giphys` data that will be passed down from `SearchContainer` and render each item's `url` from the `downsized_large` object (take a look at the data that is returned from the Giphy API to see what `downsized_large` is).
- Import the `Results` component into `SearchContainer`.
- Render the `Results` component right underneath `Search` and pass `giphys` as a prop.
- If a user can search for a term and return a list of images/gifs that display on the page, then you're done!
- Commit your work


