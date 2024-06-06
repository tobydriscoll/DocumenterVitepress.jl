import{_ as e,c as t,o as i,a3 as s}from"./chunks/framework.Br3mwmSC.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api.md","filePath":"api.md","lastUpdated":null}'),o={name:"api.md"},a=s('<h2 id="Public-API" tabindex="-1">Public API <a class="header-anchor" href="#Public-API" aria-label="Permalink to &quot;Public API {#Public-API}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="DocumenterVitepress.DocumenterVitepress" href="#DocumenterVitepress.DocumenterVitepress">#</a> <b><u>DocumenterVitepress.DocumenterVitepress</u></b> — <i>Module</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DocumenterVitepress</span></span></code></pre></div><p>Similar to DocumentationMarkdown.jl but designed to work with <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">vitepress</a>.</p><p><a href="https://github.com/LuxDL/DocumenterVitepress.jl/blob/4a9295d7d84b0bade3690adc1d176efc83229eef/src/DocumenterVitepress.jl#L1-L6" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="DocumenterVitepress.MarkdownVitepress" href="#DocumenterVitepress.MarkdownVitepress">#</a> <b><u>DocumenterVitepress.MarkdownVitepress</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MarkdownVitepress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; repo, devbranch, devurl, kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>This is the main entry point for the Vitepress Markdown writer.</p><p>It is a config which can be passed to the <code>format</code> keyword argument in <code>Documenter.makedocs</code>, and causes it to emit a Vitepress site.</p><div class="tip custom-block"><p class="custom-block-title">Quick start</p><p>When invoking <code>Documenter.makedocs</code>, replace the default <code>format=Documenter.HTML(...)</code> with:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DocumenterVitepress</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MarkdownVitepress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; repo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, devbranch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, devurl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div><p><strong>Keyword arguments (config)</strong></p><ul><li><p><code>deploy_url</code>: <em>Required</em>: The URL of the repository to which the documentation will be deployed. This must be the full URL, like <code>rafaqz.github.io/Rasters.jl</code> or <code>geo.makie.jl</code>.</p></li><li><p><code>repo</code>: <em>Required</em>: The full URL of the repository to which the documentation will be deployed.</p></li><li><p><code>devbranch</code>: <em>Required</em>: The name of the development branch, like <code>master</code> or <code>main</code>.</p></li><li><p><code>devurl</code>: <em>Required</em>: The URL path to the development site, like <code>dev</code> or <code>dev-branch</code>.</p></li><li><p><code>description</code>: A description of the website as a String.</p></li><li><p><code>build_vitepress</code>: Determines whether to build the Vitepress site or only emit markdown files. Defaults to <code>true</code>, i.e., building the full Vitepress site.</p></li><li><p><code>install_npm</code>: Determines whether to run <code>npm install</code> before building the Vitepress site. Defaults to <code>true</code>.</p></li><li><p><code>md_output_path</code>: The path to which the Markdown files will be output. Defaults to <code>$build/.documenter</code>.</p></li><li><p><code>clean_md_output</code>: Determines whether to clean up the Markdown assets after build, i.e., whether to remove the contents of <code>md_output_path</code> after the Vitepress site is built. Options are:</p><ul><li><p><code>nothing</code>: <strong>Default</strong>. Only remove the contents of <code>md_output_path</code> if the documentation will deploy, to save space.</p></li><li><p><code>true</code>: Removes the contents of <code>md_output_path</code> after the Vitepress site is built.</p></li><li><p><code>false</code>: Does not remove the contents of <code>md_output_path</code> after the Vitepress site is built.</p></li></ul></li><li><p><code>deploy_decision</code>: DeployDecision from Documenter.jl. This is used to determine whether to deploy the documentation or not. Options are:</p><ul><li><p><code>nothing</code>: <strong>Default</strong>. Automatically determine whether to deploy the documentation.</p></li><li><p><code>Documenter.DeployDecision</code>: Override the automatic decision and deploy based on the passed config.</p></li></ul><p>It might be useful to use the latter if DocumenterVitepress fails to deploy automatically. You can pass a manually constructed <code>Documenter.DeployDecision</code> struct, or the output of <code>Documenter.deploy_folder(Documenter.auto_detect_deploy_system(); repo, devbranch, devurl, push_preview)</code>.</p></li><li><p><code>assets</code>: A list of assets, the same as what is provided to Documenter&#39;s HTMLWriter.</p></li></ul><p><strong>Extended help</strong></p><p>The <code>repo</code> kwarg is used to set the edit link for the documentation.</p><p>The <code>devbranch</code> and <code>devurl</code> kwargs are used to set the path of the static site, which Vitepress expects in advance.</p><p><a href="https://github.com/LuxDL/DocumenterVitepress.jl/blob/4a9295d7d84b0bade3690adc1d176efc83229eef/src/writer.jl#L9-L30" target="_blank" rel="noreferrer">source</a></p></div><br><p>See e.g. <a href="/DocumenterVitepress.jl/previews/PR152/api#DocumenterVitepress.DocumenterVitepress"><code>DocumenterVitepress.DocumenterVitepress</code></a></p>',6),r=[a];function d(p,l,n,c,h,u){return i(),t("div",null,r)}const b=e(o,[["render",d]]);export{k as __pageData,b as default};
