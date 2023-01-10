"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[185],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6291:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],o={slug:"/",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},u=void 0,c={unversionedId:"introduction",id:"introduction",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes",description:"K3s \u662f\u8f7b\u91cf\u7ea7\u7684 Kubernetes\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1673388488,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{slug:"/",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},sidebar:"mySidebar",next:{title:"\u67b6\u6784",permalink:"/zh/architecture/"}},p={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"K3s \u662f\u8f7b\u91cf\u7ea7\u7684 Kubernetes\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("p",null,"\u5b83\u9002\u7528\u4e8e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"IoT"),(0,l.kt)("li",{parentName:"ul"},"CI"),(0,l.kt)("li",{parentName:"ul"},"Development"),(0,l.kt)("li",{parentName:"ul"},"ARM"),(0,l.kt)("li",{parentName:"ul"},"\u5d4c\u5165 K8s"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u83b7\u5f97 K8s \u96c6\u7fa4 PhD \u7684\u60c5\u51b5")),(0,l.kt)("h1",{id:"\u4ec0\u4e48\u662f-k3s"},"\u4ec0\u4e48\u662f K3s\uff1f"),(0,l.kt)("p",null,"K3s \u662f\u4e00\u4e2a\u5b8c\u5168\u517c\u5bb9\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5177\u6709\u4ee5\u4e0b\u589e\u5f3a\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5305\u4e3a\u5355\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u57fa\u4e8e sqlite3 \u4f5c\u4e3a\u9ed8\u8ba4\u5b58\u50a8\u673a\u5236\u7684\u8f7b\u91cf\u7ea7\u5b58\u50a8\u540e\u7aef\u3002\u540c\u65f6\u652f\u6301\u4f7f\u7528 etcd3\u3001MySQL \u548c Postgres\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u5728\u7b80\u5355\u7684\u542f\u52a8\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u5904\u7406\u5f88\u591a\u590d\u6742\u7684 TLS \u548c\u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5b89\u5168\u7684\uff0c\u5bf9\u8f7b\u91cf\u7ea7\u73af\u5883\u6709\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86\u7b80\u5355\u4f46\u5f3a\u5927\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"batteries-included")," \u529f\u80fd\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"service load balancer"),(0,l.kt)("li",{parentName:"ul"},"Helm controller"),(0,l.kt)("li",{parentName:"ul"},"Traefik ingress controller"))),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 Kubernetes control plane \u7ec4\u4ef6\u7684\u64cd\u4f5c\u90fd\u5c01\u88c5\u5728\u5355\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u8fdb\u7a0b\u4e2d\u3002\u56e0\u6b64\uff0cK3s \u652f\u6301\u81ea\u52a8\u5316\u548c\u7ba1\u7406\u590d\u6742\u7684\u96c6\u7fa4\u64cd\u4f5c\uff08\u4f8b\u5982\u8bc1\u4e66\u5206\u53d1\u7b49\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u7a0b\u5ea6\u51cf\u8f7b\u4e86\u5916\u90e8\u4f9d\u8d56\u6027\uff0cK3s \u4ec5\u9700\u8981\u73b0\u4ee3\u5185\u6838\u548c cgroup \u6302\u8f7d\u3002K3s \u6253\u5305\u4e86\u6240\u9700\u7684\u4f9d\u8d56\uff0c\u5305\u62ec\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containerd"),(0,l.kt)("li",{parentName:"ul"},"Flannel (CNI)"),(0,l.kt)("li",{parentName:"ul"},"CoreDNS"),(0,l.kt)("li",{parentName:"ul"},"Traefik (Ingress)"),(0,l.kt)("li",{parentName:"ul"},"Klipper-lb (Service LB)"),(0,l.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f local-path-provisioner"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u5b9e\u7528\u7a0b\u5e8f\uff08iptables\u3001socat \u7b49\uff09")))),(0,l.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u53eb-k3s"},"\u4e3a\u4ec0\u4e48\u53eb K3s?"),(0,l.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u5b89\u88c5\u7684 Kubernetes \u53ea\u5360\u7528\u4e00\u534a\u7684\u5185\u5b58\u3002Kubernetes \u662f\u4e00\u4e2a 10 \u4e2a\u5b57\u6bcd\u7684\u5355\u8bcd\uff0c\u7b80\u5199\u4e3a K8s\u3002Kubernetes \u7684\u4e00\u534a\u5c31\u662f\u4e00\u4e2a 5 \u4e2a\u5b57\u6bcd\u7684\u5355\u8bcd\uff0c\u56e0\u6b64\u7b80\u5199\u4e3a K3s\u3002K3s \u6ca1\u6709\u5168\u79f0\uff0c\u4e5f\u6ca1\u6709\u5b98\u65b9\u7684\u53d1\u97f3\u3002"))}f.isMDXComponent=!0}}]);