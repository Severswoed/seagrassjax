# Sea Grass site — project notes

- **Requirements:** lightweight Jekyll/GitHub Pages site; YAML-managed business/services; six distinct crawlable pages; estimate request form; no invented contact details or business claims; custom-domain preparation only.
- **Design reference:** `assets/images/theme.png` supplies the palette, and `assets/images/seagrassjax-logo-no background.png` is the current transparent full manatee/grass wordmark used in the site.
- **Progress:** repository initially contained only `.vscode/settings.json` (untracked and preserved), with no README, site source, workflows, or commits. Implementing the site and documenting remaining launch setup.
- **Form:** Web3Forms endpoint and user-provided public access key are configured in `_data/business.yml`. The free hCaptcha widget and provider script are enabled on the estimate page; no reCAPTCHA. Need test submission after verifying the Web3Forms notification destination email.
- **Publishing:** do not change GitHub settings, DNS, push, or deploy as part of this task.