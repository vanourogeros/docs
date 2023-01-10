"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[834],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Quick-Start Guide",weight:10},l=void 0,c={unversionedId:"quick-start/quick-start",id:"quick-start/quick-start",title:"Quick-Start Guide",description:"This guide will help you quickly launch a cluster with default options. The installation section covers in greater detail how K3s can be set up.",source:"@site/docs/quick-start/quick-start.md",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/quick-start/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/quick-start/quick-start.md",tags:[],version:"current",lastUpdatedAt:1673388488,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Quick-Start Guide",weight:10},sidebar:"mySidebar",previous:{title:"Architecture",permalink:"/architecture/"},next:{title:"Installation",permalink:"/installation/"}},u={},p=[{value:"Install Script",id:"install-script",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you quickly launch a cluster with default options. The ",(0,i.kt)("a",{parentName:"p",href:"/installation/"},"installation section")," covers in greater detail how K3s can be set up."),(0,i.kt)("p",null,"For information on how K3s components work together, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/architecture/"},"architecture section.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"New to Kubernetes? The official Kubernetes docs already have some great tutorials outlining the basics ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"here"),".")),(0,i.kt)("h2",{id:"install-script"},"Install Script"),(0,i.kt)("p",null,"K3s provides an installation script that is a convenient way to install it as a service on systemd or openrc based systems. This script is available at ",(0,i.kt)("a",{parentName:"p",href:"https://get.k3s.io."},"https://get.k3s.io.")," To install K3s using this method, just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh -\n")),(0,i.kt)("p",null,"After running this installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The K3s service will be configured to automatically restart after node reboots or if the process crashes or is killed"),(0,i.kt)("li",{parentName:"ul"},"Additional utilities will be installed, including ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"crictl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ctr"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"k3s-killall.sh"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"k3s-uninstall.sh")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," file will be written to ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," and the kubectl installed by K3s will automatically use it")),(0,i.kt)("p",null,"A single-node server installation is afully-functional Kubernetes cluster, including all the datastore, control-plane, kubelet, and container runtime components necessary to host workload pods. It is not necessary to add additional server or agents nodes, but you may want to do so to add additional capacity or redundancy to your cluster."),(0,i.kt)("p",null,"To install additional agent nodes and add them to the cluster, run the installation script with the ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," environment variables. Here is an example showing how to join an agent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n")),(0,i.kt)("p",null,"Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_URL")," parameter causes the installer to configure K3s as an agent, instead of a server. The K3s agent will register with the K3s server listening at the supplied URL. The value to use for ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," is stored at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/node-token")," on your server node."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each machine must have a unique hostname. If your machines do not have unique hostnames, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," environment variable and provide a value with a valid and unique hostname for each node.")))}h.isMDXComponent=!0}}]);