# Lec 12

## writing CSS methods

### External CSS file  

traditional methods of writing CSS.  

### CSS / SCSS and SASS  

SCSS and SASS make CSS writing experience great - super power for CSS.
for example  
JSX -> HTML after rendering similarly  
SCSS and SASS -> CSS  

### Inline CSS  

using style attributes which takes JS object  

```jsx
<h1 style={heading}>Hey</h1>
<script>  
    const heading = {
        backgroundColor: "red",
        borderColor: "blue"
    }
</script>
```

or we can also write directly

```jsx
<h1 
style={
    backgroundColor: "red",
    borderColor: "blue"}
>Hey</h1>
```

### Styled components  

write CSS inside JS just like HTML in JSX

### CSS Libary like Material UI/TailwindCSS/Ant Design/Base UI/Chakra UI

Pros -  
Easy to use
reusablity  
consistent UI  
takes care of responsiveness

Cons -  
Bundle size heavy
loss control of design and looks
customization of UI of library is difficult  

---

## tailWindCSS

CSS on go(in the same file)  
reusablility  
less bundle size  
Flexible UI(customization)  

It override normal CSS default behaviour it recommended
to only use Tailwind CSS.  

Every class we write should be unique.

Installation - Refer DOCUMENTATION  <https://tailwindcss.com/docs/installation>  

importing TAILWIND CSS using CDN

```javascript
<!-- Tailwind CSS using CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
```

importing Tailwind CSS using npm package

```javascript
npm install -D tailwindcss postcss
npx tailwindcss init
```

Job of postcss - compile tailwind css to normal css

after tailwind init  
modify content of tailwind.config.js file

In index.css there will be CSS file we just have to put this in that file nothing else

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install Tailwind extension in visual studio for better development experience.
