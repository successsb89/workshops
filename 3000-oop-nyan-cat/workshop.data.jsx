<>
{/*. id */}
workshops-nyan-cat
{/*. name */}
Nyan cat (OOP)
{/*. runlocally */}

{/*. header */}



{/*. footer */}

Open the index.html file in your browser.
      








{/*. exercises */}

{/*. desc */}

Run the project and answer the following questions

{/*. q */}
What is the maximum number of cats on the screen at any given time?

{/*. q */}
What happens when the cat intersects with the burger?

{/*. q */}
In which direction can the burger move? 










{/*. prereqs */}

{/*. desc */}

You need to be familiar with the following pieces of information
    to be able to make sense of this tutorial

{/*. term */}

position

{/*. desc */}

position is a css property. In this project, we will be assigning
            the position property to absolute for some DOM nodes. By default, the value
            of this property is static.
            A DOM node with an absolute position can be placed anywhere on the screen,
            regardless of where the parent node is located.
            To place the DOM node at a specific position on the screen, use the top and left
            css properties
            

{/*. term */}

style

{/*. desc */}

Every DOM node has a style property.
            you can modify the css properties of the DOM node using this property.

{/*. term */}

z-index

{/*. desc */}

This css property determines whether or not the DOM node
            will be hidden by another DOM node. 
           It cannot be used if the position of the DOM node is static.
           If you're using it with the style property of the DOM node, it is written
           zIndex instead of z-index  

{/*. term */}

code

{/*. desc */}

Every keyboard interaction with the user generates an event.
            The event has a code property. This code property is a string that
            represents the key that the user pressed.

{/*. term */}

(new Date).getTime()

{/*. desc */}

This expressions evaluates to the
             number of milliseconds since January 1st 1970. You can
            just copy paste it when needed.

{/*. term */}

Class

{/*. desc */}

A class is a template. We can use the <code>{`new`}</code> keyword to create
            objects from a class.  

{/*. term */}

forEach

{/*. desc */}

Every array has a forEach property. This property refers to a function.
            The function takes another function as an argument. It returns undefined.
            The argument function is called once on every element of the array.   

{/*. term */}

filter

{/*. desc */}

Every array has a filter property. This property refers to a function.
            The function takes another function as an argument. It returns an array.
            The argument function is called once on every element of the array.
            Every time the argument function is called, its return value is analyzed.
            If it returns true, then the element is in the returned array.
            If it returns false, then the element is not in the returned array.










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
If you create a node with document.createElement, how do you modify its css?

{/*. q */}
Is the length of the array returned by filter always smaller than the length
        of the original array?

{/*. q */}
if `arr.length` is `10`, how many times would `f` be called in `arr.forEach(f)` ?

{/*. q */}
If you wanted to console.log every element of an array, what would you use?

{/*. q */}
if <code>{`arr.length`}</code> is 10, is it possible that <code>{`arr.filter(f).length`}</code> is 24 for some function `f`? 

{/*. q */}
if <code>{`f=() => {return false}`}</code>, what is arr.filter(f)?

{/*. q */}
How can I find out the number of milliseconds between now and January 1st 1970?

{/*. q */}
If I have an event object generated by the browser when a user presses a key,
        how do I check which key they pressed?

{/*. q */}
What is the difference between position:absolute and position:static ?










{/*. source */}
{/*. file-path */}
index.html
{/*. 1 */}
We create an HTML page with a head and a body

{/*. 2 */}
We create a div and set its id attribute to "app". We need to specify the
        id attribute because we will be using document.getElementById (in Engine.js).
        This is going to be the parent of all the DOM elements that we'll be adding
        to our DOM

{/*. 3 */}
We split our javascript into several files (for pedagogical reasons).
        We will be going over each file one by one in the following slides.
        the <code>{`script`}</code> tag is used to import javascript into your HTML









{/*. source */}
{/*. file-path */}
js/data.js
{/*. 1 */}
In this file we have some data that the other
source files will use. Most of this data is stored in
constants. Constants are just variables that never change. By convention,
we write constants with upper case letters. The GAME_WIDTH and GAME_HEIGHT constants
denote the size of the game area in pixels and is used in engine-utilities.js

