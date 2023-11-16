(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c,s,a,i,r,o,l,b,d,j,m,h,O,g=n(0),u=n.n(g),x=n(30),p=n.n(x),y=(n(53),n(63)),v=n(110),f=n(111),w=n(108),N=n(61),k=n(11),C=n(6),I=n(113),$=n(104),_=n(62),S=n(13),D=n(109);Object(D.a)(c||(c=Object(S.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));const q=Object(D.a)(s||(s=Object(S.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),H=Object(D.a)(a||(a=Object(S.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),T=Object(D.a)(i||(i=Object(S.a)(["\n  mutation removeCategory($categoryId: ID!) {\n    removeCategory(categoryId: $categoryId) {\n      _id\n    }\n    \n  }\n"]))),L=Object(D.a)(r||(r=Object(S.a)(["\n  mutation removeHobby($hobbyId: ID!, $categoryId: ID!) {\n    removeHobby(hobbyId: $hobbyId, categoryId: $categoryId) {\n      _id\n    }\n    \n  }\n"]))),E=Object(D.a)(o||(o=Object(S.a)(["\n  mutation removeComment($hobbyId: ID!, $commentId: ID!) {\n    removeComment(hobbyId: $hobbyId, commentId: $commentId) {\n      _id\n    }\n    \n  }\n"]))),F=Object(D.a)(l||(l=Object(S.a)(["\n  mutation addCategory ( $title: String!, $description: String!){\n    addCategory ( title: $title, description: $description) {\n\n      title\n      description\n\n    }\n  }\n"]))),P=Object(D.a)(b||(b=Object(S.a)(["\n\nmutation addHobby ($categories: ID!, $title: String!, $description: String!){\n  addHobby ( categories: $categories, title: $title, description: $description) {\n\n    title\n    description\n    categories {\n      _id\n      title\n    }\n    users {\n      _id\n    }\n  }\n  \n}\n"]))),B=Object(D.a)(d||(d=Object(S.a)(["\nmutation addComment ( $hobbies: ID!, $content: String! ){\n  addComment ( hobbies: $hobbies, content: $content ) {\n    content\n    hobbies {\n      _id\n      title\n    } \n    users {\n      username\n    }\n    \n  }\n  \n}\n"])));Object(D.a)(j||(j=Object(S.a)(["\nmutation addHobbyLike ($_id: String!, $likes: Int!){\n  addHobbyLike ( likes: $likes ) {\n    likes\n  }\n}\n"]))),Object(D.a)(m||(m=Object(S.a)(["\nmutation addCommentLike ($_id: String!, $likes: Int!){\n  addCommentLike ( likes: $likes ) {\n    likes\n  }\n}\n"]))),Object(D.a)(h||(h=Object(S.a)(["\nmutation addHobbyDislike ($_id: String!, $dislikes: Int!){\n  addHobbyLike ( dislikes: $dislikes ) {\n    dislikes\n  }\n  \n}\n"]))),Object(D.a)(O||(O=Object(S.a)(["\nmutation addCommentDislike ($_id: String!, $dislikes: Int!){\n  addCommentLike ( dislikes: $dislikes ) {\n    dislikes\n  }\n  \n}\n"])));var Y,J,z,A,Q,U,K,G;const M=Object(D.a)(Y||(Y=Object(S.a)(["\n  query users {\n    users {\n      _id\n      email\n      username\n      hobbies{\n        _id\n        title\n        description\n      }\n      comments{\n        _id\n        content\n      }\n\n    }\n  }\n"]))),V=Object(D.a)(J||(J=Object(S.a)(["\nquery hobbies($categories: ID! ) {\n  hobbies(categories: $categories) {\n    _id\n    title\n    description\n    categories{\n      _id\n      title\n      description\n    }\n\n  }  \n}\n"]))),W=Object(D.a)(z||(z=Object(S.a)(["\n  query category($categoryId: ID! ) {\n    category(categoryId: $categoryId) {\n      _id\n      title\n      description\n\n    }  \n  }\n"]))),R=Object(D.a)(A||(A=Object(S.a)(["\n  query categories {\n    categories {\n      _id\n      title\n      description\n      hobbies{\n        _id\n        title\n        description\n      }\n    }\n  }\n"]))),X=(Object(D.a)(Q||(Q=Object(S.a)(["\n  query comments{\n    comments {\n      _id\n      content\n      users {\n        username\n      }\n      hobbies { category }\n    }\n  }\n"]))),Object(D.a)(U||(U=Object(S.a)(["\n  query comments($hobbies: ID!) {\n    comments(hobbies: $hobbies) {\n      _id\n      content\n      hobbies{\n        _id\n        title\n        description\n      }\n      users {\n        _id\n        username\n        \n      }\n    }\n  }\n"])))),Z=Object(D.a)(K||(K=Object(S.a)(["\n  query hobby($hobbyId: ID!) {\n    hobby(hobbyId: $hobbyId) {\n      _id\n      title\n      description\n      categories {\n        title\n      }\n      comments {\n        _id\n        content\n        users {\n          _id\n          username\n          \n        }\n      }\n      users {\n        _id\n        username\n        \n      }\n    }\n  }\n"]))),ee=Object(D.a)(G||(G=Object(S.a)(["\n  query me {\n    me {\n      _id\n      username\n      hobbies{\n        _id\n        title\n        description\n      }\n    }\n  }\n"])));var te=n(47);var ne=new class{getProfile(){return Object(te.a)(this.getToken())}loggedIn(){const e=this.getToken();return!(!e||this.isTokenExpired(e))}isTokenExpired(e){return Object(te.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}getToken(){return localStorage.getItem("id_token")}login(e){localStorage.setItem("id_token",e),window.location.assign("/")}logout(){localStorage.removeItem("id_token"),window.location.reload()}},ce=n(31),se=n(1);var ae=Object(ce.withSwal)((e=>{let{category:t,swal:n}=e;const[c,s]=Object(g.useState)(""),[a,i]=Object(g.useState)(""),[r,o]=Object(g.useState)(null),[l,b]=Object(g.useState)(0),{loading:d,data:j}=Object(I.a)(R),m=(null===j||void 0===j?void 0:j.categories)||[],h=m.map((e=>({value:e._id,label:e.title}))),[O,u]=Object(g.useState)([]);Object(g.useEffect)((()=>{u(m.map((e=>({value:e._id,label:e.title}))))}),[m]),Object(g.useEffect)((()=>{if(t){const e=O.find((e=>e.label===t));r&&e===r||o(e)}}),[t,O,r]);const[x,{loading:p,error:y}]=Object($.a)(P,{update(e,t){let{data:{addHobby:n}}=t;try{const{categories:t}=e.readQuery({query:W}),c=t.map((e=>e._id===n.categories[0]._id?{...e,hobbies:[...e.hobbies,n]}:e));e.writeQuery({query:R,data:{categories:c}})}catch(c){console.error(c)}}}),v=e=>{const{name:t,value:n}=e.target;"description"===t&&n.length<=280?i(n):s(n),b(c.length+a.length)};return Object(se.jsxs)("div",{className:"form-group",children:[Object(se.jsx)("h5",{children:"Add a New Hobby"}),ne.loggedIn()?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)("p",{className:"m-0 ".concat(280===l||y?"text-danger":""),children:["Character Count: ",l,"/280"]}),Object(se.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await x({variables:{title:c,description:a,categories:r.value}}),s(""),i(""),o(null),n.fire({title:"Hobby added",icon:"success",confirmButtonText:"OK"}).then((()=>{window.location.reload()})),setTimeout((()=>window.location.reload()),2e3)}catch(t){console.error("Error creating hobby:",t)}},children:[Object(se.jsx)("div",{children:Object(se.jsx)("label",{children:" Title:"})}),Object(se.jsx)("input",{value:c,onChange:v}),Object(se.jsx)("label",{children:"Description:"}),Object(se.jsx)("input",{name:"description",value:a,onChange:v}),Object(se.jsx)("label",{children:"Category:"}),Object(se.jsx)(_.a,{options:h,value:r,onChange:o,isClearable:!0}),Object(se.jsx)("button",{type:"submit",disabled:!c||!a,children:p?"Creating...":"Create Hobby"}),y&&Object(se.jsxs)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:["Error creating hobby: ",y.message]})]})]}):Object(se.jsxs)("p",{children:["You need to be logged in to add a Hobby. Please"," ",Object(se.jsx)(k.b,{to:"/login",children:"login"})," or ",Object(se.jsx)(k.b,{to:"/signup",children:"signup."})]})]})})),ie=n(26),re=n.n(ie);var oe=Object(ce.withSwal)((e=>{let{swal:t}=e;const[n,c]=Object(g.useState)(""),[s,a]=Object(g.useState)(""),[i,r]=Object(g.useState)(0),[o,{loading:l,error:b}]=Object($.a)(F,{update(e,t){let{data:{addCategory:n}}=t;try{const{categories:t}=e.readQuery({query:R});e.writeQuery({query:R,data:{categories:[...t,n]}})}catch(c){console.error(c)}}}),d=e=>{const{name:t,value:i}=e.target;"description"===t&&a(i),"title"===t&&c(i),r(n.length+s.length)};return Object(se.jsxs)("div",{children:[Object(se.jsx)("h5",{children:"Add a New Category"}),ne.loggedIn()?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)("p",{className:"m-0 ".concat(280===i||b?"text-danger":""),children:["Character Count: ",i,"/280"]}),Object(se.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await o({variables:{title:n,description:s}}),c(""),a(""),r(0),t.fire({icon:"success",title:"Category added!",showConfirmButton:!1,timer:1500})}catch(i){console.error(i)}},children:[Object(se.jsx)("label",{children:"Title:"}),Object(se.jsx)("input",{name:"title",value:n,onChange:d}),Object(se.jsx)("label",{children:"Description:"}),Object(se.jsx)("input",{name:"description",value:s,onChange:d}),Object(se.jsx)("div",{children:Object(se.jsx)("button",{type:"submit",disabled:!n||!s,children:l?"Creating...":"Create Category"})}),b&&Object(se.jsxs)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:["Error creating Category: ",b.message]})]})]}):Object(se.jsxs)("p",{children:["You need to be logged in to add a Category. Please"," ",Object(se.jsx)(k.b,{to:"/login",children:"login"})," or ",Object(se.jsx)(k.b,{to:"/signup",children:"signup."})]})]})}),{Swal:re.a});var le=e=>{let{categories:t,title:n,description:c,onDelete:s}=e;return t.length?Object(se.jsxs)("div",{children:[Object(se.jsx)("h3",{children:n})&&Object(se.jsx)("p",{children:c}),t&&t.map((e=>Object(se.jsxs)("div",{className:"card mb-3",children:[Object(se.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0"}),Object(se.jsxs)("div",{className:"card-body bg-light p-2",children:[Object(se.jsx)("p",{children:e.title}),Object(se.jsx)("p",{children:e.description})]}),Object(se.jsx)("div",{children:Object(se.jsx)("button",{className:"btn btn-danger btn-block btn-squared",onClick:()=>s(e._id),children:"Delete"})}),Object(se.jsx)("div",{className:"card-footer",children:Object(se.jsx)(k.b,{className:"btn btn-primary btn-block btn-squared",to:"/categories/".concat(e._id),children:"Join the discussion on this category."})})]},e._id)))]}):Object(se.jsx)("h3",{children:"No Categories Yet"})};var be=()=>{const{loading:e,data:t}=Object(I.a)(R),n=(null===t||void 0===t?void 0:t.categories)||[],[c]=Object($.a)(T,{update(e,t){let{data:{removeCategory:n}}=t;e.modify({fields:{categories(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{readField:t}=arguments.length>1?arguments[1]:void 0;return e.filter((e=>n._id!==t("_id",e)))}}})}});return Object(se.jsxs)("div",{className:"container flex-direction: row",children:[Object(se.jsxs)("aside",{className:"container col-xl-4 col-md-12 mb-12 p-3",children:["`",Object(se.jsxs)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"},children:[Object(se.jsx)(ae,{}),"`"]}),"`",Object(se.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"},children:Object(se.jsx)(oe,{})})]}),Object(se.jsx)("div",{className:"container col-xl-8 col-md-12 mb-12 p-3",children:e?Object(se.jsx)("div",{children:"Loading..."}):Object(se.jsx)(le,{categories:n,title:"Categories",description:"Select a category to see its hobbies",onDelete:async e=>{try{await c({variables:{categoryId:e}}),await re.a.fire({icon:"success",title:"Category deleted!",showConfirmButton:!1,timer:1500})}catch(t){console.error(t)}}})})]})};var de=()=>{const[e,t]=Object(g.useState)({username:"",email:"",password:""}),[n,{error:c,data:s}]=Object($.a)(H),a=n=>{const{name:c,value:s}=n.target;t({...e,[c]:s})};return Object(se.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(se.jsx)("div",{className:"col-12 col-lg-10",children:Object(se.jsxs)("div",{className:"card",children:[Object(se.jsx)("h4",{className:"text-bg-primary p-3",children:"Sign Up"}),Object(se.jsxs)("div",{className:"card-body",children:[s?Object(se.jsxs)("p",{children:["Success! You may now head"," ",Object(se.jsx)(k.b,{to:"/",children:"back to the homepage."})]}):Object(se.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),console.log(e);try{const{data:t}=await n({variables:{...e}});ne.login(t.addUser.token)}catch(c){console.error(c)}},children:[Object(se.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"text",value:e.name,onChange:a}),Object(se.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:e.email,onChange:a}),Object(se.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:e.password,onChange:a}),Object(se.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),c&&Object(se.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:c.message})]})]})})})};var je=e=>{const[t,n]=Object(g.useState)({email:"",password:""}),[c,{error:s,data:a}]=Object($.a)(q),i=e=>{const{name:c,value:s}=e.target;n({...t,[c]:s})};return Object(se.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(se.jsx)("div",{className:"col-12 col-lg-10",children:Object(se.jsxs)("div",{className:"card",children:[Object(se.jsx)("h4",{className:"text-bg-primary p-3",children:"Login"}),Object(se.jsxs)("div",{className:"card-body",children:[a?Object(se.jsxs)("p",{children:["Success! You may now head"," ",Object(se.jsx)(k.b,{to:"/",children:"back to the homepage."})]}):Object(se.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),console.log(t);try{const{data:e}=await c({variables:{...t}});ne.login(e.login.token)}catch(s){console.error(s)}n({email:"",password:""})},children:[Object(se.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:t.email,onChange:i}),Object(se.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:t.password,onChange:i}),Object(se.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),s&&Object(se.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:s.message})]})]})})})};var me=Object(ce.withSwal)((e=>{let{thisHobby:t,swal:n}=e;const[c,s]=Object(g.useState)(""),[a,i]=Object(g.useState)(0),[r,{error:o}]=Object($.a)(B);return Object(se.jsxs)("div",{children:[Object(se.jsx)("h5",{children:"What are your thoughts on this hobby?"}),ne.loggedIn()?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)("p",{className:"m-0 ".concat(280===a||o?"text-danger":""),children:["Character Count: ",a,"/280",o&&Object(se.jsx)("span",{className:"ml-2",children:o.message})]}),Object(se.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:async e=>{e.preventDefault();try{const{data:e}=await r({variables:{hobbies:t,content:c,users:ne.getProfile().data.username}});s(""),i(0),n.fire({title:"Comment added",icon:"success",confirmButtonText:"OK"}).then((()=>{window.location.reload()}))}catch(a){console.error(a)}},children:[Object(se.jsx)("div",{className:"col-12 col-lg-9",children:Object(se.jsx)("textarea",{name:"content",placeholder:"Add your comment...",value:c,className:"form-input w-100",style:{lineHeight:"1.5",resize:"vertical"},onChange:e=>{const{name:t,value:n}=e.target;"content"===t&&n.length<=280&&(s(n),i(n.length))}})}),Object(se.jsx)("div",{className:"col-12 col-lg-3",children:Object(se.jsx)("button",{className:"btn btn-primary btn-block py-3",type:"submit",children:"Add Comment"})})]})]}):Object(se.jsxs)("p",{children:["You need to be logged in to share your thoughts. Please"," ",Object(se.jsx)(k.b,{to:"/login",children:"login"})," or ",Object(se.jsx)(k.b,{to:"/signup",children:"signup."})]})]})}));var he=()=>{const{hobbyId:e}=Object(C.q)(),{loading:t,data:n}=Object(I.a)(Z,{variables:{hobbyId:e}}),{loading:c,data:s,refetch:a}=Object(I.a)(X,{variables:{hobbies:e}}),[i]=Object($.a)(E);if(t||c)return Object(se.jsx)("div",{children:"Loading..."});const r=(null===n||void 0===n?void 0:n.hobby)||{},o=(null===s||void 0===s?void 0:s.comments)||[];return Object(se.jsxs)("div",{children:[Object(se.jsxs)("div",{className:"my-6",children:[Object(se.jsx)("h2",{children:r.title}),Object(se.jsx)("p",{children:r.description})]}),Object(se.jsx)("div",{className:"my-6",children:Object(se.jsx)("h3",{children:"Comments:"})}),o.map((t=>Object(se.jsxs)("div",{className:"my-6",children:[t.users.map((e=>Object(se.jsxs)("h4",{children:["Commented by: ",e.username]},e._id))),Object(se.jsxs)("p",{children:["Content: ",t.content]}),Object(se.jsx)("button",{className:"btn btn-danger btn-sm",onClick:()=>(async t=>{try{await i({variables:{commentId:t,hobbyId:e}}),await re.a.fire({icon:"success",title:"Comment deleted!",showConfirmButton:!1,timer:1500}),a()}catch(n){console.error(n)}})(t._id),children:"Delete"})]},t._id))),Object(se.jsxs)("div",{className:"my-6",children:[Object(se.jsx)(me,{thisHobby:e}),Object(se.jsx)("br",{}),Object(se.jsx)("br",{})]})]})},Oe=n.p+"static/media/lolo.392f62d0.png";var ge=()=>Object(se.jsx)("header",{style:{backgroundColor:"#eee8b6",border:"3px solid #5b8c80"},children:Object(se.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(se.jsxs)("div",{children:[Object(se.jsx)(k.b,{className:"a",to:"/",children:Object(se.jsx)("h1",{className:"m-2",children:"Hobbiest Place On Earth"})}),Object(se.jsx)("img",{src:Oe,alt:""}),Object(se.jsx)("p",{className:"m-0"})]}),Object(se.jsx)("div",{children:ne.loggedIn()?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(k.b,{className:"btn btn-lg btn-info m-2",to:"/me",children:[ne.getProfile().data.username,"'s profile"]}),Object(se.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:e=>{e.preventDefault(),ne.logout()},children:"Logout"})]}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(k.b,{className:"btn btn-lg btn-info m-2",to:"/login",children:"Login"}),Object(se.jsx)(k.b,{className:"btn btn-lg btn-light m-2",to:"/signup",children:"Signup"})]})})]})});var ue=()=>{const e=Object(C.m)(),t=Object(C.o)();return Object(se.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(se.jsxs)("div",{className:"container text-center mb-5",children:["/"!==e.pathname&&Object(se.jsx)("button",{className:"btn btn-dark mb-3",onClick:()=>t(-1),children:"\u2190 Go Back"}),Object(se.jsxs)("h6",{children:["Hobbiest Place on Earth"," ",Object(se.jsx)("span",{className:"emoji",role:"img","aria-label":"heart","aria-hidden":"false",children:"\u2764\ufe0f"})," ","by the Team 7."]})]})})};var xe=()=>{const{id:e}=Object(C.q)(),{loading:t,data:n}=Object(I.a)(W,{variables:{categoryId:e}}),{loading:c,data:s,refetch:a}=Object(I.a)(V,{variables:{categories:e}}),[i]=Object($.a)(L);if(t||c)return console.log("hobbiesData:",s),Object(se.jsx)("div",{children:"loading..."});if(!s)return console.error("hobbiesData is undefined"),Object(se.jsx)("div",{children:"Error fetching hobbies data"});console.log("Data:",s);const r=n.category,o=s.hobbies;return Object(se.jsx)("div",{children:Object(se.jsxs)("div",{children:[Object(se.jsxs)("h2",{className:"card-header bg-dark text-light p-2 m-0",children:[r.title," ",Object(se.jsx)("br",{}),Object(se.jsxs)("span",{style:{fontSize:"1rem"},children:["One of my category is ",r.title]})]}),Object(se.jsx)("div",{className:"bg-light-profile-cat py-4",children:Object(se.jsx)("blockquote",{className:"p-4-profile-cat",style:{fontSize:"1.5rem",fontStyle:"italic",lineHeight:"1.5"},children:r.description})}),Object(se.jsxs)("div",{className:"my-3 container flex-direction: row",children:[Object(se.jsxs)("div",{className:"my-5 container col-xl-8 col-md-12 mb-12 p-3",children:[Object(se.jsx)("h3",{children:"Hobbies:"}),o.map((t=>Object(se.jsxs)("div",{children:[Object(se.jsx)(k.b,{className:"a",to:"/hobbies/".concat(t._id),children:Object(se.jsx)("h4",{children:t.title})}),Object(se.jsx)("p",{className:"profile-hobby-cont",children:t.description}),Object(se.jsx)(k.b,{className:"btn btn-primary btn-block btn-squared",to:"/hobbies/".concat(t._id),children:"Join the discussion on this hobby."}),Object(se.jsx)("br",{}),Object(se.jsx)("button",{className:"btn btn-danger btn-block btn-squared",onClick:()=>(async t=>{try{await i({variables:{hobbyId:t,categoryId:e}}),await re.a.fire({title:"Hobby deleted",text:"The hobby has been deleted successfully.",icon:"success"}),a()}catch(n){console.error(n)}})(t._id),children:"Delete"}),Object(se.jsx)("br",{})]},t._id)))]}),Object(se.jsxs)("div",{className:"my-6",children:[Object(se.jsx)(ae,{category:r.title,categoryId:r._id}),Object(se.jsx)("br",{}),Object(se.jsx)("br",{})]}),Object(se.jsx)("div",{})]})]})})};var pe=()=>{const{username:e}=Object(C.q)(),{loading:t,data:n}=Object(I.a)(e?M:ee,{variables:{username:e}}),c=(null===n||void 0===n?void 0:n.me)||{};console.log(c);const s=c.hobbies;return t?Object(se.jsx)("div",{children:"Loading..."}):Object(se.jsx)("div",{children:Object(se.jsxs)("div",{className:"flex-row justify-center mb-3",children:[Object(se.jsxs)("h2",{className:"col-12 col-md-10 bg-dark text-light p-3 mb-5",children:["Viewing ","".concat(c.username,"'s your")," profile."]}),Object(se.jsxs)("div",{className:"col-12 col-md-10 mb-5",children:[Object(se.jsx)("h3",{children:" Hobbies:"}),Object(se.jsx)("div",{className:"my-5",children:s.map((e=>Object(se.jsxs)("div",{children:[Object(se.jsxs)("p",{children:["Title: ",e.title]}),Object(se.jsxs)("p",{children:["Description: ",e.description]}),Object(se.jsx)(k.b,{className:"btn btn-primary btn-block btn-squared",to:"/hobbies/".concat(e._id),children:"Join the discussion on this hobby."})]},e._id)))})]}),!e&&Object(se.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",children:Object(se.jsx)(ae,{})})]})})};const ye=Object(y.a)({uri:"/graphql"}),ve=Object(N.a)(((e,t)=>{let{headers:n}=t;const c=localStorage.getItem("id_token");return{headers:{...n,authorization:c?"Bearer ".concat(c):""}}})),fe=new v.a({link:ve.concat(ye),cache:new f.a});var we=function(){return Object(se.jsx)(w.a,{client:fe,children:Object(se.jsx)(k.a,{children:Object(se.jsxs)("div",{className:"flex-column justify-flex-start min-150-vh",children:[Object(se.jsx)(ge,{}),Object(se.jsx)("div",{className:"container",children:Object(se.jsxs)(C.c,{children:[Object(se.jsx)(C.a,{path:"/",element:Object(se.jsx)(be,{})}),Object(se.jsx)(C.a,{path:"/login",element:Object(se.jsx)(je,{})}),Object(se.jsx)(C.a,{path:"/signup",element:Object(se.jsx)(de,{})}),Object(se.jsx)(C.a,{path:"/categories/:id",element:Object(se.jsx)(xe,{})}),Object(se.jsx)(C.a,{path:"/hobbies/:hobbyId",element:Object(se.jsx)(he,{})}),Object(se.jsx)(C.a,{path:"/me",element:Object(se.jsx)(pe,{})})]})}),Object(se.jsx)(ue,{})]})})})};var Ne=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((t=>{let{getCLS:n,getFID:c,getFCP:s,getLCP:a,getTTFB:i}=t;n(e),c(e),s(e),a(e),i(e)}))};p.a.render(Object(se.jsx)(u.a.StrictMode,{children:Object(se.jsx)(we,{})}),document.getElementById("root")),Ne()}},[[96,1,2]]]);
//# sourceMappingURL=main.96ad29e9.chunk.js.map