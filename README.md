<p align="center">
	<img src="assets/images/seagrassjax-logo.png" alt="Sea Grass Lawn & Landscape" width="420">
</p>

<p align="center">
	<a href="https://github.com/Severswoed/seagrassjax/actions/workflows/pages.yml"><img src="https://github.com/Severswoed/seagrassjax/actions/workflows/pages.yml/badge.svg" alt="GitHub Pages workflow status"></a>
	<img src="https://img.shields.io/badge/Jekyll-4.3-red?logo=jekyll" alt="Jekyll 4.3">
	<img src="https://img.shields.io/badge/Ruby-3.3-red?logo=ruby" alt="Ruby 3.3">
	<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License for website source"></a>
</p>

# Sea Grass Lawn & Landscape

A small, static Jekyll website for Ethan’s lawn-care business. Pages are rendered as ordinary HTML for GitHub Pages; business details and services live in YAML files so they can be edited without changing templates.

## Preview locally

Install Ruby 3.3 or newer and Bundler if they are not already installed, then from this folder:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open the local URL printed by Jekyll (usually `http://127.0.0.1:4000`). To build the production version locally:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

The generated website is in `_site/`. Jekyll sitemap generation is handled by the single `jekyll-sitemap` plugin. The custom domain uses an empty `baseurl`, so local and production asset/page links share the same root paths.

## Content updates

- Edit the business name, owner, service areas, and form endpoint in [_data/business.yml](_data/business.yml).
- Edit the service list in [_data/services.yml](_data/services.yml).
- Edit page copy in the matching page file (home, `residential/`, `commercial/`, `property-managers/`, `services/`, or `estimate/`).
- The header/footer are in `_includes/`; responsive styles in `assets/css/site.css` use the exact brand hex colors shown in `assets/images/theme.png`.
- The supplied full Sea Grass manatee/grass logo is `assets/images/seagrassjax-logo.png` and is used as the header/footer brand mark and PNG favicon.

No phone number, public address, email address, price, review, credential, guarantee, or response time is assumed in the site.

## Repository security and license

Security reporting instructions are in [SECURITY.md](SECURITY.md). The [MIT License](LICENSE) applies to the website source code only; the Sea Grass name, logo, and brand artwork are excluded. Review the license choice before making the repository public.

## Estimate form: Web3Forms

GitHub Pages serves static files; it does **not** receive or process form submissions. The enabled estimate form sends directly from the visitor’s browser to Web3Forms, not to GitHub Pages. No reCAPTCHA is included.

The endpoint and Web3Forms public access key are in [_data/business.yml](_data/business.yml). Web3Forms documents that the access key is intended for client-side use, so it is included in the generated page; it is not an account/API secret. The page uses the Web3Forms submission endpoint, checks its JSON `success` result, validates that at least one contact method and one service are selected, prevents duplicate clicks while sending, and displays accepted/error messages. It uses Web3Forms’ free hCaptcha integration and the `botcheck` field; it does not use reCAPTCHA or require a separate hCaptcha account/key.

The provider’s [pricing page](https://web3forms.com/pricing) lists 250 submissions/month on its free plan. In the Web3Forms account, confirm the notification destination is an email Ethan controls, that the email has been verified, and that **hCaptcha** is enabled as the form’s spam-protection option. The provider’s documentation says an access key is issued to the submitted email address and that the key is safe to include in client-side code. The service’s spam protection and monthly allowance remain subject to the provider’s terms and current limits.

Before publishing, submit one test request from the local preview, confirm Web3Forms reports success, and confirm the message reaches Ethan’s chosen inbox (including checking spam). Success on the website means Web3Forms accepted the request; confirm email delivery separately. Do not add the public access key to GitHub Actions secrets; a build secret is unnecessary.

References: [Web3Forms pricing](https://web3forms.com/pricing), [hCaptcha integration](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha.md), [installation](https://docs.web3forms.com/getting-started/installation.md), and [troubleshooting](https://docs.web3forms.com/getting-started/troubleshooting.md).

## GitHub Pages build and deployment

The single workflow at `.github/workflows/pages.yml` builds the site on pushes, pull requests, and manual runs. It uploads the `_site/` artifact in every case; only a push or manual run from the repository’s actual default branch proceeds to deployment. Pull requests never deploy. The deploy job uses the `github-pages` environment, `pages: write` and `id-token: write` permissions, and a deployment concurrency group. GitHub’s supported `configure-pages`, `upload-pages-artifact`, and `deploy-pages` actions are used.

Before the first deployment, push/merge the workflow to GitHub, then in the repository open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. Do not select a branch-based Jekyll build as a second publishing method. A pull request run validates the build only; merge to the default branch to deploy. Manual runs are available from **Actions → Build and deploy Sea Grass site → Run workflow**; deployment remains limited to the default branch.

No GitHub Actions run or deployment has been started from this workspace.

## Connect seagrassjax.com at GoDaddy

`CNAME` already contains `seagrassjax.com`; this repository change does not touch DNS or GitHub settings. Once ready:

1. In GitHub repository **Settings → Pages**, choose **GitHub Actions** as the source and set the custom domain to `seagrassjax.com`.
2. In GoDaddy DNS, point the apex (`@`) to GitHub Pages with four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. If managing IPv6, add AAAA records `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`.
3. Add a `www` CNAME to `severswoed.github.io` (the account/repository owner’s Pages hostname), not to a URL path. Remove conflicting `@` or `www` records first; preserve unrelated mail records.
4. Wait for DNS to propagate, return to GitHub Pages settings, and enable **Enforce HTTPS** once GitHub makes it available. Keep the repository `CNAME` file and avoid wildcard DNS records. Consider verifying the domain in GitHub account settings with the TXT record GitHub provides to reduce takeover risk.

Check the repository owner’s actual Pages hostname before adding the `www` record if the GitHub owner differs from `Severswoed`. DNS propagation and certificate issuance can take time; do not remove DNS security settings or use a wildcard to speed this up.

Official reference: [GitHub Pages custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), and [custom-domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## Launch checklist

- Enable hCaptcha in the Web3Forms dashboard, confirm the notification email is verified, then test a submission locally and confirm the email arrives.
- Confirm the final GitHub repository owner/default branch and enable GitHub Actions publishing in Pages settings.
- Add the GoDaddy DNS records and wait for GitHub HTTPS provisioning.
- The supplied logo and palette are included. No business/portfolio photos were provided, so no portfolio photography is fabricated.
- Confirm the service list, locations, spelling, and business details with Ethan before launch.