import{d as g,m as d}from"./debounce-iQbAQcmA.js";import{d as f,r as c,o as k,c as w,e as b,f as l,u as p,_ as v}from"./index-HH4mXSUO.js";const _={class:"markdown-renderer"},M=["value"],x=["innerHTML"],T=`
# Custom Markdown Renderer Test

This is a **test** for the custom Markdown renderer.

\`\`\`javascript
// JavaScript code block
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elit sed tellus varius luctus. Quisque efficitur sapien eget justo tincidunt, ac euismod nisi congue.

### Heading 3

In hac habitasse platea dictumst. Nullam ut ipsum vel quam dignissim dapibus. Proin congue lacus sit amet justo tincidunt, ut scelerisque ex vestibulum.

#### Heading 4

- Item 1
- Item 2
- Item 3

##### Heading 5

1. First
2. Second
3. Third

> 1. This is a blockquote one. 
> 2. This is a blockquote two.
> > 3. This is a blockquote two.


### *It should have a left border and padding.*

*Emphasized Text*

**Strong Text**

---

### This is a paragraph with a [link](https://www.example.com).

![Image](https://th.bing.com/th/id/OIP.CzUsMpGppSJvnoXO7Ef5cQHaLl?rs=1&pid=ImgDetMain)

---

End of the test.
`,$=f({__name:"ZeShowMD",setup(I){const s=c(T),o=c(""),a=g(t=>{const e=t.target;s.value=e.value,r()},100);k(()=>{r()});function m(){const t=new d.Renderer;return t.heading=(e,n)=>`<h${n}">${e}</h${n}>`,t.paragraph=e=>`<p style="font-size: 16px; ">${e}</p>`,t.br=()=>"<br>",t.em=e=>`<em style="font-style: italic;">${e}</em>`,t.blockquote=e=>`<blockquote style="border-left: 2px solid #ccc; padding-left: 10px;">${e}</blockquote>`,t.list=(e,n,i)=>{const u=n?"ol":"ul",h=n&&i!==1?` start="${i}"`:"";return`<${u}${h}>${e}</${u}>`},t}async function r(){const t=await d(s.value,{renderer:m()});o.value=t}return(t,e)=>(w(),b("div",_,[l("textarea",{class:"input",value:s.value,onInput:e[0]||(e[0]=(...n)=>p(a)&&p(a)(...n))},null,40,M),l("div",{class:"output",innerHTML:o.value},null,8,x)]))}}),S=v($,[["__scopeId","data-v-d43ee2a6"]]);export{S as default};
