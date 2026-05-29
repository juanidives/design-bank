/**
 * Fetch/XHR Interceptor - Injected into downloaded sites to resolve remote URLs locally.
 *
 * This script is loaded as a template. Python replaces the placeholder comment below
 * with the actual resource map code before injecting into the page <head>.
 *
 * Placeholder: /* __RESOURCE_MAP_CODE__ * /
 */
(async function() {
    const resourceMap = {"https://fantasy.co/": "assets/resource_ef42701acb09.html", "https://fantasy.co/_nuxt/DZILRmV9.js": "assets/nuxt/DZILRmV9.js", "https://fantasy.co/_nuxt/Dv2Gy9oE.js": "assets/nuxt/Dv2Gy9oE.js", "https://fantasy.co/_nuxt/DP4i5pug.js": "assets/nuxt/DP4i5pug.js", "https://fantasy.co/_nuxt/CeXuehBR.js": "assets/nuxt/CeXuehBR.js", "https://fantasy.co/_nuxt/SiteFoot.BhqzWa6f.css": "assets/nuxt/SiteFoot.BhqzWa6f.css", "https://fantasy.co/_nuxt/Dynamic.BXrJvJUw.css": "assets/nuxt/Dynamic.BXrJvJUw.css", "https://fantasy.co/_nuxt/BUD1cr-Q.js": "assets/nuxt/BUD1cr-Q.js", "https://fantasy.co/_payload.json?46c7122f-0e08-4d74-8033-23b1562f4427": "assets/payload_17d11f92a9ac.json", "https://fantasy.co/_nuxt/g3RhK2_o.js": "assets/nuxt/g3RhK2_o.js", "https://fantasy.co/_nuxt/BlEeyNQR.js": "assets/nuxt/BlEeyNQR.js", "https://fantasy.co/_nuxt/BMrMtYDV.js": "assets/nuxt/BMrMtYDV.js", "https://fantasy.co/_nuxt/entry.Cqb0HUwZ.css": "assets/nuxt/entry.Cqb0HUwZ.css", "https://cdn-cookieyes.com/client_data/ced343fcba4c8ee12f420d15/script.js": "assets/client_data/ced343fcba4c8ee12f420d15/script.js", "https://ujs.alttext.ai/alttextai-ujs.js?site-key=fffa9d8f20e52bff": "assets/alttextai-ujs_802dfd30e4e4.js", "https://fantasy.co/_nuxt/CZZ0Kowu.js": "assets/nuxt/CZZ0Kowu.js", "https://log.cookieyes.com/api/v1/log": "assets/api/v1/log", "https://fantasy.co/_nuxt/DAbI8LBT.js": "assets/nuxt/DAbI8LBT.js", "https://fantasy.co/_nuxt/B-mnuttP.js": "assets/nuxt/B-mnuttP.js", "https://cdn-cookieyes.com/client_data/ced343fcba4c8ee12f420d15/banner.js": "assets/client_data/ced343fcba4c8ee12f420d15/banner.js", "https://snap.licdn.com/li.lms-analytics/insight.min.js": "assets/li.lms-analytics/insight.min.js", "https://fantasy.co/_nuxt/builds/meta/46c7122f-0e08-4d74-8033-23b1562f4427.json": "assets/46c7122f-0e08-4d74-8033-23b1562f4427_1c0b336e29a7.json", "https://js.hs-scripts.com/50165660.js": "assets/js.hs-scripts.com/50165660.js", "https://sc.lfeeder.com/lftracker_v1_JMvZ8gbpjLza2pOd.js": "assets/sc.lfeeder.com/lftracker_v1_JMvZ8gbpjLza2pOd.js", "https://fantasy.co/_nuxt/SuisseIntl-Medium-WebXL.BXqjNbCJ.woff2": "assets/nuxt/SuisseIntl-Medium-WebXL.BXqjNbCJ.woff2", "https://cdn-cookieyes.com/client_data/ced343fcba4c8ee12f420d15/owmMLW0d.json": "assets/owmMLW0d_7eaf5f4f7133.json", "https://snap.licdn.com/li.lms-analytics/insight.old.min.js": "assets/li.lms-analytics/insight.old.min.js", "https://js.hs-banner.com/v2/50165660/banner.js": "assets/v2/50165660/banner.js", "https://js.hscollectedforms.net/collectedforms.js": "assets/js.hscollectedforms.net/collectedforms.js", "https://js.hs-analytics.net/analytics/1780017600000/50165660.js": "assets/analytics/1780017600000/50165660.js", "https://tr-rc.lfeeder.com/?sid=JMvZ8gbpjLza2pOd&data=eyJnYVRyYWNraW5nSWRzIjpbXSwiZ2FNZWFzdXJlbWVudElkcyI6WyJHLVQzRUZZNjUyU1YiXSwiZ2FDbGllbnRJZHMiOlsiMTY5ODc5MzMxOS4xNzgwMDE3NzAwIl0sImNvbnRleHQiOnsibGlicmFyeSI6eyJuYW1lIjoibGZ0cmFja2VyIiwidmVyc2lvbiI6IjIuNzEuNCJ9LCJwYWdlVXJsIjoiaHR0cHM6Ly9mYW50YXN5LmNvLyIsInBhZ2VUaXRsZSI6IkZhbnRhc3kgfCBMZWFkIGJ5IERlc2lnbiIsInJlZmVycmVyIjoiIn0sImV2ZW50IjoidHJhY2tpbmctZXZlbnQiLCJjbGllbnRFdmVudElkIjoiZWQyZTk4MGFhZGMzMjNkZSIsInNjcmlwdElkIjoiSk12WjhnYnBqTHphMnBPZCIsImNvb2tpZXNFbmFibGVkIjp0cnVlLCJjb25zZW50TGV2ZWwiOiJub25lIiwiYW5vbnltaXplSXAiOmZhbHNlLCJsZkNsaWVudElkIjoiTEYxLjEuYTI1NmY4MTRjM2QyYmQ3Zi4xNzgwMDE3Njk5NjYxIiwiZm9yZWlnbkNvb2tpZXMiOltdLCJwcm9wZXJ0aWVzIjp7fSwiYXV0b1RyYWNraW5nRW5hYmxlZCI6dHJ1ZSwiYXV0b1RyYWNraW5nTW9kZSI6InNwYSJ9": "assets/resource_264352c50f34.gif", "https://directory.cookieyes.com/api/v1/ip": "assets/api/v1/ip", "https://forms.hscollectedforms.net/collected-forms/v1/config/json?portalId=50165660&utk=": "assets/json_630443faa3b9.json", "https://fantasy.co/_nuxt/default.Dj6eVVKc.css": "assets/nuxt/default.Dj6eVVKc.css", "https://cdn-cookieyes.com/client_data/ced343fcba4c8ee12f420d15/audit-table/Lq512RCf.json": "assets/Lq512RCf_2c1e79df5ea0.json", "https://track.hubspot.com/__ptq.gif?k=1&sd=1920x1080&cd=24-bit&cs=UTF-8&ln=en-us&v=1.1&a=50165660&rcu=https%3A%2F%2Ffantasy.co%2F&pu=https%3A%2F%2Ffantasy.co%2F&t=Fantasy+%7C+Lead+by+Design&cts=1780017700437&vi=b2036d61c99f420b858b36da05dff690&nc=true&u=34811838.b2036d61c99f420b858b36da05dff690.1780017700431.1780017700431.1780017700431.1&b=34811838.1.1780017700432&cc=15": "assets/ptq_1c8983ee4ec4.gif", "https://fantasy.co/gl/input.mp4": "assets/gl/input.mp4", "https://www.datocms-assets.com/157026/1751470729-home-desktop-sizzle-july2.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1751470729-home-desktop-sizzle-july2_fabefee7d1cc.mp4", "https://www.datocms-assets.com/157026/1751470729-home-desktop-sizzle-july2.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1751470729-home-desktop-sizzle-july2_b12903d1b9af.mp4", "https://www.datocms-assets.com/157026/1751470729-home-desktop-sizzle-july2.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1751470729-home-desktop-sizzle-july2_9a8fd49771ad.mp4", "https://stream.mux.com/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/low.mp4": "assets/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/low.mp4", "https://stream.mux.com/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/medium.mp4": "assets/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/medium.mp4", "https://stream.mux.com/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/high.mp4": "assets/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/high.mp4", "https://image.mux.com/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/thumbnail.jpg": "assets/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/thumbnail.jpg", "https://www.datocms-assets.com/157026/1751473996-sizzle_mobile_jul2_3.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1751473996-sizzle_mobile_jul2_3_3ce842f92193.mp4", "https://www.datocms-assets.com/157026/1751473996-sizzle_mobile_jul2_3.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1751473996-sizzle_mobile_jul2_3_e989940f35c1.mp4", "https://www.datocms-assets.com/157026/1751473996-sizzle_mobile_jul2_3.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1751473996-sizzle_mobile_jul2_3_5be2ed3b573b.mp4", "https://stream.mux.com/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/low.mp4": "assets/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/low.mp4", "https://stream.mux.com/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/medium.mp4": "assets/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/medium.mp4", "https://stream.mux.com/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/high.mp4": "assets/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/high.mp4", "https://image.mux.com/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/thumbnail.jpg": "assets/JMRwu1NCKyKZzaEHzWfZm1OsB02m6ut5r/thumbnail.jpg", "https://stream.mux.com/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/low.mp4": "assets/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/low.mp4", "https://stream.mux.com/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/medium.mp4": "assets/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/medium.mp4", "https://image.mux.com/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/thumbnail.jpg": "assets/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/thumbnail.jpg", "https://www.datocms-assets.com/157026/1748015571-home_palm-1.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1748015571-home_palm-1_1395074ee1b0.mp4", "https://www.datocms-assets.com/157026/1748015571-home_palm-1.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1748015571-home_palm-1_6a859fc1053b.mp4", "https://www.datocms-assets.com/157026/1748015571-home_palm-1.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1748015571-home_palm-1_c3b4bd05ee0e.mp4", "https://stream.mux.com/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/low.mp4": "assets/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/low.mp4", "https://stream.mux.com/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/medium.mp4": "assets/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/medium.mp4", "https://stream.mux.com/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/high.mp4": "assets/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/high.mp4", "https://image.mux.com/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/thumbnail.jpg": "assets/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/thumbnail.jpg", "https://www.datocms-assets.com/157026/1748015594-home_watch-1.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1748015594-home_watch-1_524f63c6d9ac.mp4", "https://www.datocms-assets.com/157026/1748015594-home_watch-1.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1748015594-home_watch-1_7abe78aeaceb.mp4", "https://www.datocms-assets.com/157026/1748015594-home_watch-1.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1748015594-home_watch-1_8765c5465013.mp4", "https://stream.mux.com/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/low.mp4": "assets/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/low.mp4", "https://stream.mux.com/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/medium.mp4": "assets/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/medium.mp4", "https://stream.mux.com/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/high.mp4": "assets/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/high.mp4", "https://image.mux.com/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/thumbnail.jpg": "assets/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/thumbnail.jpg", "https://www.datocms-assets.com/157026/1747851412-home_ipad_left_1.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1747851412-home_ipad_left_1_dfdbb8b00465.mp4", "https://www.datocms-assets.com/157026/1747851412-home_ipad_left_1.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1747851412-home_ipad_left_1_5e095041b58c.mp4", "https://www.datocms-assets.com/157026/1747851412-home_ipad_left_1.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1747851412-home_ipad_left_1_b83efcea367f.mp4", "https://stream.mux.com/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/low.mp4": "assets/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/low.mp4", "https://stream.mux.com/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/medium.mp4": "assets/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/medium.mp4", "https://stream.mux.com/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/high.mp4": "assets/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/high.mp4", "https://image.mux.com/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/thumbnail.jpg": "assets/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750780622-home-room.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750780622-home-room_5f95e4571723.mp4", "https://www.datocms-assets.com/157026/1750780622-home-room.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750780622-home-room_7f3eab1c8925.mp4", "https://www.datocms-assets.com/157026/1750780622-home-room.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750780622-home-room_048906cafae4.mp4", "https://stream.mux.com/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/low.mp4": "assets/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/low.mp4", "https://stream.mux.com/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/medium.mp4": "assets/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/medium.mp4", "https://stream.mux.com/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/high.mp4": "assets/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/high.mp4", "https://image.mux.com/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/thumbnail.jpg": "assets/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750781567-home-os.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750781567-home-os_37808f2e2ec5.mp4", "https://www.datocms-assets.com/157026/1750781567-home-os.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750781567-home-os_33cc29056f23.mp4", "https://www.datocms-assets.com/157026/1750781567-home-os.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750781567-home-os_a3d1923b1eef.mp4", "https://stream.mux.com/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/low.mp4": "assets/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/low.mp4", "https://stream.mux.com/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/medium.mp4": "assets/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/medium.mp4", "https://stream.mux.com/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/high.mp4": "assets/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/high.mp4", "https://image.mux.com/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/thumbnail.jpg": "assets/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/thumbnail.jpg", "https://www.datocms-assets.com/157026/1745862240-c2v2.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1745862240-c2v2_c2d770b69dcb.mp4", "https://www.datocms-assets.com/157026/1745862240-c2v2.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1745862240-c2v2_0aedc7684c8b.mp4", "https://www.datocms-assets.com/157026/1745862240-c2v2.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1745862240-c2v2_a5edee9f77e6.mp4", "https://stream.mux.com/f02D5glc65LPWnibAAEYRE8QvatTZalmt/low.mp4": "assets/f02D5glc65LPWnibAAEYRE8QvatTZalmt/low.mp4", "https://stream.mux.com/f02D5glc65LPWnibAAEYRE8QvatTZalmt/medium.mp4": "assets/f02D5glc65LPWnibAAEYRE8QvatTZalmt/medium.mp4", "https://stream.mux.com/f02D5glc65LPWnibAAEYRE8QvatTZalmt/high.mp4": "assets/f02D5glc65LPWnibAAEYRE8QvatTZalmt/high.mp4", "https://image.mux.com/f02D5glc65LPWnibAAEYRE8QvatTZalmt/thumbnail.jpg": "assets/f02D5glc65LPWnibAAEYRE8QvatTZalmt/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750780655-home-car.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750780655-home-car_2c6393042301.mp4", "https://www.datocms-assets.com/157026/1750780655-home-car.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750780655-home-car_266d564be6cc.mp4", "https://www.datocms-assets.com/157026/1750780655-home-car.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750780655-home-car_754f958b852f.mp4", "https://stream.mux.com/gvggG00aX4QzizThvib8Z3p4FE69Afohb/low.mp4": "assets/gvggG00aX4QzizThvib8Z3p4FE69Afohb/low.mp4", "https://stream.mux.com/gvggG00aX4QzizThvib8Z3p4FE69Afohb/medium.mp4": "assets/gvggG00aX4QzizThvib8Z3p4FE69Afohb/medium.mp4", "https://stream.mux.com/gvggG00aX4QzizThvib8Z3p4FE69Afohb/high.mp4": "assets/gvggG00aX4QzizThvib8Z3p4FE69Afohb/high.mp4", "https://image.mux.com/gvggG00aX4QzizThvib8Z3p4FE69Afohb/thumbnail.jpg": "assets/gvggG00aX4QzizThvib8Z3p4FE69Afohb/thumbnail.jpg", "https://www.datocms-assets.com/157026/1747851308-home_homepod.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1747851308-home_homepod_0475e8b9ece9.mp4", "https://www.datocms-assets.com/157026/1747851308-home_homepod.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1747851308-home_homepod_0ec0a34b5a93.mp4", "https://www.datocms-assets.com/157026/1747851308-home_homepod.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1747851308-home_homepod_de8cbebfa548.mp4", "https://stream.mux.com/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/low.mp4": "assets/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/low.mp4", "https://stream.mux.com/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/medium.mp4": "assets/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/medium.mp4", "https://stream.mux.com/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/high.mp4": "assets/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/high.mp4", "https://image.mux.com/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/thumbnail.jpg": "assets/jVLjzpVMPq02uA00zXqh00173RPGauCQFMA/thumbnail.jpg", "https://www.datocms-assets.com/157026/1747851483-home_ipad_right.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1747851483-home_ipad_right_ff361546ece0.mp4", "https://www.datocms-assets.com/157026/1747851483-home_ipad_right.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1747851483-home_ipad_right_540f8f5c712c.mp4", "https://www.datocms-assets.com/157026/1747851483-home_ipad_right.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1747851483-home_ipad_right_77b93db16290.mp4", "https://stream.mux.com/dduhl2EpsmR8fLo50214abfgEZy7oFj021/low.mp4": "assets/dduhl2EpsmR8fLo50214abfgEZy7oFj021/low.mp4", "https://stream.mux.com/dduhl2EpsmR8fLo50214abfgEZy7oFj021/medium.mp4": "assets/dduhl2EpsmR8fLo50214abfgEZy7oFj021/medium.mp4", "https://stream.mux.com/dduhl2EpsmR8fLo50214abfgEZy7oFj021/high.mp4": "assets/dduhl2EpsmR8fLo50214abfgEZy7oFj021/high.mp4", "https://image.mux.com/dduhl2EpsmR8fLo50214abfgEZy7oFj021/thumbnail.jpg": "assets/dduhl2EpsmR8fLo50214abfgEZy7oFj021/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750780983-home-masterclass.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750780983-home-masterclass_e7b475788016.mp4", "https://www.datocms-assets.com/157026/1750780983-home-masterclass.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750780983-home-masterclass_6dbb513bd368.mp4", "https://www.datocms-assets.com/157026/1750780983-home-masterclass.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750780983-home-masterclass_d4594e9c82de.mp4", "https://stream.mux.com/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/low.mp4": "assets/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/low.mp4", "https://stream.mux.com/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/medium.mp4": "assets/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/medium.mp4", "https://stream.mux.com/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/high.mp4": "assets/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/high.mp4", "https://image.mux.com/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/thumbnail.jpg": "assets/t009sBnyiws01s4D3YBrFBoZKI701V01BTs7/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750825613-home-homepod.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750825613-home-homepod_e367aeb4aa79.mp4", "https://www.datocms-assets.com/157026/1750825613-home-homepod.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750825613-home-homepod_959e47f7fac0.mp4", "https://www.datocms-assets.com/157026/1750825613-home-homepod.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750825613-home-homepod_81185ac22a51.mp4", "https://stream.mux.com/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/low.mp4": "assets/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/low.mp4", "https://stream.mux.com/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/medium.mp4": "assets/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/medium.mp4", "https://stream.mux.com/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/high.mp4": "assets/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/high.mp4", "https://image.mux.com/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/thumbnail.jpg": "assets/xuOYmWxn7Nqsb4rD02su9hd1ydu17m9AQ/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750781103-home-aistrategy.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750781103-home-aistrategy_60c8bf17a574.mp4", "https://www.datocms-assets.com/157026/1750781103-home-aistrategy.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750781103-home-aistrategy_5ba5acf4aedb.mp4", "https://www.datocms-assets.com/157026/1750781103-home-aistrategy.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750781103-home-aistrategy_eeeca71617f4.mp4", "https://stream.mux.com/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/low.mp4": "assets/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/low.mp4", "https://stream.mux.com/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/medium.mp4": "assets/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/medium.mp4", "https://stream.mux.com/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/high.mp4": "assets/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/high.mp4", "https://image.mux.com/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/thumbnail.jpg": "assets/68UvGPYsjwSvyOjw69HQAH1JKxmcqlGK/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750781134-home-aistrategy-mobile.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750781134-home-aistrategy-mobile_380a8f7e7a90.mp4", "https://www.datocms-assets.com/157026/1750781134-home-aistrategy-mobile.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750781134-home-aistrategy-mobile_98053b535fab.mp4", "https://www.datocms-assets.com/157026/1750781134-home-aistrategy-mobile.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750781134-home-aistrategy-mobile_1b10cbe3b193.mp4", "https://stream.mux.com/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/low.mp4": "assets/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/low.mp4", "https://stream.mux.com/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/medium.mp4": "assets/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/medium.mp4", "https://stream.mux.com/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/high.mp4": "assets/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/high.mp4", "https://image.mux.com/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/thumbnail.jpg": "assets/fUcaDBS1MKIALYB7LLGiIThq2PZqrxCH/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750182479-services-product-innovation-hero.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750182479-services-product-i_5dde678c2e_49589f330769.mp4", "https://www.datocms-assets.com/157026/1750182479-services-product-innovation-hero.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750182479-services-product-i_5dde678c2e_38488a2b4061.mp4", "https://www.datocms-assets.com/157026/1750182479-services-product-innovation-hero.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750182479-services-product-i_5dde678c2e_4587fdb24cbf.mp4", "https://stream.mux.com/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/low.mp4": "assets/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/low.mp4", "https://stream.mux.com/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/medium.mp4": "assets/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/medium.mp4", "https://stream.mux.com/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/high.mp4": "assets/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/high.mp4", "https://image.mux.com/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/thumbnail.jpg": "assets/Hj7XzvT68mUk0000zhSyGa6rSTBKcvZkDi/thumbnail.jpg", "https://www.datocms-assets.com/157026/1751472185-services-product-innovation-hero-mobile-2.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1751472185-services-product-i_26dbd014de_fcb0acff5601.mp4", "https://www.datocms-assets.com/157026/1751472185-services-product-innovation-hero-mobile-2.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1751472185-services-product-i_26dbd014de_bb3fa5ccb906.mp4", "https://www.datocms-assets.com/157026/1751472185-services-product-innovation-hero-mobile-2.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1751472185-services-product-i_26dbd014de_42042692f387.mp4", "https://stream.mux.com/7hsnnwjcfqh02vkXvENfgCIxo00IWV5m00g/low.mp4": "assets/7hsnnwjcfqh02vkXvENfgCIxo00IWV5m00g/low.mp4", "https://stream.mux.com/7hsnnwjcfqh02vkXvENfgCIxo00IWV5m00g/medium.mp4": "assets/7hsnnwjcfqh02vkXvENfgCIxo00IWV5m00g/medium.mp4", "https://image.mux.com/7hsnnwjcfqh02vkXvENfgCIxo00IWV5m00g/thumbnail.jpg": "assets/7hsnnwjcfqh02vkXvENfgCIxo00IWV5m00g/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750116896-home-brand-2.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750116896-home-brand-2_6b8aa09f7909.mp4", "https://www.datocms-assets.com/157026/1750116896-home-brand-2.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750116896-home-brand-2_cd94c738eef8.mp4", "https://www.datocms-assets.com/157026/1750116896-home-brand-2.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750116896-home-brand-2_0ea4edff3451.mp4", "https://stream.mux.com/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/low.mp4": "assets/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/low.mp4", "https://stream.mux.com/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/medium.mp4": "assets/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/medium.mp4", "https://stream.mux.com/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/high.mp4": "assets/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/high.mp4", "https://image.mux.com/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/thumbnail.jpg": "assets/q1WZSC9gURnjx7T6ca7GiuOauE2PLTWV/thumbnail.jpg", "https://www.datocms-assets.com/157026/1750183687-services-brand-hero-mobile.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1750183687-services-brand-hero-mobile_e0612057c02e.mp4", "https://www.datocms-assets.com/157026/1750183687-services-brand-hero-mobile.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1750183687-services-brand-hero-mobile_27403024f664.mp4", "https://www.datocms-assets.com/157026/1750183687-services-brand-hero-mobile.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1750183687-services-brand-hero-mobile_cf88cfd30833.mp4", "https://stream.mux.com/5LYaktaq4YVgAoAZZbXpNAgxnwzII7sd/low.mp4": "assets/5LYaktaq4YVgAoAZZbXpNAgxnwzII7sd/low.mp4", "https://stream.mux.com/5LYaktaq4YVgAoAZZbXpNAgxnwzII7sd/medium.mp4": "assets/5LYaktaq4YVgAoAZZbXpNAgxnwzII7sd/medium.mp4", "https://image.mux.com/5LYaktaq4YVgAoAZZbXpNAgxnwzII7sd/thumbnail.jpg": "assets/5LYaktaq4YVgAoAZZbXpNAgxnwzII7sd/thumbnail.jpg", "https://www.datocms-assets.com/157026/1751472733-launch-carousel-1080.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1751472733-launch-carousel-1080_573d2041ed9d.mp4", "https://www.datocms-assets.com/157026/1751472733-launch-carousel-1080.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1751472733-launch-carousel-1080_4154ac49c895.mp4", "https://www.datocms-assets.com/157026/1751472733-launch-carousel-1080.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1751472733-launch-carousel-1080_36e8868a99bc.mp4", "https://stream.mux.com/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/low.mp4": "assets/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/low.mp4", "https://stream.mux.com/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/medium.mp4": "assets/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/medium.mp4", "https://stream.mux.com/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/high.mp4": "assets/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/high.mp4", "https://image.mux.com/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/thumbnail.jpg": "assets/KaU01VuauByeOREUJP33QUCc00WwaaMBvQ/thumbnail.jpg", "https://www.datocms-assets.com/157026/1751473348-launch-carousel-1080-mobile.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1751473348-launch-carousel-1080-mobile_0f0b902ffee9.mp4", "https://www.datocms-assets.com/157026/1751473348-launch-carousel-1080-mobile.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1751473348-launch-carousel-1080-mobile_77f7cfa380be.mp4", "https://www.datocms-assets.com/157026/1751473348-launch-carousel-1080-mobile.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1751473348-launch-carousel-1080-mobile_598a177304cd.mp4", "https://stream.mux.com/myY2D7lTsUKhD8PIGxg7OTU00hpi8TU9q/low.mp4": "assets/myY2D7lTsUKhD8PIGxg7OTU00hpi8TU9q/low.mp4", "https://stream.mux.com/myY2D7lTsUKhD8PIGxg7OTU00hpi8TU9q/medium.mp4": "assets/myY2D7lTsUKhD8PIGxg7OTU00hpi8TU9q/medium.mp4", "https://image.mux.com/myY2D7lTsUKhD8PIGxg7OTU00hpi8TU9q/thumbnail.jpg": "assets/myY2D7lTsUKhD8PIGxg7OTU00hpi8TU9q/thumbnail.jpg", "https://www.datocms-assets.com/157026/1744707828-vimeo-hero-cropped.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1744707828-vimeo-hero-cropped_6067090d3627.mp4", "https://www.datocms-assets.com/157026/1744707828-vimeo-hero-cropped.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1744707828-vimeo-hero-cropped_b186e8238f46.mp4", "https://www.datocms-assets.com/157026/1744707828-vimeo-hero-cropped.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1744707828-vimeo-hero-cropped_7b0a40522569.mp4", "https://stream.mux.com/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/low.mp4": "assets/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/low.mp4", "https://stream.mux.com/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/medium.mp4": "assets/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/medium.mp4", "https://stream.mux.com/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/high.mp4": "assets/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/high.mp4", "https://image.mux.com/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/thumbnail.jpg": "assets/O00UX5d02JL5WQnyi5x2PCBuiVLcRQdN9W/thumbnail.jpg", "https://www.datocms-assets.com/157026/1746824638-mockup-7_hd-4_1.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1746824638-mockup-7_hd-4_1_5734cd685909.mp4", "https://www.datocms-assets.com/157026/1746824638-mockup-7_hd-4_1.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1746824638-mockup-7_hd-4_1_c6a751bea756.mp4", "https://www.datocms-assets.com/157026/1746824638-mockup-7_hd-4_1.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1746824638-mockup-7_hd-4_1_6067fb701438.mp4", "https://stream.mux.com/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/low.mp4": "assets/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/low.mp4", "https://stream.mux.com/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/medium.mp4": "assets/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/medium.mp4", "https://stream.mux.com/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/high.mp4": "assets/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/high.mp4", "https://image.mux.com/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/thumbnail.jpg": "assets/Nntk02mWj6sFCB7vZJnLsc5xVEuALOBmI/thumbnail.jpg", "https://www.datocms-assets.com/157026/1752169581-home_car_logo_003b.mp4?auto=format&fit=max&h=800&q=95&w=800": "assets/1752169581-home_car_logo_003b_9ea3e8114e83.mp4", "https://www.datocms-assets.com/157026/1752169581-home_car_logo_003b.mp4?auto=format&fit=max&h=1440&q=95&w=1440": "assets/1752169581-home_car_logo_003b_7d21003a1ac7.mp4", "https://www.datocms-assets.com/157026/1752169581-home_car_logo_003b.mp4?auto=format&fit=max&h=2000&q=95&w=2000": "assets/1752169581-home_car_logo_003b_160cb4cff6cb.mp4", "https://stream.mux.com/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/low.mp4": "assets/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/low.mp4", "https://stream.mux.com/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/medium.mp4": "assets/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/medium.mp4", "https://stream.mux.com/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/high.mp4": "assets/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/high.mp4", "https://image.mux.com/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/thumbnail.jpg": "assets/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/thumbnail.jpg", "https://www.datocms-assets.com/157026/1753982207-intelligent-experiences-fantasy.jpg": "assets/157026/1753982207-intelligent-experiences-fantasy.jpg", "https://fantasy.co/_nuxt/CHCPq2ix.js": "assets/nuxt/CHCPq2ix.js", "https://fantasy.co/_nuxt/contact.BvuB8OIF.css": "assets/nuxt/contact.BvuB8OIF.css", "https://fantasy.co/_nuxt/D0Qfn0uS.js": "assets/nuxt/D0Qfn0uS.js", "https://fantasy.co/_nuxt/_...yXmYRVdL.css": "assets/nuxt/yXmYRVdL.css", "https://fantasy.co/_nuxt/C_Qz094a.js": "assets/nuxt/C_Qz094a.js", "https://fantasy.co/_nuxt/Bv_sDNGR.js": "assets/nuxt/Bv_sDNGR.js", "https://fantasy.co/_nuxt/B6w0fxYU.js": "assets/nuxt/B6w0fxYU.js", "https://fantasy.co/_nuxt/_slug_.DlYDvuav.css": "assets/nuxt/slug_.DlYDvuav.css", "https://fantasy.co/_nuxt/DeN4FteS.js": "assets/nuxt/DeN4FteS.js", "https://fantasy.co/_nuxt/Bwb_hWNU.js": "assets/nuxt/Bwb_hWNU.js", "https://fantasy.co/_nuxt/BjDqbC8f.js": "assets/nuxt/BjDqbC8f.js", "https://fantasy.co/_nuxt/DF2zZq7E.js": "assets/nuxt/DF2zZq7E.js", "https://fantasy.co/gl/shield-v1.glb": "assets/gl/shield-v1.glb", "https://snap.licdn.com/li.lms-analytics/insight.beta.min.js": "assets/li.lms-analytics/insight.beta.min.js", "https://px.ads.linkedin.com/insight_tag_errors.gif": "assets/px.ads.linkedin.com/insight_tag_errors.gif", "https://js-na1.hs-scripts.com/50165660.js": "assets/js-na1.hs-scripts.com/50165660.js", "https://www.datocms-assets.com/157026/1751297566-fantasy-favicon.svg": "assets/157026/1751297566-fantasy-favicon.svg", "https://c.bing.com/c.gif?ctsa=mr&CtsSyncId=D7E159351FC241449007850FDC67318C&RedC=c.clarity.ms&MXFR=3FB7A09E96956019018EB7F692956EF9": "assets/c_011f4df16270.gif", "https://px.ads.linkedin.com/wa/?medium=fetch&fmt=g": "assets/wa_ae89b6be832f.gif", "https://www.googletagmanager.com/gtag/js?id=G-T3EFY652SV": "assets/js_7e90cbb4ff65.js", "https://px.ads.linkedin.com/collect/?pid=7220892&fmt=gif": "assets/collect_e7e2f3eb367d.gif"};

    // Index 1: local-path basename -> [localPaths]  (for relative imports like ./chunk.js)
    const basenameIndex = {};
    // Index 2: original-url basename -> [localPaths]  (for requests using original filename before hash suffix)
    const originalBasenameIndex = {};
    // Index 3/4: basename stem -> [{ basename, localPath }] for extension-family fallback
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
        if (dotIndex <= 0) return { basename: clean, stem: clean, ext: '' };
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
            index[candidateStem].push({ basename: parts.basename, ext: parts.ext, localPath });
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
        // Build local basename index
        if (normalizedLocalPath.startsWith('assets/')) {
            const localBasename = normalizedLocalPath.split('/').pop();
            if (!basenameIndex[localBasename]) basenameIndex[localBasename] = [];
            basenameIndex[localBasename].push(normalizedLocalPath);
            pushStemIndex(localStemIndex, localBasename, normalizedLocalPath);
        }
        // Build original URL basename index
        try {
            const origBasename = originalUrl.split('/').pop().split('?')[0];
            if (origBasename) {
                if (!originalBasenameIndex[origBasename]) originalBasenameIndex[origBasename] = [];
                originalBasenameIndex[origBasename].push(localPath);
                pushStemIndex(originalStemIndex, origBasename, normalizedLocalPath || localPath);
            }
        } catch(e) {}
    });

    // Normalize any URL to absolute href
    function normalizeUrl(url, baseUrl) {
        if (!url) return url;
        if (typeof url === 'object' && url.url) url = url.url; // Request object
        if (url.startsWith('data:') || url.startsWith('blob:')) return url;
        try {
            return new URL(url, baseUrl || window.location.href).href;
        } catch(e) {
            return url;
        }
    }

    // Resolve relative paths (/chunk.js, ../utils.js) using referrer context
    function resolveRelativePath(url, referrer) {
        if (!url.startsWith('./') && !url.startsWith('../')) return null;
        try {
            const referrerUrl = new URL(referrer || window.location.href);
            const referrerDir = referrerUrl.pathname.substring(0, referrerUrl.pathname.lastIndexOf('/') + 1);
            const resolved = new URL(url, window.location.origin + referrerDir).pathname;
            const basename = resolved.split('/').pop();

            if (basenameIndex[basename]) {
                if (basenameIndex[basename].length === 1) return '/' + basenameIndex[basename][0];
                // Multiple matches: prefer same directory structure
                const referrerPath = referrer.replace(window.location.origin, '');
                for (const candidate of basenameIndex[basename]) {
                    if (referrerPath.includes('assets/') && candidate.includes(basename)) {
                        return '/' + candidate;
                    }
                }
                return '/' + basenameIndex[basename][0];
            }
            // Try original basename index too
            if (originalBasenameIndex[basename] && originalBasenameIndex[basename].length === 1) {
                return originalBasenameIndex[basename][0];
            }
            const originalStemMatch = findEquivalentBasenameMatch(basename, originalStemIndex, false);
            if (originalStemMatch) return originalStemMatch;
            const localStemMatch = findEquivalentBasenameMatch(basename, localStemIndex, true);
            if (localStemMatch) return localStemMatch;
        } catch(e) {
            console.warn('[Fetch Interceptor] Relative path resolution failed:', url, e);
        }
        return null;
    }

    // Main lookup: find local path for any URL
    function getLocalPath(url, referrer) {
        const rawUrl = typeof url === 'string'
            ? url
            : (url && typeof url === 'object' && url.url ? url.url : String(url || ''));

        // 1. Relative paths (/x, ../x) - resolve via referrer
        if (rawUrl.startsWith('./') || rawUrl.startsWith('../')) {
            const resolved = resolveRelativePath(rawUrl, referrer);
            if (resolved) return resolved;
        }

        const normalized = normalizeUrl(rawUrl, referrer);

        // 2. Exact match in resource map
        if (resourceMap[normalized]) return resourceMap[normalized];

        // 3. Protocol-relative variant (//domain.com/path)
        const withoutProtocol = normalized.replace(/^https?:/, '');
        if (resourceMap[withoutProtocol]) return resourceMap[withoutProtocol];

        // 4. Basename match against ORIGINAL URL basenames
        //    This handles cases where the saved file has a hash suffix appended:
        //    browser requests "chunk.js" but file was saved as "chunk_abc123.js"
        try {
            const basename = normalized.split('/').pop().split('?')[0];
            if (basename) {
                if (originalBasenameIndex[basename] && originalBasenameIndex[basename].length === 1) {
                    return originalBasenameIndex[basename][0];
                }
                // 5. Fallback: local path basename index
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
        } catch(e) {}

        return null;
    }

    // Block requests to external CDNs that have no local copy
    function isExternalCDN(url) {
        try {
            const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
            if (urlObj.origin !== window.location.origin) {
                const hostname = urlObj.hostname.toLowerCase();
                const cdnMarkers = ['.b-cdn.', 'cdn.', '.cloudfront.', '.akamai', '.fastly.'];
                return cdnMarkers.some(marker => hostname.includes(marker));
            }
        } catch(e) {}
        return false;
    }

    // Check if URL is external (different origin)
    function isExternal(url) {
        try {
            const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
            return urlObj.origin !== window.location.origin;
        } catch(e) {
            return false;
        }
    }

    function isTrackingEndpoint(url) {
        try {
            const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
            const hostname = urlObj.hostname.toLowerCase();
            const path = (urlObj.pathname || '').toLowerCase();
            const combined = `${hostname}${path}`;
            const markers = [
                'monorail',
                'api/collect',
                '/collect',
                'web-pixels',
                'webpixels',
                'web-pixel',
                '/pixel',
                'pixel.',
                'shopifycloud/web-pixels-manager',
                'hotjar',
                'klaviyo',
                'cookiebot',
                'consentcdn',
            ];
            return markers.some(marker => combined.includes(marker));
        } catch(e) {
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
            headers: { 'Content-Type': 'application/json' }
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

        const elements = tagName === 'script'
            ? Array.from(document.scripts || [])
            : Array.from(document.querySelectorAll(tagName));

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
            // Keep src intact so the app's onload callback can read it (avoids "Asset timed out undefined").
            // Changing type to a non-JS MIME prevents the browser from executing it again.
            node.type = 'application/json';
        } else if (kind === 'link') {
            node.setAttribute('data-interceptor-disabled', 'true');
            // Keep href intact to avoid browser warnings about invalid preload URLs.
            setTimeout(() => {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }, 0);
        }

        // Use dispatchEvent so the browser sets event.target = node before calling onload.
        // Calling node.onload(event) directly leaves event.target = null, which causes
        // the app's load callback to read undefined as the asset URL → "Asset timed out undefined".
        setTimeout(() => {
            try { node.dispatchEvent(new Event('load')); } catch (e) {}
        }, 0);

        console.log('[DOM Interceptor] = Duplicate', kind, url);
        return node;
    }

    function isFrameworkChunkScript(url) {
        if (!url) return false;
        const value = String(url);
        return (
            value.includes('/_next/static/chunks/') ||
            value.includes('/_next/static/chunks/app/') ||
            value.includes('/assets/js/script_')
        );
    }

    const originalSetAttribute = Element.prototype.setAttribute;

    function toBrowserPath(localPath) {
        if (!localPath) return localPath;
        if (
            localPath.startsWith('/') ||
            localPath.startsWith('data:') ||
            localPath.startsWith('blob:') ||
            localPath.startsWith('http://') ||
            localPath.startsWith('https://') ||
            localPath.startsWith('//')
        ) {
            return localPath;
        }
        return '/' + localPath;
    }

    function encodeBrowserUrl(value) {
        if (!value || value.startsWith('data:') || value.startsWith('blob:')) {
            return value;
        }

        return value
            .replace(/ /g, '%20')
            .replace(/,/g, '%2C');
    }

    function rewriteSrcsetValue(srcset, referrer) {
        if (!srcset) return srcset;

        return srcset
            .split(',')
            .map((part) => {
                const trimmed = part.trim();
                if (!trimmed) return trimmed;

                const match = trimmed.match(/^(\S+)(?:\s+(.+))?$/);
                if (!match) return trimmed;

                const originalUrl = match[1];
                const descriptor = match[2] || '';
                const localPath = getLocalPath(originalUrl, referrer);
                const rewrittenUrl = localPath && localPath !== originalUrl
                    ? encodeBrowserUrl(toBrowserPath(localPath))
                    : encodeBrowserUrl(originalUrl);

                return descriptor ? `${rewrittenUrl} ${descriptor}` : rewrittenUrl;
            })
            .join(', ');
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

            const rewrittenValue = rewriteMediaAttributeValue(
                tagName,
                attrName,
                currentValue,
                referrer || window.location.href
            );
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
            const allowFrameworkDuplicate = (
                isFrameworkChunkScript(originalSrc) || isFrameworkChunkScript(targetSrc)
            );
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
            if (
                ['img', 'source', 'video', 'audio', 'track'].includes(tagName) &&
                ['src', 'srcset', 'poster'].includes(attrName)
            ) {
                const rewrittenValue = rewriteMediaAttributeValue(
                    tagName,
                    attrName,
                    String(value),
                    window.location.href
                );
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
            get: descriptor.get
                ? function() {
                    return descriptor.get.call(this);
                }
                : undefined,
            set: function(value) {
                const tagName = this.tagName ? this.tagName.toLowerCase() : '';
                const rewrittenValue = rewriteMediaAttributeValue(
                    tagName,
                    propertyName.toLowerCase(),
                    String(value),
                    window.location.href
                );
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
        }, { once: true });
    } else {
        installMediaLocalization();
        scheduleRevealFallback();
    }

    window.addEventListener('scroll', scheduleRevealFallback, { passive: true });
    window.addEventListener('resize', scheduleRevealFallback);
    window.addEventListener('load', () => {
        scheduleRevealFallback();
        setTimeout(scheduleRevealFallback, 1500);
        setTimeout(scheduleRevealFallback, 4000);
    });

    // Intercept fetch()
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

        // CRITICAL FIX: Block all external requests that have no local mapping
        // This prevents 406/CORS errors from leaking to real APIs (Supabase, etc)
        if (isExternal(url)) {
            console.warn('[Fetch Interceptor] \u2717 Blocked external leak:', url);
            return Promise.resolve(buildMockResponse(url, method));
        }

        return originalFetch(url, options);
    };

    // Intercept XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        const referrer = document.currentScript?.src || window.location.href;
        const localPath = getLocalPath(url, referrer);

        // Store original URL for send() interception
        this._interceptedUrl = url;
        this._hasLocalMapping = !!localPath;

        if (localPath) {
            console.log('[XHR Interceptor] \u2713', url, '->', localPath);
            return originalOpen.call(this, method, localPath, ...args);
        }

        // CRITICAL FIX: Allow open() to proceed, but intercept send() for external URLs
        return originalOpen.call(this, method, url, ...args);
    };

    XMLHttpRequest.prototype.send = function(...args) {
        // If URL is external and has no local mapping, block and return mock
        if (this._interceptedUrl && !this._hasLocalMapping && (
            isTrackingEndpoint(this._interceptedUrl) || isExternal(this._interceptedUrl)
        )) {
            if (isTrackingEndpoint(this._interceptedUrl)) {
                console.warn('[XHR Interceptor] \u2717 Blocked tracking call:', this._interceptedUrl);
            } else {
                console.warn('[XHR Interceptor] \u2717 Blocked external leak:', this._interceptedUrl);
            }

            // Simulate successful response
            Object.defineProperty(this, 'status', { value: 200, writable: false });
            Object.defineProperty(this, 'statusText', { value: 'OK (Mocked)', writable: false });
            Object.defineProperty(this, 'responseText', {
                value: this._interceptedUrl.includes('/rest/') ? '[]' : '{}',
                writable: false
            });
            Object.defineProperty(this, 'response', {
                value: this._interceptedUrl.includes('/rest/') ? '[]' : '{}',
                writable: false
            });
            Object.defineProperty(this, 'readyState', { value: 4, writable: false });

            // Trigger load event asynchronously
            setTimeout(() => {
                if (this.onload) this.onload({ type: 'load', target: this });
                if (this.onreadystatechange) this.onreadystatechange({ type: 'readystatechange', target: this });
            }, 0);

            return;
        }

        return originalSend.apply(this, args);
    };

    console.log('[Fetch Interceptor] Installed with', Object.keys(resourceMap).length, 'mappings');
    console.log('[Fetch Interceptor] Basename index:', Object.keys(basenameIndex).length, 'files');
})();