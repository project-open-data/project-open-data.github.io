---
layout: default
title: Unknown License
permalink: /unknown-license/
filename: unknown-license.md
---

This page is meant to serve as a landing page and placeholder for licenses that were specified by name using the [Project Open Data schema v1](/schema/#license) and were automatically converted to a URL for [Project Open Data schema v1.1](/v1.1/schema/#license). Further guidance on specifying licenses (or non-licenses) will be continually updated on the [license examples](/open-licenses/) page.

<h3 id="legacy-license"></h3>
<h3 id="legacy-license-url"></h3>

<script type='text/javascript'>
    var after_hash = window.location.hash.substr(1);

    if (after_hash.indexOf("v1-legacy/") > -1) {
        legacy_license = after_hash.substring(10);         
        document.getElementById("legacy-license").innerHTML='<span style="color:#666">License name: </span>' + legacy_license;
        document.getElementById("legacy-license-url").innerHTML='<span style="color:#666">License URL: </span>' + window.location;
    }
</script>
