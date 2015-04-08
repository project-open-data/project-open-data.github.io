---
layout: default
title: Open Licenses
permalink: /open-licenses/
redirect_from: /license-examples/
filename: licenses.md
---

The [Federal Open Data Policy](https://project-open-data.cio.gov/policy-memo/#c-ensure-information-stewardship-through-the-use-of-open-licenses) states: *"Agencies must apply open licenses, in consultation with the best practices found in Project Open Data, to information as it is collected or created so that if data are made public there are no restrictions on copying, publishing, distributing, transmitting, adapting, or otherwise using the information for non-commercial or for commercial purposes."*

As described below, works created by U.S. Government employees within the scope of their employment default to U.S. Public Domain. However, works produced by outside parties which are created or obtained for use by the U.S. Government may need open licenses applied to them: *"When information is acquired or accessed by an agency through performance of a contract, appropriate existing clauses <sup>[22](https://acquisition.gov/far/current/html/Subpart%2027_4.html)</sup> shall be utilized to meet these objectives"*

The [Project Open Data Metadata Schema](https://project-open-data.cio.gov/v1.1/schema/) provides a `license` field which is defined as *"the license or non-license (i.e. Public Domain) status with which the dataset or API has been published"* and [must be provided as a URL](https://project-open-data.cio.gov/v1.1/schema/#license). Guidance and example URLs can be found below for properly documenting the license or non-license of your agency's data in accordance with the open data policy.

## Definitions

For the purposes of Project Open Data, the term "Open License" is used to refer to any legally binding instrument that grants permission to access, re-use, and redistribute a work with few or no restrictions. While technically not a "license," wordwide public domain dedications such as [Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/) also satisfy this definition. An "Open License" must meet the following conditions:

* *Reuse*. The license must allow for reproductions, modifications and derivative works and permit their distribution under the terms of the original work. The rights attached to the work must not depend on the work being part of a particular package. If the work is extracted from that package and used or distributed within the terms of the work’s license, all parties to whom the work is redistributed should have the same rights as those that are granted in conjunction with the original package.

* *Redistribution*. The license shall not restrict any party from selling or giving away the work either on its own or as part of a package made from works from many different sources. The license shall not require a royalty or other fee for such sale or distribution. The license may require as a condition for the work being distributed in modified form that the resulting work carry a different name or version number from the original work. The rights attached to the work must apply to all to whom it is redistributed without the need for execution of an additional license by those parties.  The license must not place restrictions on other works that are distributed along with the licensed work. For example, the license must not insist that all other works distributed on the same medium are open. If adaptations of the work are made publicly available, these must be under the same license terms as the original work.

* *No Discrimination against Persons, Groups, or Fields of Endeavor*. The license must not discriminate against any person or group of persons. The license must not restrict anyone from making use of the work in a specific field of endeavor. For example, it may not restrict the work from being used in a business, or from being used for research.

## U.S. Government Works

Data and content created by government employees within the scope of their employment are not subject to domestic copyright protection under [17 U.S.C. § 105](http://www.copyright.gov/title17/92chap1.html#105). Government works are by default in the U.S. Public Domain. If no other open license applies, the following URL should be used for the `license` field:

    http://www.usa.gov/publicdomain/label/1.0/

The default U.S. Public Domain status of U.S. Government Works is limited to the jurisdiction of the United States. If an agency is able to expand the public domain status to apply internationally for works that they have produced, they can use a worldwide public domain dedication such as [Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/). This is an important tool to assure users of U.S. Government Works that they have full permission to freely use the work internationally. When Creative Commons Zero has been applied, the following URL should be used for the `license` field:

    https://creativecommons.org/publicdomain/zero/1.0/


## Examples of Open Licenses & Dedications

When agencies purchase data or content from third-party vendors, care must be taken to ensure the information is not hindered by a restrictive, non-open license. In general, such licenses should comply with the [Open Knowledge Definition](http://opendefinition.org/okd/) of an open license. Several examples of open licenses and dedications for use by agencies are listed below:

#### Worldwide Public Domain Dedications
* [Creative Commons Zero Public Domain Dedication (CC0)](https://creativecommons.org/publicdomain/zero/1.0/), e.g. `"license":"https://creativecommons.org/publicdomain/zero/1.0/"`
* [Open Data Commons Public Domain Dedication and Licence (PDDL)](http://opendatacommons.org/licenses/pddl/1.0/), e.g. `"license":"http://opendatacommons.org/licenses/pddl/1.0/"`

#### Open Licenses
* [Open Data Commons Attribution License (ODC-By)](http://opendatacommons.org/licenses/by/1.0/), e.g. `"license":"http://opendatacommons.org/licenses/by/1.0/"`
* [Open Data Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/1.0/), e.g. `"license":"http://opendatacommons.org/licenses/odbl/1.0/"`
* [Creative Commons Attribution (CC BY)](https://creativecommons.org/licenses/by/4.0/), e.g. `"license":"https://creativecommons.org/licenses/by/4.0/"`
* [Creative Commons Attribution-ShareAlike (CC BY-SA)](https://creativecommons.org/licenses/by-sa/4.0/), e.g. `"license":"https://creativecommons.org/licenses/by-sa/4.0/"`
* [GNU Free Documentation License](http://www.gnu.org/licenses/fdl-1.3.en.html), e.g. `"license":"http://www.gnu.org/licenses/fdl-1.3.en.html"`

## More Information
* *[Copyright and Other Rights Pertaining to U.S. Government Works](http://www.usa.gov/copyright.shtml)*
* *[Licensing Policies, Principles, and Resources: Examples of how government has addressed open licensing questions](https://project-open-data.cio.gov/licensing-resources/)*
* *[Extended list of conformant licenses](http://opendefinition.org/licenses/)*
