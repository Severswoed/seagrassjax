---
title: Lawn Care & Landscape Services in Jacksonville, FL
description: Explore mowing, edging, yard cleanup, mulch installation, pressure washing, and gutter cleaning from Sea Grass Lawn & Landscape in Jacksonville.
---

<section class="page-hero"><div class="shell"><span class="eyebrow">What we can help with</span><h1>Lawn care and yard cleanup.</h1><p>Choose the services that fit your home, business, or rental property. Estimates are based on your address and the work requested.</p></div></section>
<section class="section"><div class="shell"><div class="service-groups">{% for group in site.data.services %}<section class="service-group"><h2>{{ group.name }}</h2><ul>{% for item in group.items %}<li>{{ item }}</li>{% endfor %}</ul></section>{% endfor %}</div><div class="cta-panel services-cta"><div><h2>Not sure what to ask for?</h2><p>Describe the yard and what you’d like done. We’ll start with that.</p></div><a class="button" href="{{ '/estimate/' | relative_url }}">Get a free estimate <span aria-hidden="true">→</span></a></div></div></section>