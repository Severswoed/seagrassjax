---
title: Request a Free Lawn Care Estimate
description: Tell Sea Grass Lawn & Landscape about your property and the work you need in Jacksonville. Request a free estimate for residential, commercial, or rental properties.
---

<section class="page-hero"><div class="shell"><span class="eyebrow">A few details to get started</span><h1>Request a free estimate.</h1><p>Tell us about the property and the services you’re considering. Your estimate will be based on what the property needs.</p></div></section>
<section class="section"><div class="shell form-wrap"><div>
  <form class="estimate-form" data-estimate-form data-endpoint="{{ site.data.business.form_endpoint | escape }}" method="post" action="{{ site.data.business.form_endpoint | escape }}">
    <input type="hidden" name="access_key" value="{{ site.data.business.form_access_key | escape }}">
    <p class="form-status" id="form-status" role="status" aria-live="polite" data-state="info">Your request will be sent securely through Web3Forms to the notification email configured for this form.</p>
    <div class="field-row"><div class="field"><label for="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="property-type">Customer / property type <span aria-hidden="true">*</span></label><select id="property-type" name="property_type" required><option value="" selected disabled>Select one</option><option>Residential</option><option>Commercial</option><option>Property manager / rental owner</option></select></div></div>
    <div class="field"><label for="address">Property address <span aria-hidden="true">*</span></label><input id="address" name="property_address" autocomplete="street-address" required maxlength="240"></div>
    <div class="field-row"><div class="field"><label for="email">Email <small>(optional)</small></label><input id="email" name="email" type="email" autocomplete="email" maxlength="254"></div><div class="field"><label for="phone">Phone <small>(optional)</small></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div></div>
    <p class="field-help">Please provide at least one contact method: email or phone.</p>
    <fieldset class="fieldset"><legend class="fieldset-legend">Services desired <span aria-hidden="true">*</span> <small>(choose one or more)</small></legend><div class="check-grid">
      <label class="check-option"><input type="checkbox" name="services[]" value="Mowing, edging, string trimming, and blowing">Mowing, edging, string trimming, and blowing</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Bush trimming and flower bed cleanup">Bush trimming and flower bed cleanup</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Mulch installation">Mulch installation</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Leaf and seasonal cleanup">Leaf and seasonal cleanup</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Yard cleanup between tenants">Yard cleanup between tenants</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Storm debris removal">Storm debris removal</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Pressure washing">Pressure washing</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Gutter and downspout cleaning">Gutter and downspout cleaning</label>
      <label class="check-option"><input type="checkbox" name="services[]" value="Other listed yard service">Another listed service</label>
    </div></fieldset>
    <div class="field"><label for="notes">Notes <small>(optional)</small></label><textarea id="notes" name="notes" maxlength="3000" placeholder="Anything else that would help us understand the work?"></textarea></div>
    <div class="field"><label for="other-addresses">Additional property addresses <small>(optional)</small></label><textarea id="other-addresses" name="additional_property_addresses" maxlength="3000" placeholder="For multiple properties, list the other addresses here."></textarea></div>
    <div class="captcha-field"><span class="fieldset-legend">Spam protection <span aria-hidden="true">*</span></span><div class="h-captcha" data-captcha="true"></div><p class="field-help">Complete the verification before sending your request.</p></div>
    <div class="honeypot" aria-hidden="true"><label for="botcheck">Leave this field unchecked</label><input id="botcheck" name="botcheck" type="checkbox" tabindex="-1"></div>
    <div><button class="button" type="submit">Send estimate request <span aria-hidden="true">→</span></button></div>
  </form>
</div><aside class="form-note"><strong>Before you send</strong><p>Providing an email address or phone number is enough; you do not need to provide both. No account or payment information is needed.</p><p>Have several properties? Add their addresses above and mention the work needed at each one.</p><p>Current service areas: {% for area in site.data.business.service_areas %}{{ area }}{% unless forloop.last %}, {% endunless %}{% endfor %}.</p></aside></div></section>