{/*. 2 */}
These constants represent the width and height of an enemy in pixels as well
        as the maximum number of enemies on screen at any given time. 

{/*. 3 */}
These constants represent the player width and height. 









{/*. source */}
{/*. file-path */}
js/Enemy.js
{/*. 1 */}
The Enemy class will contain information about the enemy such as its position on screen. It will
        also provide methods for updating and destroying the enemy

{/*. 2 */}
The constructor takes 2 arguments. I gave them funny names so that you can easily see that they
        are parameters to the constructor. Usually we would just call them root, enemySpot and gameHeight.

- theRoot will refer to the parent DOM element.
We need a way to add the DOM element we create in this constructor to our DOM.
- enemySpot is the position of the enemy (either 0, 1, 2, 3 or 4)


        Since the constructor takes 2 parameters
        and the 2 parameters provide important information, we must supply 2 arguments to <code>{`new`}</code> every time we
        create an instance of this class. For example
<pre>{`
        new Enemy(root, 3)
`}</pre>

        or

<pre>{`
        new Enemy(someRoot, 0)
`}</pre>


        

{/*. 3 */}
When we create an Enemy instance, for example:

<pre>{`
        new Enemy(someRoot, 3)
`}</pre>

        A new object is created and the constructor of the Enemy class is called. The context (the <code>{`this`}</code> keyword) is going
        to be the new object. In these lines of code we see how to add 2 properties to this object: spot, root.

        We do this because we want to access this data in the other methods of the class.

- We need the root DOM element so that we can remove the enemy when it is no longer needed. This will be done at a later time.
- We need to keep track of the enemy spot so that we don't place two enemies in the same spot.



        

{/*. 4 */}
The x position of the enemy is determined by its width and its spot. We need this information for the lifetime
        of the instance, so we make it a property of the instance. (Why is this information needed for the lifetime of the instance?)

{/*. 5 */}
The y position is initially less than 0 so that the enemies fall from the top. This data is stored as a property
        of the instance since it is needed throughout its lifetime. The destroyed property will indicate whether this enemy is still in play. It is set to true whenever the enemy goes past the bottom of the screen. It is used in the Engine to determine whether or not an enemy is in a particular column.

{/*. 6 */}
We create a new DOM element. The tag of this DOM element is img. It is the DOM node that will display the enemy image
        to the user. When the enemy is no longer needed, we will use a reference to this DOM node to remove it from the game. This
        is why we create a property that refers to it.

        We give it a src attribute to specify which image to display

        We modify the CSS style of the DOM node
- position: "absolute" means that the DOM node is positioned according to the top left of the browser window according to its <code>{`left`}</code> and <code>{`top`}</code>
css properties (see below)
- left: the distance from the left margin of the browser. Since we write px it is measured in pixels
- top: the distance from the top margin of the browser. Since we write px it is measured in pixels
- zIndex: this property is needed to make sure that the enemy is not hidden behind another DOM node
        

{/*. 7 */}
So that the user can see the img DOM node, we append it to the root DOM node.

{/*. 8 */}
We set the speed property of the enemy. This determines how fast it moves down the screen.
        To make sure that every enemy has a different speed, we use <code>{`Math.random`}</code> 

{/*. 9 */}
this method will be called on the enemy instance every few milliseconds. The parameter
        <code>{`timeDiff`}</code> refers to the number of milliseconds since the last update was called. 

{/*. 10 */}
We update the <code>{`y`}</code> property of the instance in proportion of the amount of time
        since the last call to update. We also update the <code>{`top`}</code> css property so that the image
        is updated on screen

{/*. 11 */}
If the y position of the DOM element is greater than the GAME_HEIGHT then the enemy is at the bottom
        of the screen and should be removed. We remove the DOM element from the root DOM element and we set
        the <code>{`destroyed`}</code> property to indicate that the enemy should no longer be in play 









{/*. source */}
{/*. file-path */}
js/Player.js
{/*. 1 */}
There will only be one instance of this class. This instance will contain the
        data and methods related to the burger that moves at the bottom of your screen 

{/*. 2 */}
The constructor takes one parameter. This parameter refers to the parent DOM node. We will be
        adding a DOM element to this parent DOM node. Here is an example of how we create an instance of this class:
        
<pre>{`
        new Player(theRoot)
`}</pre>
        

