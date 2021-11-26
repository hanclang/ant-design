(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/detail-page.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/detail-page.zh-CN.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/detail-page.zh-CN.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"article\",\n    {\n\n    },\n    [\n      \"h2\",\n      \"设计目标\"\n    ],\n    [\n      \"p\",\n      \"提高信息浏览和搜寻效率，便捷执行操作。\"\n    ],\n    [\n      \"h2\",\n      \"设计原则\"\n    ],\n    [\n      \"div\",\n      {\n        \"class\": \"design-inline-cards\"\n      },\n      [\n        \"div\",\n        [\n          \"img\",\n          {\n            \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3CfhSZLxsIEAAAAAAAAAAABkARQnAQ\"\n          }\n        ],\n        [\n          \"div\",\n          [\n            \"h4\",\n            \"直截了当\"\n          ],\n          [\n            \"p\",\n            \"信息尽量平铺展示，如无必要，不要做大量隐藏、折叠等操作。\"\n          ]\n        ]\n      ],\n      [\n        \"div\",\n        [\n          \"img\",\n          {\n            \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*lN6IRbhv8fIAAAAAAAAAAABkARQnAQ\"\n          }\n        ],\n        [\n          \"div\",\n          [\n            \"h4\",\n            \"层次分明\"\n          ],\n          [\n            \"p\",\n            \"按照接近原则，对信息分层分组展示，降低单个页面内信息复杂度。\"\n          ]\n        ]\n      ],\n      [\n        \"div\",\n        [\n          \"img\",\n          {\n            \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*jXDwQ6NF7dIAAAAAAAAAAABkARQnAQ\"\n          }\n        ],\n        [\n          \"div\",\n          [\n            \"h4\",\n            \"化繁为简\"\n          ],\n          [\n            \"p\",\n            \"减少复杂结构的使用，尽量使用相似结构和模块，降低结构差异对用户的干扰，让用户更聚焦于信息本身。\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"如何设计\"\n    ],\n    [\n      \"h3\",\n      \"基础布局\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*tKooSqMRdTEAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"基础详情单页直接平铺所有需要展示的的信息，推荐使用这种详情展示方式。\"\n    ],\n    [\n      \"h4\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://preview.pro.ant.design/profile/basic\"\n        },\n        \"模板 -  基础详情\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Z78YSLlHYFUAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"将主体内容呈现于一整张卡片中，使用不通栏分割线将相关内容分组。\"\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"什么时候使用\"\n      ]\n    ],\n    [\n      \"p\",\n      \"需要展示内容量少，复杂度低的信息。\"\n    ],\n    [\n      \"h4\",\n      \"模板 - 单据详情\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*51LGQopcBQgAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"展示某个审批单据的详细信息，将内容复杂度较高的各模块使用卡片区割开来。\"\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"什么时候使用\"\n      ]\n    ],\n    [\n      \"p\",\n      \"适用于审批流程和审批明细展示，以及部分审批操作。\"\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"涉及哪些操作\"\n      ]\n    ],\n    [\n      \"p\",\n      \"通过、驳回、转交、加签、挂起、撤回。\"\n    ],\n    [\n      \"h3\",\n      \"复杂布局\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*BBAlT7zwS0gAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"将信息复杂度较高、相关性较弱的信息拆分为多个部分，并通过 页签 、分步、卡片分区、卡片内分组等形式按照相关性分组，用来处理复杂度较高的详情内容。\"\n    ],\n    [\n      \"h4\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://preview.pro.ant.design/profile/advanced\"\n        },\n        \"模板 -  高级详情\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*772pTpKDNkwAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*12bBR7yx30wAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"什么时候使用\"\n      ]\n    ],\n    [\n      \"p\",\n      \"当详情页内容量大复杂度高时，不得不拆分为多个页签，作为辅助导航引导用户浏览信息。\"\n    ],\n    [\n      \"h4\",\n      \"模板 - 发布流程\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*0IGLSaqstRoAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"将内容分阶段组织，了解不同阶段的事项。\"\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"什么时候使用\"\n      ]\n    ],\n    [\n      \"p\",\n      \"适用于开发协作流程。\"\n    ],\n    [\n      \"h2\",\n      \"设计建议\"\n    ],\n    [\n      \"h3\",\n      \"选择模板\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kC5tQbp8A60AAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"根据信息的复杂度和相关性模型，选用相应的信息呈现方式，选用合理的布局方案来承载详情页的内容。\"\n    ],\n    [\n      \"h3\",\n      \"区隔方式\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3jPZSa8n2g4AAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"根据各个信息之间的相关性，判断各个信息模块之间的亲密度，通常情况下，相关性强的内容尽量靠近，相关性弱的的内容尽量拉开层次。\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"不通栏分割线：将相关内容分开；\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"通栏分割线：将内容分成多个部分；\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"卡片：放置一个主题；\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"页签：对象描述信息最顶层组织方式，如按版本组织、按意图组织、按阶段组织；\"\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"内容组件\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img no-padding\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZRvkTYUMKLQAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"根据不同的信息类型和复杂度选用对应的信息呈现方式。按复杂度由低至高，提供以下组件供选择：\"\n    ],\n    [\n      \"h2\",\n      \"扩展阅读\"\n    ],\n    [\n      \"h3\",\n      \"会用到哪些全局规则\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/docs/spec/data-format\"\n            },\n            \"数据格式\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/docs/spec/buttons\"\n            },\n            \"按钮\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"会用到哪些模块或组件\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/components/descriptions-cn/#header\"\n            },\n            \"描述列表\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/components/collapse-cn/\"\n            },\n            \"折叠面板\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/components/table-cn/\"\n            },\n            \"表格\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"外部参考文章\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://blogs.sap.com/2017/08/06/fiori-elements-how-to-design-an-object-page/\"\n            },\n            \"Fiori – How to Design an Object Page\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://experience.sap.com/skillup/sap-fiori-2-0-the-object-page-part-1-its-history/\"\n            },\n            \"SAP Fiori 2.0: The Object Page —— Part 1: It's History\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://experience.sap.com/fiori-design-web/?s=Details+page\"\n            },\n            \"Fiori 详情页汇总\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://experience.sap.com/fiori-design-web/object-page/\"\n            },\n            \"Object Page Floorplan\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://wiki.mbalib.com/wiki/%E8%B6%85%E5%B8%82%E5%95%86%E5%93%81%E9%99%88%E5%88%97%E5%8E%9F%E5%88%99\"\n            },\n            \"超市商品陈列原则\"\n          ]\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"设计模式\",\n    \"type\": \"模板文档\",\n    \"order\": 3,\n    \"title\": \"详情页\",\n    \"filename\": \"docs/spec/detail-page.zh-CN.md\"\n  },\n  \"description\": [\n    \"section\",\n    [\n      \"p\",\n      \"详情页向用户展示一个对象的完整信息，主要用与信息浏览，允许对该对象发起编辑等操作。\"\n    ]\n  ],\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#设计目标\",\n          \"title\": \"设计目标\"\n        },\n        \"设计目标\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#设计原则\",\n          \"title\": \"设计原则\"\n        },\n        \"设计原则\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#如何设计\",\n          \"title\": \"如何设计\"\n        },\n        \"如何设计\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#设计建议\",\n          \"title\": \"设计建议\"\n        },\n        \"设计建议\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#扩展阅读\",\n          \"title\": \"扩展阅读\"\n        },\n        \"扩展阅读\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./docs/spec/detail-page.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);