---
title: What we collect
---

# What we collect

We collect information that is absolutely necessary to show you analytics. Here is a list of what we do and don’t collect from your users.

If some information is accessed/read anywhere in the application, it is referred as **collect** and if it ends up in database or logs, it is referred as **stored**.

## IP addresses

> We **do not collect and store** IP addresses.

We drop the IP address from every single request. Period. We don’t save or collect them. We don’t hash them with cryptography.

## Unique views

> We **do collect and store** whether visits are unique

We detect a unique visit based on the hostname of the referrer of the page.

## Timestamps

> We **do collect and store** timestamps

We use timestamps to generate the graphs you see on your dashboard, which allows you to analyze changes in your website’s performance over various lengths of time.

## Countries

> We **do collect and store** countries

## User agents

> We **do collect** and **do not store** user agents

We use User Agents for counting operating systems, device types, and browsers in your dashboard.

## URLs

> We **partially collect and partially** store URLs

Too much information in the URL can be confusing and can make your stats messy. We only collect and store the first part of the URL. If an URL looks like this `https://example.com/index.html?search=keyword#top` we will only store `https://example.com/index.html`, also known as the protocol (`https`), hostname (`example.com`), and pathname (`/index.html`).

## Referrers

> We **do** collect and **partially** store referrers

Referrers answer the question _“Where did this visitor come from?”_. We have two ways of checking the source of a user visiting your website.

In most cases, browsers send the URL of the previous website as a referrer. We store the referrer the same as URLs (see above). You can find a list of the most popular referrers in your analytics dashboard.

Secondly we check the source of the customer with the UTM-parameters.

## UTM-parameters

> We **do collect and store** UTM-parameters

We collect and store all query parameters starting with `utm_` prefix. Some common UTM parameters are:

- `utm_source` (e.g.: `duckduckgo.com`)
- `utm_medium` (e.g.: `search`)
- `utm_campaign` (e.g.: `get_customers_02`)
- `utm_content` (e.g.: `sidebar`)
- `utm_term` (e.g.: `privacy friendly analytics`)

Website owners can add a URL parameter to links to their website, like `ref=...`, `source=...` or `utm_source=....` These are all saved as the `utm_source`.

<!-- TODO: Add detailed documentation for UTM-parameters. -->

## Device dimensions

> We **do collect and store** device dimensions

Collecting the dimensions of a user’s browser window (`innerWidth` and `innerHeigth` as viewport) and device dimensions (`screen.width` and `screen.height`) allows us to show you the most popular screen sizes. This is useful for making sure your website works great on all screens: phones, tablets, desktops, etc.

## Engagement

> We **do collect and store** time spent and percentage page view

We use time spent and percentage page viewed to detect engagement.
