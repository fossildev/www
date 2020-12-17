---
layout: page
title: Kontributors
permalink: /contributors/
---
<ul>
{%- assign authors = site.data.authors -%}
{%- for author in authors -%}
  <li>
    {{ author[1].name }}&nbsp;
    [<a href="https://github.com/{{ author[1].github }}" target="_blank" rel="noopener noreferrer">github</a>]
    {%- if author[1].twitter -%}
      [<a href="https://twitter.com/{{ author[1].twitter }}" target="_blank" rel="noopener noreferrer">twitter</a>]
    {%- endif -%}
    {%- if author[1].url -%}
        [<a href="{{ author[1].url }}" target="_blank" rel="noopener noreferrer">site</a>]
    {%- endif -%}
  </li>
{%- else -%}
  <p>Tidak ada authors.</p>
{%- endfor -%}
</ul>

Kamu ingin bergabung atau berkontribusi? silahkan mengirim [menghubungi][email]
kami.

[email]: mailto:contact@esemkasa.dev