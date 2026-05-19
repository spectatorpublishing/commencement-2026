import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/assets/home.png
var home_default$1 = "data:image/png;base64,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";
//#endregion
//#region app/assets/university.png
var university_default = "/assets/university-DnMl6ZP-.png";
//#endregion
//#region app/assets/spectrum.png
var spectrum_default = "/assets/spectrum-B9EALtrX.png";
//#endregion
//#region app/components/Navbar.tsx
var NAV_LINKS = [
	{
		label: "Home",
		path: "/",
		banner: home_default$1
	},
	{
		label: "University",
		path: "/articles/university",
		banner: university_default
	},
	{
		label: "A&C",
		path: "/articles/ac",
		banner: spectrum_default
	},
	{
		label: "Sports",
		path: "/articles/sports",
		banner: home_default$1
	},
	{
		label: "Spectrum",
		path: "/articles/spectrum",
		banner: university_default
	},
	{
		label: "Opinion",
		path: "/articles/opinion",
		banner: spectrum_default
	},
	{
		label: "Audio",
		path: "/articles/audio",
		banner: home_default$1
	},
	{
		label: "Crosswords",
		path: "/articles/crosswords",
		banner: university_default
	},
	{
		label: "Credits",
		path: "/credits",
		banner: spectrum_default
	}
];
function Navbar({ current }) {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	return /* @__PURE__ */ jsxs("nav", {
		className: "nav-wrapper",
		style: { paddingBottom: "1rem" },
		children: [/* @__PURE__ */ jsx("button", {
			className: "nav-hamburger",
			onClick: () => setMenuOpen((o) => !o),
			"aria-label": "Toggle navigation",
			children: /* @__PURE__ */ jsx("span", { className: `nav-hamburger-icon ${menuOpen ? "open" : ""}` })
		}), /* @__PURE__ */ jsx("ul", {
			className: `nav-list ${menuOpen ? "nav-list--open" : ""}`,
			children: NAV_LINKS.map(({ label, path, banner }) => {
				return /* @__PURE__ */ jsx("li", {
					className: "nav-item",
					children: (current ? current === label.toLowerCase() : location.pathname === path) ? /* @__PURE__ */ jsx(Link, {
						to: path,
						className: "nav-active-banner",
						style: banner ? { ["--banner-url"]: `url(${banner})` } : void 0,
						onClick: () => setMenuOpen(false),
						children: /* @__PURE__ */ jsx("span", {
							className: "nav-banner-label",
							children: label
						})
					}) : /* @__PURE__ */ jsx(Link, {
						to: path,
						className: "nav-link",
						onClick: () => setMenuOpen(false),
						children: label
					})
				}, label);
			})
		})]
	});
}
//#endregion
//#region app/assets/header.png
var header_default = "/assets/header-DvQPTfYK.png";
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:wght@700&display=swap"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@700&family=Inter:wght@400&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		style: { position: "relative" },
		children: [/* @__PURE__ */ jsx("header", {
			className: "site-header",
			children: /* @__PURE__ */ jsx("a", {
				href: "https://www.columbiaspectator.com/",
				target: "_blank",
				rel: "noopener noreferrer",
				children: /* @__PURE__ */ jsx("img", {
					src: header_default,
					alt: "Columbia Daily Spectator",
					className: "site-header-logo"
				})
			})
		}), /* @__PURE__ */ jsx(Navbar, {})]
	}), /* @__PURE__ */ jsx(Outlet, {})] });
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/assets/upper_stars.png
var upper_stars_default = "/assets/upper_stars-Dg5Fji0s.png";
//#endregion
//#region app/assets/lower_stars.png
var lower_stars_default = "/assets/lower_stars-RUtPexrP.png";
//#endregion
//#region app/assets/home-img-1.png
var home_img_1_default = "/assets/home-img-1-jsKqDeBb.png";
//#endregion
//#region app/assets/home-uni.png
var home_uni_default = "/assets/home-uni-B0-VXtxC.png";
//#endregion
//#region app/assets/home-img-2.png
var home_img_2_default = "/assets/home-img-2-DVXQvmS1.png";
//#endregion
//#region app/assets/home-lfe.png
var home_lfe_default = "/assets/home-lfe-DjaIC-vw.png";
//#endregion
//#region app/assets/home-spectrum.png
var home_spectrum_default = "/assets/home-spectrum-DggGW-zZ.png";
//#endregion
//#region app/routes/Homepage.tsx
var DESKTOP_BOARD_WIDTH = 1485;
var DESKTOP_BOARD_HEIGHT = 860;
function Homepage() {
	const [scale, setScale] = useState(1);
	const shellRef = useRef(null);
	useEffect(() => {
		const updateScale = () => {
			if (window.innerWidth > 960) {
				setScale(1);
				return;
			}
			const shellTop = shellRef.current?.getBoundingClientRect().top ?? 0;
			const availableWidth = window.innerWidth - 24;
			const availableHeight = window.innerHeight - shellTop - 24;
			const widthScale = availableWidth / DESKTOP_BOARD_WIDTH;
			const heightScale = availableHeight / DESKTOP_BOARD_HEIGHT;
			setScale(Math.min(1, widthScale, heightScale));
		};
		updateScale();
		window.addEventListener("resize", updateScale);
		return () => window.removeEventListener("resize", updateScale);
	}, []);
	return /* @__PURE__ */ jsx("main", {
		ref: shellRef,
		className: "homepage-shell",
		style: { ["--homepage-scale"]: scale },
		children: /* @__PURE__ */ jsx("div", {
			className: "homepage-board-viewport",
			children: /* @__PURE__ */ jsxs("div", {
				className: "homepage-desktop-board",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: upper_stars_default,
						alt: "",
						width: "1485",
						height: "836",
						className: "homepage-stars homepage-stars--top"
					}),
					/* @__PURE__ */ jsx("img", {
						src: lower_stars_default,
						alt: "",
						width: "1485",
						height: "836",
						className: "homepage-stars homepage-stars--bottom"
					}),
					/* @__PURE__ */ jsx("img", {
						src: home_img_1_default,
						alt: "",
						width: "329",
						height: "218",
						className: "homepage-art homepage-art--image1"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/articles/university",
						className: "homepage-art homepage-art--university",
						children: /* @__PURE__ */ jsx("img", {
							src: home_uni_default,
							alt: "University",
							width: "418",
							height: "171"
						})
					}),
					/* @__PURE__ */ jsx("img", {
						src: home_img_2_default,
						alt: "",
						width: "212.37",
						height: "198.47",
						className: "homepage-art homepage-art--image2",
						style: {
							position: "relative",
							zIndex: 10
						}
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/letter-from-editor",
						className: "homepage-art homepage-art--letter-from-editor",
						style: {
							display: "inline-block",
							width: 520,
							height: 292.5,
							position: "relative",
							zIndex: 5
						},
						children: /* @__PURE__ */ jsx("img", {
							src: home_lfe_default,
							alt: "Letter from the Editor",
							width: "520",
							height: "292.5"
						})
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/articles/spectrum",
						className: "homepage-art homepage-art--spectrum",
						children: /* @__PURE__ */ jsx("img", {
							src: home_spectrum_default,
							alt: "Spectrum",
							width: "373.24",
							height: "229.54"
						})
					})
				]
			})
		})
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$2
});
function meta$2({}) {
	return [{ title: "Commencement 2026" }, {
		name: "description",
		content: "Welcome to Commencement 2026!"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(Homepage, {});
});
//#endregion
//#region app/components/articleCard.tsx
var iconMap = [
	"/angleTape.png",
	"/bluePin.png",
	"/flatTape.png",
	"/whitePin.png",
	"/flatTape.png",
	"/whitePin.png"
];
function ArticleCard(props) {
	return /* @__PURE__ */ jsxs("a", {
		href: props.article.article_link,
		target: "_blank",
		rel: "noopener noreferrer",
		className: `article-card ${props.compact ? "article-card--compact" : ""}`,
		children: [
			props.num > 1 && /* @__PURE__ */ jsx("img", {
				className: `icon variant-${props.variant}`,
				src: iconMap[props.variant]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "image-wrapper",
				children: /* @__PURE__ */ jsx("div", {
					className: "image-box",
					children: /* @__PURE__ */ jsx("img", {
						className: "image",
						src: props.article.image_url,
						alt: props.article.article_title
					})
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "content",
				children: [/* @__PURE__ */ jsx("h2", { children: props.article.article_title }), /* @__PURE__ */ jsxs("p", {
					className: "author",
					children: ["By ", props.article.article_authors]
				})]
			})
		]
	});
}
//#endregion
//#region app/data/articlesIndex.ts
var articlesBySection = {
	university: [
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/06/ccsc-president-sam-cano-cabrera-cc-26-loves-his-friends-student-council-and-the-color-blue/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/DTNQJO7WTFCINJMRPJJ35VUZQM.jpg?auth=29e1c2f4ffba1261773df3470b36e25efd494a07695e93caec2461f169c7129e",
			article_title: "CCSC President Sam Cano Cabrera, CC ’26, loves his friends, student council, and the color blue",
			article_authors: "Fiona Hu"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/09/a-leader-among-leaders-adrienne-chacon-bc-26-on-her-time-as-president-of-barnards-student-government-association/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/JVGV6TVTYNHZXD5OJVRWPO6PQY.jpg?auth=09034478ee2d4c21e398425432420bd18b6d76ebb164cd31ccecca09666cbe12",
			article_title: "‘A leader among leaders’: Adrienne Chacón, BC ’26, on her time as president of Barnard’s Student Government Association",
			article_authors: "Mutashma Shaaf"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/03/elena-zhao-seas-26-and-shaivi-rau-cc-26-survived-the-broken-hiring-process-now-y-combinator-is-betting-they-can-rebuild-it/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/4I3OTRVNKNF2HITQ4IM3BR5374.jpg?auth=4371577dec73ec9a4861960544adcc9a3f84e98e9bbbd37b33954b002e97b8e7",
			article_title: "Elena Zhao, SEAS ’26, and Shaivi Rau, CC ’26, survived the broken hiring process. Now, Y Combinator is betting they can rebuild it.",
			article_authors: "Ria Vasishtha"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/07/former-sundial-editor-in-chief-alex-nagin-gs-26-on-open-minded-reporting-and-refusing-to-fit-in-a-box/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/742STZDADFEPLPOYYBGNYUOPNA.jpg?auth=0da4abad19d5fbd5e37cf6d19e25cf866bc4ccc5c4ad867f218d6c2edc7c2656",
			article_title: "Former Sundial editor in chief Alex Nagin, GS ’26, on open-minded reporting and refusing to ‘fit in a box’",
			article_authors: "Dora Gao"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/18/as-a-kid-sarayu-bethamcherla-was-never-afraid-to-talk-to-adults-as-senior-class-president-shes-built-ties-with-administrators-to-amplify-student-voices/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/TKVIZCPC5NGAVG4KSYWGMOFIL4.jpg?auth=401a26b9cf5120ba73a7db4acba8b661bfa1ba21bcd3bb95ba77b345c62efa7c",
			article_title: "As a kid, Sarayu Bethamcherla was never afraid to talk to adults. As senior class president, she’s built ties with administrators to amplify student voices.",
			article_authors: "Wiann Wilson"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/16/sunaya-mueller-bc-26-inherited-a-shuttered-barnard-bulletin-she-rebuilt-it-in-time-for-its-125th-anniversary/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/7MPD6ERPJNCGPDD6L4SJ3BLNQA.jpg?auth=8905953c476d56b6cb5a2ed9e4733947d7849d7a0b37d0cbfb0f18a1953b29f1",
			article_title: "Sunaya Mueller, BC ’26, inherited a shuttered Barnard Bulletin. She rebuilt it in time for its 125th anniversary.",
			article_authors: "Aubrey Rogers"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/14/israeli-president-isaac-herzog-cancels-in-person-attendance-at-jts-commencement/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/HAGMJLRVAJEP5ICW4LSO5UGW34.jpeg?auth=2192320c07eacc2961200f04399752e33717fb27070f8a128332c4959cd20dd4",
			article_title: "Israeli President Isaac Herzog cancels in-person attendance at JTS commencement",
			article_authors: "Pedro Meerbaum"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/18/no-ai-voice-at-graduation-students-and-faculty-protest-columbias-use-of-ai-for-2026-commencement/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/DFQQATL2XVHRDONFPIK5CRFMQM.jpg?auth=79512d026aadc8a0a4aae5174f51324c25d91588790c6b9b86a84485f5c6f40e",
			article_title: "‘No AI voice at graduation’: Students and faculty protest Columbia’s use of AI for 2026 Commencement",
			article_authors: "Aubrey Rogers"
		},
		{
			article_link: "https://www.columbiaspectator.com/news/2026/05/11/student-researchers-identify-living-descendant-of-person-enslaved-by-columbia-founder/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/GWPJWNRHDJCWFG7LYADWZS7DBY.jpeg?auth=86c9426ea1cd60c66417d87847d85c5df7582b4cf1f9d019eb348d50ff289c23",
			article_title: "Student researchers identify living descendant of person enslaved by Columbia founder",
			article_authors: "Mutashma Shaaf"
		}
	],
	ac: [
		{
			article_link: "https://www.columbiaspectator.com/arts-and-culture/2026/04/26/up-close-and-personal-photographer-will-park-cc-26-captures-liveliness-with-a-focus-on-genuine-connection/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/EZPOI454CVDZLP4RBXQJX7GDME.jpeg?auth=a49f0c26512e5578eec9569a6af42069b3e8447398c4338780d867b8ee07212f",
			article_title: "Up close and personal: Photographer Will Park, CC ’26, captures liveliness with a focus on genuine connection",
			article_authors: "Sarah O'Grady"
		},
		{
			article_link: "https://www.columbiaspectator.com/arts-and-culture/2026/05/04/putting-the-heart-in-horror-zelda-adams-cc-26-is-a-multi-hyphenate-creative/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/SVL3PXA6CJG7VNGTD3OGFWW55I.JPEG?auth=91aab95ddcd25ac33853ba4f5ae4514d020a845797ab159def15c8b242c6d338",
			article_title: "Putting the heart in horror: Zelda Adams, CC ’26, is a multi-hyphenate creative’",
			article_authors: "Sarah O'Grady"
		},
		{
			article_link: "https://www.columbiaspectator.com/arts-and-culture/2026/05/10/gsapp-course-invites-celebrities-experts-to-end-of-semester-critique/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/W6TG3ZKIJNBSXPRKCGWTA2E3TQ.png?auth=0ad4a0e97e17d15df0e2e8d7f5adaec7d80bec941d73e00e9976d17742db1299",
			article_title: "GSAPP course invites celebrities, experts to end-of-semester critique",
			article_authors: "Sarah O'Grady"
		},
		{
			article_link: "https://www.columbiaspectator.com/arts-and-culture/2026/04/30/an-extended-lunchbox-note-jodi-kantor-cc-96-on-how-her-commencement-address-inspired-a-new-book/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/533UV4GWIZHJXDZXGQGVN62VM4.png?auth=da895517285805f1fda32462352b1b1467b581935cdb8fc5879dde1ed4835693",
			article_title: "An ‘extended lunchbox note’: Jodi Kantor, CC ’96, on how her Commencement address inspired a new book",
			article_authors: "Sonia Freedman"
		}
	],
	sports: [
		{
			article_link: "https://www.columbiaspectator.com/sports/2026/05/11/run-your-own-race-the-legacy-of-senior-co-captain-susie-rafiu-on-womens-basketball/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/PE3O5DWUJZHOBP4ZE4HHXGL4YE.jpg?auth=9394c1876d52b00fee97c00b180415acd06a518bb1f7662c74da67363a47dc75",
			article_title: "‘Run your own race’: The legacy of senior co-captain Susie Rafiu on women’s basketball",
			article_authors: "Robby Swan"
		},
		{
			article_link: "https://www.columbiaspectator.com/sports/2026/05/04/put-the-work-and-the-time-in-perri-page-cc-26-on-bringing-streetball-grit-to-the-ivy-league/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/BSHGV2VBLND3VKHFHQTNOWW25Y.jpg?auth=60b372fafea9e5ec544696dc88fce9c5526aec2386caacaa806be748fd025670",
			article_title: "‘Put the work and the time in’: Perri Page, CC ’26, on bringing streetball grit to the Ivy League",
			article_authors: "Nicholas Fink"
		},
		{
			article_link: "https://www.columbiaspectator.com/sports/2026/05/18/senior-guard-kenny-noland-hasnt-accomplished-all-his-goals-with-the-lions-but-he-wouldnt-have-it-any-other-way/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/MQVOFW4GZBGHHHHOOVLSGUHPGE.jpg?auth=57b1a43df4c88a374e83780de34ef8939168d7dc7f46f535cf2d8018e43768f2",
			article_title: "Senior guard Kenny Noland hasn’t accomplished all his goals with the Lions, but he wouldn’t have it any other way",
			article_authors: "Andrew Vincenti"
		},
		{
			article_link: "https://www.columbiaspectator.com/sports/2026/05/11/rhodes-on-the-road-to-redemption-senior-foil-fencer-zander-rhodes-sets-her-sights-on-2028-olympics/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/QZS5EBETWBEEZIQ6XCEQJMTNHU.jpeg?auth=7acb78efda876c4d9367dc6835f104867f4f035ffe83cf2943f1014acd7e8258",
			article_title: "Rhodes on the road to redemption: Senior foil fencer Zander Rhodes sets her sights on 2028 Olympics",
			article_authors: "Emily Michaelsen"
		},
		{
			article_link: "https://www.columbiaspectator.com/sports/2026/05/18/senior-wrestler-kai-owen-caps-historic-ivy-league-title-run-with-the-lions/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/JBBTOYKQDFDLFEPJFXDBGJQGKU.jpeg?auth=08329d6e1b6f30a66bcfd1c7aa724101064de2d4243f3ff85a50a6f8b2e6002c",
			article_title: "Senior wrestler Kai Owen caps historic Ivy League title run with the Lions",
			article_authors: "Anivartin Daga"
		}
	],
	spectrum: [
		{
			article_link: "https://www.columbiaspectator.com/spectrum/2026/05/04/how-to-let-go-of-columbia/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/DHL22VXQOJDCJBAGBWDTRBCQDQ.jpeg?auth=470215078cb8cf5961411f5501a442eeb261f1796761677a85711bbb4faf1231",
			article_title: "How to let go of Columbia",
			article_authors: "Loyca Jean"
		},
		{
			article_link: "https://www.columbiaspectator.com/spectrum/2026/05/05/columbia-by-the-numbers/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/5YCNUS57Q5DQXLQ3R4GX5YGQGM.JPG?auth=c33d016403128f8d31a80a504b5f891b00030d95737ed82a2fd40ccab6749010",
			article_title: "Columbia by the numbers",
			article_authors: "Parini Rao and Ava Fung"
		},
		{
			article_link: "https://www.columbiaspectator.com/spectrum/2026/05/04/a-love-letter-to-graduating-seniors/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/HIZGRRPZI5H4RLFXNA3UEXSANE.jpeg?auth=3172999c2fbd6985144a5be3c2ce9a35403cf50678df6dd9dad7498c410b61cb",
			article_title: "A love letter to graduating seniors",
			article_authors: "Jessica Singh and Isabella O'Connor"
		},
		{
			article_link: "https://www.columbiaspectator.com/spectrum/2026/05/03/columbia-seniors-favorite-college-memories/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/PHGNASAVZNCHFHZT353XZSJEVM.JPG?auth=24684197aeb3bb3b420f631cd77cde9f4ef41b7c8e96f356a7f2eb08368d4856",
			article_title: "Columbia seniors’ favorite college memories",
			article_authors: "Laura Celadon and Bobby Goldyn"
		},
		{
			article_link: "https://www.columbiaspectator.com/spectrum/2026/05/09/senior-scramble-inside-the-experience/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/RYZ5XAMHENGFXLTTNO3B4QUW6I.jpeg?auth=83655fcc98bf137939915697d43e76bc509f78e9e3d35ae5d9f0d44ecca94f48",
			article_title: "Senior Scramble: Inside the experience",
			article_authors: "Anuthmi Waas"
		}
	],
	opinion: [
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/14/my-alma-mater/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/ZBLLFG62TVGEHITBCALEPS47DM.jpg?auth=279514ccb82b610eeb3b1824b8b10eb71ecab214aa348d8c4b6edd85a074b113",
			article_title: "My alma mater",
			article_authors: "Shea Vance"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/14/a-fork-in-the-road/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/6ZKNYYNYMRFRNAJSA7G5ILAREQ.jpg?auth=0d7707eb10c46103867ebfcb3240ec06223f628f17e16a0dd2e151434dffd574",
			article_title: "A fork in the road",
			article_authors: "Heather Chen"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/06/i-am-not-a-writer-how-did-i-end-up-here/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/63CKEPXSKZDG7BQSNATQILIAZE.JPG?auth=3b165c38b8ac2eaa63fb150930e9af43176f1bdfb6539ca7048052e841369c36",
			article_title: "I am not a writer... How did I end up here?",
			article_authors: "Katie Zhang"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/07/feel-free-to-pick-the-film/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/ADKZK6OH6NCVXFQTQDAQNKJJGI.jpg?auth=5054718da5bcf5625ceb927c1c171af62129b34958067a082f985771e7fa3296",
			article_title: "Feel free to pick the film",
			article_authors: "Isha Banerjee"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/13/the-art-of-letting-go/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/QBE7I2O2XVDJ3NSTAFGRWWHDDM.JPG?auth=d306ffe80d0aa9dac3dd1b759ee38465df8c2491727b394089371b29320493b8",
			article_title: "The art of letting go",
			article_authors: "Rachel Yuan"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/06/on-sharing-the-burden/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/36H2CCWJB5COVCIK5J2YOPUY5U.jpg?auth=edf4d3cf819fb9cb95b94bc9822207ec4612d57b5c18a1881ff6c2871831deef",
			article_title: "On sharing the burden",
			article_authors: "Jillian Prunty"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/08/journalism-as-praxis/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/2YHNRBKR6BDZJBXERPBEHJWWBU.jpg?auth=da8fe59ba89d6298d5a5b91f2095c239a82c5e55a33956f8ab9ea770c875383d",
			article_title: "Journalism as praxis",
			article_authors: "Achilles Frangos"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/14/on-art-culture-and-everything-in-between/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/QVAT4QAPLBHXBOY3ZC6CNVC7HU.jpeg?auth=4e3c980eb5940bf050316351ffb44a4d1450bbd1ca919ea6efaa82c27196fc42",
			article_title: "On art, culture, and everything in between",
			article_authors: "Joyce Zhang"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/08/what-cant-be-measured/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/HV6ENA6GTNBDPKJRSDOKBTFW7A.jpg?auth=dad118a3115b049584c6529ecdb5b855ccd20a826f4a52be3c777a6b3f391fa9",
			article_title: "What can't be measured",
			article_authors: "Erica Lee"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/09/on-the-spirit-of-opinion/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/NTBPJQUTKBH7BGMZBXTU6K6PHE.JPG?auth=2eca6b6060a59cf67e2d289b5c255f44476a3066633366d74a4d98a270cde1cd",
			article_title: "On the spirit of Opinion",
			article_authors: "Elless Taormino"
		},
		{
			article_link: "https://www.columbiaspectator.com/opinion/2026/05/11/on-being-professionally-online/",
			image_url: "https://www.columbiaspectator.com/resizer/v2/PKTRAH5E65AIXBKLCWOA5VGBVA.JPEG?auth=76397286d0fe6e7ea35bfbf088e1f1e6b03239bc79d9ca15928925836cc46e28",
			article_title: "On being professionally online",
			article_authors: "Nithiya Meng"
		}
	],
	crosswords: [{
		article_link: "https://www.columbiaspectator.com/multimedia/2026/05/11/commencement-2026/",
		image_url: "https://www.columbiaspectator.com/resizer/v2/2MDWS73TIRDJROK4M2MGZ7UKAE.png?auth=60168836f84101dfef1dc0c5285720419182d4e5420adcc1595abfac4f62b1c0",
		article_title: "Commencement 2026",
		article_authors: "Olivia Barbieri, Ananya Govindarajan"
	}],
	audio: [{
		article_link: "https://www.columbiaspectator.com/podcasts/2026/05/06/a-collector-a-cartoonist-and-a-figure-on-the-timeline-the-life-and-legacy-of-adam-elkhadem/",
		image_url: "https://www.columbiaspectator.com/resizer/v2/NQ2OUCPNTVDZPJXGZRSCVE6VFA.jpg?auth=95aa08ef417a60417d5896ddf199571f7b6b6bb81fe77852c5e14bc782463f9c",
		article_title: "A Collector, a Cartoonist, and a Figure on ‘the Timeline’: The Life and Legacy of Adam Elkhadem",
		article_authors: "Melina Nath, Ian Romero"
	}, {
		article_link: "https://www.columbiaspectator.com/podcasts/2026/05/08/a-stroll-through-shifting-shops-how-small-businesses-in-morningside-heights-have-changed/",
		image_url: "https://www.columbiaspectator.com/resizer/v2/E7MCA3GRLBBGJCHV2GEI6QCO7E.jpeg?auth=6cbeb7c04f956a4085a52c9f56ce1e83d3b80a0aa540a55e07301d8990b63d6d",
		article_title: "A Stroll Through Shifting Shops: How Small Businesses in Morningside Heights Have Changed",
		article_authors: "Alexander Miles"
	}]
};
//#endregion
//#region app/routes/articles.tsx
var articles_exports = /* @__PURE__ */ __exportAll({
	default: () => articles_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "Articles" }, {
		name: "description",
		content: "Latest articles"
	}];
}
var articles_default = UNSAFE_withComponentProps(function Articles() {
	const { section } = useParams();
	const list = section && section in articlesBySection ? articlesBySection[section] : [];
	const isCompactSection = section === "crosswords";
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("ul", {
		className: "articles-grid",
		children: list.map((a, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ArticleCard, {
			article: a,
			variant: i % 6,
			num: list.length,
			compact: isCompactSection
		}) }, `${a.article_link}-${i}`))
	}) });
});
//#endregion
//#region app/assets/Bouquet.png
var Bouquet_default = "/assets/Bouquet-HIOXuKPk.png";
//#endregion
//#region app/assets/Commencement-Edition-Letter.png
var Commencement_Edition_Letter_default = "/assets/Commencement-Edition-Letter-16QfpZPz.png";
//#endregion
//#region app/assets/Spec-Logo.png
var Spec_Logo_default = "/assets/Spec-Logo-CF-VnIVK.png";
//#endregion
//#region app/components/LetterFromEditor.tsx
function LetterFromEditor() {
	return /* @__PURE__ */ jsxs("div", {
		className: "letter-page",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "left-side",
			children: [/* @__PURE__ */ jsx("img", {
				src: Bouquet_default,
				alt: "bouquet"
			}), /* @__PURE__ */ jsx("img", {
				src: Commencement_Edition_Letter_default,
				alt: "commencement letter"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "right-side",
			children: /* @__PURE__ */ jsxs("div", {
				className: "letter-box",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "letter-header",
						children: [/* @__PURE__ */ jsx("h2", { children: "Letter From the Editor" }), /* @__PURE__ */ jsx("img", {
							src: Spec_Logo_default,
							alt: "spec logo"
						})]
					}),
					/* @__PURE__ */ jsx("p", { children: "Dear readers," }),
					/* @__PURE__ */ jsx("p", { children: "Three months ago, when the University announced that it would break from tradition and relocate its Universitywide Commencement ceremony from the Morningside campus to Baker Athletics Complex, the senior class used its voice. Organizing meetings with senior administrators, members of the class of 2026 advocated for their peers and, before long, the decision was reversed. While seemingly insignificant among the long list of challenges the class of 2026 has faced—from the mass arrests of their classmates to heightened federal scrutiny on their community—their instinct to speak up in a moment of discontent reflects a skill they have developed over these last four years: adaptation." }),
					/* @__PURE__ */ jsx("p", { children: "The class of 2026 entered a campus dissimilar from the one it is set to leave today. The campus gates were open to all neighbors and visitors, and the University president had been in the seat for over two decades. That stability, however, would soon become unfamiliar. In its second year, as protests over the war in Gaza erupted on campus, a new president would both enter and exit Low Library, beginning a period of constant administrative turnover that would lead the class to see four presidents in its four years. The campus protests ushered in an era of instability and institutional transformation, including the continued closure of the campus gates, but their ability to navigate this tumult only proved the unique perseverance of the class of 2026. As their last year saw the fallout of Columbia’s recent crises, including crackdowns on free expression and controversial administrative decisions, the class of 2026 has never failed to use its voice, even as it has become increasingly difficult to speak up. " }),
					/* @__PURE__ */ jsx("p", { children: "This special edition honors the exemplary passion and impactful work of this class and the Columbia community more broadly. From features on seniors who revived long-standing institutions or founded innovative startups, to articles on the ways in which this class continues to use its voice, protesting against the use of AI in this year’s Commencement ceremony, to words of wisdom from Spectator’s graduating seniors, we hope you are as grateful as we are for the dedication of the class of 2026. " }),
					/* @__PURE__ */ jsx("p", { children: "Our sincere congratulations," }),
					/* @__PURE__ */ jsx("p", { children: "Tsehai Alfred, editor in chief and president" }),
					/* @__PURE__ */ jsx("p", { children: "Manuela Moreyra, managing editor and vice president" })
				]
			})
		})]
	});
}
//#endregion
//#region app/routes/letter-from-editor.tsx
var letter_from_editor_exports = /* @__PURE__ */ __exportAll({
	default: () => letter_from_editor_default,
	meta: () => meta
});
function meta() {
	return [{ title: "Letter From the Editor" }, {
		name: "description",
		content: "A letter from the editor in chief"
	}];
}
var letter_from_editor_default = UNSAFE_withComponentProps(function LetterFromEditorRoute() {
	return /* @__PURE__ */ jsx(LetterFromEditor, {});
});
//#endregion
//#region app/data/credits.ts
var credits = {
	"Corporate Board": [
		{
			name: "Tsehai Alfred",
			role: "Editor in Chief"
		},
		{
			name: "Manuela Moreyra",
			role: "Managing Editor"
		},
		{
			name: "Melinda Yao",
			role: "Publisher"
		}
	],
	"University News": [
		{
			name: "Emily Pickering",
			role: "University News Editor"
		},
		{
			name: "Spencer Davis",
			role: "University News Editor"
		},
		{
			name: "Joseph Zuloaga",
			role: "Deputy News Editor"
		},
		{
			name: "Tulasi Cherukuri",
			role: "Deputy News Editor"
		},
		{
			name: "Nadia Knoblauch",
			role: "Deputy News Editor"
		},
		{
			name: "Matt Luo",
			role: "Deputy News Editor"
		},
		{
			name: "Pedro Meerbaum",
			role: "Deputy News Editor"
		},
		{
			name: "Celine Chien",
			role: "Deputy News Editor"
		},
		{
			name: "Dora Gao",
			role: "Deputy News Editor"
		},
		{
			name: "Ria Vasishtha",
			role: "University News Senior Staff Writer"
		},
		{
			name: "Daksha Pillai",
			role: "University News Senior Contributor"
		},
		{
			name: "Ushoshi Das",
			role: "University News Staff Writer"
		},
		{
			name: "Fiona Hu",
			role: "University News Staff Writer"
		},
		{
			name: "Mutashma Shaaf",
			role: "University News Staff Writer"
		},
		{
			name: "Wiann Wilson",
			role: "University News Staff Writer"
		},
		{
			name: "Aubrey Rogers",
			role: "University News Staff Writer"
		},
		{
			name: "Simon Leton",
			role: "University News Staff Writer"
		},
		{
			name: "Michelle Barsoum",
			role: "University News Staff Writer"
		}
	],
	"Opinion": [
		{
			name: "Camille Duran",
			role: "Editorial Page Editor"
		},
		{
			name: "Haya Ghazale",
			role: "Deputy Editorial Page Editor"
		},
		{
			name: "Alisa Gulyansky",
			role: "Deputy Editorial Page Editor"
		},
		{
			name: "David Solano",
			role: "Deputy Editorial Page Editor"
		},
		{
			name: "Joaquin Recinos",
			role: "Deputy Editorial Page Editor"
		},
		{
			name: "Sydney Alleyne",
			role: "Deputy Editorial Page Editor"
		},
		{
			name: "Willow Szpilczak",
			role: "Deputy Editorial Page Editor"
		},
		{
			name: "Ahalya Nambiar",
			role: "Senior Associate Editorial Page Editor"
		},
		{
			name: "Iris Wu",
			role: "Senior Associate Editorial Page Editor"
		},
		{
			name: "Altea Hobart Peyser",
			role: "Senior Associate Editorial Page Editor"
		},
		{
			name: "Jules Heidelberg",
			role: "Senior Associate Editorial Page Editor"
		},
		{
			name: "Olivia Siegel",
			role: "Associate Editorial Page Editor"
		},
		{
			name: "William Tang",
			role: "Associate Editorial Page Editor"
		},
		{
			name: "Kate Mao",
			role: "Associate Editorial Page Editor"
		},
		{
			name: "Jeeah Kim",
			role: "Associate Editorial Page Editor"
		},
		{
			name: "Hope Smith",
			role: "Associate Editorial Page Editor"
		}
	],
	"Sports": [
		{
			name: "Kaya Quebada",
			role: "Sports Editor"
		},
		{
			name: "Robby Swan",
			role: "Sports Staff Writer"
		},
		{
			name: "Nicholas Fink",
			role: "Deputy Sports Editor"
		},
		{
			name: "Andrew Vincenti",
			role: "Deputy Sports Editor"
		},
		{
			name: "Emily Michaelsen",
			role: "Senior Staff Writer"
		},
		{
			name: "Anivartin Daga",
			role: "Staff Writer"
		}
	],
	"Arts & Culture": [
		{
			name: "Taylor Graham",
			role: "Arts & Culture Editor"
		},
		{
			name: "Ian Romero",
			role: "Deputy Arts & Culture Editor"
		},
		{
			name: "Gabi Fabozzi",
			role: "Deputy Arts & Culture Editor"
		},
		{
			name: "Lily O'Brien",
			role: "Deputy Arts & Culture Editor"
		},
		{
			name: "Adele Zhao",
			role: "Deputy Arts & Culture Editor"
		},
		{
			name: "Sarah O'Grady",
			role: "Arts & Culture Staff Writer"
		},
		{
			name: "Sonia Freedman",
			role: "Arts & Culture Staff Writer"
		}
	],
	"Spectrum": [
		{
			name: "Jessica Singh",
			role: "Spectrum Editor"
		},
		{
			name: "Isabella O'Connor",
			role: "Deputy Editor"
		},
		{
			name: "Parini Rao",
			role: "Deputy Editor"
		},
		{
			name: "Anuthmi Waas",
			role: "Senior Staff Writer"
		},
		{
			name: "Loyca Jean",
			role: "Senior Staff Writer"
		},
		{
			name: "Laura Celadon",
			role: "Staff Writer"
		},
		{
			name: "Bobby Goldyn",
			role: "Staff Writer"
		}
	],
	"Audio": [
		{
			name: "Eesha Ramanathan",
			role: "Audio Editor"
		},
		{
			name: "Namya Manghnani",
			role: "Deputy Audio Editor"
		},
		{
			name: "Melina Nath",
			role: "Deputy Audio Editor"
		},
		{
			name: "Alexander Miles",
			role: "Audio Staff Reporter"
		}
	],
	"Data Visualization": [{
		name: "Ava Fung",
		role: "Data Visualization Deputy Editor"
	}],
	"Crosswords": [
		{
			name: "Anna Steel",
			role: "Head of Crosswords"
		},
		{
			name: "Ananya Govindarajan",
			role: "Crosswords Senior Associate "
		},
		{
			name: "Olivia Barbieri",
			role: "Crosswords Senior Associate "
		}
	],
	"Illustrations": [
		{
			name: "Saumya Chaudhry",
			role: "Illustrations Editor"
		},
		{
			name: "Conner Sund",
			role: "Senior Staff Illustrator"
		},
		{
			name: "Anaïs Fotsing",
			role: "Deputy Illustrations Editor"
		},
		{
			name: "Thomas Diaz",
			role: "Deputy Illustrations Editor"
		},
		{
			name: "Zoe Villalobos",
			role: "Deputy Illustrations Editor"
		},
		{
			name: "Sally Wang",
			role: "Staff Illustrator"
		},
		{
			name: "Sally Li Weitzner",
			role: "Staff Illustrator"
		}
	],
	"Copy": [
		{
			name: "Emily Spencer",
			role: "Head Copy Editor"
		},
		{
			name: "Eli Trokenheim",
			role: "Deputy Copy Editor"
		},
		{
			name: "Diego Carvajal Núñez",
			role: "Deputy Copy Editor"
		},
		{
			name: "Vaishu Sirkay",
			role: "Deputy Copy Editor"
		},
		{
			name: "Elizabeth Kushelevsky",
			role: "Deputy Copy Editor"
		},
		{
			name: "Gigi Chen",
			role: "Deputy Copy Editor"
		},
		{
			name: "Eric Aguilar",
			role: "Associate Copy Editor"
		},
		{
			name: "Dalina Cao",
			role: "Associate Copy Editor"
		},
		{
			name: "Yoona Lee",
			role: "Associate Copy Editor"
		},
		{
			name: "Ames Yu",
			role: "Associate Copy Editor"
		},
		{
			name: "Sebastian Cunto-Araujo",
			role: "Associate Copy Editor"
		},
		{
			name: "Jordan Straub",
			role: "Associate Copy Editor"
		},
		{
			name: "Finn Brown",
			role: "Associate Copy Editor"
		},
		{
			name: "Grace Mazer",
			role: "Associate Copy Editor"
		},
		{
			name: "Kathleen Yang",
			role: "Associate Copy Editor"
		},
		{
			name: "Skerry Lu",
			role: "Associate Copy Editor"
		},
		{
			name: "Maxwell Gaynor",
			role: "Associate Copy Editor"
		},
		{
			name: "Sreya Gupta",
			role: "Associate Copy Editor"
		},
		{
			name: "June Liu",
			role: "Associate Copy Editor"
		},
		{
			name: "Serena Miles",
			role: "Associate Copy Editor"
		},
		{
			name: "Claire Murray",
			role: "Associate Copy Editor"
		},
		{
			name: "Kelly Sung",
			role: "Associate Copy Editor"
		},
		{
			name: "Lynn Tang",
			role: "Associate Copy Editor"
		},
		{
			name: "Talia Angles",
			role: "Associate Copy Editor"
		},
		{
			name: "Meryem Anderoglu",
			role: "Associate Copy Editor"
		},
		{
			name: "Lucas Ding",
			role: "Associate Copy Editor"
		},
		{
			name: "Justin Kim",
			role: "Associate Copy Editor"
		},
		{
			name: "Sarah Page-McCaw",
			role: "Associate Copy Editor"
		},
		{
			name: "Grace Yoo",
			role: "Associate Copy Editor"
		}
	],
	"Product": [
		{
			name: "Eugene Kim",
			role: "Head of Product"
		},
		{
			name: "Vivian Ke",
			role: "Product Design Associate"
		},
		{
			name: "Kayla Cheng",
			role: "Product Trainee"
		},
		{
			name: "Anagha Chakravarti",
			role: "Product Trainee"
		},
		{
			name: "Ankita Saha",
			role: "Product Trainee"
		},
		{
			name: "Patrick Shen",
			role: "Product Trainee"
		}
	],
	"Engineering": [
		{
			name: "Shriya Mani",
			role: "Co-Head of Engineering"
		},
		{
			name: "Julien Remy",
			role: "Co-Head of Engineering"
		},
		{
			name: "Sonali Sinha",
			role: "Engineering Trainee"
		},
		{
			name: "Lorraine Miller",
			role: "Engineering Trainee"
		},
		{
			name: "Sindhu Chalasani",
			role: "Engineering Trainee"
		},
		{
			name: "Naythan Chan",
			role: "Engineering Trainee"
		},
		{
			name: "Mussa Zeb",
			role: "Engineering Trainee"
		},
		{
			name: "Pooja Prabakaran",
			role: "Engineering Trainee"
		}
	]
};
//#endregion
//#region app/routes/credits.tsx
var credits_exports = /* @__PURE__ */ __exportAll({ default: () => credits_default });
var credits_default = UNSAFE_withComponentProps(function Credits() {
	return /* @__PURE__ */ jsxs("main", {
		className: "credits-page",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "credits-title",
			children: "THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE"
		}), /* @__PURE__ */ jsx("div", {
			className: "credits-grid",
			children: Object.entries(credits).map(([section, members]) => /* @__PURE__ */ jsxs("div", {
				className: "credits-section",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "credits-section-title",
					children: section
				}), members.map((member, i) => /* @__PURE__ */ jsxs("p", {
					className: "credits-member",
					children: [
						member.name,
						", ",
						member.role
					]
				}, i))]
			}, section))
		})]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-BLMNQntV.js",
		"imports": ["/assets/jsx-runtime-CNEA3PHn.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-BXxay-9G.js",
			"imports": ["/assets/jsx-runtime-CNEA3PHn.js"],
			"css": ["/assets/root-DhVlmHYB.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-BYSR8iel.js",
			"imports": ["/assets/jsx-runtime-CNEA3PHn.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/articles": {
			"id": "routes/articles",
			"parentId": "root",
			"path": "articles/:section",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/articles-iKskwXgG.js",
			"imports": ["/assets/jsx-runtime-CNEA3PHn.js"],
			"css": ["/assets/articles-C3Ogkf4S.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/letter-from-editor": {
			"id": "routes/letter-from-editor",
			"parentId": "root",
			"path": "letter-from-editor",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/letter-from-editor-DQnuVSIV.js",
			"imports": ["/assets/jsx-runtime-CNEA3PHn.js"],
			"css": ["/assets/letter-from-editor-CPH2nY3E.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/credits": {
			"id": "routes/credits",
			"parentId": "root",
			"path": "credits",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/credits-hUvKI5Nt.js",
			"imports": ["/assets/jsx-runtime-CNEA3PHn.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-1e371338.js",
	"version": "1e371338",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"unstable_passThroughRequests": false,
	"unstable_subResourceIntegrity": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/articles": {
		id: "routes/articles",
		parentId: "root",
		path: "articles/:section",
		index: void 0,
		caseSensitive: void 0,
		module: articles_exports
	},
	"routes/letter-from-editor": {
		id: "routes/letter-from-editor",
		parentId: "root",
		path: "letter-from-editor",
		index: void 0,
		caseSensitive: void 0,
		module: letter_from_editor_exports
	},
	"routes/credits": {
		id: "routes/credits",
		parentId: "root",
		path: "credits",
		index: void 0,
		caseSensitive: void 0,
		module: credits_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
