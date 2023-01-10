"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[608],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7566:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),s=["components"],l={title:"Backup and Restore",weight:26},i=void 0,d={unversionedId:"backup-restore/backup-restore",id:"backup-restore/backup-restore",title:"Backup and Restore",description:"The way K3s is backed up and restored depends on which type of datastore is used.",source:"@site/docs/backup-restore/backup-restore.md",sourceDirName:"backup-restore",slug:"/backup-restore/",permalink:"/backup-restore/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/backup-restore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:1673388488,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Backup and Restore",weight:26},sidebar:"mySidebar",previous:{title:"Automated Upgrades",permalink:"/upgrades/automated"},next:{title:"Volumes and Storage",permalink:"/storage/"}},p={},u=[{value:"Backup and Restore with External Datastore",id:"backup-and-restore-with-external-datastore",level:3},{value:"Backup and Restore with Embedded etcd Datastore",id:"backup-and-restore-with-embedded-etcd-datastore",level:3},{value:"Creating Snapshots",id:"creating-snapshots",level:4},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",level:4},{value:"Options",id:"options",level:4},{value:"S3 Compatible API Support",id:"s3-compatible-api-support",level:4},{value:"Etcd Snapshot and Restore Subcommands",id:"etcd-snapshot-and-restore-subcommands",level:4}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The way K3s is backed up and restored depends on which type of datastore is used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backup-and-restore-with-external-datastore"},"Backup and Restore with External Datastore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backup-and-restore-with-embedded-etcd-datastore"},"Backup and Restore with Embedded etcd Datastore"))),(0,o.kt)("h3",{id:"backup-and-restore-with-external-datastore"},"Backup and Restore with External Datastore"),(0,o.kt)("p",null,"When an external datastore is used, backup and restore operations are handled outside of K3s. The database administrator will need to back up the external database, or restore it from a snapshot or dump."),(0,o.kt)("p",null,"We recommend configuring the database to take recurring snapshots."),(0,o.kt)("p",null,"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"Official MySQL documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"Official PostgreSQL documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/latest/op-guide/recovery/"},"Official etcd documentation"))),(0,o.kt)("h3",{id:"backup-and-restore-with-embedded-etcd-datastore"},"Backup and Restore with Embedded etcd Datastore"),(0,o.kt)("admonition",{title:"Version Gate",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Available as of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,o.kt)("p",null,"In this section, you'll learn how to create backups of the K3s cluster data and to restore the cluster from backup."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note on Single-Server with embedded SQLite:")," Currently, backups of SQLite are not supported. Instead, make a copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server")," and then delete K3s. ")),(0,o.kt)("h4",{id:"creating-snapshots"},"Creating Snapshots"),(0,o.kt)("p",null,"Snapshots are enabled by default."),(0,o.kt)("p",null,"The snapshot directory defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/snapshots"),". The data-dir value defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s")," and can be changed by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--data-dir")," flag."),(0,o.kt)("p",null,"To configure the snapshot interval or the number of retained snapshots, refer to the ",(0,o.kt)("a",{parentName:"p",href:"#options"},"options.")),(0,o.kt)("h4",{id:"restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot"),(0,o.kt)("p",null,"When K3s is restored from backup, the old data directory will be moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/etcd-old/"),". Then K3s will attempt to restore the snapshot by creating a new data directory, then starting etcd with a new K3s cluster with one etcd member."),(0,o.kt)("p",null,"To restore the cluster from backup, run K3s with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," option, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cluster-reset-restore-path")," also given:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," A message in the logs says that K3s can be restarted without the flags. Start k3s again and should run successfully and be restored from the specified snapshot."),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("p",null,"These options can be passed in with the command line, or in the ",(0,o.kt)("a",{parentName:"p",href:"/installation/configuration#configuration-file"},"configuration file,")," which may be easier to use."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-disable-snapshots")),(0,o.kt)("td",{parentName:"tr",align:null},"Disable automatic etcd snapshots")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-schedule-cron")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Snapshot interval time in cron spec. eg. every 5 hours ",(0,o.kt)("inlineCode",{parentName:"td"},"0 */5 * * *"),"(default: ",(0,o.kt)("inlineCode",{parentName:"td"},"0 */12 * * *"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-retention")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of snapshots to retain (default: 5)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-dir")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Directory to save db snapshots. (Default location: ",(0,o.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--cluster-reset")),(0,o.kt)("td",{parentName:"tr",align:null},"Forget all peers and become sole member of a new cluster. This can also be set with the environment variable ",(0,o.kt)("inlineCode",{parentName:"td"},"[$K3S_CLUSTER_RESET]"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--cluster-reset-restore-path")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to snapshot file to be restored")))),(0,o.kt)("h4",{id:"s3-compatible-api-support"},"S3 Compatible API Support"),(0,o.kt)("p",null,"K3s supports writing etcd snapshots to and restoring etcd snapshots from systems with S3-compatible APIs. S3 support is available for both on-demand and scheduled snapshots."),(0,o.kt)("p",null,"The arguments below have been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," subcommand. These flags exist for the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," subcommand as well however the ",(0,o.kt)("inlineCode",{parentName:"p"},"--etcd-s3")," portion is removed to avoid redundancy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable backup to S3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 endpoint url")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint-ca")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 custom CA cert to connect to S3 endpoint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-skip-ssl-verify")),(0,o.kt)("td",{parentName:"tr",align:null},"Disables S3 SSL certificate validation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-access-key")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-secret-key")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-bucket")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 bucket name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-region")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 region / bucket location (optional). defaults to us-east-1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--etcd-s3-folder")),(0,o.kt)("td",{parentName:"tr",align:null},"S3 folder")))),(0,o.kt)("p",null,"To perform an on-demand etcd snapshot and save it to S3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n")),(0,o.kt)("p",null,"To perform an on-demand etcd snapshot restore from S3, first make sure that K3s isn't running. Then run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n")),(0,o.kt)("h4",{id:"etcd-snapshot-and-restore-subcommands"},"Etcd Snapshot and Restore Subcommands"),(0,o.kt)("p",null,"k3s supports a set of subcommands for working with your etcd snapshots."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Subcommand"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"delete"),(0,o.kt)("td",{parentName:"tr",align:null},"Delete given snapshot(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ls, list, l"),(0,o.kt)("td",{parentName:"tr",align:null},"List snapshots")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prune"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove snapshots that exceed the configured retention count")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"save"),(0,o.kt)("td",{parentName:"tr",align:null},"Trigger an immediate etcd snapshot")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," subcommand is the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),". The latter will eventually be deprecated in favor of the former.")),(0,o.kt)("p",null,"These commands will perform as expected whether the etcd snapshots are stored locally or in an S3 compatible object store."),(0,o.kt)("p",null,"For additional information on the etcd snapshot subcommands, run ",(0,o.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),"."),(0,o.kt)("p",null,"Delete a snapshot from S3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n")),(0,o.kt)("p",null,"Prune local snapshots with the default retention policy (5). The ",(0,o.kt)("inlineCode",{parentName:"p"},"prune")," subcommand takes an additional flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--snapshot-retention")," that allows for overriding the default retention policy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune --snapshot-retention 10\n")))}m.isMDXComponent=!0}}]);