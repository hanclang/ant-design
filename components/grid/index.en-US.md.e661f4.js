(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/grid/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/grid/index.en-US.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/grid/index.en-US.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"24 Grids System.\"\n    ],\n    [\n      \"h2\",\n      \"Design concept\"\n    ],\n    [\n      \"div\",\n      {\n        \"class\": \"grid-demo\"\n      },\n      [\n        \"div\",\n        {\n          \"class\": \"ant-row demo-row\"\n        },\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-24 demo-col demo-col-1\"\n          },\n          \"\\n    100%\\n  \"\n        ]\n      ],\n      [\n        \"div\",\n        {\n          \"class\": \"ant-row demo-row\"\n        },\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-6 demo-col demo-col-2\"\n          },\n          \"\\n    25%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-6 demo-col demo-col-3\"\n          },\n          \"\\n    25%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-6 demo-col demo-col-2\"\n          },\n          \"\\n    25%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-6 demo-col demo-col-3\"\n          },\n          \"\\n    25%\\n  \"\n        ]\n      ],\n      [\n        \"div\",\n        {\n          \"class\": \"ant-row demo-row\"\n        },\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-8 demo-col demo-col-4\"\n          },\n          \"\\n    33.33%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-8 demo-col demo-col-5\"\n          },\n          \"\\n    33.33%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-8 demo-col demo-col-4\"\n          },\n          \"\\n    33.33%\\n  \"\n        ]\n      ],\n      [\n        \"div\",\n        {\n          \"class\": \"ant-row demo-row\"\n        },\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-12 demo-col demo-col-1\"\n          },\n          \"\\n    50%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-12 demo-col demo-col-3\"\n          },\n          \"\\n    50%\\n  \"\n        ]\n      ],\n      [\n        \"div\",\n        {\n          \"class\": \"ant-row demo-row\"\n        },\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-16 demo-col demo-col-4\"\n          },\n          \"\\n    66.66%\\n  \"\n        ],\n        [\n          \"div\",\n          {\n            \"class\": \"ant-col-8 demo-col demo-col-5\"\n          },\n          \"\\n    33.33%\\n  \"\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.\"\n    ],\n    [\n      \"p\",\n      \"We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.\"\n    ],\n    [\n      \"h2\",\n      \"Outline\"\n    ],\n    [\n      \"p\",\n      \"In the grid system, we define the frame outside the information area based on \",\n      [\n        \"code\",\n        \"row\"\n      ],\n      \" and \",\n      [\n        \"code\",\n        \"column\"\n      ],\n      \", to ensure that every area can have stable arrangement.\"\n    ],\n    [\n      \"p\",\n      \"Following is a brief look at how it works:\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Establish a set of \",\n          [\n            \"code\",\n            \"column\"\n          ],\n          \" in the horizontal space defined by \",\n          [\n            \"code\",\n            \"row\"\n          ],\n          \" (abbreviated col).\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Your content elements should be placed directly in the \",\n          [\n            \"code\",\n            \"col\"\n          ],\n          \", and only \",\n          [\n            \"code\",\n            \"col\"\n          ],\n          \" should be placed directly in \",\n          [\n            \"code\",\n            \"row\"\n          ],\n          \".\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by \",\n          [\n            \"code\",\n            \"<Col span={8} />\"\n          ],\n          \".\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"If the sum of \",\n          [\n            \"code\",\n            \"col\"\n          ],\n          \" spans in a \",\n          [\n            \"code\",\n            \"row\"\n          ],\n          \" are more than 24, then the overflowing \",\n          [\n            \"code\",\n            \"col\"\n          ],\n          \" as a whole will start a new line arrangement.\"\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using \",\n      [\n        \"code\",\n        \"order\"\n      ],\n      \".\"\n    ],\n    [\n      \"p\",\n      \"Layout uses a 24 grid layout to define the width of each \\\"box\\\", but does not rigidly adhere to the grid layout.\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Layout\",\n    \"cols\": 1,\n    \"title\": \"Grid\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg\",\n    \"filename\": \"components/grid/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Design-concept\",\n          \"title\": \"Design concept\"\n        },\n        \"Design concept\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Outline\",\n          \"title\": \"Outline\"\n        },\n        \"Outline\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"p\",\n      \"If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"http://roylee0704.github.io/react-flexbox-grid/\"\n            },\n            \"react-flexbox-grid\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://github.com/whoisandy/react-blocks/\"\n            },\n            \"react-blocks\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Row\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"align\"\n          ],\n          [\n            \"td\",\n            \"Vertical alignment\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"middle\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"gutter\"\n          ],\n          [\n            \"td\",\n            \"Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time \",\n            [\n              \"code\",\n              \"[horizontal, vertical]\"\n            ]\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object \",\n            \"|\",\n            \" array\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"justify\"\n          ],\n          [\n            \"td\",\n            \"Horizontal arrangement\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"start\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"end\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"center\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"space-around\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"space-between\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"start\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"wrap\"\n          ],\n          [\n            \"td\",\n            \"Auto wrap line\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.8.0\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Col\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"flex\"\n          ],\n          [\n            \"td\",\n            \"Flex layout style\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"offset\"\n          ],\n          [\n            \"td\",\n            \"The number of cells to offset Col from the left\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"order\"\n          ],\n          [\n            \"td\",\n            \"Raster order\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"pull\"\n          ],\n          [\n            \"td\",\n            \"The number of cells that raster is moved to the left\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"push\"\n          ],\n          [\n            \"td\",\n            \"The number of cells that raster is moved to the right\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"span\"\n          ],\n          [\n            \"td\",\n            \"Raster number of cells to occupy, 0 corresponds to \",\n            [\n              \"code\",\n              \"display: none\"\n            ]\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"none\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"xs\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"screen < 576px\"\n            ],\n            \" and also default setting, could be a \",\n            [\n              \"code\",\n              \"span\"\n            ],\n            \" value or an object containing above props\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"sm\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"screen ≥ 576px\"\n            ],\n            \", could be a \",\n            [\n              \"code\",\n              \"span\"\n            ],\n            \" value or an object containing above props\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"md\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"screen ≥ 768px\"\n            ],\n            \", could be a \",\n            [\n              \"code\",\n              \"span\"\n            ],\n            \" value or an object containing above props\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"lg\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"screen ≥ 992px\"\n            ],\n            \", could be a \",\n            [\n              \"code\",\n              \"span\"\n            ],\n            \" value or an object containing above props\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"xl\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"screen ≥ 1200px\"\n            ],\n            \", could be a \",\n            [\n              \"code\",\n              \"span\"\n            ],\n            \" value or an object containing above props\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"xxl\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"screen ≥ 1600px\"\n            ],\n            \", could be a \",\n            [\n              \"code\",\n              \"span\"\n            ],\n            \" value or an object containing above props\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"The breakpoints of responsive grid follow \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints\"\n        },\n        \"BootStrap 4 media queries rules\"\n      ],\n      \" (not including \",\n      [\n        \"code\",\n        \"occasionally part\"\n      ],\n      \").\"\n    ],\n    [\n      \"style\",\n      \"\\n  [data-theme=\\\"dark\\\"] #components-grid-demo-playground pre {\\n    background: rgba(255,255,255,0.8);\\n    color: rgba(255,255,255,.65);\\n  }\\n\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/grid/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);