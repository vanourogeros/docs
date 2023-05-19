"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const o={title:"High Availability External DB",weight:30},i=void 0,s={unversionedId:"datastore/ha",id:"datastore/ha",title:"High Availability External DB",description:"This section describes how to install a high-availability K3s cluster with an external database.",source:"@site/docs/datastore/ha.md",sourceDirName:"datastore",slug:"/datastore/ha",permalink:"/datastore/ha",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha.md",tags:[],version:"current",lastUpdatedAt:1684521629,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"High Availability External DB",weight:30},sidebar:"mySidebar",previous:{title:"High Availability Embedded etcd",permalink:"/datastore/ha-embedded"},next:{title:"Cluster Access",permalink:"/cluster-access/"}},l={},d=[{value:"Installation Outline",id:"installation-outline",level:2},{value:"1. Create an External Datastore",id:"1-create-an-external-datastore",level:3},{value:"2. Launch Server Nodes",id:"2-launch-server-nodes",level:3},{value:"3. Optional: Configure a Fixed Registration Address",id:"3-optional-configure-a-fixed-registration-address",level:3},{value:"4. Optional: Join Additional Server Nodes",id:"4-optional-join-additional-server-nodes",level:3},{value:"5. Optional: Join Agent Nodes",id:"5-optional-join-agent-nodes",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to install a high-availability K3s cluster with an external database."),(0,r.kt)("p",null,"Single server clusters can meet a variety of use cases, but for environments where uptime of the Kubernetes control plane is critical, you can run K3s in an HA configuration. An HA K3s cluster is comprised of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Two or more ",(0,r.kt)("strong",{parentName:"li"},"server nodes")," that will serve the Kubernetes API and run other control plane services"),(0,r.kt)("li",{parentName:"ul"},"Zero or more ",(0,r.kt)("strong",{parentName:"li"},"agent nodes")," that are designated to run your apps and services"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("strong",{parentName:"li"},"external datastore")," (as opposed to the embedded SQLite datastore used in single-server setups)"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"fixed registration address")," that is placed in front of the server nodes to allow agent nodes to register with the cluster")),(0,r.kt)("p",null,"For more details on how these components work together, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/architecture/#high-availability-k3s"},"architecture section.")),(0,r.kt)("p",null,"Agents register through the fixed registration address, but after registration they establish a connection directly to one of the server nodes. This is a websocket connection initiated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s agent")," process, it is maintained by a client-side load balancer running as part of the agent process."),(0,r.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,r.kt)("p",null,"Setting up an HA cluster requires the following steps:"),(0,r.kt)("h3",{id:"1-create-an-external-datastore"},"1. Create an External Datastore"),(0,r.kt)("p",null,"You will first need to create an external datastore for the cluster. See the ",(0,r.kt)("a",{parentName:"p",href:"/datastore/"},"Cluster Datastore Options")," documentation for more details."),(0,r.kt)("h3",{id:"2-launch-server-nodes"},"2. Launch Server Nodes"),(0,r.kt)("p",null,"K3s requires two or more server nodes for this HA configuration. See the ",(0,r.kt)("a",{parentName:"p",href:"/installation/requirements"},"Requirements")," guide for minimum machine requirements."),(0,r.kt)("p",null,"When running the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s server")," command on these nodes, you must set the ",(0,r.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter so that K3s knows how to connect to the external datastore. The ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," parameter can also be used to set a deterministic token when adding nodes. When empty, this token will be generated automatically for further use."),(0,r.kt)("p",null,"For example, a command like the following could be used to install the K3s server with a MySQL database as the external datastore and ",(0,r.kt)("a",{parentName:"p",href:"/cli/server#cluster-options"},"set a token"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,r.kt)("p",null,"The datastore endpoint format differs based on the database type. For details, refer to the section on ",(0,r.kt)("a",{parentName:"p",href:"/datastore/#datastore-endpoint-format-and-functionality"},"datastore endpoint formats.")),(0,r.kt)("p",null,"To configure TLS certificates when launching server nodes, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/datastore/#external-datastore-configuration-parameters"},"datastore configuration guide.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The same installation options available to single-server installs are also available for high-availability installs. For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"/installation/configuration"},"Configuration Options")," documentation.")),(0,r.kt)("p",null,"By default, server nodes will be schedulable and thus your workloads can get launched on them. If you wish to have a dedicated control plane where no user workloads will run, you can use taints. The ",(0,r.kt)("inlineCode",{parentName:"p"},"node-taint")," parameter will allow you to configure nodes with taints, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-taint CriticalAddonsOnly=true:NoExecute"),"."),(0,r.kt)("p",null,"Once you've launched the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s server")," process on all server nodes, ensure that the cluster has come up properly with ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s kubectl get nodes"),". You should see your server nodes in the Ready state."),(0,r.kt)("h3",{id:"3-optional-configure-a-fixed-registration-address"},"3. Optional: Configure a Fixed Registration Address"),(0,r.kt)("p",null,"Agent nodes need a URL to register against. This can be the IP or hostname of any of the server nodes, but in many cases those may change over time. For example, if you are running your cluster in a cloud that supports scaling groups, you may scale the server node group up and down over time, causing nodes to be created and destroyed and thus having different IPs from the initial set of server nodes. Therefore, you should have a stable endpoint in front of the server nodes that will not change over time. This endpoint can be set up using any number approaches, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A layer-4 (TCP) load balancer"),(0,r.kt)("li",{parentName:"ul"},"Round-robin DNS"),(0,r.kt)("li",{parentName:"ul"},"Virtual or elastic IP addresses")),(0,r.kt)("p",null,"This endpoint can also be used for accessing the Kubernetes API. So you can, for example, modify your ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," file to point to it instead of a specific node. To avoid certificate errors in such a configuration, you should install the server with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--tls-san YOUR_IP_OR_HOSTNAME_HERE")," option. This option adds an additional hostname or IP as a Subject Alternative Name in the TLS cert, and it can be specified multiple times if you would like to access via both the IP and the hostname."),(0,r.kt)("h3",{id:"4-optional-join-additional-server-nodes"},"4. Optional: Join Additional Server Nodes"),(0,r.kt)("p",null,"The same example command in Step 2 can be used to join additional server nodes, where the token from the first node needs to be used."),(0,r.kt)("p",null,"If the first server node was started without the ",(0,r.kt)("inlineCode",{parentName:"p"},"--token")," CLI flag or ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," variable, the token value can be retrieved from any server already joined to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/rancher/k3s/server/token\n")),(0,r.kt)("p",null,"Additional server nodes can then be added ",(0,r.kt)("a",{parentName:"p",href:"/cli/server#cluster-options"},"using the token"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,r.kt)("p",null,"There are a few config flags that must be the same in all server nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network related flags: ",(0,r.kt)("inlineCode",{parentName:"li"},"--cluster-dns"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--cluster-domain"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--cluster-cidr"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--service-cidr")),(0,r.kt)("li",{parentName:"ul"},"Flags controlling the deployment of certain components: ",(0,r.kt)("inlineCode",{parentName:"li"},"--disable-helm-controller"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--disable-kube-proxy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--disable-network-policy")," and any component passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"--disable")),(0,r.kt)("li",{parentName:"ul"},"Feature related flags: ",(0,r.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that you retain a copy of this token as it is required when restoring from backup and adding nodes. Previously, K3s did not enforce the use of a token when using external SQL datastores.")),(0,r.kt)("h3",{id:"5-optional-join-agent-nodes"},"5. Optional: Join Agent Nodes"),(0,r.kt)("p",null,"Because K3s server nodes are schedulable by default, the minimum number of nodes for an HA K3s server cluster is two server nodes and zero agent nodes. To add nodes designated to run your apps and services, join agent nodes to your cluster."),(0,r.kt)("p",null,"Joining agent nodes in an HA cluster is the same as joining agent nodes in a single server cluster. You just need to specify the URL the agent should register to and the token it should use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"K3S_TOKEN=SECRET k3s agent --server https://fixed-registration-address:6443\n")))}p.isMDXComponent=!0}}]);