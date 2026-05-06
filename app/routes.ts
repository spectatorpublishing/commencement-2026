import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("articles/:section", "routes/articles.tsx"),
    route("letter-from-editor", "routes/letter-from-editor.tsx"),
    route("credits", "routes/credits.tsx"),
] satisfies RouteConfig;
