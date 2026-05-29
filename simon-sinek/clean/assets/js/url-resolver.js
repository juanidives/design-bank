/**
 * Fetch/XHR Interceptor - Injected into downloaded sites to resolve remote URLs locally.
 *
 * This script is loaded as a template. Python replaces the placeholder comment below
 * with the actual resource map code before injecting into the page <head>.
 *
 * Placeholder: /* __RESOURCE_MAP_CODE__ * /
 */
(async function() {
    const resourceMap = {"https://simonsinek.com/": "/assets/resource_e6fde0a83406.html", "https://simonsinek.com/images/spark-sm.webp": "/assets/images/spark-sm_2.webp", "https://simonsinek.com/images/spark-orange.webp": "/assets/images/spark-orange_2.webp", "https://simonsinek.com/images/leaderful/imac-24-iphone-17.webp": "/assets/images/imac-24-iphone-17.webp", "https://simonsinek.com/fonts/gartonpro-bold.woff2": "/assets/fonts/gartonpro-bold_2.woff2", "https://simonsinek.com/_next/static/css/a080f3a2ec3f2fea.css": "/assets/css/style_001.css", "https://simonsinek.com/fonts/gartonpro-regular.woff2": "/assets/fonts/gartonpro-regular_2.woff2", "https://simonsinek.com/_next/static/chunks/webpack-d408a667b1b9c9fd.js": "/assets/js/script_056.js", "https://wp.simonsinek.com/wp-content/uploads/2026/05/Mike_Posner-headshot.jpg": "/assets/images/Mike_Posner-headshot.jpg", "https://wp.simonsinek.com/wp-content/uploads/2026/05/Tom_Nash-headshot.jpg": "/assets/images/Tom_Nash-headshot.jpg", "https://wp.simonsinek.com/wp-content/uploads/2026/05/iStock-2240343727.jpg": "/assets/images/img_006.jpg", "https://wp.simonsinek.com/wp-content/uploads/2026/05/Vanessa_Van_Edwards-headshot.jpg": "/assets/images/img_003.jpg", "https://wp.simonsinek.com/wp-content/uploads/2026/05/Dr_Eliza_Filby-headshot.jpg": "/assets/images/Dr_Eliza_Filby-headshot.jpg", "https://wp.simonsinek.com/wp-content/uploads/2026/05/iStock-2222942053.jpg": "/assets/images/img_005.jpg", "https://simonsinek.com/_next/static/chunks/6743-52a96ca2c9278afe.js": "/assets/js/script_020.js", "https://simonsinek.com/_next/static/chunks/4909-27a9b19581581e9a.js": "/assets/js/script_014.js", "https://simonsinek.com/_next/static/chunks/2454-ec803327c5522291.js": "/assets/js/script_007.js", "https://simonsinek.com/_next/static/chunks/app/(main)/layout-053f8791c9cd52f7.js": "/assets/js/script_038.js", "https://simonsinek.com/_next/static/chunks/app/global-error-ab75b8ed2d7e9ad2.js": "/assets/js/script_031.js", "https://simonsinek.com/_next/static/chunks/app/(main)/page-dc7dff9ad90491b8.js": "/assets/js/script_044.js", "https://simonsinek.com/_next/static/chunks/3750-253c3eec33045426.js": "/assets/js/script_012.js", "https://simonsinek.com/_next/static/chunks/7257-26318ac8645d3c41.js": "/assets/js/script_023.js", "https://simonsinek.com/_next/static/chunks/9381-443c217cb011b361.js": "/assets/js/script_027.js", "https://simonsinek.com/_next/static/chunks/app/not-found-26e8eddcc8bf1852.js": "/assets/js/script_053.js", "https://simonsinek.com/_next/static/chunks/main-app-8113e3bcaa4c1579.js": "/assets/js/script_054.js", "https://simonsinek.com/_next/static/chunks/8763-2962df1f2e61aad9.js": "/assets/js/script_025.js", "https://simonsinek.com/_next/static/chunks/app/layout-c0f56d6a4f666ac9.js": "/assets/js/script_032.js", "https://simonsinek.com/_next/static/chunks/9914-fc4015bb415c517a.js": "/assets/js/script_028.js", "https://simonsinek.com/_next/static/chunks/4bd1b696-3aa81e3d6df20364.js": "/assets/js/script_016.js", "https://simonsinek.com/_next/static/chunks/3073-6ee92315351206bf.js": "/assets/js/script_009.js", "https://simonsinek.com/_next/static/chunks/107-281c0d6e5e863382.js": "/assets/js/script_004.js", "https://simonsinek.com/_next/static/chunks/52774a7f-d57514eefaeba181.js": "/assets/js/script_018.js", "https://simonsinek.com/_next/static/chunks/6852-e6c252df803c563a.js": "/assets/js/script_021.js", "https://simonsinek.com/_next/static/chunks/3217-2205720e33a853f4.js": "/assets/js/script_010.js", "https://simonsinek.com/_next/static/chunks/6291-4b9603cd0577606e.js": "/assets/js/script_019.js", "https://simonsinek.com/_next/static/chunks/5221-a57ffecb676dba00.js": "/assets/js/script_017.js", "https://simonsinek.com/_next/static/chunks/7041-4c294bc873e371de.js": "/assets/js/script_022.js", "https://simonsinek.com/_next/static/chunks/app/error-a42fae374e7f378f.js": "/assets/js/script_030.js", "https://simonsinek.com/_next/static/chunks/2619-50be700870f390fe.js": "/assets/js/script_008.js", "https://simonsinek.com/_next/static/chunks/3409-d75cf5db78549d05.js": "/assets/js/script_011.js", "https://simonsinek.com/_next/static/chunks/8943-5ed2778f3eb90163.js": "/assets/js/script_026.js", "https://simonsinek.com/_next/static/chunks/834-78b87ddb120d8512.js": "/assets/js/script_024.js", "https://wp.simonsinek.com/wp-content/uploads/2026/05/iStock-1406477727.jpg": "/assets/images/img_004.jpg", "https://signal.simonsinek.com/": "/assets/js/script_061.js", "https://o4510229084438528.ingest.us.sentry.io/api/4511304986132480/envelope/?sentry_version=7&sentry_key=3e1c52a02554a8263a09705421843832&sentry_client=sentry.javascript.nextjs%2F10.51.0": "/assets/data/data_003.json", "https://clerk.simonsinek.com/npm/@clerk/clerk-js@6.12.1/dist/clerk.browser.js": "/assets/js/clerk.browser_2.js", "https://simonsinek.com/podcast.txt?_rsc=1otn0": "/assets/other/file_017.txt", "https://simonsinek.com/stories.txt?_rsc=1otn0": "/assets/other/file_024.txt", "https://simonsinek.com/business.txt?_rsc=1otn0": "/assets/other/file_002.txt", "https://simonsinek.com/leaderful.txt?_rsc=1otn0": "/assets/other/file_009.txt", "https://simonsinek.com/on-demand-courses.txt?_rsc=1otn0": "/assets/other/file_012.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/podcast/page-17fc2b7b5b3206ae.js": "/assets/js/script_046.js", "https://simonsinek.com/_next/static/chunks/2394-6af2c56479a5ef04.js": "/assets/js/script_006.js", "https://simonsinek.com/_next/static/chunks/app/(main)/stories/page-babdd535ef2df72e.js": "/assets/js/script_050.js", "https://simonsinek.com/_next/static/chunks/4820-6655d9873b852b1b.js": "/assets/js/script_013.js", "https://simonsinek.com/_next/static/chunks/app/(main)/leaderful/page-22427db0fdbfec57.js": "/assets/js/script_039.js", "https://simonsinek.com/_next/static/chunks/app/(main)/business/page-95add7c57df53439.js": "/assets/js/script_035.js", "https://simonsinek.com/_next/static/chunks/app/(main)/on-demand-courses/page-c5ff9a1a6ca2e8ee.js": "/assets/js/script_041.js", "https://clerk.simonsinek.com/npm/@clerk/ui@1.13.1/dist/ui.browser.js": "/assets/js/ui.browser_2.js", "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=CG89SP3C77UFMURDSI50&lib=ttq": "/assets/js/script_002.js", "https://analytics.tiktok.com/i18n/pixel/static/main.MWFmMzU5MmI0MQ.js": "/assets/js/main.MWFmMzU5MmI0MQ.js", "https://clerk.simonsinek.com/v1/environment?__clerk_api_version=2025-11-10&_clerk_js_version=6.12.1": "/assets/data/data_004.json", "https://clerk.simonsinek.com/v1/client?__clerk_api_version=2025-11-10&_clerk_js_version=6.12.1": "/assets/data/data_001.json", "https://analytics.tiktok.com/i18n/pixel/static/identify_5cff1caf.js": "/assets/js/script_003.js", "https://connect.simonsinek.com/shopify/webhook/custom": "/assets/data/data_002.json", "https://www.google.com/pagead/1p-user-list/10884993403/?random=1780024845792&cv=11&fst=1780023600000&bg=ffffff&guid=ON&async=1&en=page_view&gtm=45be65r2v880177189za200zb9113061255zd9113061255xec&gcd=13r3r3X3r5l1&dma=0&tag_exp=0~115938465~115938468~116701382~119034493&u_w=1920&u_h=1080&url=https%3A%2F%2Fsimonsinek.com%2F&rcb=7&frm=0&tiba=Simon%20Sinek%20%7C%20The%20Optimism%20Company&oid=a9b1h3g4bahdr8d5vjsbn&hn=www.googleadservices.com&npa=0&pscdl=noapi&auid=1537985449.1780024846&uaa=&uab=&uafvl=&uamb=0&uam=&uap=&uapv=&uaw=0&data=event%3Dpage_view&rfmt=3&fmt=3&is_vtc=1&cid=CAQS1AEABaugfdO4EEf5ZdspAYj3B1CFvA_9ppSMLRliNAfh0BqWwatUpOiuP32ah2L5IUck2HHNq7yv-FQB6Js0px7ntC6GDKL4vs2D9Bgt5YAj6FeiLnIEdMGsDj8GuzYxDPL1U-97eH4fSyTLuGlIgyfqNTqLQ7_YXWg30yaADO6Vgb80J8_P1amiPtdiP1pbx38ARQ5dvibhpxaU8OIO1A-QfI6xQ9WBSMPMXOzU2vk51C-gKtCXwMrdd6qQTE6ql__A-qCI1VsTO-ICCIrwCXePLGIzpw&random=1060105271&rmt_tld=0&ipr=y": "/assets/images/img_001.gif", "https://clerk.simonsinek.com/npm/@clerk/ui@1.13.1/dist/framework_ui_f38d1c_1.13.1.js": "/assets/js/script_057.js", "https://clerk.simonsinek.com/npm/@clerk/ui@1.13.1/dist/ui-common_ui_f38d1c_1.13.1.js": "/assets/js/script_059.js", "https://simonsinek.com/my-account.txt?_rsc=1otn0": "/assets/other/file_011.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/my-account/page-68f0d2b42c155a9b.js": "/assets/js/script_040.js", "https://simonsinek.com/_next/static/chunks/1166-fb9b3bab18ff1bbc.js": "/assets/js/script_005.js", "https://clerk.simonsinek.com/npm/@clerk/ui@1.13.1/dist/subscriptionDetails_ui_f38d1c_1.13.1.js": "/assets/js/script_058.js", "https://clerk.simonsinek.com/npm/@clerk/ui@1.13.1/dist/vendors_ui_f38d1c_1.13.1.js": "/assets/js/vendors_ui_f38d1c_1.13.1.js", "https://simonsinek.com/podcast/episodes/stop-telling-us-everything-happens-for-a-reason-with-anti-victim-tom-nash.txt?_rsc=1otn0": "/assets/other/file_023.txt", "https://simonsinek.com/podcast/episodes/the-real-reason-you-feel-empty-even-when-life-looks-good-with-musician-mike-posner.txt?_rsc=1otn0": "/assets/other/file_029.txt", "https://simonsinek.com/podcast/episodes/how-to-stop-being-socially-awkward-according-to-science-with-behavioral-scientist-vanessa-van-edwards.txt?_rsc=1otn0": "/assets/other/file_007.txt", "https://simonsinek.com/podcast/episodes/why-young-people-dont-have-the-hunger-for-work-and-what-leaders-need-to-hear-with-generations-expert-dr-eliza-filby.txt?_rsc=1otn0": "/assets/other/file_032.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/podcast/episodes/%5bslug%5d/page-c44680fe46df4568.js": "/assets/js/script_045.js", "https://simonsinek.com/stories/the-hardest-thing-a-leader-can-do-is-nothing.txt?_rsc=1otn0": "/assets/other/file_027.txt", "https://simonsinek.com/stories/how-to-end-an-argument-that-refuses-to-end.txt?_rsc=1otn0": "/assets/other/file_006.txt", "https://simonsinek.com/business/keynotes.txt?_rsc=1otn0": "/assets/other/file_008.txt", "https://simonsinek.com/product/the-art-of-presenting.txt?promo_code=AOP30-26&_rsc=1otn0": "/assets/other/file_026.txt", "https://simonsinek.com/stories/the-three-words-that-make-recognition-actually-stick.txt?_rsc=1otn0": "/assets/other/file_030.txt", "https://simonsinek.com/business/workshops.txt?_rsc=1otn0": "/assets/other/file_033.txt", "https://simonsinek.com/business/private-classes.txt?_rsc=1otn0": "/assets/other/file_019.txt", "https://simonsinek.com/business/contact-us.txt?_rsc=1otn0": "/assets/other/file_004.txt", "https://simonsinek.com/business/packages.txt?_rsc=1otn0": "/assets/other/file_016.txt", "https://simonsinek.com/simons-bio.txt?_rsc=1otn0": "/assets/other/file_021.txt", "https://simonsinek.com/our-why.txt?_rsc=1otn0": "/assets/other/file_015.txt", "https://simonsinek.com/our-optimists.txt?_rsc=1otn0": "/assets/other/file_014.txt", "https://simonsinek.com/contact-us.txt?_rsc=1otn0": "/assets/other/file_003.txt", "https://simonsinek.com/privacy.txt?_rsc=1otn0": "/assets/other/file_018.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/business/contact-us/page-dc35b91c68ee12ac.js": "/assets/js/script_034.js", "https://simonsinek.com/_next/static/chunks/app/(main)/simons-bio/page-2a980709330bc2e0.js": "/assets/js/script_049.js", "https://simonsinek.com/terms.txt?_rsc=1otn0": "/assets/other/file_025.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/our-why/page-cb3cb4a4cc34f51c.js": "/assets/js/script_043.js", "https://simonsinek.com/_next/static/chunks/app/(main)/contact-us/page-a1c14f629238aa16.js": "/assets/js/script_036.js", "https://simonsinek.com/_next/static/chunks/app/(main)/privacy/page-58c255a3ea3dc66f.js": "/assets/js/script_047.js", "https://simonsinek.com/_next/static/chunks/app/(main)/terms/page-47a7abebc57e4a79.js": "/assets/js/script_051.js", "https://simonsinek.com/golden-circle.txt?_rsc=1otn0": "/assets/other/file_005.txt", "https://simonsinek.com/videos.txt?_rsc=1otn0": "/assets/other/file_031.txt", "https://simonsinek.com/books/start-with-why.txt?_rsc=1otn0": "/assets/other/file_022.txt", "https://simonsinek.com/quotes.txt?_rsc=1otn0": "/assets/other/file_020.txt", "https://simonsinek.com/books/leaders-eat-last.txt?_rsc=1otn0": "/assets/other/file_010.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/golden-circle/page-a6828e7b821bf6ec.js": "/assets/js/script_037.js", "https://simonsinek.com/books/the-infinite-game.txt?_rsc=1otn0": "/assets/other/file_028.txt", "https://simonsinek.com/books.txt?_rsc=1otn0": "/assets/other/file_001.txt", "https://simonsinek.com/_next/static/chunks/a4634e51-86c1c3fb3b6271cd.js": "/assets/js/script_029.js", "https://simonsinek.com/optimism-press.txt?_rsc=1otn0": "/assets/other/file_013.txt", "https://simonsinek.com/_next/static/chunks/app/(main)/videos/page-1850e26bbc6b73b4.js": "/assets/js/script_052.js", "https://simonsinek.com/_next/static/chunks/4988-5a14ea5b18b14def.js": "/assets/js/script_015.js", "https://simonsinek.com/_next/static/chunks/app/(main)/quotes/page-516f31b16bc4914f.js": "/assets/js/script_048.js", "https://simonsinek.com/_next/static/chunks/app/(main)/books/page-822370db81a1bbc4.js": "/assets/js/script_033.js", "https://simonsinek.com/_next/static/chunks/app/(main)/optimism-press/page-6b8fad2f23054287.js": "/assets/js/script_042.js", "https://simonsinek.com/index.txt": "/assets/other/index.txt", "https://connect.facebook.net/en_US/fbevents.js": "/assets/js/fbevents.js", "https://analytics.tiktok.com/i18n/pixel/events.js": "/assets/js/events.js", "https://simonsinek.com/images/team/molly.webp": "/assets/images/molly.webp", "https://simonsinek.com/images/team/taylor.webp": "/assets/images/taylor.webp", "https://simonsinek.com/images/team/sharin.webp": "/assets/images/sharin.webp", "https://simonsinek.com/images/team/pai.webp": "/assets/images/pai.webp", "https://analytics.tiktok.com/i18n/pixel/config.js": "/assets/js/config.js", "https://analytics.tiktok.com/i18n/pixel/eb.js": "/assets/js/eb.js", "https://img.clerk.com/static/apple.png": "/assets/images/apple.png", "https://img.clerk.com/static/google.png": "/assets/images/google.png", "https://img.clerk.com/static/linkedin_oidc.png": "/assets/images/linkedin_oidc.png", "https://simonsinek.com/images/headshots/simon-sinek-01.jpg": "/assets/images/simon-sinek-01.jpg", "https://simonsinek.com/images/headshots/simon-sinek-02.jpg": "/assets/images/simon-sinek-02.jpg", "https://simonsinek.com/images/headshots/simon-sinek-03.jpg": "/assets/images/simon-sinek-03.jpg", "https://simonsinek.com/images/headshots/simon-sinek-04.jpg": "/assets/images/simon-sinek-04.jpg", "https://simonsinek.com/images/headshots/simon-sinek-05.jpg": "/assets/images/simon-sinek-05.jpg", "https://simonsinek.com/images/headshots/simon-sinek-06.jpg": "/assets/images/simon-sinek-06.jpg", "https://simonsinek.com/images/headshots/simon-sinek-07.jpg": "/assets/images/simon-sinek-07.jpg", "https://simonsinek.com/images/headshots/simon-sinek-08.jpg": "/assets/images/simon-sinek-08.jpg", "https://simonsinek.com/images/headshots/simon-sinek-09.jpg": "/assets/images/simon-sinek-09.jpg", "https://simonsinek.com/images/headshots/simon-sinek-10.jpg": "/assets/images/simon-sinek-10.jpg", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1": "/assets/js/script_001.js", "https://analytics.tiktok.com/i18n/pixel/static/TikTok-Text-Regular.woff": "/assets/fonts/TikTok-Text-Regular.woff", "https://analytics.tiktok.com/i18n/pixel/static/TikTok-Text-Medium.woff": "/assets/fonts/TikTok-Text-Medium.woff", "https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js": "/assets/js/cast_framework.js", "https://www.gstatic.com/eureka/clank/cast_sender.js": "/assets/js/cast_sender.js", "https://simonsinek.com/manifest.json": "/assets/data/data_005.json", "https://simonsinek.com/favicon.ico": "/assets/icons/favicon.ico", "https://simonsinek.com/apple-touch-icon.png": "/assets/images/apple-touch-icon.png", "https://simonsinek.com/_next/static/chunks/polyfills-42372ed130431b0a.js": "/assets/js/script_055.js", "https://simonsinek.com/fonts/GartonPro-Regular.woff2": "/assets/fonts/GartonPro-Regular_2.woff2", "https://simonsinek.com/fonts/GartonPro-Bold.woff2": "/assets/fonts/GartonPro-Bold_2.woff2", "https://clerk.simonsinek.com/npm/@clerk/clerk-js@6/dist/clerk.browser.js": "/assets/js/clerk.browser_2.js", "https://clerk.simonsinek.com/npm/@clerk/ui@1/dist/ui.browser.js": "/assets/js/ui.browser_2.js", "https://c.bing.com/c.gif?ctsa=mr&CtsSyncId=B8C9A0498C8C4A91846247C770D576CC&RedC=c.clarity.ms&MXFR=19328804AD44626C3B1C9F6CA9446C1B": "/assets/images/img_002.gif", "https://signal.simonsinek.com": "/assets/js/script_060.js"};

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
