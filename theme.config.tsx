import { AtomText } from "lucy-nxtjs";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <AtomText color="white" fontWeight="bold" fontSize="20px">
      Lucy
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
    text: "Lucy Docs. By Whil",
  },
};

export default config;
