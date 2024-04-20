# Tailwindcss

## Q & A

Q: 遇到报错`Unknown at rule @tailwind`

```css
@tailwind  base;
@tailwind  components;
@tailwind  utilities;
```
A: 新建`.vscode`文件夹, 添加

```json
{
    ...
    "files.associations": {
        "*.css": "tailwindcss"
    }
}
```