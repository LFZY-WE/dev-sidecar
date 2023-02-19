export default function createMenus(app) {
  const menus = [
    {title: "首页", path: "/index", icon: "home"},
    {title: "加速服务", path: "/server", icon: "thunderbolt"},
    {title: "系统代理", path: "/proxy", icon: "deployment-unit"},
    {title: "NPM加速", path: "/plugin/node", icon: "like"},
    {title: "Git.exe代理", path: "/plugin/git", icon: "github"},
    {title: "pip加速", path: "/plugin/pip", icon: "bulb"},
    {title: "功能增强", path: "/plugin/overwall", icon: "global"},
    {title: "设置", path: "/setting", icon: "setting"},
  ];
  return menus;
}
