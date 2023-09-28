//@ts-nocheck
import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import imagick from "lume/plugins/imagick.ts";
import sass from "lume/plugins/sass.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import vento from "lume/plugins/vento.ts";

// Create site
const site = lume({ src: "_src" });

// Copy assets
site.copy("_");

site.use(date());
site.use(esbuild({ target: "es6" }));
site.use(imagick());
site.use(sass());
site.use(slugify_urls());
site.use(vento());

export default site;