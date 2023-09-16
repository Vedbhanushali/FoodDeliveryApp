# Lec 5

## Virtual DOM  

we have representation of DOM which is known as virtual DOM  

React does something as known as reconscilation algorithm that react uses to diff one tree from other  to determine which parts need to be changed  
it determines what need to be changed in UI and what doesn't need to be changed.  
it just render only small portion where change is needed not the whole DOM tree.  
diff algorithm uses keys which are unique to differentiate childs.
React Fibre is the new reconciliation Engine