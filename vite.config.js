import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"index":{"outputDir":"./","lang":"pt","title":"Gsix - Sistema para Integradores Solares","cacheVersion":230,"meta":[{"name":"title","content":"Gsix - Sistema para Integradores Solares"},{"name":"description","content":"Plataforma completa para integradores de energia solar. Gerencie projetos, automatize visitas técnicas e acompanhe o fluxo de engenharia em um só lugar."},{"name":"keywords","content":"engenharia solar, projetos fotovoltaicos, gestão de integradores, visita técnica solar, dimensionamento solar, gsix"},{"name":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"itemprop":"name","content":"Gsix - Sistema para Integradores Solares"},{"itemprop":"description","content":"Plataforma completa para integradores de energia solar. Gerencie projetos, automatize visitas técnicas e acompanhe o fluxo de engenharia em um só lugar."},{"itemprop":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Acesse o Sistema Gsix Engenharia"},{"name":"twitter:description","content":"Otimize seus projetos e vistorias. Acesse sua conta para gerenciar visitas técnicas, documentação e status de homologação."},{"name":"twitter:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:title","content":"Acesse o Sistema Gsix Engenharia"},{"property":"og:description","content":"Otimize seus projetos e vistorias. Acesse sua conta para gerenciar visitas técnicas, documentação e status de homologação."},{"property":"og:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:site_name","content":"Gsix - Sistema para Integradores Solares"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://app.gsixengenharia.com.br/"},{"rel":"alternate","hreflang":"pt","href":"https://app.gsixengenharia.com.br/"}]},"definir-senha":{"outputDir":"./definir-senha","lang":"pt","title":"Crie sua Senha | Gsix Engenharia","cacheVersion":230,"meta":[{"name":"title","content":"Crie sua Senha | Gsix Engenharia"},{"name":"description","content":"Bem-vindo à Gsix. Finalize seu cadastro definindo uma senha segura para acessar a plataforma de gestão de projetos e vistorias."},{"name":"keywords","content":"primeiro acesso gsix, criar senha, cadastro integrador, segurança"},{"name":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"itemprop":"name","content":"Crie sua Senha | Gsix Engenharia"},{"itemprop":"description","content":"Bem-vindo à Gsix. Finalize seu cadastro definindo uma senha segura para acessar a plataforma de gestão de projetos e vistorias."},{"itemprop":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Bem-vindo à Gsix - Ative sua Conta"},{"name":"twitter:description","content":"Você recebeu um convite de acesso. Clique aqui para definir sua senha e entrar no sistema."},{"name":"twitter:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:title","content":"Bem-vindo à Gsix - Ative sua Conta"},{"property":"og:description","content":"Você recebeu um convite de acesso. Clique aqui para definir sua senha e entrar no sistema."},{"property":"og:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:site_name","content":"Gsix - Sistema para Integradores Solares"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://app.gsixengenharia.com.br/definir-senha/"},{"rel":"alternate","hreflang":"pt","href":"https://app.gsixengenharia.com.br/definir-senha/"}]},"teste":{"outputDir":"./teste","lang":"pt","title":"Gsix - Sistema para Integradores Solares","cacheVersion":230,"meta":[{"name":"title","content":"Gsix - Sistema para Integradores Solares"},{"name":"description","content":"Plataforma completa para integradores de energia solar. Gerencie projetos, automatize visitas técnicas e acompanhe o fluxo de engenharia em um só lugar."},{"name":"keywords","content":"engenharia solar, projetos fotovoltaicos, gestão de integradores, visita técnica solar, dimensionamento solar, gsix"},{"name":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"itemprop":"name","content":"Gsix - Sistema para Integradores Solares"},{"itemprop":"description","content":"Plataforma completa para integradores de energia solar. Gerencie projetos, automatize visitas técnicas e acompanhe o fluxo de engenharia em um só lugar."},{"itemprop":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Acesse o Sistema Gsix Engenharia"},{"name":"twitter:description","content":"Otimize seus projetos e vistorias. Acesse sua conta para gerenciar visitas técnicas, documentação e status de homologação."},{"name":"twitter:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:title","content":"Acesse o Sistema Gsix Engenharia"},{"property":"og:description","content":"Otimize seus projetos e vistorias. Acesse sua conta para gerenciar visitas técnicas, documentação e status de homologação."},{"property":"og:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:site_name","content":"Gsix - Sistema para Integradores Solares"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://app.gsixengenharia.com.br/teste/"},{"rel":"alternate","hreflang":"pt","href":"https://app.gsixengenharia.com.br/teste/"}]},"home":{"outputDir":"./home","lang":"pt","title":"Gsix | Gestão de Engenharia Solar","cacheVersion":230,"meta":[{"name":"title","content":"Gsix | Gestão de Engenharia Solar"},{"name":"description","content":"Acesso restrito à plataforma GSix. Central de gerenciamento de projetos fotovoltaicos, vistorias técnicas e controle financeiro para integradores parceiros."},{"name":"keywords","content":"login gsix, dashboard solar, sistema intelogin gsix, dashboard solar, sistema integrador, gestão de projetos fv, acesso restritogrador, gestão de projetos fv, acesso restrito"},{"name":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"itemprop":"name","content":"Gsix | Gestão de Engenharia Solar"},{"itemprop":"description","content":"Acesso restrito à plataforma GSix. Central de gerenciamento de projetos fotovoltaicos, vistorias técnicas e controle financeiro para integradores parceiros."},{"itemprop":"image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Acessar Plataforma Gsix"},{"name":"twitter:description","content":"Clique para entrar na sua conta e gerenciar seus projetos, visitas e status de homologação em tempo real."},{"name":"twitter:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:title","content":"Acessar Plataforma Gsix"},{"property":"og:description","content":"Clique para entrar na sua conta e gerenciar seus projetos, visitas e status de homologação em tempo real."},{"property":"og:image","content":"/images/Untitled_design__48_.png?_wwcv=230"},{"property":"og:site_name","content":"Gsix - Sistema para Integradores Solares"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://app.gsixengenharia.com.br/home/"},{"rel":"alternate","hreflang":"pt","href":"https://app.gsixengenharia.com.br/home/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
