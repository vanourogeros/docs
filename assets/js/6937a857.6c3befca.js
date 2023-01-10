"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Volumes and Storage",weight:30},i=void 0,p={unversionedId:"storage/storage",id:"storage/storage",title:"Volumes and Storage",description:"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails.",source:"@site/docs/storage/storage.md",sourceDirName:"storage",slug:"/storage/",permalink:"/storage/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/storage/storage.md",tags:[],version:"current",lastUpdatedAt:1673388488,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Volumes and Storage",weight:30},sidebar:"mySidebar",previous:{title:"Backup and Restore",permalink:"/backup-restore/"},next:{title:"Networking",permalink:"/networking/"}},c={},u=[{value:"What&#39;s different about K3s storage?",id:"whats-different-about-k3s-storage",level:2},{value:"Setting up the Local Storage Provider",id:"setting-up-the-local-storage-provider",level:2},{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3},{value:"Setting up Longhorn",id:"setting-up-longhorn",level:2},{value:"pvc.yaml",id:"pvcyaml-1",level:3},{value:"pod.yaml",id:"podyaml-1",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails."),(0,o.kt)("p",null,"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage. For details on how PVs and PVCs work, refer to the official Kubernetes documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"storage.")),(0,o.kt)("p",null,"This page describes how to set up persistent storage with a local storage provider, or with ",(0,o.kt)("a",{parentName:"p",href:"#setting-up-longhorn"},"Longhorn.")),(0,o.kt)("h2",{id:"whats-different-about-k3s-storage"},"What's different about K3s storage?"),(0,o.kt)("p",null,'K3s removes several optional volume plugins and all built-in (sometimes referred to as "in-tree") cloud providers. We do this in order to achieve a smaller binary size and to avoid dependence on third-party cloud or data center technologies and services, which may not be available in many K3s use cases. We are able to do this because their removal affects neither core Kubernetes functionality nor conformance.'),(0,o.kt)("p",null,"The following volume plugins have been removed from K3s:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cephfs"),(0,o.kt)("li",{parentName:"ul"},"fc"),(0,o.kt)("li",{parentName:"ul"},"flocker"),(0,o.kt)("li",{parentName:"ul"},"git_repo"),(0,o.kt)("li",{parentName:"ul"},"glusterfs"),(0,o.kt)("li",{parentName:"ul"},"portworx"),(0,o.kt)("li",{parentName:"ul"},"quobyte"),(0,o.kt)("li",{parentName:"ul"},"rbd"),(0,o.kt)("li",{parentName:"ul"},"storageos")),(0,o.kt)("p",null,"Both components have out-of-tree alternatives that can be used with K3s: The Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"Container Storage Interface (CSI)")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/"},"Cloud Provider Interface (CPI)"),"."),(0,o.kt)("p",null,"Kubernetes maintainers are actively migrating in-tree volume plugins to CSI drivers. For more information on this migration, please refer ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/"},"here"),"."),(0,o.kt)("h2",{id:"setting-up-the-local-storage-provider"},"Setting up the Local Storage Provider"),(0,o.kt)("p",null,"K3s comes with Rancher's Local Path Provisioner and this enables the ability to create persistent volume claims out of the box using local storage on the respective node. Below we cover a simple example. For more information please reference the official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage"},"here"),"."),(0,o.kt)("p",null,"Create a hostPath backed persistent volume claim and a pod to utilize it:"),(0,o.kt)("h3",{id:"pvcyaml"},"pvc.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,o.kt)("h3",{id:"podyaml"},"pod.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: local-path-pvc\n")),(0,o.kt)("p",null,"Apply the yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,o.kt)("p",null,"Confirm the PV and PVC are created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,o.kt)("p",null,"The status should be Bound for each."),(0,o.kt)("h2",{id:"setting-up-longhorn"},"Setting up Longhorn"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Longhorn does not support ARM32.")),(0,o.kt)("p",null,"K3s supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"Longhorn"),", an open-source distributed block storage system for Kubernetes."),(0,o.kt)("p",null,"Below we cover a simple example. For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/latest/"},"official documentation"),"."),(0,o.kt)("p",null,"Apply the longhorn.yaml to install Longhorn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n")),(0,o.kt)("p",null,"Longhorn will be installed in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"longhorn-system"),"."),(0,o.kt)("p",null,"Apply the yaml to create the PVC and pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,o.kt)("h3",{id:"pvcyaml-1"},"pvc.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,o.kt)("h3",{id:"podyaml-1"},"pod.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: longhorn-volv-pvc\n")),(0,o.kt)("p",null,"Confirm the PV and PVC are created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,o.kt)("p",null,"The status should be Bound for each."))}d.isMDXComponent=!0}}]);