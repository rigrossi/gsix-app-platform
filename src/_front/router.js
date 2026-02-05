import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"8bc3e6ae-7479-462c-b201-593221945997","homePageId":"78bbe8ed-6677-4004-8413-9c0f13b2b026","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"pt","default":true}],"background":{},"workflows":[],"pages":[{"id":"78bbe8ed-6677-4004-8413-9c0f13b2b026","linkId":"78bbe8ed-6677-4004-8413-9c0f13b2b026","name":"Login","folder":null,"paths":{"pt":"login","default":"login"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"12ea50de-eb32-4867-9988-2edf63f65bcd","sectionTitle":"Login section","linkId":"466ae603-5e5c-4a18-8278-d3cc79daff45"}],"pageUserGroups":[],"title":{"pt":"Gsix - Sistema para Integradores Solares"},"meta":{"desc":{"pt":"Plataforma completa para integradores de energia solar. Gerencie projetos, automatize visitas técnicas e acompanhe o fluxo de engenharia em um só lugar."},"keywords":{"pt":"engenharia solar, projetos fotovoltaicos, gestão de integradores, visita técnica solar, dimensionamento solar, gsix"},"socialDesc":{"pt":"Otimize seus projetos e vistorias. Acesse sua conta para gerenciar visitas técnicas, documentação e status de homologação."},"socialTitle":{"pt":"Acesse o Sistema Gsix Engenharia"},"structuredData":{}},"metaImage":"images/Untitled_design__48_.png?_wwcv=230"},{"id":"85e092c5-2a71-4f42-9324-928c9c31090a","linkId":"85e092c5-2a71-4f42-9324-928c9c31090a","name":"definir-senha","folder":null,"paths":{"pt":"definir-senha","default":"definir-senha"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"531a6b1f-f4d3-4632-89f9-2d8d35b0e863","sectionTitle":"Section","linkId":"f97e3041-0f9e-40ff-aa7e-f3bb395c158a"}],"pageUserGroups":[],"title":{"pt":"Crie sua Senha | Gsix Engenharia"},"meta":{"desc":{"pt":"Bem-vindo à Gsix. Finalize seu cadastro definindo uma senha segura para acessar a plataforma de gestão de projetos e vistorias."},"keywords":{"pt":"primeiro acesso gsix, criar senha, cadastro integrador, segurança"},"__typename":"PageMeta","socialDesc":{"pt":"Você recebeu um convite de acesso. Clique aqui para definir sua senha e entrar no sistema."},"socialTitle":{"pt":"Bem-vindo à Gsix - Ative sua Conta"},"structuredData":{}},"metaImage":"images/Untitled_design__48_.png?_wwcv=230"},{"id":"ea18b012-99a2-4c1b-8530-b1aaa127b134","linkId":"ea18b012-99a2-4c1b-8530-b1aaa127b134","name":"Teste","folder":null,"paths":{"pt":"teste","default":"teste"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"a55fcc3b-a84c-4177-865b-687dac843257","sectionTitle":"Section","linkId":"db86dd0d-dbaa-4039-9e2d-c205d5893a17"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bb1bd4dc-720f-42ac-9ac2-36a4ad9c95c8","linkId":"bb1bd4dc-720f-42ac-9ac2-36a4ad9c95c8","name":"Home","folder":null,"paths":{"en":"home","pt":"home","default":"home"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"dfccb6c7-0388-4106-9f42-229d9ee323f5","sectionTitle":"Top Nav","linkId":"caba4583-cee0-4fad-ba9e-d6ec4c48f254"},{"uid":"efb1132f-542c-485f-98c5-9365a4f39aa8","sectionTitle":"Container Search","linkId":"0bd0a46d-053a-4dcf-bf6c-16427a4f698d"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Gsix | Gestão de Engenharia Solar"},"meta":{"desc":{"pt":"Acesso restrito à plataforma GSix. Central de gerenciamento de projetos fotovoltaicos, vistorias técnicas e controle financeiro para integradores parceiros."},"keywords":{"pt":"login gsix, dashboard solar, sistema intelogin gsix, dashboard solar, sistema integrador, gestão de projetos fv, acesso restritogrador, gestão de projetos fv, acesso restrito"},"socialDesc":{"pt":"Clique para entrar na sua conta e gerenciar seus projetos, visitas e status de homologação em tempo real."},"socialTitle":{"pt":"Acessar Plataforma Gsix"},"structuredData":{}},"metaImage":"images/Untitled_design__48_.png?_wwcv=230"}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"cabb43dd-6161-4140-8ebf-03b6fb045a0b","name":"Google","namespace":"google"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"8bc1b5c9-29e4-4269-becb-a2e1a8de9127","name":"WeWeb Email","namespace":"wewebEmail"},{"id":"d66a250d-8468-469e-ad33-ee028f632398","name":"OpenAI","namespace":"openai"},{"id":"fdf6b667-9515-4086-87ef-6042fc6f20fb","name":"Google Sheets","namespace":"googleSheets"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 230;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
