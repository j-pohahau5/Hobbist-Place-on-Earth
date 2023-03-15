(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var c,a,i,s,r,o,l,b,d,j,u,m,h,O,g,p,x,v=n(0),y=n.n(v),f=n(44),N=n.n(f),k=(n(74),n(4)),w=n(82),S=n(127),$=n(129),C=n(126),_=n(79),I=n(16),H=n(8),D=n(130),q=n(28),L=n(29),T=n(64),F=new(function(){function e(){Object(q.a)(this,e)}return Object(L.a)(e,[{key:"getProfile",value:function(){return Object(T.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(T.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),E=n(1),Y=function(){return Object(E.jsx)("header",{className:"bg-primary text-light mb-4 py-3 flex-row align-center",children:Object(E.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(I.b,{className:"text-light",to:"/",children:Object(E.jsx)("h1",{className:"m-0",children:"Hobbies"})}),Object(E.jsx)("p",{className:"m-0",children:"Get into the mind of a programmer."})]}),Object(E.jsx)("div",{children:F.loggedIn()?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(I.b,{className:"btn btn-lg btn-info m-2",to:"/me",children:[F.getProfile().data.username,"'s profile"]}),Object(E.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),F.logout()},children:"Logout"})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(I.b,{className:"btn btn-lg btn-info m-2",to:"/login",children:"Login"}),Object(E.jsx)(I.b,{className:"btn btn-lg btn-light m-2",to:"/signup",children:"Signup"})]})})]})})},P=function(){var e=Object(H.k)(),t=Object(H.m)();return Object(E.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(E.jsxs)("div",{className:"container text-center mb-5",children:["/"!==e.pathname&&Object(E.jsx)("button",{className:"btn btn-dark mb-3",onClick:function(){return t(-1)},children:"\u2190 Go Back"}),Object(E.jsxs)("h4",{children:["Hobbiest Place on Earth"," ",Object(E.jsx)("span",{className:"emoji",role:"img","aria-label":"heart","aria-hidden":"false",children:"\u2764\ufe0f"})," ","by the Team 7."]})]})})},z=n(7),A=n(11),J=n(13),B=n(9),Q=n(123),U=n(81),G=n(19),M=n(128),V=(Object(M.a)(c||(c=Object(G.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Object(M.a)(a||(a=Object(G.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),W=Object(M.a)(i||(i=Object(G.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),K=Object(M.a)(s||(s=Object(G.a)(["\n  mutation addCategory ( $title: String!, $description: String!){\n    addCategory ( title: $title, description: $description) {\n\n      title\n      description\n\n    }\n  }\n"]))),R=Object(M.a)(r||(r=Object(G.a)(["\n\nmutation addHobby ($categories: ID!, $title: String!, $description: String!){\n  addHobby ( categories: $categories, title: $title, description: $description) {\n\n    title\n    description\n    categories {\n      _id\n      title\n    }\n    users {\n      _id\n    }\n  }\n  \n}\n"]))),X=Object(M.a)(o||(o=Object(G.a)(["\nmutation addComment ( $hobbies: ID!, $content: String! ){\n  addComment ( hobbies: $hobbies, content: $content ) {\n    content\n    hobbies {\n      _id\n      title\n    }\n    \n  }\n  \n}\n"]))),Z=(Object(M.a)(l||(l=Object(G.a)(["\nmutation addHobbyLike ($_id: String!, $likes: Int!){\n  addHobbyLike ( likes: $likes ) {\n    likes\n  }\n}\n"]))),Object(M.a)(b||(b=Object(G.a)(["\nmutation addCommentLike ($_id: String!, $likes: Int!){\n  addCommentLike ( likes: $likes ) {\n    likes\n  }\n}\n"]))),Object(M.a)(d||(d=Object(G.a)(["\nmutation addHobbyDislike ($_id: String!, $dislikes: Int!){\n  addHobbyLike ( dislikes: $dislikes ) {\n    dislikes\n  }\n  \n}\n"]))),Object(M.a)(j||(j=Object(G.a)(["\nmutation addCommentDislike ($_id: String!, $dislikes: Int!){\n  addCommentLike ( dislikes: $dislikes ) {\n    dislikes\n  }\n  \n}\n"]))),Object(M.a)(u||(u=Object(G.a)(["\n  query users{\n    user {\n      _id\n      username\n      email\n      categories {\n        _id\n        title\n        description\n        hobbies {\n          _id\n          title\n          description\n        }\n      }\n    }\n  }\n"])))),ee=Object(M.a)(m||(m=Object(G.a)(["\nquery hobbies($categories: ID! ) {\n  hobbies(categories: $categories) {\n    _id\n    title\n    description\n    categories{\n      _id\n      title\n      description\n    }\n\n  }  \n}\n"]))),te=Object(M.a)(h||(h=Object(G.a)(["\n  query category($categoryId: ID! ) {\n    category(categoryId: $categoryId) {\n      _id\n      title\n      description\n\n    }  \n  }\n"]))),ne=Object(M.a)(O||(O=Object(G.a)(["\n  query categories {\n    categories {\n      _id\n      title\n      description\n      hobbies{\n        _id\n        title\n        description\n      }\n    }\n  }\n"]))),ce=(Object(M.a)(g||(g=Object(G.a)(["\n  query comments{\n    comments {\n      _id\n      content\n      user {\n        username\n      }\n      hobby { category }\n    }\n  }\n"]))),Object(M.a)(p||(p=Object(G.a)(["\n  query hobby($hobbyId: ID!) {\n    hobby(hobbyId: $hobbyId) {\n      _id\n      title\n      description\n      categories {\n        title\n      }\n      comments {\n        content\n        users {\n          _id\n          username\n          email\n        }\n      }\n      users {\n        _id\n        username\n        email\n      }\n    }\n  }\n"])))),ae=Object(M.a)(x||(x=Object(G.a)(["\n  query me {\n    me {\n      _id\n      username\n      hobbies{\n        _id\n        title\n        description\n      }\n    }\n  }\n"]))),ie=function(e){var t=e.category,n=Object(v.useState)(""),c=Object(B.a)(n,2),a=c[0],i=c[1],s=Object(v.useState)(""),r=Object(B.a)(s,2),o=r[0],l=r[1],b=Object(v.useState)(null),d=Object(B.a)(b,2),j=d[0],u=d[1],m=Object(v.useState)(0),h=Object(B.a)(m,2),O=h[0],g=h[1],p=Object(D.a)(ne),x=(p.loading,p.data),y=(null===x||void 0===x?void 0:x.categories)||[],f=y.map((function(e){return{value:e._id,label:e.title}})),N=Object(v.useState)([]),w=Object(B.a)(N,2),S=w[0],$=w[1];Object(v.useEffect)((function(){$(y.map((function(e){return{value:e._id,label:e.title}})))}),[y]),Object(v.useEffect)((function(){if(t){var e=S.find((function(e){return e.label===t}));e!==j&&u(e)}}),[t,S,j]);var C=Object(Q.a)(R,{update:function(e,t){var n=t.data.addHobby;try{var c=e.readQuery({query:te}).categories.map((function(e){return e._id===n.categories[0]._id?Object(k.a)(Object(k.a)({},e),{},{hobbies:[].concat(Object(J.a)(e.hobbies),[n])}):e}));e.writeQuery({query:ne,data:{categories:c}})}catch(a){console.error(a)}}}),_=Object(B.a)(C,2),H=_[0],q=_[1],L=q.loading,T=q.error,Y=function(){var e=Object(A.a)(Object(z.a)().mark((function e(t){return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H({variables:{title:a,description:o,categories:j.value}});case 4:i(""),l(""),u(null),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error creating hobby:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=e.target,n=t.name,c=t.value;"description"===n&&c.length<=280?l(c):i(c),g(a.length+o.length)};return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"Add a New Hobby"}),F.loggedIn()?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("p",{className:"m-0 ".concat(280===O||T?"text-danger":""),children:["Character Count: ",O,"/280"]}),Object(E.jsxs)("form",{onSubmit:Y,children:[Object(E.jsxs)("label",{children:["Title:",Object(E.jsx)("input",{value:a,onChange:P})]}),Object(E.jsxs)("label",{children:["Description:",Object(E.jsx)("input",{name:"description",value:o,onChange:P})]}),Object(E.jsxs)("label",{children:["Category:",Object(E.jsx)(U.a,{options:f,value:j,onChange:u,isClearable:!0})]}),Object(E.jsx)("button",{type:"submit",disabled:!a||!o,children:L?"Creating...":"Create Hobby"}),T&&Object(E.jsxs)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:["Error creating hobby: ",T.message]})]})]}):Object(E.jsxs)("p",{children:["You need to be logged in to add a Hobby. Please"," ",Object(E.jsx)(I.b,{to:"/login",children:"login"})," or ",Object(E.jsx)(I.b,{to:"/signup",children:"signup."})]})]})},se=function(){var e=Object(v.useState)(""),t=Object(B.a)(e,2),n=t[0],c=t[1],a=Object(v.useState)(""),i=Object(B.a)(a,2),s=i[0],r=i[1],o=Object(v.useState)(0),l=Object(B.a)(o,2),b=l[0],d=l[1],j=Object(Q.a)(K,{update:function(e,t){var n=t.data.addCategory;try{var c=e.readQuery({query:ne}).categories;e.writeQuery({query:ne,data:{categories:[].concat(Object(J.a)(c),[n])}})}catch(a){console.error(a)}}}),u=Object(B.a)(j,2),m=u[0],h=u[1],O=h.loading,g=h.error,p=function(e){var t=e.target,a=t.name,i=t.value;"description"===a&&r(i),"title"===a&&c(i),d(n.length+s.length)},x=function(){var e=Object(A.a)(Object(z.a)().mark((function e(t){return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{title:n,description:s}});case 4:c(""),r(""),d(0),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"Add a New Category"}),F.loggedIn()?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("p",{className:"m-0 ".concat(280===b||g?"text-danger":""),children:["Character Count: ",b,"/280"]}),Object(E.jsxs)("form",{onSubmit:x,children:[Object(E.jsxs)("label",{children:["Title:",Object(E.jsx)("input",{name:"title",value:n,onChange:p})]}),Object(E.jsxs)("label",{children:["Description:",Object(E.jsx)("input",{name:"description",value:s,onChange:p})]}),Object(E.jsx)("button",{type:"submit",disabled:!n||!s,children:O?"Creating...":"Create Category"}),g&&Object(E.jsxs)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:["Error creating Category: ",g.message]})]})]}):Object(E.jsxs)("p",{children:["You need to be logged in to add a Category. Please"," ",Object(E.jsx)(I.b,{to:"/login",children:"login"})," or ",Object(E.jsx)(I.b,{to:"/signup",children:"signup."})]})]})},re=function(e){var t=e.categories,n=e.title,c=e.description;return t.length?Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:n})&&Object(E.jsx)("p",{children:c}),t&&t.map((function(e){return Object(E.jsxs)("div",{className:"card mb-3",children:[Object(E.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0"}),Object(E.jsxs)("div",{className:"card-body bg-light p-2",children:[Object(E.jsx)("p",{children:e.title}),Object(E.jsx)("p",{children:e.description})]}),Object(E.jsx)(I.b,{className:"btn btn-primary btn-block btn-squared",to:"/categories/".concat(e._id),children:"Join the discussion on this category."})]},e._id)}))]}):Object(E.jsx)("h3",{children:"No Categories Yet"})},oe=function(){var e=Object(D.a)(ne),t=e.loading,n=e.data,c=(null===n||void 0===n?void 0:n.categories)||[];return Object(E.jsx)("main",{children:Object(E.jsxs)("div",{className:"flex-row justify-center",children:[Object(E.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",children:Object(E.jsx)(ie,{})}),Object(E.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",children:Object(E.jsx)(se,{})}),Object(E.jsx)("div",{className:"col-13 col-md-8 mb-3",children:t?Object(E.jsx)("div",{children:"Loading..."}):Object(E.jsx)(re,{categories:c,title:"Some Feed for Thought(s)..."})})]})})},le=n(12),be=function(){var e=Object(v.useState)({username:"",email:"",password:""}),t=Object(B.a)(e,2),n=t[0],c=t[1],a=Object(Q.a)(W),i=Object(B.a)(a,2),s=i[0],r=i[1],o=r.error,l=r.data,b=function(e){var t=e.target,a=t.name,i=t.value;c(Object(k.a)(Object(k.a)({},n),{},Object(le.a)({},a,i)))},d=function(){var e=Object(A.a)(Object(z.a)().mark((function e(t){var c,a;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,s({variables:Object(k.a)({},n)});case 5:c=e.sent,a=c.data,F.login(a.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(E.jsx)("div",{className:"col-12 col-lg-10",children:Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("h4",{className:"text-bg-primary p-3",children:"Sign Up"}),Object(E.jsxs)("div",{className:"card-body",children:[l?Object(E.jsxs)("p",{children:["Success! You may now head"," ",Object(E.jsx)(I.b,{to:"/",children:"back to the homepage."})]}):Object(E.jsxs)("form",{onSubmit:d,children:[Object(E.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"text",value:n.name,onChange:b}),Object(E.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:b}),Object(E.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:b}),Object(E.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(E.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})})},de=function(e){var t=Object(v.useState)({email:"",password:""}),n=Object(B.a)(t,2),c=n[0],a=n[1],i=Object(Q.a)(V),s=Object(B.a)(i,2),r=s[0],o=s[1],l=o.error,b=o.data,d=function(e){var t=e.target,n=t.name,i=t.value;a(Object(k.a)(Object(k.a)({},c),{},Object(le.a)({},n,i)))},j=function(){var e=Object(A.a)(Object(z.a)().mark((function e(t){var n,i;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(c),e.prev=2,e.next=5,r({variables:Object(k.a)({},c)});case 5:n=e.sent,i=n.data,F.login(i.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:a({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(E.jsx)("div",{className:"col-12 col-lg-10",children:Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("h4",{className:"text-bg-primary p-3",children:"Login"}),Object(E.jsxs)("div",{className:"card-body",children:[b?Object(E.jsxs)("p",{children:["Success! You may now head"," ",Object(E.jsx)(I.b,{to:"/",children:"back to the homepage."})]}):Object(E.jsxs)("form",{onSubmit:j,children:[Object(E.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:c.email,onChange:d}),Object(E.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:c.password,onChange:d}),Object(E.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),l&&Object(E.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:l.message})]})]})})})},je=function(e){var t=e.thisHobby,n=Object(v.useState)(""),c=Object(B.a)(n,2),a=c[0],i=c[1],s=Object(v.useState)(0),r=Object(B.a)(s,2),o=r[0],l=r[1],b=Object(Q.a)(X),d=Object(B.a)(b,2),j=d[0],u=d[1].error,m=function(){var e=Object(A.a)(Object(z.a)().mark((function e(n){var c;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,j({variables:{hobbies:t,content:a}});case 4:c=e.sent,c.data,i(""),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:[Object(E.jsx)("h4",{children:"What are your thoughts on this hobby?"}),F.loggedIn()?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("p",{className:"m-0 ".concat(280===o||u?"text-danger":""),children:["Character Count: ",o,"/280",u&&Object(E.jsx)("span",{className:"ml-2",children:u.message})]}),Object(E.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:m,children:[Object(E.jsx)("div",{className:"col-12 col-lg-9",children:Object(E.jsx)("textarea",{name:"content",placeholder:"Add your comment...",value:a,className:"form-input w-100",style:{lineHeight:"1.5",resize:"vertical"},onChange:function(e){var t=e.target,n=t.name,c=t.value;"content"===n&&c.length<=280&&(i(c),l(c.length))}})}),Object(E.jsx)("div",{className:"col-12 col-lg-3",children:Object(E.jsx)("button",{className:"btn btn-primary btn-block py-3",type:"submit",children:"Add Comment"})})]})]}):Object(E.jsxs)("p",{children:["You need to be logged in to share your thoughts. Please"," ",Object(E.jsx)(I.b,{to:"/login",children:"login"})," or ",Object(E.jsx)(I.b,{to:"/signup",children:"signup."})]})]})},ue=function(){var e=Object(H.o)().hobbyId,t=Object(D.a)(ce,{variables:{hobbyId:e}}),n=t.loading,c=t.data,a=(null===c||void 0===c?void 0:c.hobby)||{};console.log(c);var i=a._id,s=a.comments;return console.log(s),n?Object(E.jsx)("div",{children:"Loading..."}):Object(E.jsxs)("div",{className:"my-3",children:[Object(E.jsxs)("h3",{className:"card-header bg-dark text-light p-2 m-0",children:[a.title," ",Object(E.jsx)("br",{})]}),Object(E.jsx)("p",{className:"p-4 text-light",style:{fontSize:"1.5rem",lineHeight:"1.5"},children:a.description}),Object(E.jsx)("div",{className:"bg-secondary py-4",children:Object(E.jsxs)("blockquote",{className:"p-4",style:{fontSize:"1.5rem",fontStyle:"italic",border:"2px dotted #1a1a1a",lineHeight:"1.5"},children:[a.title," Hobby's Comments:",Object(E.jsx)("div",{className:"my-5",children:s.map((function(e){return Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:e.content})},e._id)}))})]})}),Object(E.jsx)("div",{className:"my-5"}),Object(E.jsxs)("div",{className:"m-3 p-4 bg-light",style:{border:"1px solid #ccc"},children:[Object(E.jsx)("h4",{className:"mb-3",children:"Add a comment"}),Object(E.jsx)("div",{}),Object(E.jsx)(je,{thisHobby:i})]})]})},me=function(){var e=Object(H.o)().id,t=Object(D.a)(te,{variables:{categoryId:e}}),n=t.loading,c=t.data,a=Object(D.a)(ee,{variables:{categories:e}}),i=a.loading,s=a.data;if(n||i)return Object(E.jsx)("div",{children:"loading..."});var r=c.category,o=s.hobbies;return Object(E.jsxs)("div",{className:"my-3",children:[Object(E.jsxs)("h3",{className:"card-header bg-dark text-light p-2 m-0",children:[r.title," ",Object(E.jsx)("br",{}),Object(E.jsxs)("span",{style:{fontSize:"1rem"},children:["One of my category is ",r.title]})]}),Object(E.jsx)("div",{className:"bg-light-profile-cat py-4",children:Object(E.jsx)("blockquote",{className:"p-4-profile-cat",style:{fontSize:"1.5rem",fontStyle:"italic",lineHeight:"1.5"},children:r.description})}),Object(E.jsxs)("div",{className:"my-6",children:[Object(E.jsx)(ie,{category:r.title,categoryId:r._id}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("h2",{children:"Hobbies:"}),Object(E.jsx)("br",{}),o.map((function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:e.title}),Object(E.jsx)("p",{className:"profile-hobby-cont",children:e.description}),Object(E.jsx)(I.b,{className:"btn btn-primary btn-block btn-squared",to:"/hobbies/".concat(e._id),children:"Join the discussion on this hobby."}),Object(E.jsx)("br",{})]},e._id)}))]}),Object(E.jsx)("div",{})]})},he=function(){var e=Object(H.o)().username,t=Object(D.a)(e?Z:ae,{variables:{username:e}}),n=t.loading,c=t.data,a=(null===c||void 0===c?void 0:c.me)||{};console.log(a);var i=a.hobbies;return n?Object(E.jsx)("div",{children:"Loading..."}):Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:"flex-row justify-center mb-3",children:[Object(E.jsxs)("h2",{className:"col-12 col-md-10 bg-dark text-light p-3 mb-5",children:["Viewing ","".concat(a.username,"'s your")," profile."]}),Object(E.jsxs)("div",{className:"col-12 col-md-10 mb-5",children:[Object(E.jsx)("h3",{children:" Hobbies:"}),Object(E.jsx)("div",{className:"my-5",children:i.map((function(e){return Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{children:["Title: ",e.title]}),Object(E.jsxs)("p",{children:["Description: ",e.description]}),Object(E.jsx)(I.b,{className:"btn btn-primary btn-block btn-squared",to:"/hobbies/".concat(e._id),children:"Join the discussion on this hobby."})]},e._id)}))})]}),!e&&Object(E.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",children:Object(E.jsx)(ie,{})})]})})},Oe=Object(w.a)({uri:"/graphql"}),ge=Object(_.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(k.a)(Object(k.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),pe=new S.a({link:ge.concat(Oe),cache:new $.a});var xe=function(){return Object(E.jsx)(C.a,{client:pe,children:Object(E.jsx)(I.a,{children:Object(E.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(E.jsx)(Y,{}),Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)(H.c,{children:[Object(E.jsx)(H.a,{path:"/",element:Object(E.jsx)(oe,{})}),Object(E.jsx)(H.a,{path:"/login",element:Object(E.jsx)(de,{})}),Object(E.jsx)(H.a,{path:"/signup",element:Object(E.jsx)(be,{})}),Object(E.jsx)(H.a,{path:"/categories/:id",element:Object(E.jsx)(me,{})}),Object(E.jsx)(H.a,{path:"/hobbies/:hobbyId",element:Object(E.jsx)(ue,{})}),Object(E.jsx)(H.a,{path:"/me",element:Object(E.jsx)(he,{})})]})}),Object(E.jsx)(P,{})]})})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};N.a.render(Object(E.jsx)(y.a.StrictMode,{children:Object(E.jsx)(xe,{})}),document.getElementById("root")),ve()},74:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.2370cef8.chunk.js.map