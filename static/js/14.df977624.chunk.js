(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1141:function(e,n,t){"use strict";t.r(n);t(0);var i,c,r,s,a,l,o,d,j=t(13),x=t(179),b=t.n(x),p=t(50),u=t(158),m=t(52),h=t(19),O=t(7),f=t(75),g=t(4),v=O.e.div(i||(i=Object(h.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=O.e.div(c||(c=Object(h.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),w=O.e.div(r||(r=Object(h.a)(["\n  flex: 1;\n"]))),F=O.e.img(s||(s=Object(h.a)(["\n  border-radius: 50%;\n"]))),S=Object(O.e)(j.K).attrs({as:"h3"})(a||(a=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=O.e.div(l||(l=Object(h.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),F,(function(e){return e.theme.mediaQueries.md})),z=O.e.div(o||(o=Object(h.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),F),J=Object(O.e)(j.p)(d||(d=Object(h.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),D=function(e){var n=e.rank,t=e.team,i=Object(m.a)(),c=Object(g.jsx)(F,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(J,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.xb,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(w,{children:[Object(g.jsxs)(j.J,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(k,{children:c}),Object(g.jsx)(S,{children:t.name})]}),Object(g.jsx)(j.xb,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.J,{children:[Object(g.jsxs)(j.J,{children:[Object(g.jsx)(j.kb,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.xb,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.J,{ml:"24px",children:[Object(g.jsx)(j.D,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.xb,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.l,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:i(1042,"See More")}),Object(g.jsx)(z,{children:c})]})]})},I=t(924);n.default=function(){var e=Object(m.a)(),n=Object(p.r)(),t=n.teams,i=n.isLoading,c=Object.values(t),r=b()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)(j.J,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.K,{size:"xl",children:e(1040,"Teams")}),i&&Object(g.jsx)(j.d,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(D,{rank:n+1,team:e},e.id)}))]})}},895:function(e,n,t){"use strict";var i,c=t(19),r=t(7).e.div(i||(i=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},924:function(e,n,t){"use strict";t(0);var i=t(13),c=t(50),r=t(52),s=t(895),a=t(75),l=t(4),o=function(){var e=Object(r.a)();return Object(l.jsx)(i.p,{mb:"32px",isActive:!0,children:Object(l.jsx)(i.q,{children:Object(l.jsxs)(i.J,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.K,{size:"lg",mb:"8px",children:e(1052,"You haven't set up your profile yet!")}),Object(l.jsx)(i.xb,{children:e(1054,"You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(i.l,{as:a.a,to:"/profile",mt:["16px",null,0],children:e(1050,"Set up now")})]})})})};n.a=function(){var e=Object(r.a)(),n=Object(c.p)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.K,{as:"h1",size:"xxl",color:"secondary",children:e(1082,"Teams & Profiles")}),Object(l.jsx)(i.xb,{bold:!0,children:e(999,"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=14.df977624.chunk.js.map