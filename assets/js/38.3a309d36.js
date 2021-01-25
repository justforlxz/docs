(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{449:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"dtk-translate-py工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dtk-translate-py工具"}},[t._v("#")]),t._v(" Dtk-translate.py工具")]),t._v(" "),a("h3",{attrs:{id:"qm文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qm文件"}},[t._v("#")]),t._v(" QM文件")]),t._v(" "),a("ul",[a("li",[t._v("QM 文件是qt的语言文件。用qt的languist先制作好ts文件，再生成qm文件，再在qt程序里面加载qm文件即可实现国际化")]),t._v(" "),a("li",[t._v("QM 文件是QT中translate类进行读取的源文件（英译中的翻译文件），其代码是不可读懂的。")])]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("TS文件的生成：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("lupdate -verbose -pro xx.pro -ts xx.ts\n")])])]),a("p",[t._v("TS文件其格式是XML的，可以通过编译器进行编辑或是linguist语言专家工具进行编辑翻译。")]),t._v(" "),a("p",[a("strong",[t._v("它们的联系：")])]),t._v(" "),a("p",[t._v("TS文件 ---\x3e QM文件（通过QT中的lrelease工具进行转换）;")]),t._v(" "),a("p",[a("strong",[t._v("转换方法：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("lrelease -verbose xx.ts -qm xx.qm\n")])])]),a("p",[t._v("或是图形界面发布，使用linguist,通过图形界面去生成qm文件")]),t._v(" "),a("p",[a("code",[t._v("-verbose")]),t._v(" 解释并显示操作过程")]),t._v(" "),a("p",[a("strong",[t._v("翻译后的文件可以用Qt程序直接调用。（一般情况下，直接在main.cpp函数直接调用就可以了。） 调用方法如下：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("QTranslator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("translator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("QTranslator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \ntranslator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“__FileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qm”，”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("　 \nqApp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("installTranslator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("translator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[a("strong",[t._v("在工程文件.pro里添加一项：")]),t._v(" "),a("code",[t._v("TRANSLATION += translation_simpleChinese.qm")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"dtk-translate-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dtk-translate-工具"}},[t._v("#")]),t._v(" dtk-translate 工具")]),t._v(" "),a("p",[t._v("安装："),a("code",[t._v("sudo apt install -y libdtkcore5-bin")])]),t._v(" "),a("p",[t._v("当我们需要使用 lrelease 生成 qm 文件时，实际应用中可能有很多 ts 文件。针对我们自己的每个项目，可以创建一个 translations 目录，把 ts 文件放在 translations 目录中；在当前项目中使用 dtk-translate 工具即可把 ts 文件转换成 qm 文件。")]),t._v(" "),a("p",[t._v("*"),a("strong",[t._v("以控制中心项目为例*")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" ~/dde-control-center/translations/\ndde-control-center_ady.ts      dde-control-center_th.ts     dialogs_uk.ts\ndde-control-center_af.ts       dde-control-center_tr.ts     dialogs_ur.ts\ndde-control-center_ak.ts       dde-control-center_ug.ts     dialogs_vi.ts\ndde-control-center_am_ET.ts    dde-control-center_uk.ts     dialogs_zh_CN.ts\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\npython3 /usr/lib/x86_64-linux-gnu/libdtk-5.2.2/DCore/bin/dtk-translate.py\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" ~/dde-control-center/translations/\ndde-control-center_ady.qm      dde-control-center_ug.ts     dialogs_ur.qm\ndde-control-center_ady.ts      dde-control-center_uk.qm     dialogs_ur.ts\ndde-control-center_af.qm       dde-control-center_uk.ts     dialogs_vi.qm\ndde-control-center_af.ts       dde-control-center_ur.qm     dialogs_vi.ts\ndde-control-center_ak.qm       dde-control-center_ur.ts     dialogs_zh_CN.qm\ndde-control-center_ak.ts       dde-control-center_uz.qm     dialogs_zh_CN.ts\ndde-control-center_am_ET.qm    dde-control-center_uz.ts     dialogs_zh_HK.qm\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);