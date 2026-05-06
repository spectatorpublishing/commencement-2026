import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("articles", "routes/articles.tsx"),
    route("letter-from-editor", "routes/letter-from-editor.tsx"),
    route("university", "routes/university.tsx"),
    route("ac", "routes/ac.tsx"),
    route("sports", "routes/sports.tsx"),
    route("spectrum", "routes/spectrum.tsx"),
    route("opinion", "routes/opinion.tsx"),
    route("crosswords", "routes/crosswords.tsx"),
    route("credits", "routes/credits.tsx"),
] satisfies RouteConfig;
