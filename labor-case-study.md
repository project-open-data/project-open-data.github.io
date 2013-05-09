---
layout: default
title: Labor Case Study
permalink: /labor-case-study/
filename: labor-case-study.md
---

*September 28, 2012  
Mike Pulsifer, U.S. Department of Labor*  

## Executive Summary

The U.S. Department of Labor sought to go beyond merely making data available to developers and take ease of use of the data to the next level by giving developers tools that would make using DOL’s data easier. The target audience was not just experienced developers, but even those who may be just starting out with a how-to book and a great idea. The developer should not necessarily know what JSON or XML are.

This requirement led DOL to create software development kits (SDKs), which are downloadable code packages that developers can drop into their apps, making access to DOL’s data easy for even the most novice developer. Not content with just providing the tools, DOL provides sample projects that the developers can use to help them get started even quicker. These SDKs have even been published as open source projects with the aim of speeding up their conversion to SDKs that will eventually support all federal APIs.

## Challenge

Data.gov has been a tremendous asset to those who wish to download government datasets, large and small. Experts on the data can extract a wealth of data from one or more dataset and publish their findings for everyone else to consume. However, it’s those large datasets that can pose a particular challenge for developers of mobile apps.

Most cell phone companies nowadays impose limits of one form or another on their customers’ data usage. Using one provider as an example, the basic data plan, targeted at the typical smartphone user, has a limit of 200 megabytes (MB) per month. Once this limit is exceeded, the user can face additional charges. One smartphone platform even limits over-the-air app downloads to 20 MB to protect the users’ data caps.

The Department of Labor has many datasets published on Data.gov that, if included in a mobile app, would consume at least a half of a typical user’s monthly data limit, assuming they could download it over the air at all. One, the Workforce Investment Act (WIA) Net Impact Evaluation Dataset, measures in at a hefty 321 MB.

## Approach

Our solution was to create an application programming interface (API) that would allow developers of web or mobile apps to download only what their app needs when it needs it. Rather than include the entire dataset, the app would send a request to DOL’s API asking for a much smaller subset of that data. The response would be typically much smaller than an average web page, reducing the impact on the user. DOL’s API is not a replacement for the datasets published to Data.gov. However, it provides instant, light-weight, and easy to access data for developers of web and mobile apps.

Initially, developer.dol.gov launched with just three datasets. Today, the API provides access to 32 datasets containing a total of 175 individual tables across 4 categories. One of the visions of our API effort is to ensure all of the department’s publicly available data is also available through the API, so expect this number to grow as time goes on.

Though we could have released the API without the need for developers to provide an API key, we chose to include this requirement to give us the ability to generate detailed metrics and throttle (or shut off) requests from rogue apps.

DOL was not the first federal department or agency to make an API available to developers, but we were the first to provide software development kits (SDKs) and sample code to developers to make use of our API even easier. Our SDKs contain code that they can include in their apps that take care of the connection to the API as well as making requests and retrieving data. This particular innovation lowers the barrier to entry to the point where even someone with a great idea and basic programming skills can start developing apps with DOL data.

## Results

By the end of FY 1012, DOL has 293 registered API keys. The top 10% of API-using developers have generated 7,259,407 requests. The SDKs have proven to be popular, especially among challenge participants. DOL even “eats its own dog food,” using the SDKs in its own projects, including the “Labor Stats” mobile app.

Since the release of the API & SDKs, DOL has published the SDKs as open source projects and has begun modifying them to work with other federal agency APIs. The first of these that now support APIs other than just DOL’s is the iOS SDK. Since they are open source projects, DOL is open to code contributions by the public and other agencies.

## Lessons Learned

* Developers like tools, such as SDKs, that make app development, and government data use, easier.
* Developers like to use data from multiple sources. Making the SDKs compatible with other agency APIs, rather than producing multiple SDKs for each individual API, will make app development even easier.
* Sample code makes your API, and by extension, your data, more accessible to novice developers.


## Related Information

* [US Department of Labor](http://developer.dol.gov/)
* [Dept. of Labor GitHub](https://github.com/USDepartmentofLabor)

## Disclaimer

References to the product and/or service names of the hardware and/or software products used in this case study do not constitute an endorsement of such hardware and/or software products.
