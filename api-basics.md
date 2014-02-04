---
published: true
layout: default
title: API basics
permalink: "/api-basics/"
filename: "api-basics.md"
---

### What is an API?

An API -- application programming interface -- at its most basic level, allows your product or service to talk to other products or services. In this way, an API allows you to open up data and functionality to other developers and to other businesses. It is increasingly the way in which agencies and companies exchange data and services, both internally and externally.

### What are APIs used for?

APIs are launched primarily to give partners that are outside the agency or company "firewall" access to data and resources. But recently, APIs are also being used by more and more of the general public, including non-developers. As APIs' ease-of-use and popularity increases -- and as APIs demonstrate their value and deliver efficiencies -- many companies have begun to consume their own APIs to build internal systems, websites, and mobile apps using the same APIs that they make available to third-party developers and to the public.

### Why do you need an API?

We want to make government more efficient; essentially do more with less.  Government data assets are numerous and valuable, and we cannot afford to waste time and money by duplicating data processes. APIs allow for machine to machine querying, essentially removing the barriers to access data. APIs are not useful in all cases, but by providing data as a service, the opportunity for significantly reducing the barrier to access data and proliferate an innovation economy exists. Without them, we institute a culture of replicating data processes every time we use them.

### History of modern web APIs

APIs have been around since the 1980s, when they were used in hardware and software development. However, the history of the modern Web API is fairly short -- just a little over ten years. There are several pioneers of Web APIs, and while they didn't necessarily invent any of the technologies at play here, they did popularize their usage and establish some of the common practices.

### How government agencies are using APIs

DigitalGov University has recorded a [variety of courses](http://www.howto.gov/training/classes#apis-and-data) on how APIs can be used by government organizations and made them available online.


### First Mover

*	[Salesforce](http://apievangelist.com/2011/01/28/history-of-apis--salesforcecom/)

### E-Commerce

*	[eBay](http://apievangelist.com/2011/01/26/history-of-apis--ebay/)
*	[Amazon](http://apievangelist.com/2011/01/28/history-of-apis--amazon-ecommerce/)

### Social

*	[Facebook](http://apievangelist.com/2011/01/28/history-of-apis--facebook-development-platform/)
*	[Twitter](http://apievangelist.com/2011/01/26/history-of-apis--twitter/)

### Cloud Computing

*	[Amazon S3](http://apievangelist.com/2011/03/12/history-of-apis--amazon-s3/)
*	[Amazon EC2](http://apievangelist.com/2011/03/12/history-of-apis--amazon-ec2/)

### Maps

*	[Google Maps](http://apievangelist.com/2011/01/30/history-of-apis--google-maps-api/)

### Mobile

*	[Foursquare](http://apievangelist.com/2011/03/11/history-of-apis--foursquare-api/)
*	[Instagram](http://apievangelist.com/2011/03/11/history-of-apis--instagram-api/)

Many of these pioneers have shaped the way in which we develop, deploy, consume, and support APIs, sparking a lot of innovation within the API space in the last decade.  

### What technology goes into an API?

APIs are driven by a set of specific technologies, making them easily understood by developers.  This type of focus means that APIs can work with any common programming language, with the most popular approach to delivering web APIs being REST, or [REpresentational State Transfer](http://en.wikipedia.org/wiki/Representational_state_transfer).

REST takes advantage of the same Internet mechanisms that are used to view regular web pages, giving it many advantages, that can result in faster implementations and easier for developers to understand and use. REST APIs allow you to take data and functionality that may already be available on your website and make them available through a programmatic API, that both web and mobile applications can use. Then, instead of returning HTML to represent the information like a website would, an API returns data in one of two possible formats:
* [Extensible Markup Language (XML)](http://en.wikipedia.org/wiki/Xml)
* [JavaScript Object Notation (JSON)](http://en.wikipedia.org/wiki/JSON)

Developers can then take this data and use in web and mobile applications.  However XML and JSON are easily consumed by spreadsheets and other tools non-developers can use as well, making APIs accessible by potentially anyone.  

Easy access to all this data and resources is great, but sometimes we need to control access to APIs. There are two primary ways to secure an API by providing  authentication using:
* [Basic Auth](http://en.wikipedia.org/wiki/Basic_auth)
* [OAuth](http://en.wikipedia.org/wiki/Oauth)

REST with JSON has become the favorite of developers and API owners, because it is easier to both deploy and consume than other implementations. Even though REST + JSON is not a standard, it is seeing wide acceptance across the industry.

The technology that are commonly found in APIs was not designated by a single standards body or by a single company, it is based upon emulating the best practices of existing, successful providers over the last 13 years.  

### When Things Go Wrong — Error Handling

One of the most important issues to remember in API strategy is that developers need to handle what happens when an error occurs otherwise access to data fails and subsequently so does the application. For the purposes of the service framework, an error is defined as an unexpected behavior that occurred during the process of a request. It's important to note that what might be considered an "error" can often be an expected behavior.

For instance, a search operation returning no results (a blank object) and an HTTP status 200 OK code might be construed as an error, but in reality this is not outside the realm of expected normal operation.

So really when we say errors we mean bad things happen (a database server goes down or a required parameter wasn't passed to a URI). Ultimately it is the responsibility of your code to anticipate and appropriately handle errors. 

### Developing an API Ecosystem
 
An API starts with the desire to share data or resources that a company offers. It's built with technologies like REST, XML, and JSON, and supported through documentation, along with a handful of code samples to show how to use it.

An API and its supporting developer area are created. And then, what's next? How does a simple API area build community?  How does it evolve into a thriving ecosystem like Facebook’s or Foursquare's?

It all starts with developers. Giving developers a self-service, resource-rich environment where they have the spotlight and a voice that will encourage them in turn to contribute to the API community.

An API owner has to support its API's community, be proactive about reaching out to its community and know what it needs.  

Resources for developers need to be abundant and well organized. Common resources such as blogs, forum, and FAQs are necessary. Tutorials, case studies and "How To’s" can take things even further.  

Support and resources can create a positive feedback loop among developers and encourage activity that will ideally spread to other users.

Developers can’t be expected to visit an API area regularly, so an API community needs to extend its reach to existing social network and developer communities including Twitter, LinkedIn, GitHub, and Stack Exchange.

Even more than just a presence on these social networks, an API needs to have an offline presence too -- something that can be accomplished by attending conferences, meet-ups, and hackathons, for example. These activities will only serve to strengthen the API community.

*Re-used from [apievangilist.com](http://www.apievangelist.com) under a [Creative Commons](http://creativecommons.org/licenses/by-sa/3.0/) license and the [Federal Aviation Administration](http://services.faa.gov/).*
