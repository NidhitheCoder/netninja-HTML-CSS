video tutorial 1
***********************

- what is html(hypertext markup language)
    - HTML provides the basic structure of sites.
- what is css (cascading style sheet)
    - CSS is used to control presentation, formatting, and layout.
- css used to make web pages with good look.feel look better
- basic tags 
    <!DOCTYPE>
    <HTML>
    <HEAD>
    <BODY>
- how to inspect an element


video tutorial 2
*****************

- Tags
    <strong>  - used to represent the important text of a document on the browser.
    <em>  - emphasized text
    <small>  -  emphasized
    <h1>,<h2>....,<h6> - heading tags
    <ul> - unordered list(dots,bullets,circle,sqare, etc..)
    <ol> - ordered list(numbers,Alphabets,roman letters, etc..)
    <div> -  division or a section in an HTML document.(divide pages into sections)
    <hr> - drow a horizontal line
    <br> - breaking tag for break to next line
    <img> - used to add images to the document.(main attributes src,alt)
    <span> - an inline container used to mark up a part of a text
    <blockquote> - specifies a section that is quoted from another source.
- define styles
-comments - <!-- some comments -->


video 3 tutorial 
****************

- Tags
    <form> - used to create an HTML form for user input
    <label> -display instriction texts or texts
       - attributes- name,id,for etc..
       - for attributes helps to findout which element is represented by specific label 
    <input> -an input field where the user can enter data
        main attributes- types,name etc..
        type attribute -(values - radio,text,password,email,etc ..)
- name attribute is important when using radio type,becouse of it helps group radio inputs


video 4 tutorials
*****************

- how to use css
- <link> -a link between a document and an external resource
    - usage -<link rel="stylesheet" href="style.css" />
- rel - specify relationship between the two documents.
- href - href attribute specifies the URL of the page the link goes to.
- units of measurements in css - px,em,%,cm,ex,in,am,pc,pt etc..
- text decoration - values(underline,none,line-thorugh)
- font family
- text align 
- line height
- letter spacing
- coloumn-count 
    -for make coloums in the document
- border
    - border-width:--px;
    - border-color:--;
    - border-style:--;
    - we can use them together like border:width style colour;
    - we can specify which border we need to style like - border-bottom
- css comments - /* some texts */
- text-shadow - --px --px colour;
- we can pic colour in hexa codes -(#ffffff for white)
- inline elements - it displayed contents space
    - <span>,<img>,<strong>,<em> etc..
- block level tags - it need full width space
    - <p>,<div>,<h1>,<h2>
    - in defaut disply:block
- margin and padding(margin refer outer space of an element padding refer inner space)
- margin become collapse together and bigger value is applied.


video 5 tutorials 
******************

- classname
- selector
- p.error- p tags only affect error class styles
- we can use mutliple classes like - p.error.name
- we can select items by id -#name
    eg #name{ we can style here for an element with id name}
- inner selecter - div p{we can style here for p element that inside a div}
- attribute selector - a[href]{we can style here for an a tag have href attribute}
- text-transform - for text transforming
- a[href*="google"] {we can style here for an a tag its href value include text 'google'}
- a[href$-"google"]{we can style here for an a tag its href value end with text 'google'}
    - if it is .pdf then we can easly identify pdf documents
- the cascade- top to bottom
- html elements inherit from parent elements
- inherit- this property helps to inherit properties from parents
    - eg. margin:inherit
- we can ovwrride styles inherited from parent elemets using write its own properties to child elementss