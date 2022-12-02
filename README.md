# Development

### Link to Deployed Website
If you used the stencil code, this is `https://happyfrog612.github.io/`

### Goal and Value of the Application
The goal of this application was to create a simple music instrument shop where the users
could sort through selected goods to find what they need!

### Usability Principles Considered
I tried to anticipate the users' needs by giving them multiple sorting options while not overwhelming them.
The Interface is pretty minimal and easy on the eyes, with some interactions that can help to guide the eye. 

### Organization of Components
I have an instrument component that is pretty similar to the bakeryitem component from lab. I also
have a cart aggregator that serves as my second item that can have items added to it and removed with the click 
of the minus button. 

### How Data is Passed Down Through Components
I have a stackFilters() helper method that is used to filter the given array with whatever the current sorting state is
in the misc state as well as the inst state. 

### How the User Triggers State Changes
You can trigger state changes by clicking buttons on the site! When you sort, or add to cart, or remove from cart, some 
element of the state should change. 
