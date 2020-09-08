<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  exclude-result-prefixes="xs"
  version="2.0">
  
  <xsl:output encoding="UTF-8" method="text"/>
  <xsl:strip-space elements="*"/>
  
  <xsl:template match="/">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="catalog">
    {
    <xsl:apply-templates select="type | context | id" />
    <xsl:apply-templates select="conformsTo | describedBy"/>
    "dataset":[
    <xsl:apply-templates select="dataset"/>
    ]
    }
  </xsl:template>
	
	<xsl:template match="context | id">
		"@<xsl:value-of select="local-name()"/>":"<xsl:value-of select="."/>",
	</xsl:template>
	
	<xsl:template match="type">
		"@<xsl:value-of select="local-name()"/>":"<xsl:value-of select="."/>" <xsl:if test="position() != last()">,</xsl:if>
	</xsl:template>
	
	<xsl:template match="dataset">
    {
    <xsl:apply-templates/>
    }<xsl:if test="position() != last()">,</xsl:if>
  </xsl:template>
  
  <xsl:template match="contactPoint">
    "<xsl:value-of select="local-name()"/>":{
    <xsl:apply-templates/>
    },
  </xsl:template>
  
  <xsl:template match="hasEmail">
    "<xsl:value-of select="local-name()"/>":"mailto:<xsl:value-of select="."/>"
  </xsl:template>
  
  <xsl:template match="keyword">
    "<xsl:value-of select="local-name()"/>":[
    <xsl:apply-templates/>
    ],
  </xsl:template>
  
  <xsl:template match="item">
    "<xsl:value-of select="normalize-space(.)"/>" <xsl:if test="position() != last()">,</xsl:if>
  </xsl:template>
  
 <!-- <xsl:template match="keyword"/>-->
  
  <xsl:template match="publisher">
    "<xsl:value-of select="local-name()"/>":{
    <xsl:apply-templates select="@* | *"/>
    },
  </xsl:template>
  
  <xsl:template match="subOrganizationOf">
    "<xsl:value-of select="local-name()"/>":{
    <xsl:apply-templates select="@* | *"/>
    }
  </xsl:template>
  
  <xsl:template match="bureauCode | programCode">
    "<xsl:value-of select="local-name()"/>":[
    "<xsl:value-of select="."/>"
    ],
  </xsl:template>
  
  <xsl:template match="dataQuality">
    "<xsl:value-of select="local-name()"/>":<xsl:value-of select="."/>,
  </xsl:template>
  
  <xsl:template match="distribution[1]">
    "<xsl:value-of select="local-name()"/>":[
    {
    <xsl:apply-templates select="@* | *"/>
    }<xsl:if test="position() != last()">,</xsl:if>
    <xsl:apply-templates select="following-sibling::distribution" mode="pull"/>
    ] <xsl:if test="following-sibling::*">,</xsl:if>
  </xsl:template>
  
  <xsl:template match="distribution" mode="pull">
    {
    <xsl:apply-templates select="@* | *"/>
    }<xsl:if test="position() != last()">,</xsl:if>
    <xsl:apply-templates select="following-sibling::distribution"/>
  </xsl:template>
  
  <xsl:template match="distribution"/>
  
  <xsl:template match="language">
  <xsl:if test="item[. != '']">  "<xsl:value-of select="local-name()"/>":[
    <xsl:apply-templates/>
    ]<xsl:if test="following-sibling::*">,</xsl:if></xsl:if>
     </xsl:template>
   
  <xsl:template match="references">
    "<xsl:value-of select="local-name()"/>":[
    <xsl:apply-templates/>
    ]<xsl:if test="following-sibling::*">,</xsl:if>
  </xsl:template>
  
  <xsl:template match="url">
    "<xsl:value-of select="."/>"<xsl:if test="position() != last()">,</xsl:if>
  </xsl:template>
  
  <xsl:template match="theme" >
    <xsl:if test="item[. != '']">"<xsl:value-of select="local-name()"/>":[
    <xsl:apply-templates/>
    ]<xsl:if test="following-sibling::*">,</xsl:if></xsl:if>
  </xsl:template>
  
  <xsl:template match="@*">
    "@<xsl:value-of select="local-name()"/>":"<xsl:value-of select="."/>",<xsl:text>&#x000a;</xsl:text>
  </xsl:template>
  
  <xsl:template match="*">
   <xsl:if test=". != ''"> "<xsl:value-of select="local-name()"/>":"<xsl:value-of select="normalize-space(.)"/>"<xsl:if test="following-sibling::*[. != '']">,</xsl:if>
    <xsl:apply-templates select="*"/></xsl:if>
  </xsl:template>
  
</xsl:stylesheet>