import { AtomIcon, AtomText } from "lucy-nxtjs";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <AtomText
      color="white"
      fontWeight="bold"
      fontSize="20px"
      cursor="pointer"
      customCSS={(css) => css`
        display: flex;
        gap: 10px;
      `}
    >
      <AtomIcon
        color="white"
        src="https://res.cloudinary.com/whil/image/upload/v1680467236/app/lucy/images/NEWfivocon_e9wa0z.svg"
      />{" "}
      Lucy Nxtjs{" "}
    </AtomText>
  ),

  project: {
    link: "https://github.com/Whil117/lucy-nxtjs",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",s
  footer: {
    text: "Lucy Nxtjs Docs. By Whil",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Lucy Nxtjs",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://my-app.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/whil/image/upload/v1680466980/app/lucy/images/FAVICON2_espsrs.png"
        />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Lucy Nxtjs"} />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/whil/image/upload/v1680320485/app/lucy/images/with_texting_oyc8gx.png"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/whil/image/upload/v1680320485/app/lucy/images/with_texting_oyc8gx.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/whil/image/upload/v1680320485/app/lucy/images/with_texting_oyc8gx.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          itemProp="image"
          content="https://res.cloudinary.com/whil/image/upload/v1680320485/app/lucy/images/with_texting_oyc8gx.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/whil/image/upload/v1680320485/app/lucy/images/with_texting_oyc8gx.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        />
      </>
    );
  },
};

export default config;
