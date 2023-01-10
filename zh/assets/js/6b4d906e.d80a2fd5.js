"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[535],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,m(m({ref:t},s),{},{components:n})):a.createElement(k,m({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,m=new Array(l);m[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var o=2;o<l;o++)m[o]=n[o];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),m=["components"],i={title:"Helm",weight:42},p=void 0,o={unversionedId:"helm/helm",id:"helm/helm",title:"Helm",description:"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u901a\u8fc7 Helm\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u53ef\u914d\u7f6e\u7684 deployment\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u80fd\u4f7f\u7528\u9759\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Deployment \u5546\u5e97\u5e94\u7528\uff0c\u8bf7\u53c2\u89c1 Helm \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/helm/helm.md",sourceDirName:"helm",slug:"/helm/",permalink:"/zh/helm/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/helm/helm.md",tags:[],version:"current",lastUpdatedAt:1673388488,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{title:"Helm",weight:42},sidebar:"mySidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh/networking/"},next:{title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e",permalink:"/zh/advanced/"}},s={},d=[{value:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c Helm Chart",id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c-helm-chart",level:3},{value:"\u4f7f\u7528 Helm CRD",id:"\u4f7f\u7528-helm-crd",level:3},{value:"HelmChart \u5b57\u6bb5\u5b9a\u4e49",id:"helmchart-\u5b57\u6bb5\u5b9a\u4e49",level:4},{value:"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",id:"\u4f7f\u7528-helmchartconfig-\u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",level:3},{value:"\u4ece Helm v2 \u8fc1\u79fb",id:"\u4ece-helm-v2-\u8fc1\u79fb",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u901a\u8fc7 Helm\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u53ef\u914d\u7f6e\u7684 deployment\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u80fd\u4f7f\u7528\u9759\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Deployment \u5546\u5e97\u5e94\u7528\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/quickstart/"},"Helm \u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"K3s \u4e0d\u9700\u8981\u4efb\u4f55\u7279\u6b8a\u914d\u7f6e\u5373\u53ef\u914d\u5408 Helm \u547d\u4ee4\u884c\u5de5\u5177\u4e00\u8d77\u4f7f\u7528\u3002\u8bf7\u786e\u4fdd\u4f60\u5df2\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/cluster-access/"},"\u96c6\u7fa4\u8bbf\u95ee"),"\u90e8\u5206\u6b63\u786e\u8bbe\u7f6e\u4e86 kubeconfig\u3002K3s \u5305\u542b\u4e00\u4e9b\u5176\u4ed6\u529f\u80fd\uff0c\u8ba9\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8-helm-crd"},"rancher/helm-release CRD")," \u66f4\u8f7b\u677e\u5730\u90e8\u7f72\u4f20\u7edf\u7684 Kubernetes \u8d44\u6e90\u6e05\u5355\u548c Helm Chart\u3002"),(0,l.kt)("p",null,"\u672c\u8282\u6db5\u76d6\u4ee5\u4e0b\u4e3b\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E6%B8%85%E5%8D%95%E5%92%8C-helm-chart"},"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c Helm Chart")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8-helm-crd"},"\u4f7f\u7528 Helm CRD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8-helmchartconfig-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%93%E5%8C%85%E7%BB%84%E4%BB%B6"},"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%8E-helm-v2-%E8%BF%81%E7%A7%BB"},"\u4ece Helm v2 \u8fc1\u79fb"))),(0,l.kt)("h3",{id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c-helm-chart"},"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c Helm Chart"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \u4e2d\u627e\u5230\u7684 Kubernetes \u6e05\u5355\u90fd\u4f1a\u4ee5\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u65b9\u5f0f\u81ea\u52a8\u90e8\u7f72\u5230 K3s\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u90e8\u7f72\u7684\u6e05\u5355\u4f5c\u4e3a AddOn \u81ea\u5b9a\u4e49\u8d44\u6e90\u8fdb\u884c\u7ba1\u7406\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get addon -A")," \u67e5\u770b\u5b83\u4eec\u3002\u4f60\u80fd\u627e\u5230\u7528\u4e8e\u6253\u5305\u7ec4\u4ef6\u7684 AddOn\uff0c\u4f8b\u5982 CoreDNS\u3001Local-Storage\u3001Traefik \u7b49\u3002AddOn \u7531\u90e8\u7f72\u63a7\u5236\u5668\u81ea\u52a8\u521b\u5efa\uff0c\u5e76\u6839\u636e\u5b83\u4eec\u5728\u6e05\u5355\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u540d\u547d\u540d\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5c06 Helm Chart \u90e8\u7f72\u4e3a AddOn\u3002K3s \u5305\u542b\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-controller/"},"Helm Controller"),"\uff0c\u5b83\u4f7f\u7528 HelmChart \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD) \u7ba1\u7406 Helm Chart\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-helm-crd"},"\u4f7f\u7528 Helm CRD"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-controller#helm-controller"},"HelmChart \u8d44\u6e90\u5b9a\u4e49"),"\u6355\u83b7\u4e86\u4f60\u901a\u5e38\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," \u547d\u4ee4\u884c\u5de5\u5177\u7684\u5927\u90e8\u5206\u9009\u9879\u3002\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u4ece\u9ed8\u8ba4 Chart \u4ed3\u5e93\u90e8\u7f72 Grafana\uff0c\u5e76\u8986\u76d6\u67d0\u4e9b\u9ed8\u8ba4\u7684 Chart \u503c\u3002\u8bf7\u6ce8\u610f\uff0cHelmChart \u8d44\u6e90\u672c\u8eab\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u4f46 Chart \u7684\u8d44\u6e90\u5c06\u90e8\u7f72\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"monitoring")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: grafana\n  namespace: kube-system\nspec:\n  chart: stable/grafana\n  targetNamespace: monitoring\n  set:\n    adminPassword: "NotVerySafePassword"\n  valuesContent: |-\n    image:\n      tag: master\n    env:\n      GF_EXPLORE_ENABLED: true\n    adminUser: admin\n    sidecar:\n      datasources:\n        enabled: true\n')),(0,l.kt)("h4",{id:"helmchart-\u5b57\u6bb5\u5b9a\u4e49"},"HelmChart \u5b57\u6bb5\u5b9a\u4e49"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"Helm \u53c2\u6570/\u6807\u5fd7\u7b49\u6548\u9879"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart \u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"NAME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.chart"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed3\u5e93\u4e2d\u7684 Helm Chart \u540d\u79f0\uff0c\u6216 chart archive (.tgz) \u7684\u5b8c\u6574 HTTPS URL"),(0,l.kt)("td",{parentName:"tr",align:null},"CHART")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.targetNamespace"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart \u76ee\u6807\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.version"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart \u7248\u672c\uff08\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5\u65f6\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--version"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.repo"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart \u4ed3\u5e93 URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--repo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.helmVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"v3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u4f7f\u7528\u7684 Helm \u7248\u672c\uff08",(0,l.kt)("inlineCode",{parentName:"td"},"v2")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"v3"),"\uff09"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u9700\u8981\u6b64 Chart \u6765\u5f15\u5bfc\u96c6\u7fa4\uff08Cloud Controller Manager \u7b49\uff09\uff0c\u8bf7\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.set"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u7b80\u5355\u7684\u9ed8\u8ba4 Chart \u503c\u3002\u4f18\u5148\u4e8e\u901a\u8fc7 valuesContent \u8bbe\u7f6e\u7684\u9009\u9879\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--set")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"--set-string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.jobImage"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b89\u88c5 helm chart \u65f6\u8981\u4f7f\u7528\u7684\u955c\u50cf\u3002\u4f8b\u5982\uff1arancher/klipper-helm:v0.3.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.valuesContent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 YAML \u6587\u4ef6\u5185\u5bb9\u8986\u76d6\u590d\u6742\u7684\u9ed8\u8ba4 Chart \u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--values"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.chartContent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 \u7f16\u7801\u7684 chart archive .tgz\uff0c\u8986\u76d6 spec.chart"),(0,l.kt)("td",{parentName:"tr",align:null},"CHART")))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u96c6\u7fa4\u5185\u7684 Kubernetes APIServer \u533f\u540d\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/static/")," \u4e2d\u7684\u5185\u5bb9\u3002\u6b64 URL \u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.chart")," \u5b57\u6bb5\u4e2d\u7684\u7279\u6b8a\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"%{KUBERNETES_API}%")," \u8fdb\u884c\u6a21\u677f\u5316\u3002\u4f8b\u5982\uff0c\u6253\u5305\u7684 Traefik \u7ec4\u4ef6\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://%{KUBERNETES_API}%/static/charts/traefik-12.0.000.tgz")," \u52a0\u8f7d Chart\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u9700\u8981\u9075\u5faa Helm Chart \u547d\u540d\u7ea6\u5b9a\u3002\u8be6\u60c5\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_best_practices/conventions/#chart-names"},"\u6b64\u5904"),"\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u547d\u540d\u8981\u6c42\u6ce8\u610f\u4e8b\u9879"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChart")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," \u6e05\u5355\u6587\u4ef6\u540d\u5e94\u9075\u5b88 Kubernetes \u5bf9\u8c61\u7684",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/"},"\u547d\u540d\u8981\u6c42"),"\u3002Helm Controller \u4f7f\u7528\u6587\u4ef6\u540d\u6765\u521b\u5efa\u5bf9\u8c61\uff0c\u56e0\u6b64\u6587\u4ef6\u540d\u4e5f\u5fc5\u987b\u9075\u5faa\u8be5\u9650\u5236\u3002\u76f8\u5173\u7684\u9519\u8bef\u90fd\u53ef\u4ee5\u5728 k3s-server \u65e5\u5fd7\u4e2d\u89c2\u5bdf\u5230\u3002\u4e0b\u9762\u793a\u4f8b\u662f\u4f7f\u7528\u4e0b\u5212\u7ebf\u5bfc\u81f4\u7684\u9519\u8bef\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"level=error msg=\"Failed to process config: failed to process\n/var/lib/rancher/k3s/server/manifests/k3s_ingress_daemonset.yaml:\nAddon.k3s.cattle.io \\\"k3s_ingress_daemonset\\\" is invalid: metadata.name:\nInvalid value: \\\"k3s_ingress_daemonset\\\": a lowercase RFC 1123 subdomain\nmust consist of lower case alphanumeric characters, '-' or '.', and must\nstart and end with an alphanumeric character (e.g. 'example.com', regex\nused for validation is '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]\n([-a-z0-9]*[a-z0-9])?)*')\"\n"))),(0,l.kt)("h3",{id:"\u4f7f\u7528-helmchartconfig-\u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"},"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"),(0,l.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1")," \u8d77\u53ef\u7528")),(0,l.kt)("p",null,"\u4e3a\u4e86\u5141\u8bb8\u8986\u76d6\u90e8\u7f72\u4e3a HelmCharts\uff08\u4f8b\u5982 Traefik\uff09\u7684\u6253\u5305\u7ec4\u4ef6\u7684\u503c\uff0cK3s \u652f\u6301\u901a\u8fc7 HelmChartConfig \u8d44\u6e90\u8fdb\u884c\u81ea\u5b9a\u4e49\u90e8\u7f72\u3002HelmChartConfig \u8d44\u6e90\u5fc5\u987b\u4e0e\u5bf9\u5e94\u7684 HelmChart \u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u5339\u914d\uff0c\u5e76\u4e14\u652f\u6301\u63d0\u4f9b\u989d\u5916\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"valuesContent"),"\uff0c\u5b83\u4f5c\u4e3a\u9644\u52a0\u503c\u6587\u4ef6\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," \u547d\u4ee4\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"HelmChart ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.set")," \u503c\u4f1a\u8986\u76d6 HelmChart \u548c HelmChartConfig ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.valuesContent")," \u8bbe\u7f6e\u3002")),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u81ea\u5b9a\u4e49\u6253\u5305\u7684 Traefik ingress \u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml")," \u7684\u6587\u4ef6\u5e76\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u586b\u5145\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image:\n      name: traefik\n      tag: v2.8.5\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n")),(0,l.kt)("h3",{id:"\u4ece-helm-v2-\u8fc1\u79fb"},"\u4ece Helm v2 \u8fc1\u79fb"),(0,l.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.17.0%2Bk3s.1"},"v1.17.0+k3s.1")," \u5f00\u59cb\u652f\u6301 Helm v3 \u5e76\u9ed8\u8ba4\u4f7f\u7528\u5b83\u3002")),(0,l.kt)("p",null,"K3s \u53ef\u4ee5\u5904\u7406 Helm v2 \u6216 Helm v3\u3002\u5982\u679c\u4f60\u60f3\u8fc1\u79fb\u5230 Helm v3\uff0cHelm \u7684",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"\u8fd9\u7bc7\u535a\u5ba2\u6587\u7ae0"),"\u89e3\u91ca\u4e86\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u8fdb\u884c\u8fc1\u79fb\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"\u5b98\u65b9 Helm 3 \u6587\u6863"),"\u3002\u8bf7\u786e\u4fdd\u4f60\u5df2\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/cluster-access/"},"\u96c6\u7fa4\u8bbf\u95ee"),"\u90e8\u5206\u6b63\u786e\u8bbe\u7f6e\u4e86 kubeconfig\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Helm 3 \u4e0d\u518d\u9700\u8981 Tiller \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"helm init")," \u547d\u4ee4\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u5b98\u65b9\u6587\u6863\u3002")))}u.isMDXComponent=!0}}]);