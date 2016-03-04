---
layout: act-ivity-post
title: "DATA Act: The first government-wide agile project"
permalink: act-ivity/:year/:month/:day/:title/
tags: agile, broker

excerpt: If you've ever worked on a technology project in government, you're probably most familiar with the "waterfall" methodology of software development. You have a long requirements gathering phase, then you write the software, test it, and launch. In contrast, agile development emphasizes working software that does the absolute minimum to achieve a mission, so that user feedback on the initial prototype can be incorporated early and often. The goal with agile development is to create a tight feedback loop where user feedback is driving the development.
---

If you've ever worked on a technology project in government, you're probably most familiar with the "waterfall" methodology of software development. You have a long requirements gathering phase, then you write the software, test it, and launch. In contrast, agile development emphasizes working software that does the _absolute minimum_ to achieve a mission, so that user feedback on the initial prototype can be incorporated early and often. The goal with agile development is to create a tight feedback loop where user feedback is driving the development.

<img src="{{site.baseurl}}/assets/graphics/learn-test-make.svg" class="learn-test-make" />

You might think, "that may be fine and good for software, but implementing the DATA Act is a lot more complicated!" And you'd be right! The DATA Act requires agency financial data to be reported, validated, and linked to grants, contracts, and other awards in a way that has never been done before, in _any_ government. There are a lot of policy decisions that need to be made, a lot of business processes that need to change, a lot of stakeholders, and a LOT of data. It may not seem like it, but the DATA Act implementation is an ideal candidate for agile development.

### An iterative schema

Because we need to link data from very different communities (procurement, financial accounting, grants, etc.) the chances of us successfully defining an all-encompassing schema up front, which is standard for waterfall projects, were very slim. Instead, we've chosen to produce successive versions of the schema that incorporate regular feedback from experts across the various communities. 

But a data schema in theory is very different from a schema _in practice_. Actually sitting down to go through the exercise of linking multiple, complex data sets can tell you a lot about where the data will and won't match up. So, we created an environment where that could happen.

### Playing in the sandbox

With the help of [18F](https://18f.gsa.gov), we created a software prototype to handle the ingestion and validation of DATA Act data. The prototype validated against some very basic rules in an early version of the schema. We started inviting agencies to sandbox sessions, and we observed them using the broker to upload and validate their data. This was a usability two-fer: we gained valuable insight into challenges agencies face when pulling all the data required by the schema, and we learned how to build a better broker experience for users. 

Our prototype only had a small fraction of the functionality we'll have when it's production ready, but testing even the most basic working software with agencies helped us focus and prioritize the important features rather than wasting time building features nobody wants or needs. 

### Every day I'm pivotin'

One of the tenets of the [Agile Manifesto](http://www.agilemanifesto.org/) is "Responding to change over following a plan"  otherwise known as a pivot. Sometimes you have roadblocks that crop up, making it difficult or impossible to move forward in certain areas. In waterfall land, the entire timeline gets pushed out, compounding the risk of failure with each small delay. In agile, you pivot.

Implementing the DATA Act requires several policy decisions across different levels of government, resulting in lots of discussions, meetings, drafts, and revisions before a final decision is made. And some parts of the schema or the broker software can't be completed until those decisions are made. Agile helps us reduce our overall risk by pivoting to the next biggest priority in the hierarchy so that we can continue to make rapid forward progress and even help inform those policy discussions with real user feedback. 

The implementation of the DATA Act is certainly one of the largest agile projects ever attempted by the federal government,  and though it's challenging at times to coordinate all the moving pieces, it's also our best shot at fulfilling the lofty goals of the DATA Act.


