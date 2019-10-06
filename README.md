# NexT For Hugo

A Hugo theme port from [NexT](https://github.com/iissnan/hexo-theme-next).

## Discription

NexT is a simple and animated theme. I port it from Hexo to [Hugo](https://gohugo.io/) and used in my blog site.

[Preview online](http://www.lanlingzi.cn)

## Usage

1. download theme file: `git clone https://github.com/xtfly/hugo-theme-next.git next`

2. copy `next` directory to `themes` directory in your hugo site

3. move `config.toml` to the root directory in your hugo site, and modify it to the actual information for your site.

4. create some markdown files in directory(content/post), like https://github.com/xtfly/xtfly.github.io/tree/hugo/content

5. start hugo server in root directory: `hugo server`

6. open brower: http://localhost:1313/

## Notes

- **Some of the Hexo's styles are not work now** because of the difference between the Hugo template engine and the Hexo. I will update it constantly

- This theme has been tested only in my blog site. Maybe it's not suitable for your requirements, you can customizate it by your preferences.

- Test in Hugo verion: 0.58

- If you have any questions, please give feedback

## Markdown notes

1. every markdown start with like this:

    ```
    ---
    title: "xxxxxxx"
    date: "2018-06-02"
    categories:
    - "技术"
    tags:
    - "Rust"
    - "Programing"
    toc: true
    ---
    ```

1. add `<!--more-->` tag in your markdown for [manual summary splitting](https://gohugo.io/content-management/summaries/#user-defined-manual-summary-splitting) .


## Todo

- [x] Sidebar menu
- [x] Sidebar links
- [x] Auto toc display
- [x] Support i18n
- [x] Local Search
- [x] Syntax Highlighter (thanks to [xulz](https://github.com/xtfly/hugo-theme-next/pull/6))
- [x] Support Latex 

## License
The [MIT License](LICENSE).
