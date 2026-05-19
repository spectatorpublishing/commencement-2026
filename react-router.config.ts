import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  basename: process.env.PUBLIC_URL || "/",
} satisfies Config;