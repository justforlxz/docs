(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{415:function(a,e,t){"use strict";t.r(e);var o=t(46),i=Object(o.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v("Registro de cambios de la interfaz Dtk:")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("fecha")]),a._v(" "),t("th",[a._v("Nombre del proyecto")]),a._v(" "),t("th",[a._v("número de versión")]),a._v(" "),t("th",[a._v("nota")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("2020/11/03")]),a._v(" "),t("td",[a._v("dtkwidget")]),a._v(" "),t("td",[a._v("5.4.1")]),a._v(" "),t("td",[t("code",[a._v("-DApplication *DApplication::globalApplication(int argc, char **argv)")]),a._v(" "),t("br"),t("code",[a._v("+DApplication *DApplication::globalApplication(int &argc, char **argv)")]),t("br"),a._v("refactor: Reajuste de los parámetros de la línea de mando para un objeto de aplicación existente    El argumento del argot de GlobalApplication y la construcción de DApplication sostienen  Consistente, cambiar los parámetros de paso usando referencias int.    Cuando la instancia ya existe, entonces la QCoreApplication se actualiza de acuerdo con el argc y el argv pasados en  La información de los parámetros del proceso almacenada en")])]),a._v(" "),t("tr",[t("td",[a._v("2020/10/29")]),a._v(" "),t("td",[a._v("dtkwidget")]),a._v(" "),t("td",[a._v("5.4.0")]),a._v(" "),t("td",[t("code",[a._v("+DApplication *DApplication::globalApplication(int &argc, char **argv)add DApplication::globalApplication")]),t("br"),a._v("Añadir una interfaz para generar DApplication, principalmente para su uso con deepin-trubo, para evitar que el propio programa cree objetos DApplication de nuevo, el uso de globalApplication permitirá compartir instancias ya creadas por deepin-turbo.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);