{/*. 3 */}
The x position starts off in the middle of the screen. Since this data is needed every time we move the player, we
        store the data in a property of the instance. It represents the distance from the left margin of the browsing area to
        the leftmost x position of the image.

{/*. 4 */}
The y position never changes, so we don't need to store it in a property. It represents the y position of the top of the
        hamburger. The y position is the distance from the top margin of the browsing area.

{/*. 5 */}
We create a DOM node. We will be updating the DOM node every time we move the player, so we store a reference to the
         DOM node in a property.

{/*. 6 */}

         We give it a src attribute to specify which image to display

        We modify the CSS style of the DOM node
- position: "absolute" means that the DOM node is positioned according to the top left of the browser window according to its <code>{`left`}</code> and <code>{`top`}</code> 
css properties (see below)
- left: the distance from the left margin of the browser. Since we write px it is measured in pixels
- top: the distance from the top margin of the browser. Since we write px it is measured in pixels
- zIndex: this property is needed to make sure that the image is not hidden behind another DOM node
        
         

{/*. 7 */}
Show that the user can actually see the img DOM node, we append it to the root DOM node.

{/*. 8 */}
This method will be called when the user presses the left key. See in Engine.js
        how we relate the key presses to this method  

{/*. 9 */}
If leftmost x position of the player is greater than 0 then
        we change the x property of the player   

{/*. 10 */}
We modify the DOM element to reflect the new x position   

{/*. 11 */}
We do the same thing for the right key. See Engine.js to see when this happens.









{/*. source */}
{/*. file-path */}
js/engine-utilities.js
{/*. 1 */}
In this file we have functions that will be used in the Engine.js file. I put these functions
        in a separate file for pedagogical purposes.

        nextEnemySpot is a variable that refers to a function. The function has one parameter,
        which we called enemies. enemies will refer to an array. The array will contain instances of the
        Enemy class. To get more information about the argument that will get passed to this function,
        please see the Engine.js file.

        The purpose of this function is to determine in which slot to place our next enemy. The possibilities
        are 0, 1, 2, 3 or 4
        

{/*. 2 */}
enemySpots will refer to the number of spots available (can you calculate it?)  

{/*. 3 */}
To find out where to place an enemy, we first need to find out which are the spots available.
        We don't want to place two enemies in the same lane. To accomplish this, we first create an
        array with 5 elements (why 5?) and each element is false.

        We then use forEach to iterate through all the enemies. The argument to forEach is a function and
        the parameter of that function is <code>{`enemy`}</code>. This function will be called once for each enemy in the game
        and each time the function is called, <code>{`enemy`}</code> will refer to a different instance of the <code>{`Enemy`}</code> class.

        If you look at the constructor of the <code>{`Enemy`}</code> class, you can see that every instance will have a <code>{`spot`}</code> property.
        We can use this property to modify the <code>{`spotsTaken`}</code> array.

        For example, if

<pre>{`
        enemies = [{spot: 1}, {spot: 3}]
`}</pre>

        then <code>{`spotsTaken`}</code> will be

<pre>{`
            [false, true, false, true, false]
`}</pre>

        Which indicates that only indices 0, 2 and 4 are available (what is different about these indices?)

{/*. 4 */}
We are now in a position to set the position of the enemy. We declare a variable candidate that is initially undefined.
        candidate represents a potential spot.
        The variable will be repeatedly assigned different numbers.
        We will randomly try different spots until we find one that is available  

{/*. 5 */}
The <code>{`candidate`}</code> variable is assigned a random number between <code>{`0`}</code> and <code>{`enemySpots`}</code> (not including enemySpots). (what number is enemySpots?) 

{/*. 6 */}
When the while loop is finished, we are assured that we have a number that corresponds to a free spot, so we return it.

{/*. 7 */}
addBackground contains all the logic to display the starry background of the game.
        It is a variable that refers to a function.
        The function takes one parameter
        The parameter represents the DOM node to which we will add the background
           

{/*. 8 */}
We create a new img DOM node.  

{/*. 9 */}
we set its CSS height attribute to the height and its CSS width attribute to the width using the style property

{/*. 10 */}
We add it to the root DOM node 

