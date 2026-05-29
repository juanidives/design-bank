(async function() {
  const resourceMap = {
    "https://fantasy.co/": "/assets/resource_ef42701acb09.html",
    "/assets/js/DZILRmV9.js": "/assets/js/DZILRmV9.js",
    "/assets/js/Dv2Gy9oE.js": "/assets/js/Dv2Gy9oE.js",
    "/assets/js/DP4i5pug.js": "/assets/js/DP4i5pug.js",
    "/assets/js/CeXuehBR.js": "/assets/js/CeXuehBR.js",
    "/assets/css/styles.css": "/assets/css/styles.css",
    "/assets/css/styles.css": "/assets/css/styles.css",
    "/assets/js/BUD1cr-Q.js": "/assets/js/BUD1cr-Q.js",
    "assets/payload_17d11f92a9ac.json?46c7122f-0e08-4d74-8033-23b1562f4427": "/assets/data/data_005.json",
    "/assets/js/g3RhK2_o.js": "/assets/js/g3RhK2_o.js",
    "/assets/js/BlEeyNQR.js": "/assets/js/BlEeyNQR.js",
    "/assets/js/BMrMtYDV.js": "/assets/js/BMrMtYDV.js",
    "/assets/css/styles.css": "/assets/css/styles.css",
    "/assets/js/script.js": "/assets/js/script.js",
    "/assets/js/utils_002.js?site-key=fffa9d8f20e52bff": "/assets/js/utils_002.js",
    "/assets/js/CZZ0Kowu.js": "/assets/js/CZZ0Kowu.js",
    "/assets/other/log": "/assets/other/log",
    "/assets/js/DAbI8LBT.js": "/assets/js/DAbI8LBT.js",
    "/assets/js/B-mnuttP.js": "/assets/js/B-mnuttP.js",
    "/assets/js/banner.js": "/assets/js/banner.js",
    "/assets/js/insight.min.js": "/assets/js/insight.min.js",
    "/assets/data/data_001.json": "/assets/data/data_001.json",
    "/assets/js/utils.js": "/assets/js/utils.js",
    "/assets/js/script_010.js": "/assets/js/script_010.js",
    "/assets/fonts/font_001.woff2": "/assets/fonts/font_001.woff2",
    "/assets/data/data_004.json": "/assets/data/data_004.json",
    "/assets/js/insight.old.min.js": "/assets/js/insight.old.min.js",
    "/assets/js/banner_2.js": "/assets/js/banner_2.js",
    "/assets/js/collectedforms.js": "/assets/js/collectedforms.js",
    "/assets/js/script_002.js": "/assets/js/script_002.js",
    "https://tr-rc.lfeeder.com/?sid=JMvZ8gbpjLza2pOd&data=eyJnYVRyYWNraW5nSWRzIjpbXSwiZ2FNZWFzdXJlbWVudElkcyI6WyJHLVQzRUZZNjUyU1YiXSwiZ2FDbGllbnRJZHMiOlsiMTY5ODc5MzMxOS4xNzgwMDE3NzAwIl0sImNvbnRleHQiOnsibGlicmFyeSI6eyJuYW1lIjoibGZ0cmFja2VyIiwidmVyc2lvbiI6IjIuNzEuNCJ9LCJwYWdlVXJsIjoiaHR0cHM6Ly9mYW50YXN5LmNvLyIsInBhZ2VUaXRsZSI6IkZhbnRhc3kgfCBMZWFkIGJ5IERlc2lnbiIsInJlZmVycmVyIjoiIn0sImV2ZW50IjoidHJhY2tpbmctZXZlbnQiLCJjbGllbnRFdmVudElkIjoiZWQyZTk4MGFhZGMzMjNkZSIsInNjcmlwdElkIjoiSk12WjhnYnBqTHphMnBPZCIsImNvb2tpZXNFbmFibGVkIjp0cnVlLCJjb25zZW50TGV2ZWwiOiJub25lIiwiYW5vbnltaXplSXAiOmZhbHNlLCJsZkNsaWVudElkIjoiTEYxLjEuYTI1NmY4MTRjM2QyYmQ3Zi4xNzgwMDE3Njk5NjYxIiwiZm9yZWlnbkNvb2tpZXMiOltdLCJwcm9wZXJ0aWVzIjp7fSwiYXV0b1RyYWNraW5nRW5hYmxlZCI6dHJ1ZSwiYXV0b1RyYWNraW5nTW9kZSI6InNwYSJ9": "/assets/images/img_005.gif",
    "/assets/other/ip": "/assets/other/ip",
    "assets/json_630443faa3b9.json?portalId=50165660&utk=": "/assets/data/data_003.json",
    "/assets/css/default.Dj6eVVKc.css": "/assets/css/default.Dj6eVVKc.css",
    "/assets/data/data_002.json": "/assets/data/data_002.json",
    "assets/ptq_1c8983ee4ec4.gif?k=1&sd=1920x1080&cd=24-bit&cs=UTF-8&ln=en-us&v=1.1&a=50165660&rcu=https%3A%2F%2Ffantasy.co%2F&pu=https%3A%2F%2Ffantasy.co%2F&t=Fantasy+%7C+Lead+by+Design&cts=1780017700437&vi=b2036d61c99f420b858b36da05dff690&nc=true&u=34811838.b2036d61c99f420b858b36da05dff690.1780017700431.1780017700431.1780017700431.1&b=34811838.1.1780017700432&cc=15": "/assets/images/img_004.gif",
    "/assets/media/input.mp4": "/assets/media/input.mp4",
    "/assets/media/media_057.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_057.mp4",
    "/assets/media/media_056.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_056.mp4",
    "/assets/media/media_055.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_055.mp4",
    "/assets/media/low_15.mp4": "/assets/media/low_15.mp4",
    "/assets/media/medium_15.mp4": "/assets/media/medium_15.mp4",
    "/assets/media/high_12.mp4": "/assets/media/high_12.mp4",
    "/assets/images/thumbnail_15.jpg": "/assets/images/thumbnail_15.jpg",
    "/assets/media/media_067.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_067.mp4",
    "/assets/media/media_069.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_069.mp4",
    "/assets/media/media_068.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_068.mp4",
    "/assets/media/low_10.mp4": "/assets/media/low_10.mp4",
    "/assets/media/medium_10.mp4": "/assets/media/medium_10.mp4",
    "/assets/media/high_7.mp4": "/assets/media/high_7.mp4",
    "/assets/images/thumbnail_10.jpg": "/assets/images/thumbnail_10.jpg",
    "/assets/media/low_6.mp4": "/assets/media/low_6.mp4",
    "/assets/media/medium_6.mp4": "/assets/media/medium_6.mp4",
    "/assets/images/thumbnail_6.jpg": "/assets/images/thumbnail_6.jpg",
    "/assets/media/media_019.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_019.mp4",
    "/assets/media/media_020.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_020.mp4",
    "/assets/media/media_021.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_021.mp4",
    "/assets/media/low_15.mp4": "/assets/media/low_15.mp4",
    "/assets/media/medium_15.mp4": "/assets/media/medium_15.mp4",
    "/assets/media/high_12.mp4": "/assets/media/high_12.mp4",
    "/assets/images/thumbnail_15.jpg": "/assets/images/thumbnail_15.jpg",
    "/assets/media/media_022.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_022.mp4",
    "/assets/media/media_023.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_023.mp4",
    "/assets/media/media_024.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_024.mp4",
    "/assets/media/low_16.mp4": "/assets/media/low_16.mp4",
    "/assets/media/medium_16.mp4": "/assets/media/medium_16.mp4",
    "/assets/media/high_13.mp4": "/assets/media/high_13.mp4",
    "/assets/images/thumbnail_16.jpg": "/assets/images/thumbnail_16.jpg",
    "/assets/media/media_015.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_015.mp4",
    "/assets/media/media_013.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_013.mp4",
    "/assets/media/media_014.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_014.mp4",
    "/assets/media/low_4.mp4": "/assets/media/low_4.mp4",
    "/assets/media/medium_4.mp4": "/assets/media/medium_4.mp4",
    "/assets/media/high_3.mp4": "/assets/media/high_3.mp4",
    "/assets/images/thumbnail_4.jpg": "/assets/images/thumbnail_4.jpg",
    "/assets/media/media_035.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_035.mp4",
    "/assets/media/media_036.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_036.mp4",
    "/assets/media/media_034.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_034.mp4",
    "/assets/media/low_9.mp4": "/assets/media/low_9.mp4",
    "/assets/media/medium_9.mp4": "/assets/media/medium_9.mp4",
    "/assets/media/high_6.mp4": "/assets/media/high_6.mp4",
    "/assets/images/thumbnail_9.jpg": "/assets/images/thumbnail_9.jpg",
    "/assets/media/media_050.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_050.mp4",
    "/assets/media/media_049.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_049.mp4",
    "/assets/media/media_051.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_051.mp4",
    "/assets/media/low_7.mp4": "/assets/media/low_7.mp4",
    "/assets/media/medium_7.mp4": "/assets/media/medium_7.mp4",
    "/assets/media/high_4.mp4": "/assets/media/high_4.mp4",
    "/assets/images/thumbnail_7.jpg": "/assets/images/thumbnail_7.jpg",
    "/assets/media/media_006.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_006.mp4",
    "/assets/media/media_004.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_004.mp4",
    "/assets/media/media_005.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_005.mp4",
    "/assets/media/low_18.mp4": "/assets/media/low_18.mp4",
    "/assets/media/medium_18.mp4": "/assets/media/medium_18.mp4",
    "/assets/media/high_15.mp4": "/assets/media/high_15.mp4",
    "/assets/images/thumbnail_18.jpg": "/assets/images/thumbnail_18.jpg",
    "/assets/media/media_038.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_038.mp4",
    "/assets/media/media_037.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_037.mp4",
    "/assets/media/media_039.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_039.mp4",
    "/assets/media/low_20.mp4": "/assets/media/low_20.mp4",
    "/assets/media/medium_20.mp4": "/assets/media/medium_20.mp4",
    "/assets/media/high_17.mp4": "/assets/media/high_17.mp4",
    "/assets/images/thumbnail_20.jpg": "/assets/images/thumbnail_20.jpg",
    "/assets/media/media_010.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_010.mp4",
    "/assets/media/media_011.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_011.mp4",
    "/assets/media/media_012.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_012.mp4",
    "/assets/media/low_21.mp4": "/assets/media/low_21.mp4",
    "/assets/media/medium_21.mp4": "/assets/media/medium_21.mp4",
    "/assets/media/high_18.mp4": "/assets/media/high_18.mp4",
    "/assets/images/thumbnail_21.jpg": "/assets/images/thumbnail_21.jpg",
    "/assets/media/media_018.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_018.mp4",
    "/assets/media/media_016.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_016.mp4",
    "/assets/media/media_017.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_017.mp4",
    "/assets/media/low_17.mp4": "/assets/media/low_17.mp4",
    "/assets/media/medium_17.mp4": "/assets/media/medium_17.mp4",
    "/assets/media/high_14.mp4": "/assets/media/high_14.mp4",
    "/assets/images/thumbnail_17.jpg": "/assets/images/thumbnail_17.jpg",
    "/assets/media/media_042.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_042.mp4",
    "/assets/media/media_040.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_040.mp4",
    "/assets/media/media_041.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_041.mp4",
    "/assets/media/low_24.mp4": "/assets/media/low_24.mp4",
    "/assets/media/medium_24.mp4": "/assets/media/medium_24.mp4",
    "/assets/media/high_20.mp4": "/assets/media/high_20.mp4",
    "/assets/images/thumbnail_24.jpg": "/assets/images/thumbnail_24.jpg",
    "/assets/media/media_054.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_054.mp4",
    "/assets/media/media_053.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_053.mp4",
    "/assets/media/media_052.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_052.mp4",
    "/assets/media/low_25.mp4": "/assets/media/low_25.mp4",
    "/assets/media/medium_25.mp4": "/assets/media/medium_25.mp4",
    "/assets/media/high_21.mp4": "/assets/media/high_21.mp4",
    "/assets/images/thumbnail_25.jpg": "/assets/images/thumbnail_25.jpg",
    "/assets/media/media_044.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_044.mp4",
    "/assets/media/media_043.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_043.mp4",
    "/assets/media/media_045.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_045.mp4",
    "/assets/media/low_3.mp4": "/assets/media/low_3.mp4",
    "/assets/media/medium_3.mp4": "/assets/media/medium_3.mp4",
    "/assets/media/high_2.mp4": "/assets/media/high_2.mp4",
    "/assets/images/thumbnail_3.jpg": "/assets/images/thumbnail_3.jpg",
    "/assets/media/media_047.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_047.mp4",
    "/assets/media/media_048.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_048.mp4",
    "/assets/media/media_046.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_046.mp4",
    "/assets/media/low_19.mp4": "/assets/media/low_19.mp4",
    "/assets/media/medium_19.mp4": "/assets/media/medium_19.mp4",
    "/assets/media/high_16.mp4": "/assets/media/high_16.mp4",
    "/assets/images/thumbnail_19.jpg": "/assets/images/thumbnail_19.jpg",
    "assets/1750182479-services-product-i_5dde678c2e_49589f330769.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_030.mp4",
    "assets/1750182479-services-product-i_5dde678c2e_38488a2b4061.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_028.mp4",
    "assets/1750182479-services-product-i_5dde678c2e_4587fdb24cbf.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_029.mp4",
    "/assets/media/low_8.mp4": "/assets/media/low_8.mp4",
    "/assets/media/medium_8.mp4": "/assets/media/medium_8.mp4",
    "/assets/media/high_5.mp4": "/assets/media/high_5.mp4",
    "/assets/images/thumbnail_8.jpg": "/assets/images/thumbnail_8.jpg",
    "assets/1751472185-services-product-i_26dbd014de_fcb0acff5601.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_060.mp4",
    "assets/1751472185-services-product-i_26dbd014de_bb3fa5ccb906.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_059.mp4",
    "assets/1751472185-services-product-i_26dbd014de_42042692f387.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_058.mp4",
    "/assets/media/low_5.mp4": "/assets/media/low_5.mp4",
    "/assets/media/medium_5.mp4": "/assets/media/medium_5.mp4",
    "/assets/images/thumbnail_5.jpg": "/assets/images/thumbnail_5.jpg",
    "/assets/media/media_026.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_026.mp4",
    "/assets/media/media_027.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_027.mp4",
    "/assets/media/media_025.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_025.mp4",
    "/assets/media/low_23.mp4": "/assets/media/low_23.mp4",
    "/assets/media/medium_23.mp4": "/assets/media/medium_23.mp4",
    "/assets/media/high_19.mp4": "/assets/media/high_19.mp4",
    "/assets/images/thumbnail_23.jpg": "/assets/images/thumbnail_23.jpg",
    "/assets/media/media_033.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_033.mp4",
    "/assets/media/media_031.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_031.mp4",
    "/assets/media/media_032.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_032.mp4",
    "/assets/media/low_2.mp4": "/assets/media/low_2.mp4",
    "/assets/media/medium_2.mp4": "/assets/media/medium_2.mp4",
    "/assets/images/thumbnail_2.jpg": "/assets/images/thumbnail_2.jpg",
    "/assets/media/media_063.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_063.mp4",
    "/assets/media/media_062.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_062.mp4",
    "/assets/media/media_061.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_061.mp4",
    "/assets/media/low_11.mp4": "/assets/media/low_11.mp4",
    "/assets/media/medium_11.mp4": "/assets/media/medium_11.mp4",
    "/assets/media/high_8.mp4": "/assets/media/high_8.mp4",
    "/assets/images/thumbnail_11.jpg": "/assets/images/thumbnail_11.jpg",
    "/assets/media/media_064.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_064.mp4",
    "/assets/media/media_066.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_066.mp4",
    "/assets/media/media_065.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_065.mp4",
    "/assets/media/low_22.mp4": "/assets/media/low_22.mp4",
    "/assets/media/medium_22.mp4": "/assets/media/medium_22.mp4",
    "/assets/images/thumbnail_22.jpg": "/assets/images/thumbnail_22.jpg",
    "/assets/media/media_001.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_001.mp4",
    "/assets/media/media_003.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_003.mp4",
    "/assets/media/media_002.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_002.mp4",
    "/assets/media/low_14.mp4": "/assets/media/low_14.mp4",
    "/assets/media/medium_14.mp4": "/assets/media/medium_14.mp4",
    "/assets/media/high_11.mp4": "/assets/media/high_11.mp4",
    "/assets/images/thumbnail_14.jpg": "/assets/images/thumbnail_14.jpg",
    "/assets/media/media_007.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_007.mp4",
    "/assets/media/media_009.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_009.mp4",
    "/assets/media/media_008.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_008.mp4",
    "/assets/media/low_13.mp4": "/assets/media/low_13.mp4",
    "/assets/media/medium_13.mp4": "/assets/media/medium_13.mp4",
    "/assets/media/high_10.mp4": "/assets/media/high_10.mp4",
    "/assets/images/thumbnail_13.jpg": "/assets/images/thumbnail_13.jpg",
    "/assets/media/media_072.mp4?auto=format&fit=max&h=800&q=95&w=800": "/assets/media/media_072.mp4",
    "/assets/media/media_071.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "/assets/media/media_071.mp4",
    "/assets/media/media_070.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "/assets/media/media_070.mp4",
    "/assets/media/low_12.mp4": "/assets/media/low_12.mp4",
    "/assets/media/medium_12.mp4": "/assets/media/medium_12.mp4",
    "/assets/media/high_9.mp4": "/assets/media/high_9.mp4",
    "/assets/images/thumbnail_12.jpg": "/assets/images/thumbnail_12.jpg",
    "/assets/images/img_001.jpg": "/assets/images/img_001.jpg",
    "/assets/js/CHCPq2ix.js": "/assets/js/CHCPq2ix.js",
    "/assets/css/contact.BvuB8OIF.css": "/assets/css/contact.BvuB8OIF.css",
    "/assets/js/D0Qfn0uS.js": "/assets/js/D0Qfn0uS.js",
    "/assets/css/yXmYRVdL.css": "/assets/css/yXmYRVdL.css",
    "/assets/js/C_Qz094a.js": "/assets/js/C_Qz094a.js",
    "/assets/js/Bv_sDNGR.js": "/assets/js/Bv_sDNGR.js",
    "/assets/js/B6w0fxYU.js": "/assets/js/B6w0fxYU.js",
    "/assets/css/slug_.DlYDvuav.css": "/assets/css/slug_.DlYDvuav.css",
    "/assets/js/DeN4FteS.js": "/assets/js/DeN4FteS.js",
    "/assets/js/Bwb_hWNU.js": "/assets/js/Bwb_hWNU.js",
    "/assets/js/BjDqbC8f.js": "/assets/js/BjDqbC8f.js",
    "/assets/js/DF2zZq7E.js": "/assets/js/DF2zZq7E.js",
    "/assets/models/shield-v1.glb": "/assets/models/shield-v1.glb",
    "/assets/js/insight.beta.min.js": "/assets/js/insight.beta.min.js",
    "/assets/images/insight_tag_errors.gif": "/assets/images/insight_tag_errors.gif",
    "/assets/js/utils.js": "/assets/js/script_003.js",
    "/assets/icons/fantasy-favicon.svg": "/assets/icons/fantasy-favicon.svg",
    "/assets/images/img_002.gif?ctsa=mr&CtsSyncId=D7E159351FC241449007850FDC67318C&RedC=c.clarity.ms&MXFR=3FB7A09E96956019018EB7F692956EF9": "/assets/images/img_002.gif",
    "https://px.ads.linkedin.com/wa/?medium=fetch&fmt=g": "/assets/images/img_006.gif",
    "assets/js_7e90cbb4ff65.js?id=G-T3EFY652SV": "/assets/js/script_005.js",
    "https://px.ads.linkedin.com/collect/?pid=7220892&fmt=gif": "/assets/images/img_003.gif"
  };
  const basenameIndex = {};
  const originalBasenameIndex = {};
  const localStemIndex = {};
  const originalStemIndex = {};
  const EXTENSION_FAMILIES = [
    ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'],
    ['.mp4', '.webm', '.mov', '.m4v', '.ogv'],
    ['.mp3', '.wav', '.ogg', '.m4a', '.aac'],
    ['.woff', '.woff2', '.ttf', '.otf', '.eot'],
  ];

  function splitBasenameParts(filename) {
    const clean = String(filename || '').split('?')[0].split('#')[0];
    const dotIndex = clean.lastIndexOf('.');
    if (dotIndex <= 0) return {
      basename: clean,
      stem: clean,
      ext: ''
    };
    return {
      basename: clean,
      stem: clean.slice(0, dotIndex),
      ext: clean.slice(dotIndex).toLowerCase(),
    };
  }

  function stemCandidates(stem) {
    const candidates = [];
    if (stem) candidates.push(stem);
    for (const separator of ['.', '-']) {
      if (stem && stem.includes(separator)) {
        const prefix = stem.split(separator, 1)[0];
        if (prefix && !candidates.includes(prefix)) {
          candidates.push(prefix);
        }
      }
    }
    return candidates;
  }

  function getExtensionFamily(ext) {
    for (const family of EXTENSION_FAMILIES) {
      if (family.includes(ext)) return family;
    }
    return null;
  }

  function areCompatibleExtensions(left, right) {
    if (!left || !right) return false;
    if (left === right) return true;
    const family = getExtensionFamily(left);
    return !!family && family.includes(right);
  }

  function pushStemIndex(index, basename, localPath) {
    const parts = splitBasenameParts(basename);
    if (!parts.stem || !parts.ext) return;
    for (const candidateStem of stemCandidates(parts.stem)) {
      if (!index[candidateStem]) index[candidateStem] = [];
      index[candidateStem].push({
        basename: parts.basename,
        ext: parts.ext,
        localPath
      });
    }
  }

  function findEquivalentBasenameMatch(basename, index, withLeadingSlash) {
    const requested = splitBasenameParts(basename);
    if (!requested.stem || !requested.ext) return null;
    const compatible = [];
    const seen = new Set();
    for (const candidateStem of stemCandidates(requested.stem)) {
      const candidates = index[candidateStem] || [];
      for (const candidate of candidates) {
        if (!areCompatibleExtensions(requested.ext, candidate.ext)) continue;
        const key = `${candidate.localPath}::${candidate.ext}`;
        if (seen.has(key)) continue;
        seen.add(key);
        compatible.push(candidate);
      }
    }
    if (compatible.length !== 1) return null;
    const match = compatible[0].localPath;
    return withLeadingSlash ? '/' + match : match;
  }
  Object.entries(resourceMap).forEach(([originalUrl, localPath]) => {
    const normalizedLocalPath = String(localPath || '').replace(/^\/+/, '');
    if (normalizedLocalPath.startsWith('assets/')) {
      const localBasename = normalizedLocalPath.split('/').pop();
      if (!basenameIndex[localBasename]) basenameIndex[localBasename] = [];
      basenameIndex[localBasename].push(normalizedLocalPath);
      pushStemIndex(localStemIndex, localBasename, normalizedLocalPath);
    }
    try {
      const origBasename = originalUrl.split('/').pop().split('?')[0];
      if (origBasename) {
        if (!originalBasenameIndex[origBasename]) originalBasenameIndex[origBasename] = [];
        originalBasenameIndex[origBasename].push(localPath);
        pushStemIndex(originalStemIndex, origBasename, normalizedLocalPath || localPath);
      }
    } catch (e) {}
  });

  function normalizeUrl(url, baseUrl) {
    if (!url) return url;
    if (typeof url === 'object' && url.url) url = url.url;
    if (url.startsWith('data:') || url.startsWith('blob:')) return url;
    try {
      return new URL(url, baseUrl || window.location.href).href;
    } catch (e) {
      return url;
    }
  }

  function resolveRelativePath(url, referrer) {
    if (!url.startsWith('./') && !url.startsWith('../')) return null;
    try {
      const referrerUrl = new URL(referrer || window.location.href);
      const referrerDir = referrerUrl.pathname.substring(0, referrerUrl.pathname.lastIndexOf('/') + 1);
      const resolved = new URL(url, window.location.origin + referrerDir).pathname;
      const basename = resolved.split('/').pop();
      if (basenameIndex[basename]) {
        if (basenameIndex[basename].length === 1) return '/' + basenameIndex[basename][0];
        const referrerPath = referrer.replace(window.location.origin, '');
        for (const candidate of basenameIndex[basename]) {
          if (referrerPath.includes('assets/') && candidate.includes(basename)) {
            return '/' + candidate;
          }
        }
        return '/' + basenameIndex[basename][0];
      }
      if (originalBasenameIndex[basename] && originalBasenameIndex[basename].length === 1) {
        return originalBasenameIndex[basename][0];
      }
      const originalStemMatch = findEquivalentBasenameMatch(basename, originalStemIndex, false);
      if (originalStemMatch) return originalStemMatch;
      const localStemMatch = findEquivalentBasenameMatch(basename, localStemIndex, true);
      if (localStemMatch) return localStemMatch;
    } catch (e) {
      console.warn('[Fetch Interceptor] Relative path resolution failed:', url, e);
    }
    return null;
  }

  function getLocalPath(url, referrer) {
    const rawUrl = typeof url === 'string' ? url : (url && typeof url === 'object' && url.url ? url.url : String(url || ''));
    if (rawUrl.startsWith('./') || rawUrl.startsWith('../')) {
      const resolved = resolveRelativePath(rawUrl, referrer);
      if (resolved) return resolved;
    }
    const normalized = normalizeUrl(rawUrl, referrer);
    if (resourceMap[normalized]) return resourceMap[normalized];
    const withoutProtocol = normalized.replace(/^https?:/, '');
    if (resourceMap[withoutProtocol]) return resourceMap[withoutProtocol];
    try {
      const basename = normalized.split('/').pop().split('?')[0];
      if (basename) {
        if (originalBasenameIndex[basename] && originalBasenameIndex[basename].length === 1) {
          return originalBasenameIndex[basename][0];
        }
        if (basenameIndex[basename] && basenameIndex[basename].length === 1) {
          return '/' + basenameIndex[basename][0];
        }
        const originalStemMatch = findEquivalentBasenameMatch(basename, originalStemIndex, false);
        if (originalStemMatch) {
          return originalStemMatch;
        }
        const localStemMatch = findEquivalentBasenameMatch(basename, localStemIndex, true);
        if (localStemMatch) {
          return localStemMatch;
        }
      }
    } catch (e) {}
    return null;
  }

  function isExternalCDN(url) {
    try {
      const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
      if (urlObj.origin !== window.location.origin) {
        const hostname = urlObj.hostname.toLowerCase();
        const cdnMarkers = ['.b-cdn.', 'cdn.', '.cloudfront.', '.akamai', '.fastly.'];
        return cdnMarkers.some(marker => hostname.includes(marker));
      }
    } catch (e) {}
    return false;
  }

  function isExternal(url) {
    try {
      const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
      return urlObj.origin !== window.location.origin;
    } catch (e) {
      return false;
    }
  }

  function isTrackingEndpoint(url) {
    try {
      const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
      const hostname = urlObj.hostname.toLowerCase();
      const path = (urlObj.pathname || '').toLowerCase();
      const combined = `${hostname}${path}`;
      const markers = ['monorail', 'api/collect', '/assets/collect_e7e2f3eb367d.gif', 'web-pixels', 'webpixels', 'web-pixel', '/pixel', 'pixel.', 'shopifycloud/web-pixels-manager', 'hotjar', 'klaviyo', 'cookiebot', 'consentcdn', ];
      return markers.some(marker => combined.includes(marker));
    } catch (e) {
      return false;
    }
  }

  function buildMockResponse(url, method) {
    let mockData = {};
    if ((method || 'GET').toUpperCase() === 'GET' && String(url).includes('/rest/')) {
      mockData = [];
    }
    return new Response(JSON.stringify(mockData), {
      status: 200,
      statusText: 'OK (Mocked)',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  function toComparableUrl(url) {
    if (!url) return '';
    try {
      return new URL(url, window.location.href).href;
    } catch (e) {
      return String(url);
    }
  }

  function comparableCandidates(urls) {
    const candidates = new Set();
    for (const url of urls) {
      if (!url) continue;
      const comparable = toComparableUrl(url);
      if (comparable) candidates.add(comparable);
      const localPath = getLocalPath(url, window.location.href);
      const comparableLocal = toComparableUrl(localPath);
      if (comparableLocal) candidates.add(comparableLocal);
    }
    candidates.delete('');
    return candidates;
  }

  function hasExistingAsset(tagName, attrName, urls) {
    const targetUrls = Array.isArray(urls) ? urls : [urls];
    const comparableTargets = comparableCandidates(targetUrls);
    if (!comparableTargets.size) return false;
    const elements = tagName === 'script' ? Array.from(document.scripts || []) : Array.from(document.querySelectorAll(tagName));
    return elements.some((element) => {
      const currentValue = element.getAttribute(attrName) || element[attrName] || '';
      if (!currentValue) return false;
      const currentComparable = toComparableUrl(currentValue);
      if (currentComparable && comparableTargets.has(currentComparable)) {
        return true;
      }
      const currentLocalPath = getLocalPath(currentValue, window.location.href);
      const currentComparableLocal = toComparableUrl(currentLocalPath);
      return currentComparableLocal && comparableTargets.has(currentComparableLocal);
    });
  }

  function neutralizeDuplicateNode(node, kind, url) {
    node.setAttribute('data-interceptor-duplicate', 'true');
    if (kind === 'script') {
      node.type = 'application/json';
    } else if (kind === 'link') {
      node.setAttribute('data-interceptor-disabled', 'true');
      setTimeout(() => {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }, 0);
    }
    setTimeout(() => {
      try {
        node.dispatchEvent(new Event('load'));
      } catch (e) {}
    }, 0);
    console.log('[DOM Interceptor] = Duplicate', kind, url);
    return node;
  }

  function isFrameworkChunkScript(url) {
    if (!url) return false;
    const value = String(url);
    return (value.includes('/_next/static/chunks/') || value.includes('/_next/static/chunks/app/') || value.includes('/assets/js/script_'));
  }
  const originalSetAttribute = Element.prototype.setAttribute;

  function toBrowserPath(localPath) {
    if (!localPath) return localPath;
    if (localPath.startsWith('/') || localPath.startsWith('data:') || localPath.startsWith('blob:') || localPath.startsWith('http://') || localPath.startsWith('https://') || localPath.startsWith('//')) {
      return localPath;
    }
    return '/' + localPath;
  }

  function encodeBrowserUrl(value) {
    if (!value || value.startsWith('data:') || value.startsWith('blob:')) {
      return value;
    }
    return value.replace(/ /g, '%20').replace(/,/g, '%2C');
  }

  function rewriteSrcsetValue(srcset, referrer) {
    if (!srcset) return srcset;
    return srcset.split(',').map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return trimmed;
      const match = trimmed.match(/^(\S+)(?:\s+(.+))?$/);
      if (!match) return trimmed;
      const originalUrl = match[1];
      const descriptor = match[2] || '';
      const localPath = getLocalPath(originalUrl, referrer);
      const rewrittenUrl = localPath && localPath !== originalUrl ? encodeBrowserUrl(toBrowserPath(localPath)) : encodeBrowserUrl(originalUrl);
      return descriptor ? `${rewrittenUrl} ${descriptor}` : rewrittenUrl;
    }).join(', ');
  }

  function rewriteMediaAttributeValue(tagName, attrName, value, referrer) {
    if (!value || typeof value !== 'string') return value;
    if (attrName === 'srcset') {
      return rewriteSrcsetValue(value, referrer);
    }
    const localPath = getLocalPath(value, referrer);
    if (localPath && localPath !== value) {
      return toBrowserPath(localPath);
    }
    return value;
  }

  function localizeMediaElement(node, referrer) {
    if (!node || !node.tagName) return node;
    const tagName = node.tagName.toLowerCase();
    if (!['img', 'source', 'video', 'audio', 'track'].includes(tagName)) {
      return node;
    }
    const mediaAttrs = ['src', 'srcset', 'poster'];
    for (const attrName of mediaAttrs) {
      const currentValue = node.getAttribute(attrName);
      if (!currentValue) continue;
      const rewrittenValue = rewriteMediaAttributeValue(tagName, attrName, currentValue, referrer || window.location.href);
      if (rewrittenValue && rewrittenValue !== currentValue) {
        originalSetAttribute.call(node, attrName, rewrittenValue);
        console.log('[DOM Interceptor] ✓', tagName, currentValue, '->', rewrittenValue);
      }
    }
    return node;
  }

  function localizeMediaTree(root, referrer) {
    if (!root || root.nodeType !== Node.ELEMENT_NODE) return;
    localizeMediaElement(root, referrer);
    if (typeof root.querySelectorAll !== 'function') return;
    root.querySelectorAll('img, source, video, audio, track').forEach((element) => {
      localizeMediaElement(element, referrer);
    });
  }

  function rewriteDynamicElement(node) {
    if (!node || !node.tagName) return node;
    const tagName = node.tagName.toLowerCase();
    if (['img', 'source', 'video', 'audio', 'track'].includes(tagName)) {
      return localizeMediaElement(node, window.location.href);
    }
    if (tagName === 'script') {
      const originalSrc = node.getAttribute('src') || node.src;
      if (!originalSrc) return node;
      const localPath = getLocalPath(originalSrc, window.location.href);
      const targetSrc = localPath || originalSrc;
      const allowFrameworkDuplicate = (isFrameworkChunkScript(originalSrc) || isFrameworkChunkScript(targetSrc));
      if (!allowFrameworkDuplicate && hasExistingAsset('script', 'src', [originalSrc, targetSrc])) {
        return neutralizeDuplicateNode(node, 'script', targetSrc);
      }
      if (localPath && localPath !== originalSrc) {
        node.setAttribute('src', localPath);
        console.log('[DOM Interceptor] \u2713 script', originalSrc, '->', localPath);
        return node;
      }
      if (isTrackingEndpoint(originalSrc) || (isExternal(originalSrc) && isExternalCDN(originalSrc))) {
        node.removeAttribute('src');
        node.type = 'application/json';
        console.warn('[DOM Interceptor] \u2717 Blocked dynamic script:', originalSrc);
      }
      return node;
    }
    if (tagName === 'link') {
      const rel = (node.getAttribute('rel') || '').toLowerCase();
      if (!rel || !['preload', 'prefetch', 'modulepreload', 'stylesheet'].some(value => rel.includes(value))) {
        return node;
      }
      const originalHref = node.getAttribute('href') || node.href;
      if (!originalHref) return node;
      const localPath = getLocalPath(originalHref, window.location.href);
      const targetHref = localPath || originalHref;
      if (hasExistingAsset('link', 'href', [originalHref, targetHref])) {
        return neutralizeDuplicateNode(node, 'link', targetHref);
      }
      if (localPath && localPath !== originalHref) {
        node.setAttribute('href', localPath);
        console.log('[DOM Interceptor] \u2713 link', originalHref, '->', localPath);
        return node;
      }
    }
    return node;
  }
  const originalAppendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function(node) {
    return originalAppendChild.call(this, rewriteDynamicElement(node));
  };
  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(node, referenceNode) {
    return originalInsertBefore.call(this, rewriteDynamicElement(node), referenceNode);
  };
  const originalReplaceChild = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function(newChild, oldChild) {
    return originalReplaceChild.call(this, rewriteDynamicElement(newChild), oldChild);
  };
  Element.prototype.setAttribute = function(name, value) {
    if (this && this.tagName && typeof name === 'string') {
      const tagName = this.tagName.toLowerCase();
      const attrName = name.toLowerCase();
      if (['img', 'source', 'video', 'audio', 'track'].includes(tagName) && ['src', 'srcset', 'poster'].includes(attrName)) {
        const rewrittenValue = rewriteMediaAttributeValue(tagName, attrName, String(value), window.location.href);
        return originalSetAttribute.call(this, name, rewrittenValue);
      }
    }
    return originalSetAttribute.call(this, name, value);
  };

  function patchMediaProperty(proto, propertyName) {
    if (!proto) return;
    const descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
    if (!descriptor || typeof descriptor.set !== 'function') return;
    Object.defineProperty(proto, propertyName, {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: descriptor.get ? function() {
        return descriptor.get.call(this);
      } : undefined,
      set: function(value) {
        const tagName = this.tagName ? this.tagName.toLowerCase() : '';
        const rewrittenValue = rewriteMediaAttributeValue(tagName, propertyName.toLowerCase(), String(value), window.location.href);
        return descriptor.set.call(this, rewrittenValue);
      },
    });
  }
  patchMediaProperty(window.HTMLImageElement && window.HTMLImageElement.prototype, 'src');
  patchMediaProperty(window.HTMLImageElement && window.HTMLImageElement.prototype, 'srcset');
  patchMediaProperty(window.HTMLSourceElement && window.HTMLSourceElement.prototype, 'src');
  patchMediaProperty(window.HTMLSourceElement && window.HTMLSourceElement.prototype, 'srcset');
  patchMediaProperty(window.HTMLVideoElement && window.HTMLVideoElement.prototype, 'poster');
  patchMediaProperty(window.HTMLMediaElement && window.HTMLMediaElement.prototype, 'src');

  function observeMediaMutations() {
    const root = document.documentElement || document;
    if (!root || typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          localizeMediaElement(mutation.target, window.location.href);
          continue;
        }
        mutation.addedNodes.forEach((node) => {
          localizeMediaTree(node, window.location.href);
        });
      }
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['src', 'srcset', 'poster'],
    });
  }

  function installMediaLocalization() {
    localizeMediaTree(document.documentElement, window.location.href);
    observeMediaMutations();
  }
  const revealFallbackSeenAt = new WeakMap();

  function isNearViewport(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    return rect.bottom >= -viewportHeight * 0.15 && rect.top <= viewportHeight * 1.15;
  }

  function releaseStaleRevealState() {
    if (!document.documentElement.classList.contains('sr')) return;
    const now = performance.now();
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      if (!isNearViewport(element)) {
        revealFallbackSeenAt.delete(element);
        return;
      }
      const styles = getComputedStyle(element);
      const isHidden = styles.visibility === 'hidden' || Number(styles.opacity || '1') <= 0.01;
      if (!isHidden) {
        revealFallbackSeenAt.delete(element);
        return;
      }
      const firstSeenAt = revealFallbackSeenAt.get(element);
      if (typeof firstSeenAt !== 'number') {
        revealFallbackSeenAt.set(element, now);
        return;
      }
      if (now - firstSeenAt < 1800) {
        return;
      }
      element.style.visibility = 'visible';
      element.style.opacity = '1';
      element.removeAttribute('data-reveal');
      element.setAttribute('data-interceptor-reveal-fallback', 'true');
      revealFallbackSeenAt.delete(element);
      console.log('[DOM Interceptor] ✓ reveal fallback', element.tagName.toLowerCase(), element.className || element.id || '');
    });
  }
  let revealFallbackRaf = 0;

  function scheduleRevealFallback() {
    if (revealFallbackRaf) return;
    revealFallbackRaf = requestAnimationFrame(() => {
      revealFallbackRaf = 0;
      releaseStaleRevealState();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      installMediaLocalization();
      scheduleRevealFallback();
    }, {
      once: true
    });
  } else {
    installMediaLocalization();
    scheduleRevealFallback();
  }
  window.addEventListener('scroll', scheduleRevealFallback, {
    passive: true
  });
  window.addEventListener('resize', scheduleRevealFallback);
  window.addEventListener('load', () => {
    scheduleRevealFallback();
    setTimeout(scheduleRevealFallback, 1500);
    setTimeout(scheduleRevealFallback, 4000);
  });
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    const referrer = (options && options.referrer) || document.currentScript?.src || window.location.href;
    const method = (options && options.method) || 'GET';
    const localPath = getLocalPath(url, referrer);
    if (localPath) {
      console.log('[Fetch Interceptor] \u2713', url, '->', localPath);
      return originalFetch(localPath, options);
    }
    if (isTrackingEndpoint(url)) {
      console.warn('[Fetch Interceptor] \u2717 Blocked tracking call:', url);
      return Promise.resolve(buildMockResponse(url, method));
    }
    if (isExternal(url)) {
      console.warn('[Fetch Interceptor] \u2717 Blocked external leak:', url);
      return Promise.resolve(buildMockResponse(url, method));
    }
    return originalFetch(url, options);
  };
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    const referrer = document.currentScript?.src || window.location.href;
    const localPath = getLocalPath(url, referrer);
    this._interceptedUrl = url;
    this._hasLocalMapping = !!localPath;
    if (localPath) {
      console.log('[XHR Interceptor] \u2713', url, '->', localPath);
      return originalOpen.call(this, method, localPath, ...args);
    }
    return originalOpen.call(this, method, url, ...args);
  };
  XMLHttpRequest.prototype.send = function(...args) {
    if (this._interceptedUrl && !this._hasLocalMapping && (isTrackingEndpoint(this._interceptedUrl) || isExternal(this._interceptedUrl))) {
      if (isTrackingEndpoint(this._interceptedUrl)) {
        console.warn('[XHR Interceptor] \u2717 Blocked tracking call:', this._interceptedUrl);
      } else {
        console.warn('[XHR Interceptor] \u2717 Blocked external leak:', this._interceptedUrl);
      }
      Object.defineProperty(this, 'status', {
        value: 200,
        writable: false
      });
      Object.defineProperty(this, 'statusText', {
        value: 'OK (Mocked)',
        writable: false
      });
      Object.defineProperty(this, 'responseText', {
        value: this._interceptedUrl.includes('/rest/') ? '[]' : '{}',
        writable: false
      });
      Object.defineProperty(this, 'response', {
        value: this._interceptedUrl.includes('/rest/') ? '[]' : '{}',
        writable: false
      });
      Object.defineProperty(this, 'readyState', {
        value: 4,
        writable: false
      });
      setTimeout(() => {
        if (this.onload) this.onload({
          type: 'load',
          target: this
        });
        if (this.onreadystatechange) this.onreadystatechange({
          type: 'readystatechange',
          target: this
        });
      }, 0);
      return;
    }
    return originalSend.apply(this, args);
  };
  console.log('[Fetch Interceptor] Installed with', Object.keys(resourceMap).length, 'mappings');
  console.log('[Fetch Interceptor] Basename index:', Object.keys(basenameIndex).length, 'files');
})();
