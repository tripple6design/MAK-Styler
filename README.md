# MAK Styler
 
 This is a webtoy which will remove inline style tas for any HTML elements pasted into it.

 ## How it works

 When you paste HTML into the textarea textbox the tool will automatically load it into a Document Fragment, perform a querySelectorAll query on the document fragment for anything with a style attribute.  It will then use the Element.removeAttribute function to remove them from each of the elements in the NodeList.  When this procedure is completed, the HTML from the document fragment will then be displayed on the screen for copy-paste.