{/*. 11 */}
We don't want the enemies to go beyond the lower edge of the image so we place a white div to hide the enemies after
        they reach the bottom. To see what it does, you can comment out all the remaining lines in the function to see the effect. 

{/*. 12 */}
We modify the CSS attributes of the DOM element
- zIndex: We put a high z-index so that the div is placed over all other DOM nodes
- position: "absolute" is needed otherwise we can't set the z index
- top: the distance of the top of the div to the top of the viewport
- height: the height of the div
- width: the width of the div
- background: the background color of the div (white)
        

{/*. 13 */}
Finally we append the white div to the root element   









{/*. source */}
{/*. file-path */}
js/Engine.js
{/*. 1 */}
The engine class will only be instantiated once. It contains all the logic
    of the game relating to the interactions between the player and the
    enemy and also relating to how our enemies are created and evolve over time  

{/*. 2 */}
The constructor has one parameter. It will refer to the DOM node that we will be adding everything to. You
    need to provide the DOM node when you create an instance of the class

    Here is an example of how you could create an instance of this class

<pre>{`
    document.getElementById("app") // assuming you have a DOM element with an id of "app"
`}</pre>
    

{/*. 3 */}
We need the DOM element every time we create a new enemy so we store a reference to it in a
    property of the instance

{/*. 4 */}
We create our hamburger. Please refer to Player.js for more information about what happens when
    you create a player

{/*. 5 */}
Initially, we have no enemies in the game. The <code>{`enemies`}</code> property refers to an array
    that contains instances of the Enemy class 

{/*. 6 */}
We add the background image to the game 

{/*. 7 */}
The gameLoop will run every few milliseconds. It does several things
- Updates the enemy positions
- Detects a collision between the player and any enemy
- Removes enemies that have a position below the  from the <code>{`enemies`}</code> array

{/*. 8 */}
This code is to see how much time, in milliseconds, has elapsed since the last
    time this method was called.

    The code
<pre>{`
    (new Date).getTime()
`}</pre>
    evaluates to the number of milliseconds since January 1st, 1970 at midnight.

    If the method was never called then <code>{`this.lastFrame`}</code> is undefined and
    we set <code>{`this.lastFrame`}</code> to the current time. This only happens once.

    We take the difference between the current time and <code>{`this.lastFrame`}</code>. Unless
    this is the first time we're calling this method, <code>{`this.lastFrame`}</code> was updated
    the last time the <code>{`gameLoop`}</code> method was called.
    

{/*. 9 */}
We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
    Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)  

{/*. 10 */}
We remove all the destroyed enemies from the array referred to by <code>{`this.enemies`}</code>.
    We use filter to accomplish
    this. Remember: <code>{`this.enemies`}</code> only contains instances of the Enemy class.
    filter takes a function as an argument. The function
    must returns either true or false. We chose enemy as the parameter name (will another name also work?).

    For every element of the array, the function will be called and the parameter <code>{`enemy`}</code> will refer to
    that instance
    of the Enemy class. If the return value is true, then the element is included
    in the array that filter returns. Otherwise it is omitted.
    In other words, if <code>{`enemy.destroyed`}</code> is true, then <code>{`!enemy.destroyed`}</code> is false and the array
    created by filter will not contain that particular instance of the Enemy class.

    For example, if
<pre>{`
    this.enemies = [{destroyed: true, y: 200}, {destroyed: false, y: 100}, {destroyed: true, y: 150}]
`}</pre>

    then, after these lines are evaluated, we will have

<pre>{`
    this.enemies = [{destroyed: false, y: 100}]
`}</pre>

    

{/*. 11 */}
We need to perform the addition of enemies until we have enough enemies.

    For example, if <code>{`enemies = []`}</code> and <code>{`MAX_ENEMIES = 3`}</code>, then the loop will run 3 times since,
    as we will see, every time the loop is run, we push a new element into <code>{`enemies`}</code>  

{/*. 12 */}
We find the next available spot and, using this spot, we create an enemy. We add this enemy
    to the <code>{`enemies`}</code> array 

{/*. 13 */}
We check if the player is dead. If he is, we alert the user and return from the method (Why is the
      return statement important?)

{/*. 14 */}
If the player is not dead, then we put a setTimeout to run the gameLoop in 20 milliseconds

