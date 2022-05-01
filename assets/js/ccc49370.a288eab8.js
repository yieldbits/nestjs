"use strict";(self.webpackChunk_yieldbits_nestjs_website=self.webpackChunk_yieldbits_nestjs_website||[]).push([[103],{6013:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(808),l=a(7378),r=a(8944),i=a(2676),o=a(1884),s="sidebar_k3AJ",m="sidebarItemTitle_KLf2",c="sidebarItemList_y0e6",d="sidebarItem_hZwW",u="sidebarItemLink_RCuc",g="sidebarItemLinkActive_wdkZ",p=a(9213);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var b=["sidebar","toc","children"];function h(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,b),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},7258:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7378),l=a(8944),r=a(9213),i=a(1884),o=a(8948),s=a(1309),m=a(1721),c=a(7685),d=a(580),u="blogPostTitle_wxyd",g="blogPostData_lXkG",p="blogPostDetailsFull_LFXV",v=a(8542),b="image_B1vt";function h(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL,o=t.email,s=r||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(h,{href:s},n.createElement("img",{className:b,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(h,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_wVxI",_="imageOnlyAuthorRow_azk4",N="imageOnlyAuthorCol_FeaY";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:f),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,b=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,o.C)().withBaseUrl,E=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,k=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,y=N.date,C=N.formattedDate,w=N.permalink,I=N.tags,x=N.readingTime,T=N.title,A=N.editUrl,H=N.authors,M=null!=(t=_.image)?t:f.image,B=!L&&k,R=I.length>0,U=L?"h1":"h2";return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(U,{className:u,itemProp:"headline"},L?T:n.createElement(i.Z,{itemProp:"url",to:w},T)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},C),void 0!==x&&n.createElement(n.Fragment,null," \xb7 ",b(x))),n.createElement(Z,{authors:H,assets:_})),M&&n.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),n.createElement("div",{id:L?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(c.Z,null,E)),(R||k)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",L&&p)},R&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},n.createElement(v.Z,{tags:I})),L&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:A})),B&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":R})},n.createElement(i.Z,{to:N.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:T})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},2021:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7378),l=a(6013),r=a(7258),i=a(5773),o=a(9213),s=a(8135);function m(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,(0,i.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,(0,i.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var c=a(1309),d=a(7488),u=a(8944);function g(e){var t,a=e.content,l=a.assets,r=a.metadata,i=r.title,o=r.description,s=r.date,m=r.tags,d=r.authors,u=r.frontMatter,g=u.keywords,p=null!=(t=l.image)?t:u.image;return n.createElement(c.d,{title:i,description:o,keywords:g,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),d.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function p(e){var t=e.content,a=e.sidebar,i=t.assets,o=t.metadata,s=o.nextItem,c=o.prevItem,u=o.frontMatter,g=u.hide_table_of_contents,p=u.toc_min_heading_level,v=u.toc_max_heading_level;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v}):void 0},n.createElement(r.Z,{frontMatter:u,assets:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(s||c)&&n.createElement(m,{nextItem:s,prevItem:c}))}function v(e){return n.createElement(c.FG,{className:(0,u.Z)(c.kM.wrapper.blogPages,c.kM.page.blogPostPage)},n.createElement(g,e),n.createElement(p,e))}},7488:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(5773),l=a(808),r=a(7378),i=a(8944),o=a(3160),s="tableOfContents_jWtb",m=["className"];function c(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3160:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(5773),l=a(808),r=a(7378),i=a(1309),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,b=(0,l.Z)(e,o),h=(0,i.LU)(),E=null!=p?p:h.tableOfContents.minHeadingLevel,f=null!=v?v:h.tableOfContents.maxHeadingLevel,_=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[d,g,E,f]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:_,className:m,linkClassName:d},b))}}}]);