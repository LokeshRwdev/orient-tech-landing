import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orient Tech | Automotive Spare Parts & Solutions",
    short_name: "Orient Tech",
    description:
      "Premier supplier of automotive spare parts, commercial fleet components, and supply chain logistics entering North America.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#f24e1e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