{/*. 15 */}
This method is not implemented correctly, which is why the burger never dies. In your exercises
    you will fix this method.  









{/*. source */}
{/*. file-path */}
js/main.js
{/*. 1 */}
We create an instance of the Engine class. Looking at our index.html, we see that it has
        a div with an id of <code>{`"app"`}</code>  

{/*. 2 */}
keydownHandler is a variable that refers to a function. The function has one parameter
        (does the parameter name matter?) which is called event. As we will see below, this function
        will be called every time the user presses a key. The argument of the function call will be an object.
         The object will contain information about the key press, such as which key was pressed. 

{/*. 3 */}
<code>{`event.code`}</code> contains a string. The string represents which key was press. If the
         key is left, then we call the moveLeft method of <code>{`gameEngine.player`}</code> (where is this method defined?)

{/*. 4 */}
If <code>{`event.code`}</code> is the string that represents a right arrow keypress, then move our hamburger
        to the right  

{/*. 5 */}
We add an event listener to document. <code>{`document`}</code> is the ancestor of all DOM nodes in the DOM. All events
        bubble up to document. <code>{`document.addEventListener`}</code> refers to a function. The function takes two arguments.
        The first argument is a string that represents an event. For a complete list of all events, please refer to
        [this page](https://developer.mozilla.org/en-US/docs/Web/Events)

        The second argument is a function that will get called every time a user interaction occurs that matches the
        type of the first argument. The function gets called with an object. The object contains information about
        the user interaction.
        

{/*. 6 */}
We call the gameLoop method to start the game









{/*. source */}
{/*. file-path */}
js/Text.js
{/*. 1 */}
This class is not used in the project yet. You will use it in one of the
        homework questions  

{/*. 2 */}
The constructor has three parameters. Here is an example of how you would create an instance
        of this class
        
<pre>{`
        new Text(theRoot, 200, 200)
`}</pre>
        

{/*. 3 */}
We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
        set the <code>{`domElement`}</code> property of the instance to the newly created DOM element so we can update it later 

{/*. 4 */}
This method is used to update the text displayed in the DOM element









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
What are the classes in this project and what are the properties
        of their instances?

{/*. q */}
How many times will each class be instantiated?

{/*. q */}
How is each class related?

{/*. q */}
How many arguments does document.addEventListener take? What does each argument represent?

{/*. q */}
Looking at the DOM, there's a white div at the bottom. What is it for?

{/*. q */}
How do the cats move down the screen? Which are the related lines of code?

{/*. q */}
In CSS, what is position absolute? Why do we need it for this project?

{/*. q */}
Why do we need to use setTimeout in this project? Could we replace it with a while loop?

{/*. q */}
What is the maximum number of enemies on the screen at any given time?

{/*. q */}
What happens if we change MAX_ENEMIES to 10 without changing anything else? (You can try it to see if your hypothesis is correct)

{/*. q */}
What's the point of the data.js file? What kind of variables go into this file? Why are the variables named with a different convention?

{/*. q */}
In which file and on which line is the Enemy class instantiated? What's the fastest way to find out in vscode?

{/*. q */}
Assuming you have an infinitely fast computer, how often is the screen redrawn per second?

{/*. q */}
How do you change the CSS of a DOM node in javascript? Find every occurrence of this process in this project.










{/*. exercises */}

{/*. desc */}

Summarize and try to rewrite the code from the summary. For the difficult sections you can refer to the original code

{/*. q */}
Fix the isPlayerDead method in Engine.js

{/*. q */}
Change the maximum number of enemies to 2

{/*. q */}
Increase the maximum number of enemies every 10 seconds (to a maximum of 5)

{/*. q */}
Add text at the top right to show what your score is. Use the Text class provided
    in Text.js . The score should increase as the game progresses.

{/*. q */}
Increase the speed of the enemies as the game progresses

{/*. q */}
Right now the burger can only move left and right. Make it so that
   the burger can also move up and down

{/*. q */}
Change the images to better suit your personality

{/*. q */}
Make the enemies move diagonally instead of just up and down

{/*. q */}
Create two types of enemies: one slow and one quick. When adding an enemy
    to the game, randomly choose between the two types

{/*. q */}
Innovate something great!











</>